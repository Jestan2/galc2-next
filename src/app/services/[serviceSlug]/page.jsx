// src/app/services/[serviceSlug]/page.jsx
import { pickFeaturedReviews } from "../../lib/seo/reviewsPool";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { SERVICES, METROS } from "../../lib/seo/siteData";
import {
  SITE_URL,
  BRAND_NAME,
  OG_IMAGE,
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../../lib/seo/siteConfig";

import Image from "next/image";
import { pickServicePageImages } from "../../lib/seo/imagesPool";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SERVICES).map((serviceSlug) => ({ serviceSlug }));
}

/* -------------------------------- SEO helpers ------------------------------- */

function bucketForServiceSlug(serviceSlug) {
  const s = (serviceSlug || "").toLowerCase();
  if (s.includes("moving")) return "moving";
  if (s.includes("junk") || s.includes("cleanout")) return "cleanout";
  if (s.includes("warehouse")) return "warehouse";
  if (s.includes("event")) return "event";
  if (s.includes("construction")) return "construction";
  return "general";
}

function seoPackForService(serviceSlug, serviceName) {
  const s = serviceSlug.toLowerCase();

  // Base keywords that apply across the site without sounding spammy.
  // (Meta keywords aren’t a ranking lever, but still useful for internal consistency + some platforms.)
  const base = [
    `${serviceName} near me`,
    `${serviceName} service near me`,
    `hourly ${serviceName}`,
    "same-day labor near me",
    "last minute labor near me",
    "labor crew near me",
    "reliable labor near me",
    "extra hands near me",
  ];

  const moving = [
    "moving help near me",
    "moving help",
    "moving labor near me",
    "moving labor",
    "labor only movers near me",
    "labor only movers",
    "loading help near me",
    "unloading help near me",
    "loading and unloading services",
    "uhaul loading help near me",
    "uhaul unloading help",
    "truck loading service",
    "truck unloading service",
    "pods loading help",
    "pods unloading help",
    "storage unit unloading help",
    "heavy lifting movers near me",
    "apartment moving help near me",
    "same day moving help",
    "last minute moving help",
  ];

  const cleanouts = [
    "junk removal help near me",
    "junk removal labor near me",
    "junk hauling help near me",
    "junk hauling labor near me",
    "cleanout services near me",
    "cleanout labor near me",
    "garage cleanout help",
    "basement cleanout help",
    "apartment cleanout help",
    "move out cleanout help",
    "storage unit cleanout help",
    "trash out services",
    "trash out crew near me",
    "furniture removal help near me",
    "couch removal help",
    "mattress removal help",
    "appliance removal help",
    "bulk item removal help",
  ];

  const warehouse = [
    "warehouse labor near me",
    "warehouse staffing near me",
    "temporary warehouse labor",
    "general labor staffing near me",
    "warehouse unloading crew",
    "container unloading labor",
    "container unloading services",
    "dock unloading crew",
    "freight unloading crew",
    "lumper service",
    "lumpers near me",
    "pallet unloading crew",
    "staging and breakdown labor",
    "overflow warehouse labor",
    "short notice warehouse labor",
  ];

  const event = [
    "event setup crew near me",
    "event teardown crew near me",
    "event setup and breakdown crew",
    "event labor staff",
    "load in load out crew",
    "stagehand crew near me",
    "venue setup labor",
    "table and chair setup crew",
    "trade show setup crew",
    "convention setup crew",
    "banquet setup crew",
    "same day event crew",
  ];

  const construction = [
    "construction cleanup labor near me",
    "construction cleanup labor",
    "post construction cleanup labor",
    "construction site cleanup crew",
    "jobsite cleanup labor",
    "construction debris removal labor",
    "debris hauling labor",
    "rough clean labor",
    "final clean help",
    "site cleanup services near me",
    "renovation cleanup labor",
    "demolition cleanup labor",
  ];

  if (s.includes("moving")) return [...base, ...moving];
  if (s.includes("junk") || s.includes("cleanout")) return [...base, ...cleanouts];
  if (s.includes("warehouse")) return [...base, ...warehouse];
  if (s.includes("event")) return [...base, ...event];
  if (s.includes("construction")) return [...base, ...construction];

  return base;
}

