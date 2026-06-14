import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    app: "samran-independent-portfolio",
    runtime: "Next.js API route",
    timestamp: new Date().toISOString()
  });
}
