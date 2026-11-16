import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-accent", weight: "400", style: "italic" });
const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const desc = "I turn ideas and business challenges into functional digital products: SaaS, dashboards, marketplaces and custom web apps.";
export const metadata: Metadata = {
  metadataBase: new URL(site), title: { default: "BLEMA | Full-Stack Developer & Product Builder", template: "%s | BLEMA" }, description: desc,
  openGraph: { title: "BLEMA | Full-Stack Developer & Product Builder", description: desc, url: site, siteName: "BLEMA", type: "website" },
  twitter: { card: "summary_large_image", title: "BLEMA", description: desc },
};
export const viewport: Viewport = { themeColor: "#0A0E14" };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:p-3">Skip to content</a>{children}</body></html>;
}
