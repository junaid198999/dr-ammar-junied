import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dr-ammar.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { ar: "https://dr-ammar.com", en: "https://dr-ammar.com/en" } },
    },
    {
      url: "https://dr-ammar.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { ar: "https://dr-ammar.com", en: "https://dr-ammar.com/en" } },
    },
  ];
}
