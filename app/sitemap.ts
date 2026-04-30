import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.drmankwanwong.com";
  const now = new Date();

  return [
    { url: base,                                          lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`,                            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,                               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/for-attorneys`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`,                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work-comp-doctor-honolulu`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/car-accident-doctor-honolulu`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/back-injury-specialist-hawaii`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
