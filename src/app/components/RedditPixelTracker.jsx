"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RedditPixelTracker({ pixelId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = useMemo(
    () => (searchParams ? searchParams.toString() : ""),
    [searchParams]
  );

  const pagePath = useMemo(
    () => (qs ? `${pathname}?${qs}` : pathname),
    [pathname, qs]
  );

  // Track last pagePath so we don't double-fire
  const lastPathRef = useRef(null);

  useEffect(() => {
    if (!pixelId) return;
    if (typeof window === "undefined") return;

    // Prevent duplicates
    if (pagePath === lastPathRef.current) return;
    lastPathRef.current = pagePath;

    if (typeof window.rdt === "function") {
      window.rdt("track", "PageVisit");
    }
  }, [pixelId, pagePath]);

  if (!pixelId) return null;

  return (
    <Script
      id="reddit-pixel-base"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js";t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
rdt('init','${pixelId}');
        `.trim(),
      }}
    />
  );
}