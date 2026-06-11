import type { MetadataRoute } from "next";
import articles from "@/data/articles";
import guides from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fermentcrush.com";

  const staticPages = [
    { url: base, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/how-it-works`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/the-lab`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/culture-notes`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/write-to-us`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/affiliate-disclosure`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const articlePages = articles.map((a) => ({
    url: `${base}/best/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    lastModified: new Date("2026-01-01"),
  }));

  const guidePages = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    lastModified: new Date("2026-01-01"),
  }));

  return [...staticPages, ...articlePages, ...guidePages];
}
