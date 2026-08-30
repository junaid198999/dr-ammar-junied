import type { MetadataRoute } from "next";
import { languages, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dr-ammar.com";
  const alternates = Object.fromEntries(
    languages.map((language) => [
      language.htmlLang,
      `${baseUrl}${localePath(language.code) === "/" ? "" : localePath(language.code)}`,
    ]),
  );

  return languages.map((language) => ({
    url: `${baseUrl}${localePath(language.code) === "/" ? "" : localePath(language.code)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: language.code === "ar" ? 1 : 0.8,
    alternates: { languages: alternates },
  }));
}
