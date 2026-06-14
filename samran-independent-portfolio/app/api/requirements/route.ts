import { NextRequest, NextResponse } from "next/server";
import { requirementHtml, sendPortfolioMail } from "@/lib/mail";
import { validateRequirement } from "@/lib/validators";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = validateRequirement(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const data = parsed.data;
  const fields = {
    Name: data.name,
    Email: data.email,
    "Project type": data.projectType,
    Budget: data.budget,
    Timeline: data.timeline,
    Details: data.details
  };

  try {
    const result = await sendPortfolioMail({
      subject: `Project requirement: ${data.projectType} from ${data.name}`,
      replyTo: data.email,
      html: requirementHtml(fields),
      text: Object.entries(fields).map(([key, value]) => `${key}: ${value}`).join("\n")
    });

    return NextResponse.json({
      ok: true,
      emailSent: result.sent,
      message: result.sent
        ? "Requirement sent successfully. Samran will review it soon."
        : "Requirement accepted. Configure SMTP in deployment settings to receive emails."
    });
  } catch (error) {
    console.error("Requirement email failed", error);
    return NextResponse.json({ error: "Requirement could not be submitted right now. Please email directly." }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "POST /api/requirements" });
}
