import { NextRequest, NextResponse } from "next/server";
import { contactHtml, sendPortfolioMail } from "@/lib/mail";
import { validateContact } from "@/lib/validators";

const DIRECT_EMAIL = "samrantaimoor35@gmail.com";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = validateContact(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const result = await sendPortfolioMail({
      subject: `Portfolio inquiry: ${subject || "New message"}`,
      replyTo: email,
      html: contactHtml(name, email, message, subject || "Portfolio inquiry"),
      text: `New portfolio message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
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
      message: "Message sent successfully. Samran will reply soon."
    });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: `Message could not be sent right now. Please email ${DIRECT_EMAIL} directly.` }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "POST /api/contact" });
}
