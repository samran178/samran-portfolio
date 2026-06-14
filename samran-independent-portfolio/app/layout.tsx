import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full-Stack & AI Software Engineer`,
    template: `%s — ${profile.name}`
  },
  description: profile.headline,
  keywords: ["Samran Taimoor", "Software Engineer", "Full-stack developer", "AI automation", "React", "Next.js", "Pakistan developer"],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description: profile.headline,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: profile.name }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer`,
    description: profile.headline,
    images: ["/profile.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08111f"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
