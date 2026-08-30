import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Ammar Junied | Orthodontist in Madinah",
  description:
    "Dr. Ammar Junied is an orthodontics and dentofacial aesthetics specialist at Arak Taba Medical Center in Madinah.",
  alternates: {
    canonical: "/en",
    languages: { "ar-SA": "/", en: "/en" },
  },
  openGraph: {
    locale: "en_US",
    url: "/en",
    title: "Dr. Ammar Junied | Orthodontist in Madinah",
    description: "Specialist orthodontic care, including complex cases, in Madinah.",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
