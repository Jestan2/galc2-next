import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "./components/JsonLd";
import SiteFooter from "./components/SiteFooter";
// import PromoBanner from "./components/PromoBanner";
import GA4Tracker from "./components/GA4Tracker";
import LeadBubbleMount from "./components/LeadBubbleMount";
import { Suspense } from "react";
import {
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  BRAND_NAME,
  SITE_URL,
  OG_IMAGE,
} from "./lib/seo/siteConfig";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: BRAND_NAME,
    template: `%s | ${BRAND_NAME}`,
  },

  description:
    "Labor-only crews for moving help, warehouse support, event setup/teardown, cleanouts, and construction cleanup across the U.S.",

  keywords: [
    "labor near me",
    "cheap labor near me",
    "moving help near me",
    "labor-only movers",
    "loading and unloading service",
    "warehouse labor staffing",
    "event setup crew",
    "junk out labor",
    "construction cleanup labor",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    url: SITE_URL,
    images: [{ url: OG_IMAGE }],
  },

  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/usa.png",
    shortcut: "/usa.png",
    apple: "/usa.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold transition",
        "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
        "px-7 py-3 text-sm sm:text-base",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      {/* <PromoBanner href={BOOKING_URL} /> */}

      {/* ✅ SOLID WHITE, NO BORDER, NO BLUR */}
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

          <PrimaryButton
            href="https://booking.greatamericanlabor.com/"
            className="shrink-0 text-base sm:text-lg px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5 whitespace-nowrap"
          >
            For Businesses
          </PrimaryButton>
        </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function RootLayout({ children }) {
  // ✅ Global JSON-LD (safe, not location-claiming)
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        name: BRAND_NAME,
        url: SITE_URL,
        telephone: PHONE_TEL,
        logo: `${SITE_URL}/assets/Logo40.png`,
        image: [OG_IMAGE],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { "@id": `${SITE_URL}#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/services/{search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                // IMPORTANT: disable auto page_view; GA4Tracker sends pageviews on route changes
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-rose-100 selection:text-slate-900">
      {/* GA4 route-change pageviews */}
      <Suspense fallback={null}>
        <GA4Tracker gaId={GA_ID} />
      </Suspense>

        <JsonLd data={siteJsonLd} />
        <SiteHeader />
        {children}
        
        {/* ✅ Floating lead bubble + modal */}
        <LeadBubbleMount />
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}