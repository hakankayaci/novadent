import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30");
  const entries = [
    { path: "", priority: 1 },
    { path: "/en", priority: 0.9 },
    { path: "/el", priority: 0.9 },
    { path: "/bg", priority: 0.9 },
  ];

  return entries.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
    alternates: {
      languages: {
        tr: siteUrl,
        en: `${siteUrl}/en`,
        el: `${siteUrl}/el`,
        bg: `${siteUrl}/bg`,
      },
    },
  }));
}
