// src/app/services/[serviceSlug]/[citySlug]/page.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { SERVICES, METROS } from "../../../lib/seo/siteData";
import {
  SITE_URL,
  BRAND_NAME,
  OG_IMAGE,
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../../../lib/seo/siteConfig";
import { pickFeaturedReviews } from "../../../lib/seo/reviewsPool";
import { pickFeaturedFaqs } from "../../../lib/seo/faqsPool";
import { getCityServiceMicroCopy } from "../../../lib/seo/cityServiceCopy";

import Image from "next/image";
import { pickServicePageImages } from "../../../lib/seo/imagesPool";

export const dynamicParams = false;

/* -------------------------------------------------------------------------- */
/* Static params                                                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  const params = [];
  for (const serviceSlug of Object.keys(SERVICES)) {
    for (const citySlug of Object.keys(METROS)) {
      params.push({ serviceSlug, citySlug });
    }
  }
  return params;
}

function valueProofSubtitle({ bucket, city, serviceName }) {
  const s = String(serviceName || "labor").toLowerCase();

  const map = {
    moving: `If you’re searching “moving help near me” in ${city}, you’re usually looking for hourly movers for U-Haul loading/unloading, PODS, heavy lifting, and careful placement.`,
    cleanout: `If you’re searching “cleanout help near me” in ${city}, you’re typically looking for labor-only crews for carry-outs, move-out trash-outs, and dumpster loading.`,
    warehouse: `If you’re searching “warehouse labor near me” in ${city}, you’re usually trying to book an unloading crew or extra hands for staging, sorting, and overflow shifts.`,
    event: `If you’re searching “event setup crew near me” in ${city}, you’re looking for reliable hands for load-in, setup, teardown, and fast venue resets.`,
    construction: `If you’re searching “construction cleanup labor near me” in ${city}, you’re looking for crew support for debris movement, sweep-outs, and site resets.`,
    general: `If you’re searching “labor near me” in ${city}, you want vetted hourly help with clear confirmation and reliable arrivals.`,
  };

  return map[bucket] || `If you’re searching “${s} near me” in ${city}, you want vetted hourly help with clear confirmation and reliable arrivals.`;
}

function popularBookingsSubtitle({ bucket, city, serviceName, perfectFor }) {
  const s = String(serviceName || "labor").toLowerCase();
  const top = (perfectFor || [])
    .slice(0, 3)
    .map((x) => x.t)
    .filter(Boolean)
    .join(", ");

  const map = {
    moving: `Most-booked moving jobs in ${city}: ${top}. These are the common requests when people book moving labor by the hour.`,
    cleanout: `Most-booked cleanout jobs in ${city}: ${top}. Labor-only crews for carry-outs, staging, and loading.`,
    warehouse: `Most-booked warehouse labor in ${city}: ${top}. Unloading crews and floor support when volume spikes.`,
    event: `Most-booked event crew requests in ${city}: ${top}. Setup, teardown, and load-in/load-out support.`,
    construction: `Most-booked construction cleanup requests in ${city}: ${top}. Extra hands to keep the jobsite moving.`,
    general: `Most-booked ${s} requests in ${city}: ${top}. Fast booking, clear confirmation, reliable crews.`,
  };

  return map[bucket] || `Most-booked ${s} requests in ${city}: ${top}. Fast booking, clear confirmation, reliable crews.`;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function bucketForServiceSlug(serviceSlug) {
  const s = (serviceSlug || "").toLowerCase();
  if (s.includes("moving")) return "moving";
  if (s.includes("junk") || s.includes("cleanout")) return "cleanout";
  if (s.includes("warehouse")) return "warehouse";
  if (s.includes("event")) return "event";
  if (s.includes("construction")) return "construction";
  return "general";
}

function keywordPack({ bucket, city, region }) {
  const base = [
    `labor near me`,
    `hire laborers near me`,
    `extra hands near me`,
    `general labor near me`,
    `same day labor near me`,
    `last minute labor near me`,
    `hourly labor in ${city}`,
    `${city} ${region} labor`,
  ];

  if (bucket === "moving") {
    return [
      ...base,
      `moving help near me`,
      `moving help in ${city}`,
      `moving labor near me`,
      `moving labor ${city}`,
      `labor only movers near me`,
      `labor only movers ${city}`,
      `movers by the hour near me`,
      `loading and unloading help near me`,
      `uhaul loading help near me`,
      `uhaul unloading help near me`,
      `pods loading help`,
      `pods unloading help`,
      `help moving furniture near me`,
      `heavy lifting movers near me`,
      `apartment moving help near me`,
      `same day moving help`,
      `last minute moving help`,
      `day labor near me`,
    ];
  }

  if (bucket === "cleanout") {
    return [
      ...base,
      `junk removal help near me`,
      `cleanout help near me`,
      `cleanout labor in ${city}`,
      `trash out crew near me`,
      `move out cleanout help`,
      `garage cleanout help`,
      `basement cleanout help`,
      `storage unit cleanout help`,
      `furniture removal help near me`,
      `dumpster loading help`,
    ];
  }

  if (bucket === "warehouse") {
    return [
      ...base,
      `warehouse labor near me`,
      `warehouse labor in ${city}`,
      `unloading crew near me`,
      `container unloading labor`,
      `truck unloading services`,
      `dock unloading crew`,
      `lumper services near me`,
      `temporary warehouse labor`,
      `overflow warehouse labor`,
    ];
  }

  if (bucket === "event") {
    return [
      ...base,
      `event setup crew near me`,
      `event teardown crew near me`,
      `event labor near me`,
      `event setup crew in ${city}`,
      `load in crew`,
      `load out crew`,
      `event load in crew`,
      `event load out crew`,
      `stagehand crew near me`,
      `stagehand labor`,
      `venue setup labor`,
      `table and chair setup crew`,
      `same day event crew`,
    ];
  }

  if (bucket === "construction") {
    return [
      ...base,
      `construction cleanup labor near me`,
      `construction cleanup labor in ${city}`,
      `post construction cleanup help`,
      `jobsite cleanup labor`,
      `site cleanup crew near me`,
      `debris hauling labor`,
      `rough clean labor`,
      `final clean help`,
    ];
  }

  return base;
}

function ProofStatsStrip() {
  const stats = [
    { value: "96%", label: "Fill Rate" },
    { value: "120,000+", label: "Jobs Staffed" },
    { value: "90,000", label: "Vetted Workers" },
    { value: "4.8 / 5", label: "Google Rating" },
  ];

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.18),rgba(15,23,42,0)_70%)]"
      />
      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 xl:gap-x-14 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="leading-none font-bold text-white tracking-tight text-[clamp(2.2rem,3.2vw,3.7rem)]">
                {s.value}
              </div>
              <div className="font-semibold text-slate-100/90 text-[clamp(0.85rem,1.1vw,1.1rem)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HeroSeoBlurb({ bucket, city, region }) {
  const packs = {
    moving: {
      terms: ["U-Haul loading help", "loading and unloading", "labor-only movers"],
      tail:
        "sends vetted crews by the hour for apartments, houses, PODS, and short-notice moves — with instant online estimates and clear confirmations.",
    },
    cleanout: {
      terms: ["cleanout labor", "move-out trash-outs", "dumpster loading help"],
      tail:
        "sends fast labor-only crews for carry-outs, furniture removal help, storage units, and cleanouts — you provide disposal, we provide the hands.",
    },
    warehouse: {
      terms: ["warehouse labor", "container unloading", "dock unloading crews"],
      tail:
        "provides reliable crews for receiving support, unloading, staging, sorting, and overflow days — coordinated under your onsite lead.",
    },
    event: {
      terms: ["event setup crew", "event teardown crew", "load-in / load-out labor"],
      tail:
        "provides fast event labor for chairs/tables, staging, pack-out, teardown, and venue resets — built for tight timelines and deadlines.",
    },
    construction: {
      terms: ["construction cleanup labor", "jobsite cleanup crew", "debris bagging help"],
      tail:
        "sends labor-only cleanup crews for sweep-outs, site resets, and material moves — keeping your project on track.",
    },
    general: {
      terms: ["general labor", "hourly labor", "same-day labor crews"],
      tail:
        "sends vetted crews to get real work done fast — clear confirmations, reliable arrivals, and clean execution.",
    },
  };

  const p = packs[bucket] || packs.general;

  return (
    <p className="mt-7 max-w-2xl text-sm sm:text-[15px] text-slate-600 leading-relaxed">
      Looking for <strong>{p.terms[0]}</strong>, <strong>{p.terms[1]}</strong>, or{" "}
      <strong>{p.terms[2]}</strong> in {city}, {region}? {BRAND_NAME} {p.tail}
    </p>
  );
}

function metaPack({ bucket, serviceName, city, region }) {
  if (bucket === "moving") {
    return {
      title: `Moving Help in ${city}, ${region} (Labor-Only Loading & Unloading)`,
      h1: `Moving Help in ${city}, ${region}`,
      subhead:
        `Labor-only moving crews for U-Haul loading/unloading, PODS, heavy lifting, stairs, and careful placement. Instant online estimate and clear confirmations.`,
      description:
        `Book labor-only moving help in ${city}. U-Haul loading & unloading, PODS, heavy lifting, stairs, and careful placement. Instant estimate, vetted crews, and pay after the job is complete.`,
      heroPills: ["Labor-only crews", "Loading + unloading", "Heavy lifting + stairs", "Instant online estimate"],
      searches: [
        `moving help near me`,
        `moving labor near me`,
        `labor only movers near me`,
        `uhaul loading help near me`,
        `unloading help near me`,
        `help moving furniture near me`,
      ],
      perfectFor: [
        { t: "U-Haul loading", d: "Load your truck fast, safely, and tight." },
        { t: "U-Haul unloading", d: "Unload into your home, apartment, or storage unit." },
        { t: "PODS / container", d: "Pack or unpack with clean staging and pace." },
        { t: "Heavy lifting", d: "Couches, mattresses, dressers, appliances, stairs." },
        { t: "Short-notice moves", d: "When you need hands today or tomorrow." },
        { t: "Two-location unload", d: "Place items exactly where you want them." },
      ],
      laborOnly: {
        title: "Labor-only moving help (simple + cheaper)",
        subtitle:
          `You bring the truck or container — we send the crew. It’s the fastest way to get strong hands without paying for an overpriced truck bundle.`,
        youProvide: [
          "Truck / trailer / container access",
          "Building access (parking, elevator if needed)",
          "Priority notes (stairs, heavy items, fragile pieces)",
        ],
        weProvide: [
          "Vetted moving labor crew",
          "Loading + unloading + careful placement",
          "Clear confirmations + reminders so the job runs clean",
        ],
        note:
          "Labor-only = crew only. No truck included (perfect if you already have one).",
      },
    };
  }

  if (bucket === "cleanout") {
    return {
      title: `Cleanout Labor in ${city}, ${region} (Trash-Out & Move-Out Help)`,
      h1: `Cleanout Labor in ${city}, ${region}`,
      subhead:
        `Labor-only cleanout crews for carry-outs, move-out trash-outs, storage units, furniture removal, and dumpster loading. Instant estimate and fast booking.`,
      description:
        `Book labor-only cleanout crews in ${city}. Carry-outs, move-out trash-outs, storage units, furniture removal, and dumpster loading. Instant estimate, clear confirmations, pay after completion.`,
      heroPills: ["Carry-outs + loading", "Move-out trash-outs", "Furniture removal help", "Instant online estimate"],
      searches: [
        `junk removal help near me`,
        `cleanout help near me`,
        `trash out crew near me`,
        `move out cleanout help`,
        `furniture removal help near me`,
      ],
      perfectFor: [
        { t: "Move-out cleanouts", d: "Clear the space fast before handoff." },
        { t: "Garage cleanouts", d: "Lift and load without the chaos." },
        { t: "Storage units", d: "Sort, stage, and load efficiently." },
        { t: "Dumpster loading", d: "Fill the container quickly and cleanly." },
        { t: "Furniture carry-outs", d: "Stairs, awkward items, heavy lifting." },
        { t: "Short-notice help", d: "When timing gets tight, we move fast." },
      ],
      laborOnly: {
        title: "Labor-only cleanout help",
        subtitle:
          `You handle disposal (dumpster/trailer/truck) — we handle the lifting, carrying, staging, and loading.`,
        youProvide: ["Disposal plan (dumpster / trailer if needed)", "Access to the space", "Direction on what stays/goes"],
        weProvide: ["Fast carry-outs + loading", "Strong hands + good pace", "Clear confirmations + support"],
        note: "Labor-only means we don’t haul away — we do the work on-site.",
      },
    };
  }

  if (bucket === "warehouse") {
    return {
      title: `Warehouse Labor in ${city}, ${region} (Unloading & Ops Support)`,
      h1: `Warehouse Labor in ${city}, ${region}`,
      subhead:
        `Unloading crews + warehouse labor support for staging, breakdown, sorting, and overflow volume. Reliable arrivals with clean coordination under your lead.`,
      description:
        `Book warehouse labor in ${city} for container unloading, staging, breakdown, sorting, and overflow support. Reliable crews, clear confirmations, and tight execution.`,
      heroPills: ["Unloading crews", "Staging + breakdown", "Overflow support", "Fast confirmations"],
      searches: [
        `warehouse labor near me`,
        `unloading crew near me`,
        `container unloading labor`,
        `dock unloading crew`,
        `lumper services near me`,
      ],
      perfectFor: [
        { t: "Container unloading", d: "Fast unload + breakdown + staging." },
        { t: "Dock support", d: "Clear freight and protect timelines." },
        { t: "Overflow volume", d: "Extra hands when shipments spike." },
        { t: "Staging + sorting", d: "Organize product and keep flow moving." },
        { t: "Short-notice gaps", d: "Fill staffing gaps when callouts happen." },
        { t: "General labor", d: "Hands where needed across the floor." },
      ],
      laborOnly: {
        title: "Warehouse labor support",
        subtitle:
          `You run the workflow — we provide reliable labor for unloading, staging, breakdown, and operational pace.`,
        youProvide: ["Dock access + time window", "Onsite lead + priorities", "Staging space"],
        weProvide: ["Unloading crew", "Staging + breakdown support", "Reliable arrivals + execution"],
        note: "Labor support is best with clear priorities and an onsite point-of-contact.",
      },
    };
  }

  if (bucket === "event") {
    return {
      title: `Event Setup & Teardown Crews in ${city}, ${region}`,
      h1: `Event Setup & Teardown in ${city}, ${region}`,
      subhead:
        `Labor crews for load-in, staging, chairs/tables, teardown, pack-out, and cleanup — built for tight venue windows and deadlines.`,
      description:
        `Book event labor in ${city} for setup, load-in, chairs/tables, pack-out, and teardown. Tight windows, clear coordination, and pay after completion.`,
      heroPills: ["Setup + teardown", "Load-in / load-out", "Tight timelines", "Clear coordination"],
      searches: [
        `event setup crew near me`,
        `event teardown crew near me`,
        `load in load out crew`,
        `table and chair setup crew`,
        `venue setup labor`,
      ],
      perfectFor: [
        { t: "Load-in support", d: "Unload trucks, stage gear, move fast." },
        { t: "Table + chair setups", d: "High-volume setup executed cleanly." },
        { t: "Vendor support", d: "Move materials exactly where needed." },
        { t: "Teardown + pack-out", d: "Breakdown, load-out, reset the space." },
        { t: "Short-notice crews", d: "When plans shift last minute." },
        { t: "Strict deadlines", d: "Get it done inside venue windows." },
      ],
      laborOnly: {
        title: "Event labor (you lead — we execute)",
        subtitle:
          `You provide the plan and timing window — we provide strong hands and clean execution under your onsite lead.`,
        youProvide: ["Venue access + timing window", "Layout / priorities", "Onsite point-of-contact"],
        weProvide: ["Setup + teardown labor", "Load-in / load-out support", "Fast execution + coordination"],
        note: "Best results come from clear zones and a simple run-of-show.",
      },
    };
  }

  if (bucket === "construction") {
    return {
      title: `Construction Cleanup Labor in ${city}, ${region}`,
      h1: `Construction Cleanup Labor in ${city}, ${region}`,
      subhead:
        `Labor-only cleanup crews for debris movement, bagging, sweep-outs, material moves, and site resets — built to keep timelines on track.`,
      description:
        `Book construction cleanup labor in ${city} for debris bagging, sweep-outs, material moves, and site resets. Clear confirmations and fast execution.`,
      heroPills: ["Debris movement", "Site resets", "Fast labor support", "Clear confirmations"],
      searches: [
        `construction cleanup labor near me`,
        `post construction cleanup help`,
        `jobsite cleanup labor`,
        `site cleanup crew near me`,
        `debris hauling labor`,
      ],
      perfectFor: [
        { t: "Site resets", d: "Keep the job moving and the site clean." },
        { t: "Debris bagging", d: "Fast cleanup support under your lead." },
        { t: "Material moves", d: "Move items safely and efficiently." },
        { t: "Sweep-outs", d: "Basic labor support for cleanup pace." },
        { t: "Pre-inspection help", d: "Prep the site before handoff." },
        { t: "Short-notice labor", d: "Extra hands when timing compresses." },
      ],
      laborOnly: {
        title: "Construction cleanup labor support",
        subtitle:
          `You run the site rules and disposal access — we provide strong hands for cleanup pace and resets.`,
        youProvide: ["Bags/bins/dumpster access", "Site rules + safety direction", "Priority zones"],
        weProvide: ["Cleanup labor crew", "Sweep-outs + material moves", "Fast execution"],
        note: "Labor-only means we provide crew support — hauling/disposal is handled by the site.",
      },
    };
  }

  // fallback
  return {
    title: `${serviceName} in ${city}, ${region}`,
    h1: `${serviceName} in ${city}, ${region}`,
    subhead:
      `Vetted labor crews in ${city}. Book fast, get clear confirmation, and keep the job under your control.`,
    description:
      `Book ${serviceName.toLowerCase()} in ${city} with vetted crews, clear confirmations, and pay-after-completion billing.`,
    heroPills: ["Vetted crews", "Clear confirmations", "Fast booking", "Pay after completion"],
    searches: [`labor near me`, `hire laborers near me`, `same day labor near me`],
    perfectFor: [
      { t: "Extra hands", d: "When you need reliable labor fast." },
      { t: "Heavy lifting", d: "Bulky items and awkward carries." },
      { t: "Short-notice jobs", d: "Support when timing is tight." },
      { t: "Onsite execution", d: "You direct priorities — we execute." },
      { t: "Hourly help", d: "Flexible labor for real work." },
      { t: "Predictable flow", d: "Clear updates and clean booking." },
    ],
    laborOnly: {
      title: "Labor-only help",
      subtitle: `Labor-only support in ${city} for real jobs that need reliable execution.`,
      youProvide: ["Access to the job", "Priorities and notes", "Any tools/materials needed"],
      weProvide: ["Reliable crew", "Clear confirmations", "Reminders + accountability"],
      note: "Labor-only means we supply labor, not vehicles or hauling.",
    },
  };
}

function neighborhoods(metro) {
  if (Array.isArray(metro?.areas) && metro.areas.length > 0) return metro.areas;

  // fallback if a metro is missing areas
  return [`${metro.city}`, `Greater ${metro.city}`, "Downtown", "Midtown", "Uptown", "Nearby suburbs"];
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }) {
  const { serviceSlug, citySlug } = await params;

  const service = SERVICES[serviceSlug];
  const metro = METROS[citySlug];
  if (!service || !metro) return {};

  const bucket = bucketForServiceSlug(serviceSlug);
  const canonical = `${SITE_URL}/services/${serviceSlug}/${citySlug}`;

  const pageImages = pickServicePageImages({
    serviceSlug,
    citySlug,
    bucket,
  });

  const meta = metaPack({
    bucket,
    serviceName: service.name,
    city: metro.city,
    region: metro.region,
  });


  const terms = keywordPack({
    bucket,
    city: metro.city,
    region: metro.region,
  });

  const microCopy = getCityServiceMicroCopy({
    citySlug,
    bucket,
    city: metro.city,
    region: metro.region,
  });

  const finalDescription = microCopy?.metaTail
    ? `${meta.description} ${microCopy.metaTail}`
    : meta.description;

  return {
    title: `${meta.title} | ${BRAND_NAME}`,
    description: finalDescription,
    keywords: Array.from(new Set([...(terms || []), ...(service.keywords || [])])),
    alternates: { canonical },
    openGraph: {
      title: `${meta.title} | ${BRAND_NAME}`,
      description: finalDescription,
      url: canonical,
      siteName: BRAND_NAME,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | ${BRAND_NAME}`,
      description: finalDescription,
      images: [OG_IMAGE],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* UI                                                                         */
/* -------------------------------------------------------------------------- */

function Container({ children, className = "" }) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl 2xl:max-w-[88rem]",
        "px-4 sm:px-6 lg:px-10 2xl:px-14",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold transition",
        "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
        "px-7 py-3.5 text-sm sm:text-base",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold transition",
        "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
        "px-7 py-3.5 text-sm sm:text-base",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
      {children}
    </span>
  );
}

