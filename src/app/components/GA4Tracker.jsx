"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GA4Tracker({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef("");

  const qs = useMemo(
    () => (searchParams ? searchParams.toString() : ""),
    [searchParams]
  );
  const pagePath = useMemo(
    () => (qs ? `${pathname}?${qs}` : pathname),
    [pathname, qs]
  );

  useEffect(() => {
    if (!gaId) return;
    if (typeof window === "undefined") return;

    // Prevent duplicates
    if (pagePath === lastPathRef.current) return;

    let tries = 0;
    const maxTries = 10;

    const send = () => {
      // gtag should exist because your ga4-init defines it,
      // but this guards against first-load races.
      if (typeof window.gtag !== "function") return false;

      const params = {
        page_path: pathname,                 // keep reports clean (no UTMs here)
        page_location: window.location.href, // full URL includes query/UTMs
        page_title: document.title,
      };

      // Keep GA in sync with latest page metadata
      window.gtag("config", gaId, params);

      // Since you set send_page_view:false in ga4-init,
      // explicitly send the SPA page_view.
      window.gtag("event", "page_view", params);

      lastPathRef.current = pagePath;
      return true;
    };

    if (send()) return;

    const t = setInterval(() => {
      tries += 1;
      if (send() || tries >= maxTries) clearInterval(t);
    }, 250);

    return () => clearInterval(t);
  }, [gaId, pagePath, pathname]);

  return null;
}