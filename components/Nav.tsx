"use client";
import { useState } from "react"; import { Menu, X } from "lucide-react"; import Wordmark from "./Wordmark";
const links = [["Work", "#work"], ["About", "#about"], ["Services", "#services"], ["Process", "#process"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 text-paper backdrop-blur-md">
    <div className="wrap flex h-16 items-center justify-between lg:h-[72px]">
      <a href="#top" aria-label="BLEMA home"><Wordmark /></a>
      <nav aria-label="Primary" className="hidden items-center gap-8 text-[15px] font-medium md:flex">
        {links.map(([l, h]) => <a key={h} href={h} className="py-2 transition hover:text-cobalt-light">{l}</a>)}
        <a href="#contact" className="btn btn-primary !h-11">Start your project</a></nav>
      <button className="md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="wrap flex flex-col gap-5 pb-8 pt-2 md:hidden">
      {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-display text-2xl font-semibold">{l}</a>)}
      <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary justify-center">Start your project</a></div>}
  </header>;
}
