import nodemailer from "nodemailer";
import { escapeHtml } from "./validators";

type MailInput = {
  subject: string;
  replyTo: string;
  html: string;
  text: string;
};

function hasMailConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_TO);
}

export async function sendPortfolioMail(input: MailInput) {
  if (!hasMailConfig()) {
    console.info("Portfolio mail config missing. Message accepted but email not sent.", {
      subject: input.subject,
      replyTo: input.replyTo,
      preview: input.text.slice(0, 200)
    });
    return { sent: false, reason: "SMTP environment variables are not configured." };
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || "true") === "true";
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO,
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
    html: input.html
  });

  return { sent: true };
}

export function contactHtml(name: string, email: string, message: string, subject: string) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto;color:#101828">
      <h2 style="margin-bottom:8px">New Portfolio Message</h2>
      <p style="color:#475467;margin-top:0">A visitor sent a message from Samran's portfolio.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:18px">
        <tr><td style="padding:10px;border-bottom:1px solid #EAECF0;color:#667085;width:120px">Name</td><td style="padding:10px;border-bottom:1px solid #EAECF0">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #EAECF0;color:#667085">Email</td><td style="padding:10px;border-bottom:1px solid #EAECF0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:10px;border-bottom:1px solid #EAECF0;color:#667085">Subject</td><td style="padding:10px;border-bottom:1px solid #EAECF0">${escapeHtml(subject)}</td></tr>
      </table>
      <div style="background:#F9FAFB;border:1px solid #EAECF0;border-radius:14px;padding:18px;margin-top:18px;white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>`;
}

export function requirementHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(([key, value]) => `<tr><td style="padding:10px;border-bottom:1px solid #EAECF0;color:#667085;width:140px">${escapeHtml(key)}</td><td style="padding:10px;border-bottom:1px solid #EAECF0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:680px;margin:auto;color:#101828">
      <h2 style="margin-bottom:8px">New Project Requirement</h2>
      <p style="color:#475467;margin-top:0">A potential client submitted a project request.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:18px">${rows}</table>
    </div>`;
}
