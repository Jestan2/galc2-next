import { SITE_URL } from "./lib/seo/siteConfig";

export default function robots() {
  const base = SITE_URL.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}