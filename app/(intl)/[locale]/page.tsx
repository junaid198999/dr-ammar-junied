import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { content, siteInfo } from "@/lib/site-data";
import {
  getLanguage,
  isLocale,
  languageAlternates,
  languages,
  localePath,
  localizedLanguages,
} from "@/lib/i18n";

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLanguages.map((language) => ({ locale: language.code }));
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "ar") notFound();

  const copy = content[locale];
  const language = getLanguage(locale);
  const canonical = localePath(locale);

  return {
    metadataBase: new URL("https://dr-ammar.com"),
    title: `${siteInfo.name} | ${copy.hero.eyebrow}`,
    description: copy.hero.description,
    keywords: [siteInfo.name, copy.hero.eyebrow, copy.expertise.eyebrow, copy.location.clinic],
    authors: [{ name: siteInfo.name }],
    creator: siteInfo.name,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: language.ogLocale,
      alternateLocale: languages
        .filter((candidate) => candidate.code !== locale)
        .map((candidate) => candidate.ogLocale),
      url: canonical,
      siteName: siteInfo.name,
      title: `${siteInfo.name} | ${copy.hero.eyebrow}`,
      description: copy.hero.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteInfo.name} — ${copy.hero.cardTitle}`,
      description: copy.hero.description,
    },
  };
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "ar") notFound();

  return <SitePage locale={locale} />;
}
