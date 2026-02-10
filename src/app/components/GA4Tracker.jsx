"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GA4Tracker({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPageRef = useRef("");

  const qs = useMemo(
    () => (searchParams ? searchParams.toString() : ""),
    [searchParams]
  );

  // This is the *logical* SPA page identity (path + query)
  const pageKey = useMemo(
    () => (qs ? `${pathname}?${qs}` : pathname),
    [pathname, qs]
  );

  useEffect(() => {
    if (!gaId) return;
    if (typeof window === "undefined") return;

    // Prevent duplicates (e.g., React strict mode / re-renders)
    if (pageKey === lastPageRef.current) return;

    let tries = 0;
    const maxTries = 20; // give a bit more room for slow first loads

    const sendPageView = () => {
      if (typeof window.gtag !== "function") return false;

      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href, // IMPORTANT: includes UTMs
        page_path: pathname,                 // clean path in GA
      });

      lastPageRef.current = pageKey;
      return true;
    };

    // Try immediately
    if (sendPageView()) return;

    // If gtag isn't ready yet, retry briefly
    const t = setInterval(() => {
      tries += 1;
      if (sendPageView() || tries >= maxTries) clearInterval(t);
    }, 250);

    return () => clearInterval(t);
  }, [gaId, pageKey, pathname]);

  return null;
}