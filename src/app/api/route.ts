import { NextResponse } from "next/server";

// Wajib untuk static export (GitHub Pages) — route handler GET di-export
// sebagai file statis saat output: "export".
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}