"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

const budgets = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Let's discuss"];
const timelines = ["ASAP", "1–2 weeks", "1 month", "1–3 months", "Flexible"];

export function RequirementForm() {
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
      const res = await fetch("/api/requirements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage(json.message || "Requirement received. Samran will review it soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to submit requirement.");
    }
  }

  return (
    <form className="form-card requirement" onSubmit={submit}>
      <input className="hidden-field" name="company" tabIndex={-1} autoComplete="off" />
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required minLength={2} placeholder="Client name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="client@example.com" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Project type</span>
          <select name="projectType" required defaultValue="">
            <option value="" disabled>Select project type</option>
            {projectTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>
          <span>Budget</span>
          <select name="budget" required defaultValue="Let's discuss">
            {budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        </label>
      </div>
      <label>
        <span>Timeline</span>
        <select name="timeline" required defaultValue="Flexible">
          {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
        </select>
      </label>
      <label>
        <span>Project details</span>
        <textarea name="details" required minLength={20} rows={6} placeholder="Describe pages, features, design style, login/admin needs, deadline, examples, and any special requirements." />
      </label>
      <button className="btn primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Submitting..." : "Submit project requirement"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
