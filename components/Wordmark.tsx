export default function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`inline-flex items-baseline font-display text-xl font-bold tracking-[.04em] ${className}`} aria-label="BLEMA">BLEMA<span aria-hidden className="ml-[3px] inline-block h-[.2em] w-[.2em] bg-cobalt" /></span>;
}
