import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { name, email, message, budget } = await req.json().catch(() => ({}));
  if (!name || !/^\S+@\S+\.\S+$/.test(email || "") || !message || message.length < 10) return NextResponse.json({ error: "Please complete every field with a valid email." }, { status: 400 });
  const { RESEND_API_KEY: key, CONTACT_TO_EMAIL: to, CONTACT_FROM_EMAIL: from } = process.env;
  if (!key || !to || !from) return NextResponse.json({ error: "The contact form isn't configured yet. Please email directly." }, { status: 503 });
  const esc = (s: string) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]!));
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject: `New project enquiry from ${name}`, html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>Budget: ${esc(budget || "n/a")}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>` }) });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Message could not be sent. Please email directly." }, { status: 502 });
}
