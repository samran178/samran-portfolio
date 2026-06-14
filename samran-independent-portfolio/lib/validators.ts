export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  company?: string;
};

export type RequirementPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
  company?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 1000): string {
  return String(value ?? "").trim().slice(0, max);
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function validateContact(input: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const body = (typeof input === "object" && input !== null ? input : {}) as Partial<ContactPayload>;
  const data = {
    name: clean(body.name, 80),
    email: clean(body.email, 120).toLowerCase(),
    subject: clean(body.subject || "Portfolio inquiry", 120),
    message: clean(body.message, 3000),
    company: clean(body.company, 120)
  };

  if (data.company) return { ok: false, error: "Spam detected." };
  if (data.name.length < 2) return { ok: false, error: "Name is required." };
  if (!emailRegex.test(data.email)) return { ok: false, error: "Valid email is required." };
  if (data.message.length < 10) return { ok: false, error: "Message must be at least 10 characters." };
  return { ok: true, data };
}

export function validateRequirement(input: unknown): { ok: true; data: RequirementPayload } | { ok: false; error: string } {
  const body = (typeof input === "object" && input !== null ? input : {}) as Partial<RequirementPayload>;
  const data = {
    name: clean(body.name, 80),
    email: clean(body.email, 120).toLowerCase(),
    projectType: clean(body.projectType, 80),
    budget: clean(body.budget, 80),
    timeline: clean(body.timeline, 80),
    details: clean(body.details, 4000),
    company: clean(body.company, 120)
  };

  if (data.company) return { ok: false, error: "Spam detected." };
  if (data.name.length < 2) return { ok: false, error: "Name is required." };
  if (!emailRegex.test(data.email)) return { ok: false, error: "Valid email is required." };
  if (!data.projectType) return { ok: false, error: "Project type is required." };
  if (data.details.length < 20) return { ok: false, error: "Please describe the project in at least 20 characters." };
  return { ok: true, data };
}
