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
          <div className="flex min-h-[78px] items-center justify-between gap-2 py-3 sm:h-[92px] sm:py-0 lg:h-[104px]">
            <Link href="/" className="flex shrink-0 items-center">
              <img
                src="/assets/Logo40.png"
                alt="Great American Labor"
                className="h-10 w-auto max-w-[96px] object-contain sm:h-12 sm:max-w-[140px] md:h-14 lg:h-16"
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
                  "px-4 sm:px-8 lg:px-9 py-2.5 sm:py-3.5",
                  "text-sm sm:text-lg",
                  "shrink-0 whitespace-nowrap",
                  "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                ].join(" ")}
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <span className="sm:hidden">Call</span>
                <span className="hidden sm:inline">Call {PHONE_DISPLAY}</span>
              </a>

              <a
                href="https://booking.greatamericanlabor.com/"
                className={[
                  "inline-flex items-center justify-center rounded-full font-semibold transition",
                  "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
                  "shrink-0 text-sm sm:text-lg px-4 sm:px-8 lg:px-9 py-2.5 sm:py-3.5 whitespace-nowrap",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
                ].join(" ")}
              >
                <span className="sm:hidden">Business</span>
                <span className="hidden sm:inline">For Businesses</span>
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
          <div className="flex min-h-[78px] items-center justify-between gap-2 py-3 sm:h-[92px] sm:py-0 lg:h-[104px]">
            <Link href="/" className="flex shrink-0 items-center">
              <img
                src="/assets/Logo40.png"
                alt="Great American Labor"
                className="h-10 w-auto max-w-[96px] object-contain sm:h-12 sm:max-w-[140px] md:h-14 lg:h-16"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </Link>

            <a
              href={`tel:${PM_PHONE_TEL}`}
              className={[
                "inline-flex items-center justify-center rounded-full font-semibold transition",
                "px-4 sm:px-8 lg:px-9 py-2.5 sm:py-3.5",
                "text-sm sm:text-lg",
                "shrink-0 whitespace-nowrap",
                "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              ].join(" ")}
              aria-label={`Call ${PM_PHONE_DISPLAY}`}
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call {PM_PHONE_DISPLAY}</span>
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
    pathname === "/property-managers" ||
    pathname.startsWith("/property-managers/") ||
    pathname === "/pm" ||
    pathname.startsWith("/pm/");

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
