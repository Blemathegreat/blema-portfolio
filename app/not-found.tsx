import Link from "next/link";
export default function NotFound() { return <div className="wrap sec"><h1 className="text-5xl">Page not found</h1><p className="mt-4">That page doesn&rsquo;t exist.</p><Link className="btn btn-primary mt-8" href="/">Back to home</Link></div>; }
