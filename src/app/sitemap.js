// src/app/sitemap.js

import { SERVICES, METROS } from "./lib/seo/siteData";
import { SITE_URL } from "./lib/seo/siteConfig";

export default function sitemap() {
  const base = SITE_URL.replace(/\/$/, "");
  const now = new Date();

  const entries = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // new: real route folders you have in /app
    { url: `${base}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },

    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Stable ordering helps diffs + avoids random output between builds
  const serviceSlugs = Object.keys(SERVICES || {}).sort((a, b) => a.localeCompare(b));
  const citySlugs = Object.keys(METROS || {}).sort((a, b) => a.localeCompare(b));

  for (const serviceSlug of serviceSlugs) {
    entries.push({
      url: `${base}/services/${serviceSlug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const citySlug of citySlugs) {
      entries.push({
        url: `${base}/services/${serviceSlug}/${citySlug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}