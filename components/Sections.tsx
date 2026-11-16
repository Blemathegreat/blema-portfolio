import { Layers, Rocket, LayoutDashboard, Globe, Plug, Wrench } from "lucide-react";
import { services, stack, experience, process } from "@/lib/data"; import Reveal from "./Reveal";
const Head = ({ id, l, t }: { id: string; l: string; t: string }) => <Reveal><p className="label text-cobalt">{l}</p><h2 id={id} className="mt-3 max-w-[22ch] text-[clamp(1.9rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]">{t}</h2></Reveal>;
const icons = [Layers, Rocket, Globe, LayoutDashboard, Plug, Wrench];

export function About() {
  return <section id="about" aria-labelledby="about-h" className="sec bg-paper-2"><div className="wrap grid gap-12 lg:grid-cols-12">
    <div className="lg:col-span-5"><Head id="about-h" l="About" t="Someone who understands the business and the code." /></div>
    <Reveal className="max-w-[66ch] space-y-5 lg:col-span-7"><p className="text-xl">I&rsquo;m Aleem Mudasir Temitope, a full-stack developer focused on turning ideas and business challenges into practical digital solutions.</p>
      <p>I combine frontend craftsmanship, backend engineering and product thinking to build intuitive, reliable web applications. My approach goes beyond writing code: I care about understanding the problem, creating meaningful user experiences and delivering solutions that work in real-world environments.</p></Reveal></div></section>;
}
export function Services() {
  return <section id="services" aria-labelledby="svc-h" className="sec"><div className="wrap"><Head id="svc-h" l="Services" t="What you can hire me to build." />
    <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{services.map(([t, d], i) => { const I = icons[i]; return <Reveal key={t}><div className="flex h-10 w-10 items-center justify-center rounded-md bg-cobalt-tint text-cobalt"><I size={20} strokeWidth={1.5} aria-hidden /></div><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-2 text-slate">{d}</p></Reveal>; })}</div></div></section>;
}
export function Stack() {
  return <section id="stack" aria-labelledby="stack-h" className="sec bg-ink-950 text-paper"><div className="wrap"><Head id="stack-h" l="Technical capabilities" t="The tools behind the products." />
    <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2">{stack.map(([c, items]) => <div key={c} className="bg-ink-900 p-8"><h3 className="text-2xl font-semibold">{c}</h3><ul className="mt-5 flex flex-wrap gap-2">{items.map((i) => <li key={i} className="tag text-mist">{i}</li>)}</ul></div>)}</div></div></section>;
}
export function Experience() {
  return <section id="experience" aria-labelledby="exp-h" className="sec"><div className="wrap grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><Head id="exp-h" l="Experience" t="Where I&rsquo;ve built and learned." /></div>
    <ol className="divide-y divide-line lg:col-span-8">{experience.map((e) => <li key={e.org + e.role} className="grid gap-1 py-6 sm:grid-cols-[1fr_auto]"><div><h3 className="text-xl font-semibold">{e.role}</h3><p className="text-slate">{e.org}</p>{e.text && <p className="mt-2 max-w-[60ch]">{e.text}</p>}</div><p className="label text-slate">{e.when}</p></li>)}</ol></div></section>;
}
export function Process() {
  return <section id="process" aria-labelledby="proc-h" className="sec bg-paper-2"><div className="wrap"><Head id="proc-h" l="Working process" t="From brief to launch, in five steps." />
    <ol className="mt-14 grid gap-8 md:grid-cols-5">{process.map(([t, d], i) => <li key={t} className="border-t-[1.5px] border-ink-950 pt-5"><span className="label text-cobalt">Step {i + 1}</span><h3 className="mt-2 text-xl font-semibold">{t}</h3><p className="mt-2 text-[15px] text-slate">{d}</p></li>)}</ol></div></section>;
}
