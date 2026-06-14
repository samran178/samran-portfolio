import { NextRequest, NextResponse } from "next/server";
import { contactHtml, sendPortfolioMail } from "@/lib/mail";
import { validateContact } from "@/lib/validators";

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

    return NextResponse.json({
      ok: true,
      emailSent: result.sent,
      message: result.sent
        ? "Message sent successfully. Samran will reply soon."
        : "Message accepted. Configure SMTP in deployment settings to receive emails."
    });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json({ error: "Message could not be sent right now. Please email directly." }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true, endpoint: "POST /api/contact" });
}
