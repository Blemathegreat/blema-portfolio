"use client";
import { useState } from "react"; import { Loader2, Mail } from "lucide-react"; import { profile } from "@/lib/data";
export default function Contact() {
  const [s, setS] = useState<"idle" | "sending" | "ok" | "err">("idle"); const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setS("sending");
    try { const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))) });
      const d = await res.json(); if (res.ok) { setS("ok"); e.currentTarget.reset(); } else { setS("err"); setMsg(d.error); } } catch { setS("err"); setMsg("Network error. Please try again or email directly."); }
  }
  const f = "mt-1.5 h-[52px] w-full rounded-md border border-line bg-white px-4 text-base text-ink-950 focus:border-cobalt focus:outline-none focus:ring-4 focus:ring-cobalt/15";
  return <section id="contact" aria-labelledby="contact-h" className="sec bg-ink-950 text-paper"><div className="wrap grid gap-14 lg:grid-cols-12">
    <div className="lg:col-span-5"><h2 id="contact-h" className="text-[clamp(2.25rem,1.5rem+3vw,4rem)] font-bold leading-[1.02]">Let&rsquo;s scope your product.</h2>
      <p className="mt-5 max-w-[44ch] text-lg text-mist">Tell me what you&rsquo;re building. I&rsquo;ll reply with questions, next steps and an honest view of what it takes.</p>
      <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 text-cobalt-light underline-offset-4 hover:underline"><Mail size={18} aria-hidden />{profile.email}</a></div>
    <form onSubmit={submit} className="space-y-5 lg:col-span-7" noValidate>
      <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-medium">Name<input name="name" required autoComplete="name" className={f} /></label><label className="block text-sm font-medium">Email<input name="email" type="email" required autoComplete="email" className={f} /></label></div>
      <label className="block text-sm font-medium">Budget range (optional)<select name="budget" className={f} defaultValue=""><option value="">Not sure yet</option><option>Under $1,000</option><option>$1,000 to $5,000</option><option>$5,000 to $15,000</option><option>$15,000+</option></select></label>
      <label className="block text-sm font-medium">What are you building?<textarea name="message" required minLength={10} rows={5} className={`${f} h-auto py-3`} /></label>
      <button className="btn btn-primary" disabled={s === "sending"}>{s === "sending" ? <><Loader2 className="animate-spin" size={18} aria-hidden />Sending</> : "Send message"}</button>
      <p role="status" aria-live="polite" className={s === "err" ? "text-[#ff8a7a]" : "text-pulse"}>{s === "ok" && "Message sent. I'll reply soon."}{s === "err" && msg}</p></form></div></section>;
}
