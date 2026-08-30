import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/app/_fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-ammar.com"),
  title: {
    default: "د. عمار جنيد | أخصائي تقويم الأسنان في المدينة المنورة",
    template: "%s | Dr. Ammar Junied",
  },
  description:
    "الموقع الرسمي لد. عمار جنيد، أخصائي تقويم الأسنان وتجميل الفكين في مجمع آراك طابا الطبي بالمدينة المنورة.",
  keywords: [
    "دكتور عمار جنيد",
    "تقويم الأسنان المدينة المنورة",
    "أخصائي تقويم أسنان",
    "تجميل الفكين",
    "Ammar Junied",
    "Orthodontist Madinah",
  ],
  authors: [{ name: "Dr. Ammar Junied" }],
  creator: "Dr. Ammar Junied",
  alternates: {
    canonical: "/",
    languages: { "ar-SA": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "/",
    siteName: "Dr. Ammar Junied",
    title: "د. عمار جنيد | أخصائي تقويم الأسنان",
    description:
      "تقويم الأسنان وتجميل الفكين والحالات الصعبة في المدينة المنورة.",
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

export default function ArabicRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
