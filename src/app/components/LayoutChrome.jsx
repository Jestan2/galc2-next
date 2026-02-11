"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SiteFooter from "./SiteFooter";

// ✅ Stub phone for property managers (change later)
const PM_PHONE_DISPLAY = "(888) 285-9302";
const PM_PHONE_TEL = "+18882859302";

function DefaultHeader({ PHONE_DISPLAY, PHONE_TEL }) {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-10">
          <div className="flex h-[84px] sm:h-[92px] lg:h-[104px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/Logo40.png"
                alt="Great American Labor"
                className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className={[
                  "inline-flex items-center justify-center rounded-full font-semibold transition",
                  "px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5",
                  "text-base sm:text-lg",
                  "shrink-0 whitespace-nowrap",
                  "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                ].join(" ")}
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                Call {PHONE_DISPLAY}
              </a>

              <a
                href="https://booking.greatamericanlabor.com/"
                className={[
                  "inline-flex items-center justify-center rounded-full font-semibold transition",
                  "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
                  "shrink-0 text-base sm:text-lg px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5 whitespace-nowrap",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
                ].join(" ")}
              >
                For Businesses
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function PropertyManagersHeader() {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-10">
          <div className="flex h-[84px] sm:h-[92px] lg:h-[104px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/Logo40.png"
                alt="Great American Labor"
                className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </Link>

            <a
              href={`tel:${PM_PHONE_TEL}`}
              className={[
                "inline-flex items-center justify-center rounded-full font-semibold transition",
                "px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5",
                "text-base sm:text-lg",
                "shrink-0 whitespace-nowrap",
                "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              ].join(" ")}
              aria-label={`Call ${PM_PHONE_DISPLAY}`}
            >
              Call {PM_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function LayoutChrome({ children, PHONE_DISPLAY, PHONE_TEL }) {
  const pathname = usePathname();

  // ✅ Only affect this route (and any nested paths under it, if you ever add them)
  const isPropertyManagers =
    pathname === "/property-managers" || pathname.startsWith("/property-managers/");

  return (
    <>
      {isPropertyManagers ? (
        <PropertyManagersHeader />
      ) : (
        <DefaultHeader PHONE_DISPLAY={PHONE_DISPLAY} PHONE_TEL={PHONE_TEL} />
      )}

      {children}

      {/* ✅ Remove footer ONLY on /property-managers */}
      {!isPropertyManagers ? <SiteFooter /> : null}
    </>
  );
}