"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage(json.message || "Message received. Samran will reply soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to send message.");
    }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <input className="hidden-field" name="company" tabIndex={-1} autoComplete="off" />
      <label>
        <span>Name</span>
        <input name="name" required minLength={2} placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required placeholder="you@example.com" />
      </label>
      <label>
        <span>Subject</span>
        <input name="subject" placeholder="Website project, job opportunity, collaboration..." />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" required minLength={10} rows={5} placeholder="Tell me what you need built or discussed." />
      </label>
      <button className="btn primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
