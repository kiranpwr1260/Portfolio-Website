import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/content/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DS Associate | Industrial & Techno-Legal Consultancy",
    template: "%s | DS Associate",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "DS Associate | Industrial & Techno-Legal Consultancy",
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Industrial facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Associate | Industrial & Techno-Legal Consultancy",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10242d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
