import { profile } from "@/lib/data"; import Wordmark from "./Wordmark";
export default function Footer() {
  return <footer className="border-t border-white/10 bg-ink-950 py-10 text-mist"><div className="wrap flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
    <div><Wordmark className="text-paper" /><p className="mt-2 text-sm">{profile.name}, {profile.title}</p></div>
    <nav aria-label="Footer" className="flex gap-6 text-sm"><a className="hover:text-paper" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a className="hover:text-paper" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="hover:text-paper" href={`mailto:${profile.email}`}>Email</a></nav>
    <p className="text-sm">&copy; {new Date().getFullYear()} BLEMA</p></div></footer>;
}
