"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GA4Tracker({ gaId }) {
  const pathname = usePathname();
  const lastUrlRef = useRef("");

  useEffect(() => {
    if (!gaId) return;
    if (typeof window === "undefined") return;

    const qs = (window.location.search || "").replace(/^\?/, "");
    const url = qs ? `${pathname}?${qs}` : pathname;

    // prevent double-fire
    if (url === lastUrlRef.current) return;
    lastUrlRef.current = url;

    window.gtag?.("event", "page_view", { page_path: url });
  }, [gaId, pathname]);

  return null;
}