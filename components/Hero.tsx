"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/data";

const corners = [
  "-left-2 -top-2 border-l-[1.5px] border-t-[1.5px]",
  "-right-2 -top-2 border-r-[1.5px] border-t-[1.5px]",
  "-bottom-2 -left-2 border-b-[1.5px] border-l-[1.5px]",
  "-bottom-2 -right-2 border-b-[1.5px] border-r-[1.5px]",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 text-paper">
      <div className="dots absolute inset-0" aria-hidden />
      <div className="wrap relative py-16 sm:py-24 lg:py-32">
        <motion.p
          {...rise(0)}
          className="label inline-flex items-center gap-2 rounded-sm border border-white/10 px-3 py-1.5 text-mist"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-pulse" />
          {profile.status}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-7 max-w-[16ch] text-[clamp(2.6rem,1.2rem+6.4vw,6.25rem)] font-bold leading-[.96] sm:max-w-none"
        >
          I turn ideas into
          <span className="block font-serif text-[1.08em] font-normal italic leading-[1.02]">
            functional digital products.
          </span>
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <motion.div {...rise(0.16)} className="min-w-0 lg:col-span-5">
            <p className="max-w-[46ch] text-lg text-mist">
              Full-stack developer for founders and growing businesses. I take your idea or business
              challenge from first sketch to a live product people can use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary justify-center">
                Start your project <ArrowRight size={18} />
              </a>
              <a href="#work" className="btn btn-ghost justify-center border-paper/30">
                See selected work
              </a>
            </div>
          </motion.div>

          <motion.div {...rise(0.24)} className="min-w-0 lg:col-span-7">
            <div className="relative">
              {corners.map((c) => (
                <span key={c} aria-hidden className={`absolute h-3 w-3 border-cobalt-light ${c}`} />
              ))}
              <p className="label px-5 pt-5 text-mist sm:px-6">Live products</p>
              <ul className="mt-3 divide-y divide-white/10">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-white/[0.04] sm:px-6"
                    >
                      <span className="min-w-0">
                        <span className="block font-display text-xl font-semibold sm:text-2xl">
                          {p.name}
                        </span>
                        <span className="mt-1 block text-[15px] text-mist sm:truncate">{p.blurb}</span>
                      </span>
                      <ArrowUpRight
                        size={22}
                        aria-hidden
                        className="shrink-0 text-cobalt-light transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}