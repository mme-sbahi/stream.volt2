import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_META } from "@/config/site.config";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "700", "900"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${SITE_META.name} — ${SITE_META.tagline}`,
  description: SITE_META.subTagline,
  keywords: "IPTV, streaming, 4K channels, live TV, VOD, sports streaming, movies, series",
  openGraph: {
    title: SITE_META.name,
    description: SITE_META.subTagline,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} bg-[#0E0E10] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
