"use client";

import { useEffect, useState } from "react";

export default function PromoBanner({
  message = "New customers: 40% off your first 3 jobs.",
  couponCode = "NEW40",
  href,
}) {
  const STORAGE_KEY = "galc.promo.dismissed.v2";

  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
      setHidden(dismissed);
    } catch {
      setHidden(false);
    }
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1100);
    return () => clearTimeout(t);
  }, [copied]);

  if (hidden) return null;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
    } catch {
      // If clipboard fails, just ignore (still usable)
    }
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-slate-950">
        {/* LEFT-ANCHORED glow (not centered) */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(900px circle at 18% 40%, rgba(72,160,255,0.22), rgba(15,23,42,0) 60%)",
          }}
        />

        {/* subtle bottom divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />

        <div className="relative mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-10">
          <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            {/* LEFT: offer + code */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {/* NEW chip */}
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                New
              </span>

              {/* Offer text */}
              <span className="text-[13px] sm:text-sm font-semibold text-white/95">
                {message}
              </span>

              {/* Code pill (copy) */}
              <button
                type="button"
                onClick={copyCode}
                className={[
                  "group inline-flex items-center gap-2 rounded-full",
                  "bg-white/10 text-white ring-1 ring-white/15",
                  "px-3 py-1 text-xs font-semibold",
                  "hover:bg-white/15",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  "transition",
                ].join(" ")}
                aria-label={`Copy promo code ${couponCode}`}
              >
                <span className="text-white/80">Code</span>
                <span className="rounded-full bg-white text-[#09152f] px-2 py-0.5 text-[11px] font-extrabold">
                  {couponCode}
                </span>
                <span className="text-white/70 group-hover:text-white/85">
                  {copied ? "Copied ✓" : "Copy"}
                </span>
              </button>
            </div>

            {/* RIGHT: primary CTA + dismiss */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              {href ? (
                <a
                  href={href}
                  className={[
                    "group relative inline-flex items-center justify-center rounded-full",
                    "px-5 sm:px-6 py-2 text-xs sm:text-sm font-semibold",
                    "bg-white text-[#09152f]",
                    "shadow-[0_16px_40px_rgba(0,0,0,0.25)]",
                    "ring-1 ring-white/30",
                    "hover:bg-slate-100",
                    "active:translate-y-[0.5px]",
                    // subtle sheen like your premium buttons
                    "overflow-hidden",
                    "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
                    "before:bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.55),transparent_58%)]",
                    "before:opacity-90 group-hover:before:opacity-100",
                    "transition-[transform,box-shadow,background-color] duration-200 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  ].join(" ")}
                >
                  <span className="relative inline-flex items-center gap-2">
                    Book with discount
                    <span
                      aria-hidden="true"
                      className="opacity-80 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </a>
              ) : null}

              <button
                type="button"
                aria-label="Dismiss promotion"
                onClick={() => {
                  try {
                    localStorage.setItem(STORAGE_KEY, "1");
                  } catch {}
                  setHidden(true);
                }}
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-full",
                  "text-white/70 hover:text-white",
                  "hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  "transition",
                ].join(" ")}
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}