function metaCopyForService(serviceSlug, service) {
  const s = serviceSlug.toLowerCase();

  // Keep metadata strong, but don’t over-repeat the same phrasing.
  if (s.includes("moving")) {
    return {
      title: `${service.name} Near You | Loading & unloading crews`,
      description:
        `${service.heroSubtitle} Book reliable moving labor for loading, unloading, heavy lifting, and stairs. Clear confirmation, fast dispatch options, and pay after the job is complete.`,
    };
  }

  if (s.includes("junk") || s.includes("cleanout")) {
    return {
      title: `${service.name} Near You | Junk removal help & cleanouts`,
      description:
        `${service.heroSubtitle} Book cleanout crews for lifting, carrying, staging, and loading. Ideal for junk removal help, trash-outs, move-outs, and furniture removal. Pay after completion.`,
    };
  }

  if (s.includes("warehouse")) {
    return {
      title: `${service.name} Near You | Warehouse unloading & labor support`,
      description:
        `${service.heroSubtitle} Book warehouse labor for unloading, staging, breakdown, sorting, and overflow volume. Fast confirmations, dependable arrivals, and smooth operations support.`,
    };
  }

  if (s.includes("event")) {
    return {
      title: `${service.name} Near You | Event setup & teardown crews`,
      description:
        `${service.heroSubtitle} Book event labor for load-in, setup, staging, breakdown, pack-out, and cleanup. Built for venue deadlines and tight time windows.`,
    };
  }

  if (s.includes("construction")) {
    return {
      title: `${service.name} Near You | Post-construction cleanup labor`,
      description:
        `${service.heroSubtitle} Book cleanup crews for debris movement, staging, and site reset support. Flexible scheduling where available, clean confirmations, and simple billing.`,
    };
  }

  return {
    title: `${service.name} Near You | Hourly crews`,
    description:
      `${service.heroSubtitle} Book reliable crews fast with clear confirmation, flexible scheduling options, and pay after the job is complete.`,
  };
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = SERVICES[serviceSlug];
  if (!service) return {};

  const canonical = `${SITE_URL}/services/${serviceSlug}`;
  const meta = metaCopyForService(serviceSlug, service);

  return {
    title: meta.title,
    description: meta.description,
    keywords: seoPackForService(serviceSlug, service.name),
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: BRAND_NAME,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}

/* -------------------------------- UI Helpers -------------------------------- */

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

function Breadcrumbs({ items }) {
  return (
    <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => (
          <li key={it.href} className="flex items-center gap-2">
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

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-bold leading-tight text-[clamp(1.55rem,2.3vw,2.1rem)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-slate-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

function SubtleDivider() {
  return <div className="h-px w-full bg-slate-200/60" />;
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
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

/* --------------------------- Unique content generator -------------------------- */

function getServiceNarrative(serviceSlug, serviceName) {
  const s = serviceSlug.toLowerCase();

  if (s.includes("moving")) {
    return {
      eyebrow: "Moving help (hourly crews)",
      intro: (
        <>
          If you’re searching for <strong>moving help near you</strong>,{" "}
          <strong>loading and unloading services</strong>, or{" "}
          <strong>U-Haul loading help</strong>, you’re in the right place.
          {` `}
          {BRAND_NAME} dispatches crews built for lifting, stairs, tight hallways,
          and careful placement — without forcing you into an expensive “truck + crew” bundle.
        </>
      ),
      valuePoints: [
        "Great for truck loading + unloading",
        "Perfect for stairs, heavy furniture, tight access",
        "Fast booking + clear dispatch updates",
        "Pay after the job is completed",
      ],
      steps: [
        {
          t: "Book in minutes",
          d: "Choose crew size and time. You’ll get clear confirmation without the back-and-forth.",
        },
        {
          t: "Crew arrives ready",
          d: "Workers show up prepared to lift, load, and move efficiently while protecting your space.",
        },
        {
          t: "Finish clean + predictable",
          d: "You direct priorities and placement — payment happens after completion.",
        },
      ],
      scenarios: [
        { t: "Truck loading", d: "Load a U-Haul or rental truck fast and safely." },
        { t: "Truck unloading", d: "Unload into your home, apartment, or storage unit." },
        { t: "PODS / container help", d: "Pack or unpack a container with efficient staging." },
        { t: "Heavy lifting", d: "Appliances, oversized furniture, awkward carries, stairs." },
        { t: "Short-notice moving help", d: "When timelines shrink and you need hands quickly." },
        { t: "Two-location moves", d: "Unload and place items exactly where you want them." },
      ],
      edge: {
        eyebrow: "Why us",
        title: "Built for speed, coordination, and clean execution",
        subtitle:
          "A lot of services look similar online — the difference is how the job runs in real life.",
        bullets: [
          "Top workers are prioritized first for dispatch",
          "Clear confirmations + live status updates (no guessing)",
          "Onsite lead-friendly: your priorities stay in control",
          "Support + accountability if anything shifts last minute",
          "Simple billing: see pricing, then pay after completion",
        ],
      },
      reviews: [
        {
          name: "A. Rivera",
          city: "Los Angeles, CA",
          stars: 5,
          text:
            "Booked help for a heavy unload with stairs. Crew was efficient, careful, and the updates were clear.",
        },
        {
          name: "J. Patel",
          city: "Chicago, IL",
          stars: 5,
          text:
            "Fast booking and confirmation. They loaded the truck quickly and handled tight hallways easily.",
        },
        {
          name: "M. Thompson",
          city: "Dallas, TX",
          stars: 5,
          text:
            "Great communication from dispatch and solid work pace. Everything ended up exactly where we needed it.",
        },
      ],
      faqSeed: [
        {
          q: "Do you provide a truck?",
          a: "No — this service is crew only. Most customers already have a U-Haul, rental truck, trailer, PODS container, or storage unit and just need strong hands to load or unload.",
        },
        {
          q: "Can you help with loading only or unloading only?",
          a: "Yes. Many bookings are one-direction jobs: loading a truck, unloading into a home, or unloading a storage container. You can choose what you need during booking.",
        },
        {
          q: "How many movers do I need?",
          a: "Most jobs are best with 2+ workers, especially for stairs, heavy furniture, or large apartments. If you’re unsure, book 2 and scale up if you have lots of bulky items or tight timing.",
        },
        {
          q: "Can you handle heavy items or stairs?",
          a: "Yes. Customers regularly book us for appliances, oversized furniture, awkward carries, and stair-heavy moves. Clear notes help the crew move faster and safer.",
        },
        {
          q: "Do you offer same-day moving help?",
          a: "Same-day availability depends on the city and schedule, but we’re built for short-notice bookings when timing gets tight.",
        },
        {
          q: "When do I pay?",
          a: "You’ll see pricing before confirming. Payment is collected after the job is marked complete at the scheduled end time.",
        },
      ],
    };
  }

  if (s.includes("junk") || s.includes("cleanout")) {
    return {
      eyebrow: "Cleanouts + junk removal help",
      intro: (
        <>
          Need <strong>junk removal help</strong>, <strong>junk hauling assistance</strong>,{" "}
          <strong>trash-out crews</strong>, or a fast <strong>cleanout</strong>?
          {` `}
          {BRAND_NAME} dispatches strong crews to lift, carry, sort, stage, and load
          — perfect when you’re clearing a space and want the job done quickly and cleanly.
        </>
      ),
      valuePoints: [
        "Great for move-outs, garages, storage units, offices",
        "Furniture removal lifting help",
        "Organized staging so cleanouts don’t feel chaotic",
        "Pay after completion",
      ],
      steps: [
        {
          t: "Choose the cleanout goal",
          d: "Move-out, declutter, disposal prep, bulk loading — we match the right crew size.",
        },
        {
          t: "Crew lifts + clears fast",
          d: "Workers remove items, stage, and load to your dumpster, trailer, or truck efficiently.",
        },
        {
          t: "You stay in control",
          d: "You direct what stays vs goes — the crew keeps pace and execution tight.",
        },
      ],
      scenarios: [
        { t: "Garage cleanouts", d: "Clear clutter fast and load into your dumpster or trailer." },
        { t: "Move-out / trash-out", d: "Tight deadline? Get hands to clear the space quickly." },
        { t: "Furniture removal help", d: "Heavy pieces moved safely and staged for disposal." },
        { t: "Storage unit cleanouts", d: "Efficient sorting + loading without wasted time." },
        { t: "Office cleanouts", d: "Remove bulky items and prep the space for turnover." },
        { t: "Same-day cleanout help", d: "When you need extra hands today." },
      ],
      edge: {
        eyebrow: "Why us",
        title: "Cleanouts that feel organized — not chaotic",
        subtitle:
          "Speed matters, but cleanouts go best when the crew is coordinated and the job stays controlled.",
        bullets: [
          "Fast dispatch options when timing is tight",
          "Simple, clear communication (no messy surprises)",
          "Strong hands for heavy furniture + bulk items",
          "Easy booking and predictable job flow",
          "Pay after completion once the job is marked done",
        ],
      },
      reviews: [
        {
          name: "S. Bennett",
          city: "Phoenix, AZ",
          stars: 5,
          text:
            "We needed a garage cleanout fast. The crew worked nonstop and staged everything cleanly for the dumpster.",
        },
        {
          name: "K. Nguyen",
          city: "San Diego, CA",
          stars: 5,
          text:
            "Move-out cleanout was stressful, but they made it simple. Heavy furniture and bags cleared quickly.",
        },
        {
          name: "D. Harris",
          city: "Atlanta, GA",
          stars: 5,
          text:
            "Great pace and clear communication. Helped us clear a storage unit without wasting time.",
        },
      ],
      faqSeed: [
        {
          q: "Is this junk removal?",
          a: "We provide the crew that does the lifting and clearing. Many customers use us as “junk removal help” when they already have a dumpster, trailer, or truck for disposal.",
        },
        {
          q: "Do you haul items away?",
          a: "This page is focused on the crew (lifting, carrying, loading, staging). If you’re providing disposal (dumpster/trailer/truck), we’ll load it efficiently.",
        },
        {
          q: "What cleanouts do you handle?",
          a: "Garage cleanouts, apartment cleanouts, storage units, move-outs, furniture removal prep, and office cleanouts are all common. If it’s bulky or time-consuming, a crew helps.",
        },
        {
          q: "Can you help move furniture to a dumpster?",
          a: "Yes. This is one of the most common reasons people book cleanout crews — heavy furniture, awkward carries, stairs, and fast loading.",
        },
        {
          q: "Do you offer same-day cleanout help?",
          a: "Same-day availability depends on the city and schedule, but we’re built for short-notice situations when deadlines hit.",
        },
        {
          q: "What shouldn’t be included?",
          a: "If there are items that must stay, mark them clearly. Availability may vary for hazardous materials — when in doubt, mention it in notes so the crew has clarity.",
        },
      ],
    };
  }

  if (s.includes("warehouse")) {
    return {
      eyebrow: "Warehouse labor support",
      intro: (
        <>
          Searching for <strong>warehouse labor</strong>, <strong>dock crews</strong>,{" "}
          or <strong>unloading help</strong>? {BRAND_NAME} dispatches crews built for
          operational speed — staging, breakdown, unloading, sorting, and fast hands
          when volume spikes.
        </>
      ),
      valuePoints: [
        "Unloading, staging, breakdown, sorting support",
        "Short shifts or scheduled coverage (where available)",
        "Dependable arrivals + clear confirmation",
        "Built for warehouse pace and deadlines",
      ],
      steps: [
        {
          t: "Set the shift window",
          d: "Tell us the time window and the core tasks — unloading, staging, sorting, cleanup.",
        },
        {
          t: "Crew executes the task list",
          d: "Workers show up to move fast and stay coordinated with your onsite lead.",
        },
        {
          t: "Protect timelines",
          d: "Reduce backlog and stabilize operations during peak volume days.",
        },
      ],
      scenarios: [
        { t: "Dock unloading", d: "Unload pallets, freight, or bulk product efficiently." },
        { t: "Container unloading", d: "Hands to unload, breakdown, and stage product." },
        { t: "Staging + breakdown", d: "Sort, organize, and prep inventory areas." },
        { t: "Overflow volume", d: "Extra hands when shipments exceed staffing." },
        { t: "Short-notice coverage", d: "Fill gaps when callouts happen." },
        { t: "General labor support", d: "Cleanup, movement, and task support across the floor." },
      ],
      edge: {
        eyebrow: "Why us",
        title: "Reliable help that keeps operations moving",
        subtitle:
          "Warehouse support is about speed + reliability — clear priorities in, clean execution out.",
        bullets: [
          "Clear confirmations and predictable job flow",
          "Crew arrives ready to move with warehouse pace",
          "Onsite lead-friendly: easy to direct priorities",
          "Built for overflow, peak volume, and urgent shifts",
          "Simple billing + straightforward scheduling",
        ],
      },
      reviews: [
        {
          name: "L. Cooper",
          city: "Newark, NJ",
          stars: 5,
          text:
            "We had a shipment spike and needed extra hands fast. They showed up ready and cleared the unload backlog.",
        },
        {
          name: "R. Gomez",
          city: "Houston, TX",
          stars: 5,
          text:
            "Great pace for staging and breakdown. Easy to direct and stayed productive the entire shift.",
        },
        {
          name: "T. Singh",
          city: "Seattle, WA",
          stars: 5,
          text:
            "Container unload went smoothly. Reliable arrival and strong execution without slowing the dock down.",
        },
      ],
      faqSeed: [
        {
          q: "What tasks can your warehouse crews handle?",
          a: "Unloading, staging, breakdown, sorting support, cleanup, and general labor tasks are common. If you have a clear list, the crew moves faster.",
        },
        {
          q: "Can you do short shifts?",
          a: "Yes — short shifts or scheduled coverage depends on availability in the city, but many businesses book us for overflow and time-boxed tasks.",
        },
        {
          q: "Do you provide equipment like forklifts or pallet jacks?",
          a: "Most sites provide equipment access. Our crews provide the hands and execution under your onsite lead.",
        },
        {
          q: "Can you help unload containers or trucks?",
          a: "Yes — container unloading and dock unloading are common bookings, especially when volume is high and deadlines matter.",
        },
        {
          q: "Do you offer short-notice warehouse labor?",
          a: "Short-notice availability depends on schedule and metro, but we’re built for urgent staffing gaps.",
        },
        {
          q: "How does booking work for businesses?",
          a: "You book a time window, provide a task list and onsite lead contact, and the crew executes. Clear priorities = best outcomes.",
        },
      ],
    };
  }

  if (s.includes("event")) {
    return {
      eyebrow: "Event setup + teardown crews",
      intro: (
        <>
          Need an <strong>event setup crew</strong>, <strong>load-in labor</strong>,{" "}
          or <strong>teardown help</strong>? We dispatch crews built for tight windows
          — staging, chairs, tables, barricades, signage, breakdown, pack-out, and fast cleanup.
        </>
      ),
      valuePoints: [
        "Built for venue deadlines + short windows",
        "Setup and teardown crews available (where possible)",
        "Fast execution with clear onsite direction",
        "Pay after completion",
      ],
      steps: [
        {
          t: "Set the time window",
          d: "Tell us when load-in starts and when the venue needs it done.",
        },
        {
          t: "Crew follows your plan",
          d: "Your onsite lead directs priorities — workers execute quickly and cleanly.",
        },
        {
          t: "Tear down fast",
          d: "Pack out, load out, and reset the space without chaos.",
        },
      ],
      scenarios: [
        { t: "Load-in support", d: "Unload trucks, stage gear, and set areas fast." },
        { t: "Table + chair setup", d: "High-volume setups handled efficiently." },
        { t: "Vendor support", d: "Move materials where vendors need them." },
        { t: "Teardown + pack out", d: "Breakdown, pack, load-out, cleanup." },
        { t: "Short-notice crews", d: "When plans shift and you need hands now." },
        { t: "Strict venue deadlines", d: "Get it done inside tight windows." },
      ],
      edge: {
        eyebrow: "Why us",
        title: "Fast execution under strict time windows",
        subtitle:
          "Events don’t wait. The crew needs to show up ready and follow a clean task order.",
        bullets: [
          "Designed for load-in / load-out time pressure",
          "Easy to direct: your floor lead stays in control",
          "Clean setup and teardown pace",
          "Reliable confirmations and predictable flow",
          "Simple billing after completion",
        ],
      },
      reviews: [
        {
          name: "E. Watson",
          city: "Nashville, TN",
          stars: 5,
          text:
            "We had a tight setup window. They moved fast, followed direction well, and kept the venue deadline.",
        },
        {
          name: "C. Lee",
          city: "San Francisco, CA",
          stars: 5,
          text:
            "Teardown was clean and organized. Packed out efficiently and cleared the space without chaos.",
        },
        {
          name: "J. Ramirez",
          city: "Miami, FL",
          stars: 5,
          text:
            "Solid crew for load-in and staging. Easy to coordinate and great pace under pressure.",
        },
      ],
      faqSeed: [
        {
          q: "Can I book event setup and teardown?",
          a: "Yes. Many events need both — setup before doors open, teardown after close. You can book the window(s) that match your schedule.",
        },
        {
          q: "What kind of event labor do you provide?",
          a: "Load-in/load-out, staging, table + chair setup, vendor support, breakdown, packing, and cleanup are common.",
        },
        {
          q: "Do you provide equipment or materials?",
          a: "Most events provide their own equipment and layout plan. Our crews provide the execution and hands-on setup support.",
        },
        {
          q: "What makes the job go smoothly?",
          a: "A clear run-of-show or setup map, labeled zones, and an onsite lead to direct priorities. Clear direction = fastest results.",
        },
        {
          q: "Can you handle short-notice event staffing?",
          a: "Short-notice availability depends on the city and schedule, but we’re built to fill gaps quickly when timing changes.",
        },
        {
          q: "When do I pay?",
          a: "You’ll see pricing before confirming. Payment is collected after the job is marked complete at the scheduled end time.",
        },
      ],
    };
  }

  if (s.includes("construction")) {
    return {
      eyebrow: "Construction cleanup labor",
      intro: (
        <>
          Looking for <strong>construction cleanup labor</strong> or{" "}
          <strong>post construction cleanup help</strong>? We provide crews for debris movement,
          staging, site reset support, and efficient cleanup execution — ideal for keeping timelines on track.
        </>
      ),
      valuePoints: [
        "Great for debris movement, staging, and site reset",
        "Flexible scheduling options (where available)",
        "Clear confirmations + predictable flow",
        "Pay after completion",
      ],
      steps: [
        {
          t: "Define the cleanup target",
          d: "Final clean prep, debris movement, sweep-out support, staging, or reset work.",
        },
        {
          t: "Crew executes with pace",
          d: "Workers focus on safe movement, efficiency, and keeping the site clear.",
        },
        {
          t: "Stay inspection-ready",
          d: "A clean site protects timeline and reduces handoff delays.",
        },
      ],
      scenarios: [
        { t: "Post-construction cleanup", d: "Help clear space for turnover and inspections." },
        { t: "Debris movement", d: "Move materials to staging areas or disposal zones." },
        { t: "Sweep-out support", d: "Basic labor support for site reset work." },
        { t: "Final prep assistance", d: "Clear floors and prep for handoff." },
        { t: "Short-notice labor", d: "Extra hands when timelines compress." },
        { t: "General site support", d: "Fast labor where needed across the jobsite." },
      ],
      edge: {
        eyebrow: "Why us",
        title: "The cleanest way to keep a site moving",
        subtitle:
          "Cleanup speed matters — but clarity and safety matter just as much on an active site.",
        bullets: [
          "Reliable crew support for compressed timelines",
          "Helps reduce bottlenecks before inspection or handoff",
          "Easy to coordinate under an onsite lead",
          "Predictable flow and straightforward scheduling",
          "Pay after completion once the job is done",
        ],
      },
      reviews: [
        {
          name: "P. Johnson",
          city: "Denver, CO",
          stars: 5,
          text:
            "We needed cleanup help fast before inspection. Crew stayed productive and cleared staging areas quickly.",
        },
        {
          name: "M. Allen",
          city: "Tampa, FL",
          stars: 5,
          text:
            "Solid pace for debris movement and reset work. Helpful for keeping timelines tight.",
        },
        {
          name: "H. Kim",
          city: "Charlotte, NC",
          stars: 5,
          text:
            "Clear confirmation and clean execution. Helped us prep space for handoff without delays.",
        },
      ],
      faqSeed: [
        {
          q: "What does construction cleanup include?",
          a: "Common work includes debris movement, staging, sweep-out support, and basic reset work. You’ll get the best results when priorities and zones are clear.",
        },
        {
          q: "Is this a deep clean service?",
          a: "This page focuses on crew support and cleanup labor. If you need detailed finishing work, mention it in notes so the job is scoped correctly.",
        },
        {
          q: "Do you remove hazardous materials?",
          a: "Availability varies for hazardous materials. If anything is questionable, note it clearly so expectations are aligned before the crew arrives.",
        },
        {
          q: "Do you bring tools or supplies?",
          a: "Most sites provide materials, tools, and disposal access. The crew provides the hands and execution under your direction.",
        },
        {
          q: "Can you do short-notice cleanup?",
          a: "Short-notice availability depends on the city and schedule, but we’re built to handle compressed timelines when things shift.",
        },
        {
          q: "How does payment work?",
          a: "You’ll see pricing before confirming. Payment is collected after the job is marked complete at the scheduled end time.",
        },
      ],
    };
  }

  // Default fallback
  return {
    eyebrow: "Hourly crews",
    intro: (
      <>
        {BRAND_NAME} dispatches reliable crews across the U.S. If you’re searching
        for <strong>{serviceName.toLowerCase()} near you</strong> or{" "}
        <strong>hourly help</strong>, we make it simple to book strong hands with
        clear confirmation and pay-after-completion billing.
      </>
    ),
    valuePoints: [
      "Crews dispatched quickly",
      "Same-day and scheduled availability (where available)",
      "Clear updates and predictable job flow",
      "Pay after the job is complete",
    ],
    steps: [
      { t: "Request a quote", d: "Choose the service and time window." },
      { t: "Get matched", d: "We dispatch workers based on need and availability." },
      { t: "Complete the job", d: "You direct priorities — the crew executes." },
    ],
    scenarios: [
      { t: "Short notice help", d: "When you need hands quickly." },
      { t: "Hourly help", d: "Flexible support for busy tasks." },
      { t: "Heavy lifting", d: "Move bulky or awkward items." },
      { t: "General labor", d: "Support tasks with reliable workers." },
      { t: "Onsite support", d: "Hands for execution under a lead." },
      { t: "Reliable arrivals", d: "Clear updates and accountability." },
    ],
    edge: {
      eyebrow: "Why us",
      title: "Clean booking, reliable execution",
      subtitle:
        "A premium experience from quote → confirmation → completion — designed for clarity.",
      bullets: [
        "Fast confirmation + clear communication",
        "Strong hands, clean execution",
        "Support when timing shifts",
        "Straightforward billing",
        "Pay after completion",
      ],
    },
    reviews: [],
    faqSeed: [
      {
        q: "How fast can I book?",
        a: "Same-day availability depends on the city and schedule, but many jobs can be booked quickly when timing is tight.",
      },
      {
        q: "When do I pay?",
        a: "You’ll see pricing before confirming. Payment is collected after the job is marked complete at the scheduled end time.",
      },
      {
        q: "What should I prepare?",
        a: "Clear access paths, know what you want prioritized first, and leave notes that matter (stairs, parking, deadlines, heavy items).",
      },
      {
        q: "Do you support commercial bookings?",
        a: "Yes — businesses book crews for warehouse labor, event staffing, and cleanup support depending on the service category and location.",
      },
      {
        q: "Can I book for a specific time window?",
        a: "Yes — choose the booking time that fits your schedule and add instructions for access or onsite coordination.",
      },
      {
        q: "How do I get started?",
        a: "Click “Get a quote” to pick your service and schedule — or call dispatch to book over the phone.",
      },
    ],
  };
}

/* ------------------------- FAQ builder (minimum 6) ------------------------- */

function buildFaqs(service, narrative) {
  const existing = Array.isArray(service?.faqs) ? service.faqs : [];
  const seed = Array.isArray(narrative?.faqSeed) ? narrative.faqSeed : [];
  const combined = [
    ...existing.map((x) => ({ q: x.q, a: x.a })),
    ...seed,
  ];

  // De-dupe by question (clean)
  const seen = new Set();
  const deduped = [];
  for (const item of combined) {
    const key = (item?.q || "").trim().toLowerCase();
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }

  // Minimum 6 per service page (stronger SEO + better UX)
  return deduped.slice(0, Math.max(6, deduped.length));
}

function premiumHeroTitle(serviceSlug, service) {
  const s = serviceSlug.toLowerCase();
  if (s.includes("moving")) return "Moving help near you - vetted hourly crews";
  return service.heroTitle;
}

/* ------------------------------- Page component ------------------------------ */

export default async function ServiceLandingPage({ params }) {
  const { serviceSlug } = await params;
  const service = SERVICES[serviceSlug];
  if (!service) notFound();

  const bucket = bucketForServiceSlug(serviceSlug);

  // Hashed/stable “random” images (same idea as citySlug page)
  // Using citySlug: serviceSlug keeps the hash unique per service page
  const pageImages = pickServicePageImages({
    serviceSlug,
    citySlug: serviceSlug,
    bucket,
  });

  const canonical = `${SITE_URL}/services/${serviceSlug}`;
  const narrative = getServiceNarrative(serviceSlug, service.name);
  const faqs = buildFaqs(service, narrative);

  const featuredReviews = pickFeaturedReviews({
    serviceSlug,
    count: 3,
  });

  const related = Object.entries(SERVICES)
    .filter(([slug]) => slug !== serviceSlug)
    .slice(0, 6);

  // Structured data: Breadcrumb + Service + FAQPage
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.name, item: canonical },
        ],
      },
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        provider: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: SITE_URL,
          telephone: PHONE_TEL,
        },
        areaServed: "US",
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
      Get a quote
    </a>
    <a
      href={`tel:${PHONE_TEL}`}
      className="rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-semibold py-3 px-4"
    >
      Call
    </a>
  </div>
</div>

{/* HERO — breathable card + crisp photo (no white wash) */}
<section className="relative overflow-hidden border-b border-slate-100">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src={pageImages.hero}
      alt={`${service.name} crew`}
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  </div>

  {/* Keep the image crisp — just a light contrast veil (NOT white wash) */}
  <div className="absolute inset-0 bg-black/15" />

  <Container className="relative min-h-[620px] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 flex flex-col justify-center">
    {/* Breadcrumb pill */}
    <div className="inline-flex w-fit items-center rounded-full border border-white/40 bg-white/85 backdrop-blur px-4 py-2 shadow-[0_1px_0_rgba(15,23,42,0.06)]">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${serviceSlug}` },
        ]}
      />
    </div>

    {/* Hero card */}
    <div className="mt-7 w-full max-w-[52rem] rounded-[2.4rem] bg-white/92 backdrop-blur-md border border-white/55 shadow-[0_36px_120px_rgba(15,23,42,0.34)] p-9 sm:p-11">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {narrative.eyebrow}
      </p>

      <h1 className="mt-3 font-bold tracking-tight leading-[1.02] text-[clamp(2.35rem,3.8vw,4.35rem)]">
        {premiumHeroTitle(serviceSlug, service)}
      </h1>

      <p className="mt-5 text-slate-700 text-[clamp(1.05rem,1.15vw,1.22rem)] leading-relaxed">
        {service.heroSubtitle}
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed max-w-2xl">
        {narrative.intro}
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {narrative.valuePoints.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <PrimaryButton href={BOOKING_URL}>Get a quote</PrimaryButton>
        <SecondaryButton href={`tel:${PHONE_TEL}`}>
          Call {PHONE_DISPLAY}
        </SecondaryButton>
      </div>

      <p className="mt-5 text-xs text-slate-500">
        Crew-only service: you provide trucks/tools/materials unless otherwise stated.
        Availability varies by city and schedule.
      </p>
    </div>
  </Container>
</section>

      {/* HOW IT WORKS */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[.95fr_1.05fr] gap-10 items-start">
            <SectionTitle
              eyebrow="How it works"
              title={`Book ${service.name.toLowerCase()} without the usual friction`}
              subtitle="Simple, predictable, and designed for speed — exactly how it should work."
            />

            <div className="space-y-6">
              {narrative.steps.map((x, idx) => (
                <div key={x.t}>
                  <p className="text-sm font-semibold text-slate-900">
                    {idx + 1}. {x.t}
                  </p>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{x.d}</p>
                  {idx !== narrative.steps.length - 1 ? (
                    <div className="mt-6">
                      <SubtleDivider />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* COMMON SCENARIOS */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionTitle
            eyebrow="Common requests"
            title={`What people book ${service.name.toLowerCase()} for`}
            subtitle="Specificity ranks and converts — this section is written for real searches and real intent."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {narrative.scenarios.map((u) => (
              <div key={u.t} className="max-w-md">
                <p className="font-semibold text-slate-900">{u.t}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{u.d}</p>
              </div>
            ))}
          </div>

          {/* Natural SEO paragraph with varied wording */}
          <div className="mt-12 max-w-4xl">
            <p className="text-sm text-slate-700 leading-relaxed">
              If you’re comparing options for <strong>{service.name.toLowerCase()} near me</strong>,
              what matters most is reliability and clarity.
              {` `}
              {BRAND_NAME} is built for customers who want strong hands, clean confirmation,
              and a job that runs smoothly — especially when timing is tight.
            </p>
          </div>
        </Container>
      </section>

      {/* WHY US + REVIEWS (replaces included/prep checklist) */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-start">
            <div>
              <SectionTitle
                eyebrow={narrative.edge.eyebrow}
                title={narrative.edge.title}
                subtitle={narrative.edge.subtitle}
              />

              <div className="mt-8 space-y-3 text-slate-700 leading-relaxed">
                {narrative.edge.bullets.map((b) => (
                  <div key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                    <p>{b}</p>
                  </div>
                ))}
              </div>

              {/* Lightweight clarity block (premium, not boxy) */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-slate-900">
                  The difference vs. “random listings”
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
                  A lot of sites can show you a phone number. The experience falls apart when
                  confirmation is unclear, the crew isn’t consistent, or timing shifts.
                  We built the system to keep jobs coordinated, accountable, and easy to manage.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <PrimaryButton href={BOOKING_URL} className="w-full sm:w-auto">
                    Get a quote
                  </PrimaryButton>
                  <SecondaryButton href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                    Call {PHONE_DISPLAY}
                  </SecondaryButton>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Reviews"
                title="What customers say"
                subtitle="Real feedback from customers using Great American Labor"
              />

              <div className="mt-8 space-y-4">
              {featuredReviews.map((r) => (
                <div key={r.id} className="rounded-3xl border border-slate-200 bg-white p-6">
                    <Stars n={r.stars} />
                    <p className="mt-3 text-slate-800 leading-relaxed">“{r.text}”</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900">
                      {r.name || "Verified Customer"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICE AREA + INTERNAL LINKS */}
      <section className="py-14 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-start">
            <div>
              <SectionTitle
                eyebrow="Service areas"
                title={`Find ${service.name.toLowerCase()} near you`}
                subtitle="Choose a city page for stronger local relevance and quick booking in major metros."
              />

              <div className="mt-8 flex flex-wrap gap-2">
                {Object.entries(METROS)
                  .slice(0, 30)
                  .map(([slug, m]) => (
                    <Link
                      key={slug}
                      href={`/services/${serviceSlug}/${slug}`}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition"
                    >
                      {m.city}, {m.region}
                    </Link>
                  ))}
              </div>

              <p className="mt-4 text-xs text-slate-500">
                More metros are available — this list is curated for speed and internal linking.
              </p>
            </div>

            <div>
              <SectionTitle
                eyebrow="Related services"
                title="Explore more ways we can help"
                subtitle="This improves topical authority and gives users clear next steps."
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map(([slug, s]) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:bg-slate-50 hover:border-slate-300 transition"
                  >
                    <p className="font-semibold text-slate-900">{s.name}</p>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {s.heroSubtitle}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">View details →</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title={`Questions about ${service.name.toLowerCase()}`}
            subtitle="Clear answers that remove hesitation and make booking feel obvious."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {(faqs || []).slice(0, 8).map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold text-slate-900">{f.q}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <PrimaryButton href={BOOKING_URL}>Get a quote</PrimaryButton>
            <SecondaryButton href={`tel:${PHONE_TEL}`}>
              Call {PHONE_DISPLAY}
            </SecondaryButton>
          </div>

          {/* Mention once again down here. Done. */}
          <p className="mt-6 text-xs text-slate-500">
            Crew-only service: you provide trucks/tools/materials unless otherwise stated.
            Same-day availability depends on city and schedule.
          </p>
        </Container>
      </section>
    </div>
  );
}
