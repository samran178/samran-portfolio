import { NextRequest, NextResponse } from "next/server";
import { requirementHtml, sendPortfolioMail } from "@/lib/mail";
import { validateRequirement } from "@/lib/validators";

const DIRECT_EMAIL = "samrantaimoor35@gmail.com";

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

    if (!result.sent) {
      return NextResponse.json(
        { error: `Email service is not configured yet. Please email Samran directly at ${DIRECT_EMAIL}.` },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      emailSent: true,
      message: "Requirement sent successfully. Samran will review it soon."
    });
  } catch (error) {
    console.error("Requirement email failed", error);
    return NextResponse.json({ error: `Requirement could not be submitted right now. Please email ${DIRECT_EMAIL} directly.` }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "POST /api/requirements" });
}
