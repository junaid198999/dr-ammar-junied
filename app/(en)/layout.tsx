import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/app/_fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-ammar.com"),
  title: "Dr. Ammar Junied | Orthodontist in Madinah",
  description:
    "Dr. Ammar Junied is an orthodontics and dentofacial aesthetics specialist at Arak Taba Medical Center in Madinah.",
  keywords: [
    "Dr. Ammar Junied",
    "Orthodontist Madinah",
    "Orthodontics Madinah",
    "Dentofacial aesthetics",
    "Complex orthodontic cases",
  ],
  authors: [{ name: "Dr. Ammar Junied" }],
  creator: "Dr. Ammar Junied",
  alternates: {
    canonical: "/en",
    languages: { "ar-SA": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "/en",
    siteName: "Dr. Ammar Junied",
    title: "Dr. Ammar Junied | Orthodontist in Madinah",
    description:
      "Specialist orthodontic care, including complex cases, in Madinah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ammar Junied — Orthodontist",
    description: "Specialist orthodontic care in Madinah.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F4EE",
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
