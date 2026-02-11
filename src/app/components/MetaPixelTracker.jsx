"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function MetaPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastRef = useRef("");

  const qs = useMemo(() => (searchParams ? searchParams.toString() : ""), [searchParams]);
  const page = useMemo(() => (qs ? `${pathname}?${qs}` : pathname), [pathname, qs]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    // Prevent duplicates
    if (lastRef.current === page) return;
    lastRef.current = page;

    // SPA-friendly PageView
    window.fbq("track", "PageView");
  }, [page]);

  return null;
}