import { ArrowUpRight, Check } from "lucide-react";
import { projects, Project } from "@/lib/data";
import Frame from "./Frame";
import Reveal from "./Reveal";

const Block = ({ t, children }: { t: string; children: React.ReactNode }) => (
  <div className="min-w-0">
    <h4 className="label text-slate">{t}</h4>
    <div className="mt-2 break-words">{children}</div>
  </div>
);

const Stack = ({ p }: { p: Project }) => (
  <div className="flex flex-wrap gap-2">
    {p.stack.map((s) => (
      <span key={s} className="tag">{s}</span>
    ))}
  </div>
);

const Link = ({ p }: { p: Project }) => (
  <a
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary w-full justify-center sm:w-auto"
  >
    Visit live project <ArrowUpRight size={18} />
    <span className="sr-only"> ({p.name}, opens in a new tab)</span>
  </a>
);

const Feat = ({ p, muted }: { p: Project; muted?: boolean }) => (
  <ul className={`grid grid-cols-1 gap-2 sm:grid-cols-2 ${muted ? "text-mist" : ""}`}>
    {p.features.map((f) => (
      <li key={f} className="flex min-w-0 gap-2 break-words text-[15px]">
        <Check size={18} className="mt-1 shrink-0 text-cobalt" aria-hidden />
        <span className="min-w-0">{f}</span>
      </li>
    ))}
  </ul>
);

const title = "break-words text-3xl font-bold sm:text-4xl";

export default function Work() {
  const [a, t, r] = projects;
  return (
    <section id="work" aria-labelledby="work-h" className="overflow-x-clip">
      <div className="wrap sec pb-0">
        <Reveal>
          <p className="label text-cobalt">Selected work</p>
          <h2
            id="work-h"
            className="mt-3 max-w-[18ch] text-[clamp(1.9rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]"
          >
            Real products, built to solve real problems.
          </h2>
        </Reveal>
      </div>

      {/* ArtisanHub: split, frame leads */}
      <div className="wrap sec grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="min-w-0 lg:col-span-7">
          <Frame p={a} />
        </Reveal>
        <Reveal className="min-w-0 space-y-7 lg:col-span-5">
          <h3 className={title}>{a.name}</h3>
          <p className="text-lg">{a.blurb}</p>
          <Block t="The problem">{a.problem}</Block>
          <Block t="The solution">{a.solution}</Block>
          <Block t="Key features"><Feat p={a} /></Block>
          <Block t="My contribution">{a.role}</Block>
          <Link p={a} />
        </Reveal>
      </div>

      {/* Travora: dark band, frame beside the role notes */}
      <div className="bg-ink-950 text-paper">
        <div className="wrap sec">
          <Reveal className="max-w-[60ch]">
            <h3 className={title}>{t.name}</h3>
            <p className="mt-3 text-lg text-mist">{t.blurb}</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-12">
            <Reveal className="min-w-0 lg:col-span-8">
              <Frame p={t} dark />
            </Reveal>
            <Reveal className="min-w-0 space-y-6 lg:col-span-4">
              <Block t="Two roles, two experiences">
                <p className="text-mist">{t.decisions[0]}.</p>
              </Block>
              <Block t="Key features">
                <ul className="space-y-2 text-[15px] text-mist">
                  {t.features.map((f) => (
                    <li key={f} className="break-words">{f}</li>
                  ))}
                </ul>
              </Block>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:mt-12 md:grid-cols-3">
            <Block t="The problem"><p className="text-mist">{t.problem}</p></Block>
            <Block t="The solution"><p className="text-mist">{t.solution}</p></Block>
            <Block t="My contribution"><p className="text-mist">{t.role}</p></Block>
          </div>
          <div className="mt-10">
            <Link p={t} />
          </div>
        </div>
      </div>

      {/* RelixCore: wide frame, detail panels below */}
      <div className="wrap sec">
        <Reveal>
          <h3 className={title}>{r.name}</h3>
          <p className="mt-3 max-w-[60ch] text-lg">{r.blurb}</p>
        </Reveal>
        <Reveal className="mt-8 min-w-0 sm:mt-10">
          <Frame p={r} />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-12">
          <div className="min-w-0 space-y-6 lg:col-span-5">
            <Block t="The problem">{r.problem}</Block>
            <Block t="The solution">{r.solution}</Block>
            <Block t="My contribution">{r.role}</Block>
            <Block t="Built with"><Stack p={r} /></Block>
          </div>
          <div className="min-w-0 space-y-6 lg:col-span-7">
            <Block t="Key capabilities"><Feat p={r} /></Block>
            <Block t="Technical decision"><p>{r.decisions[0]}.</p></Block>
            <Link p={r} />
          </div>
        </div>
      </div>
    </section>
  );
}