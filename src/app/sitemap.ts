// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://antisurveillancesite.vercel.app";
  const now = new Date();

  return [
    { url: `${base}/`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
