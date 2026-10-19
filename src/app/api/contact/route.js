import { NextResponse } from "next/server";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name = "", email = "", phone = "", interest = "", message = "", company_website = "" } = body;

  // Honeypot: silently accept bot submissions without processing them
  if (company_website) return NextResponse.json({ ok: true });

  if (!name.trim() || !isEmail(email) || !message.trim()) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }
  if (name.length > 120 || message.length > 5000 || phone.length > 30) {
    return NextResponse.json({ error: "Your message is too long." }, { status: 400 });
  }

  // TODO: deliver the enquiry — e.g. send an email (Resend, Nodemailer) or save to a CRM/database.
  console.log("New enquiry:", { name, email, phone, interest, message });

  return NextResponse.json({ ok: true });
}
