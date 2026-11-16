import Image from "next/image";
import { Project } from "@/lib/data";

export default function Frame({ p, dark }: { p: Project; dark?: boolean }) {
  return (
    <div
      className={`w-full min-w-0 max-w-full overflow-hidden rounded-lg border ${
        dark ? "border-white/10 bg-ink-900" : "border-line bg-white shadow-lg"
      }`}
    >
      <div
        className={`flex h-9 items-center gap-1.5 border-b px-3 sm:px-4 ${
          dark ? "border-white/10" : "border-line"
        }`}
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 shrink-0 rounded-full bg-slate/30" />
        ))}
        <span className="ml-3 min-w-0 flex-1 truncate font-mono text-[11px] text-slate">
          {p.url.replace("https://", "")}
        </span>
      </div>

      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.name} interface`}
          width={1600}
          height={1000}
          className="block h-auto w-full max-w-full"
          sizes="(min-width:1280px) 760px, (min-width:1024px) 60vw, 100vw"
        />
      ) : (
        <div
          className={`flex aspect-[16/10] flex-col items-center justify-center gap-2 p-4 text-center sm:p-6 ${
            dark ? "text-mist" : "text-slate"
          }`}
        >
          <span className="font-display text-2xl font-bold sm:text-3xl">{p.name}</span>
          <span className="break-words text-sm">
            Add a screenshot: <code className="font-mono">public/projects/{p.slug}.png</code>, then
            set <code className="font-mono">image</code> in lib/data.ts
          </span>
        </div>
      )}
    </div>
  );
}