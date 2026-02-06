"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GA4Tracker({ gaId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) return;

    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;

    window.gtag?.("event", "page_view", {
      page_path: url,
    });
  }, [gaId, pathname, searchParams]);

  return null;
}