function Breadcrumbs({ items }) {
  return (
    <nav className="text-xs text-slate-700" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => (
          <li key={`${it.href}-${idx}`} className="flex items-center gap-2">
            {idx > 0 && <span className="text-slate-300">/</span>}
            <Link className="hover:text-slate-900 transition" href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={[isCenter ? "mx-auto text-center" : "text-left", "max-w-4xl"].join(" ")}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-bold leading-tight text-[clamp(1.55rem,2.4vw,2.25rem)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-slate-600 leading-relaxed text-[15px] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={["text-sm", i < n ? "text-amber-500" : "text-slate-200"].join(" ")}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function FaqItem({ q, a, defaultOpen = false }) {
  return (
    <details
      className="group rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold text-slate-900 leading-snug">{q}</span>
        <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-slate-700 leading-relaxed">{a}</p>
    </details>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function ServiceCityLandingPage({ params }) {
  const { serviceSlug, citySlug } = await params;

  const service = SERVICES[serviceSlug];
  const metro = METROS[citySlug];
  if (!service || !metro) notFound();

  const bucket = bucketForServiceSlug(serviceSlug);
  const canonical = `${SITE_URL}/services/${serviceSlug}/${citySlug}`;

  const pageImages = pickServicePageImages({
    serviceSlug,
    citySlug,
    bucket,
  });

  const meta = metaPack({
    bucket,
    serviceName: service.name,
    city: metro.city,
    region: metro.region,
  });

    const popularSearches = Array.from(
    new Set(
      [
        ...(meta.searches || []),
        ...keywordPack({ bucket, city: metro.city, region: metro.region }),
        ...(service.keywords || []),
      ]
        .map((s) => String(s || "").trim())
        .filter(Boolean)
    )
  ).slice(0, 13);

  const microCopy = getCityServiceMicroCopy({
    citySlug,
    bucket,
    city: metro.city,
    region: metro.region,
  });

  const areas = neighborhoods(metro);

  const featuredReviews = pickFeaturedReviews({
    serviceSlug,
    citySlug,
    cityName: metro.city,
    count: 3,
  });

  const faqs = pickFeaturedFaqs({
    serviceSlug,
    citySlug,
    bucket,
    cityName: metro.city,
    count: 5,
  });

  const nearbyCities = Object.entries(METROS)
    .filter(([slug]) => slug !== citySlug)
    .slice(0, 14);

  const otherServices = Object.entries(SERVICES)
    .filter(([slug]) => slug !== serviceSlug)
    .slice(0, 6);

  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${serviceSlug}` },
          { "@type": "ListItem", position: 4, name: `${metro.city}, ${metro.region}`, item: canonical },
        ],
      },
      {
        "@type": "Service",
        name: `${service.name} in ${metro.city}, ${metro.region}`,
        serviceType: service.name,
        provider: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: SITE_URL,
          telephone: PHONE_TEL,
        },
        areaServed: { "@type": "Place", name: `${metro.city}, ${metro.region}` },
        url: canonical,
      },
      {
        "@type": "FAQPage",
        mainEntity: (faqs || []).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="bg-white text-slate-900">
      <JsonLd data={structured} />

      {/* MOBILE STICKY CTA (conversion boost) */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
        <div className="mx-auto max-w-md rounded-full border border-slate-200 bg-white/95 backdrop-blur shadow-lg px-3 py-2 flex items-center gap-2">
          <a
            href={BOOKING_URL}
            className="flex-1 rounded-full bg-slate-900 text-white text-sm font-semibold py-3 text-center"
          >
            Get an estimate
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-semibold py-3 px-4"
          >
            Call
          </a>
        </div>
      </div>

{/* HERO — Option 1: No gradient, white card for readability */}
<section className="relative overflow-hidden border-b border-slate-100">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src={pageImages.hero}
      alt={`Local ${service.name.toLowerCase()} crew in ${metro.city}`}
      fill
      priority
      sizes="100vw"
      className="object-cover object-right"
    />
  </div>

  <Container className="relative pt-12 sm:pt-14 lg:pt-16 pb-14 sm:pb-16">
{/* Breadcrumb pill (always readable on any hero image) */}
<div className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur px-4 py-2 shadow-[0_1px_0_rgba(15,23,42,0.06)]">
  <Breadcrumbs
    items={[
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: service.name, href: `/services/${serviceSlug}` },
      { label: `${metro.city}, ${metro.region}`, href: `/services/${serviceSlug}/${citySlug}` },
    ]}
  />
</div>

    {/* White card (easy to read, no overlays) */}
    <div className="mt-8 max-w-3xl rounded-[2rem] bg-white border border-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.14)] p-7 sm:p-9">
      <h1 className="font-bold tracking-tight leading-[1.03] text-[clamp(2.15rem,4vw,4.55rem)]">
        {meta.h1}
      </h1>

      <p className="mt-4 text-slate-700 text-[clamp(1.02rem,1.15vw,1.22rem)] leading-relaxed">
        {meta.subhead}
      </p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <PrimaryButton href={BOOKING_URL}>Get an estimate</PrimaryButton>
        <SecondaryButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</SecondaryButton>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {meta.heroPills.map((p) => (
          <Pill key={p}>{p}</Pill>
        ))}
      </div>
      
      {areas?.length ? (
      <p className="mt-4 text-xs text-slate-500">
        Serving {areas.slice(0, 6).join(", ")}{areas.length > 6 ? " and nearby." : "."}
      </p>
    ) : null}
      {/* SEO blurb (still there, but stays clean) */}
    <HeroSeoBlurb bucket={bucket} city={metro.city} region={metro.region} />
    </div>
  </Container>
</section>

      {/* CITY-SPECIFIC DETAILS (unique per city + service) */}
      {microCopy ? (
        <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: SEO paragraph block */}
              <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {metro.city} details
                </p>

                <h2 className="mt-2 font-bold text-[clamp(1.35rem,2vw,1.85rem)] leading-tight">
                  {microCopy.title}
                </h2>

                {microCopy.paragraphs.map((txt, idx) => (
                  <p
                    key={idx}
                    className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    {txt}
                  </p>
                ))}

                {areas?.length ? (
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Popular neighborhoods & nearby areas
                  </p>

                  <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm text-slate-700">
                    {areas.slice(0, 12).map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <span className="text-slate-300">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              </div>

              {/* Right: Premium image card */}
              <div className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-[0_1px_0_rgba(15,23,42,0.04)] min-h-[240px] lg:min-h-0">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full">
                  <Image
                    src={pageImages.mid}
                    alt={`${service.name} work in ${metro.city}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                    priority={false}
                  />
                  {/* Soft premium fade so it blends nicely */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* VALUE PROOF (conversion-first, not fluffy) */}
      <section className="py-16">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Why this works"
            title={`The easiest way to hire reliable labor in ${metro.city}`}
            subtitle={valueProofSubtitle({
            bucket,
            city: metro.city,
            serviceName: service.name,
          })}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              title="Labor-only = you save money"
              desc="No forced vehicle bundle. Perfect if you already have the truck/container/tools."
            />
            <Card
              title="Top-rated workers assigned"
              desc="Workers are continuously rated and we prioritize the best performers."
            />
            <Card
              title="Clear reminders + updates"
              desc="We keep everyone aligned so the crew shows up and the job runs smoothly."
            />
            <Card
              title="Instant estimate online"
              desc="Know the cost up front without endless back-and-forth."
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryButton href={BOOKING_URL}>Get an estimate</PrimaryButton>
            <SecondaryButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* PERFECT FOR */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionTitle
            eyebrow="Popular bookings"
            title={`What people hire ${service.name.toLowerCase()} for in ${metro.city}`}
            subtitle={popularBookingsSubtitle({
            bucket,
            city: metro.city,
            serviceName: service.name,
            perfectFor: meta.perfectFor,
          })}
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {meta.perfectFor.map((x) => (
              <Card key={x.t} title={x.t} desc={x.d} />
            ))}
          </div>
        </Container>
      </section>

      {/* LABOR-ONLY EXPLAINED (super clean, no confusion) */}
      <section className="py-16">
        <Container>
          <SectionTitle
            align="center"
            eyebrow="Labor-only explained"
            title={meta.laborOnly.title}
            subtitle={meta.laborOnly.subtitle}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <p className="font-semibold text-slate-900">What to expect</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">You provide</p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    {meta.laborOnly.youProvide.map((x, i) => (
                      <li key={`yp-${i}`}>• {x}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">We provide</p>
                  <ul className="mt-2 text-sm text-slate-700 space-y-1">
                    {meta.laborOnly.weProvide.map((x, i) => (
                      <li key={`wp-${i}`}>• {x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">{meta.laborOnly.note}</p>
            </div>

            <div className="lg:col-span-4 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)] flex flex-col">
              <p className="font-semibold text-slate-900">Fastest way to get a great crew</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Book online, leave clear notes, and we’ll handle the rest. That’s how you win “near me” urgency without stress.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <PrimaryButton href={BOOKING_URL}>Get estimate</PrimaryButton>
                <SecondaryButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</SecondaryButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Notes that matter: stairs, elevator, parking, heavy items, fragile items, timing windows.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionTitle
              eyebrow="Reviews"
              title={`What customers say in ${metro.city}`}
              subtitle="Real bookings. Strong pace. Clean execution."
            />
            <PrimaryButton href={BOOKING_URL}>Get estimate</PrimaryButton>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredReviews.map((r) => (
              <div
                key={r.id}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
              >
                <Stars n={r.stars} />
                <p className="mt-3 text-slate-800 leading-relaxed">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {r.name || "Verified Customer"}
                </p>
                <p className="text-xs text-slate-500">
                  {r.location || `${metro.city}, ${metro.region}`}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROOF STATS STRIP (dark blue) */}
      <ProofStatsStrip />

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">FAQ</p>
              <h3 className="mt-2 font-bold text-[clamp(1.35rem,2vw,1.75rem)] leading-tight">
                Quick answers before you book
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                The most common questions we get for {metro.city} bookings.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <PrimaryButton href={BOOKING_URL}>Get estimate</PrimaryButton>
                <SecondaryButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</SecondaryButton>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Clear notes = faster crews = smoother job.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              {(faqs || []).map((f, i) => (
                <FaqItem key={`${f.id}-${i}`} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionTitle
                eyebrow="Nearby cities"
                title={`More ${service.name.toLowerCase()} locations`}
                subtitle="More location pages helps you win “near me” searches across the region."
              />

              <div className="mt-6 flex flex-wrap gap-2">
                {nearbyCities.map(([slug, m]) => (
                  <Link
                    key={slug}
                    href={`/services/${serviceSlug}/${slug}`}
                    className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                  >
                    {m.city}, {m.region}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Other services"
                title={`More ways we help in ${metro.city}`}
                subtitle="Cross-linking builds topical authority and gives users better next steps."
              />

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otherServices.map(([slug, s]) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}/${citySlug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50 transition"
                  >
                    <p className="font-semibold">{s.name}</p>
                    <p className="mt-2 text-sm text-slate-600">{s.heroSubtitle}</p>
                    <p className="mt-2 text-xs text-slate-500">Learn more →</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* POPULAR SEARCHES (helps match real query phrasing) */}
      {popularSearches?.length ? (
        <section className="py-16 border-t border-slate-100">
          <Container>
            <SectionTitle
              eyebrow="Popular searches"
              title={`Popular searches for ${service.name.toLowerCase()} in ${metro.city}`}
              subtitle="These are common phrases people use when booking labor. If you're searching for any of these, you're in the right place."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {popularSearches.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  );
}
