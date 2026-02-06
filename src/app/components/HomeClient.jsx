// HomeClient.jsx
"use client";

import React from "react";

import Link from "next/link";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import { SERVICES, METROS } from "../lib/seo/siteData";

// images
const galcLogo = "/assets/Logo40.png";
const movingImg = "/assets/move.webp";
const cleanImg = "/assets/warehouseing2.webp";
const outdoorImg = "/assets/junk.webp";
const propertyImg = "/assets/construction.webp";
const somethingImg = "/assets/somethingelse.webp";
const movingProcessImg = "/assets/movingprocess.webp";
const warehouseingProcessImg = "/assets/warehousingprocess.webp";
const eventImg = "/assets/eventsetup.webp";
const clpPeople1 = "/assets/clppeople.webp";
const clpPeople2 = "/assets/clppeople2.webp";
const clpPeople3 = "/assets/clppeople3.webp";
const calendarAIImg = "/assets/calAI.webp";

// react icons
import {
  FiTruck,
  FiTrash2,
  FiSun,
  FiHome,
  FiCalendar,
  FiHelpCircle,
  FiEdit3,
  FiUsers,
  FiMessageCircle,
  FiCheckCircle,
  FiPackage,
  FiTool,
} from "react-icons/fi";

const BOOKING_URL = "https://book.greatamericanlabor.com/";
const PHONE_DISPLAY = "(888) 270-8355";
const PHONE_TEL = "+18882708355";

// Social proof / pricing (keep centralized)
const GOOGLE_RATING = 4.8;
const VERIFIED_REVIEWS_MIN = 740; // show as 740+
const STARTING_RATE = 30; // $/hr

/* -------------------- Vertical rhythm (Apple x Uber) -------------------- */
const RHYTHM = {
  hero: "pt-16 sm:pt-22 lg:pt-26 2xl:pt-30 pb-14 sm:pb-18 lg:pb-22 2xl:pb-28",
  section: "py-16 sm:py-20 lg:py-24 2xl:py-28",
  sectionTight: "py-14 sm:py-16 lg:py-20 2xl:py-24",
  headerMB: "mb-10 sm:mb-12 lg:mb-14",
  footer: "py-10 sm:py-12",

  // Split padding helpers to avoid “double” spacing between back-to-back sections
  sectionPT: "pt-16 sm:pt-20 lg:pt-24 2xl:pt-28",
  sectionPB: "pb-16 sm:pb-20 lg:pb-24 2xl:pb-28",
  sectionHalfPT: "pt-10 sm:pt-12 lg:pt-14 2xl:pt-16",
  sectionHalfPB: "pb-10 sm:pb-12 lg:pb-14 2xl:pb-16",
};

const HOW_STEPS = [
  { id: 1, title: "Tell us the job", desc: "What you need, where, and when.", icon: FiEdit3 },
  { id: 2, title: "We assign workers", desc: "Matched to the task and timing.", icon: FiUsers },
  { id: 3, title: "We text you details", desc: "Names, arrival window, instructions.", icon: FiMessageCircle },
  { id: 4, title: "They show up & work", desc: "You direct, they get it done.", icon: FiCheckCircle },
];

// Apple x Uber-style “clear flow” with a live preview panel (kept for future use)
const HOW_FLOW = [
  {
    ...HOW_STEPS[0],
    kicker: "Step 1",
    bullets: ["Choose a job type", "Add your address", "Pick a day + time window"],
    previewTitle: "Booking request",
    previewChips: ["Moving & lifting", "Tomorrow", "2 workers"],
    bubbles: [
      { from: "you", text: "Need 2 workers to unload a POD tomorrow at 2pm." },
      { from: "clp", text: "Got it — we’re assigning a crew now." },
    ],
  },
  {
    ...HOW_STEPS[1],
    kicker: "Step 2",
    bullets: ["We match based on task + timing", "You can choose crew size", "Same-day often available"],
    previewTitle: "Crew assigned",
    previewChips: ["Crew: 2 workers", "Arrival window", "Confirmed"],
    bubbles: [
      { from: "clp", text: "Crew confirmed ✅" },
      { from: "clp", text: "Arrival window: 1:40–2:00pm." },
    ],
  },
  {
    ...HOW_STEPS[2],
    kicker: "Step 3",
    bullets: ["You get names + arrival window", "Quick text updates", "Clear instructions"],
    previewTitle: "Text updates",
    previewChips: ["Names sent", "Window updates", "On the way"],
    bubbles: [
      { from: "clp", text: "Your workers: Thomas + Jay." },
      { from: "clp", text: "On the way now. ETA ~12 minutes." },
    ],
  },
  {
    ...HOW_STEPS[3],
    kicker: "Step 4",
    bullets: ["They arrive and work", "You direct on-site", "You’re charged after completion"],
    previewTitle: "Job complete",
    previewChips: ["Work done", "Pay after", "Receipt"],
    bubbles: [
      { from: "clp", text: "All set — job complete. 👍" },
      { from: "clp", text: "You’ll receive a receipt shortly." },
    ],
  },
];

const WORKER_IMAGES = [clpPeople1, clpPeople2, clpPeople3];

const REVIEWS = [
  {
    author: "Joan D.",
    title: "Shed cleanout in 3 hours",
    text: "I needed help to empty, clean and reorganize my shed 12x14'. It was clear full! Thomas showed up on time and did a great job. In just 3 hours I have a brand new shed you can actually walk into and put stuff away. Great experience, great price.",
  },
  {
    author: "Julia B.",
    title: "Booked less than 24 hours",
    text: "I booked online less than 24 hours in advance for a move and it was great experience. All 3 workers showed up early and were very hard working. I would definitely use them again!",
  },
  {
    author: "Mark R.",
    title: "Unload a 16' POD",
    text: "We needed two guys to help unload a 16' POD and move a few heavy pieces inside. They confirmed by text, arrived right on the window, and worked straight through. Super respectful of the walls and floors, too.",
  },
];

/* -------------------- Layout helpers -------------------- */

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

function PrimaryButton({ href, children, className = "", variant = "dark", ...props }) {
  const common = [
    "inline-flex items-center justify-center rounded-full font-semibold",
    "select-none touch-manipulation",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
  ].join(" ");

  const styles =
    variant === "light"
      ? [
          "bg-gradient-to-b from-white to-slate-100 text-slate-950",
          "shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/25",
          "hover:to-white hover:shadow-[0_22px_60px_rgba(0,0,0,0.42)] active:scale-[0.99]",
          "px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base",
          "focus-visible:ring-offset-slate-950",
        ].join(" ")
      : [
          // layout
          "group relative overflow-hidden",
          "px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base",

          // base look
          "bg-[#09152f] text-white",
          "ring-1 ring-slate-900/10",

          // premium shadow stack (outer depth + subtle inner highlight)
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(9,21,47,0.18)]",
          "hover:bg-[#0b1b3b]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_30px_rgba(9,21,47,0.22)]",
          "active:translate-y-[0.5px]",
          "active:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_18px_rgba(9,21,47,0.16)]",

          // subtle sheen (controlled)
          "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
          "before:bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.20),transparent_58%)]",
          "before:opacity-90 group-hover:before:opacity-100",

          // motion
          "transition-[transform,box-shadow,background-color] duration-200 ease-out",

          // focus
          "focus-visible:ring-offset-white",
        ].join(" ");

  return (
    <a href={href} className={`${common} ${styles} ${className}`} {...props}>
      <span className="relative inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

function SecondaryButton({ href, children, className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full border border-white/20 text-white " +
    "px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold " +
    "hover:bg-white/10 transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  return (
    <a href={href} className={`${base} ${className}`} {...props}>
      {children}
    </a>
  );
}

function PremiumBookButton({ href, children = "Book", className = "", ...props }) {
  return (
    <a
      href={href}
      className={[
        // layout
        "group relative inline-flex items-center justify-center rounded-full",
        "px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold",
        "select-none touch-manipulation",

        // base look
        "bg-[#09152f] text-white",
        "ring-1 ring-slate-900/10", // crisp edge on light backgrounds

        // premium shadow stack (outer depth + subtle inner highlight)
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(9,21,47,0.18)]",
        "hover:bg-[#0b1b3b]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_30px_rgba(9,21,47,0.22)]",
        "active:translate-y-[0.5px]",
        "active:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_18px_rgba(9,21,47,0.16)]",

        // subtle sheen (very controlled)
        "overflow-hidden",
        "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
        "before:bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.20),transparent_58%)]",
        "before:opacity-90",
        "group-hover:before:opacity-100",

        // focus
        "transition-[transform,box-shadow,background-color] duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",

        className,
      ].join(" ")}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">
        {children}
        <span
          aria-hidden="true"
          className="opacity-90 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </a>
  );
}


export default function App() {
  // Small perf win: warm up the booking domain (DNS + TLS) without changing UI/behavior.
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    try {
      const origin = new URL(BOOKING_URL).origin;

      const dns = document.createElement("link");
      dns.rel = "dns-prefetch";
      dns.href = origin;

      const pre = document.createElement("link");
      pre.rel = "preconnect";
      pre.href = origin;
      pre.crossOrigin = "";

      document.head.appendChild(dns);
      document.head.appendChild(pre);

      return () => {
        dns.remove();
        pre.remove();
      };
    } catch {
      return;
    }
  }, []);

  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-rose-100 selection:text-slate-900">
      <Hero />
      <StatBelt />
      <TaskCategories />
      <WhyUs />
      <PopularLocations />
      <TrustSectionRail />
      <HowItWorksChat />
      <FinalCTA />
    </div>
  );
}

/* -------------------- Top bar -------------------- */
function TopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-10 xl:px-10">
        <div className="flex h-[84px] sm:h-[92px] lg:h-[104px] items-center justify-between">
          {/* left: logo */}
          <Link href="/" className="flex items-center">
            <img
              src={galcLogo}
              alt="Great American Labor "
              className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* right: phone + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <PrimaryButton
              href={BOOKING_URL}
              className="shrink-0 text-base sm:text-lg px-6 sm:px-8 lg:px-9 py-3 sm:py-3.5"
            >
              For Businesses
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  return (
    <section className="bg-white">
      <Container className={`${RHYTHM.hero} text-center`}>
        <div className="mx-auto max-w-5xl">
          <h1
            className="font-bold tracking-tight leading-[1.05] text-[clamp(2.2rem,4.2vw,5.6rem)]"
            style={{ color: "#09152f" }}
          >
            Labor for Any Job
          </h1>

          <p
            className="mt-4 font-semibold tracking-tight text-[clamp(1.15rem,1.7vw,1.75rem)]"
            style={{ color: "#e11d48" }}
          >
            Extra hands, on your schedule.
          </p>

          <p className="mt-4 mx-auto max-w-3xl leading-relaxed text-slate-700 text-[clamp(1rem,1.2vw,1.35rem)]">
            Moving, cleaning, rearranging, outdoor work, tell us the details and we’ll send a crew. Our tech finds the
            right vetted workers and keeps you updated.
          </p>

          <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <PrimaryButton
            href={BOOKING_URL}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4"
          >
            <span className="relative">Book workers</span>
            <span
              aria-hidden="true"
              className="relative opacity-90 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            >
              →
            </span>
          </PrimaryButton>

        <div className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-2">

          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/70 px-3 py-1 text-xs sm:text-sm text-slate-600">
            <span className="text-amber-400" aria-hidden="true">★★★★★</span>
            5-star workers
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs sm:text-sm font-semibold text-rose-700">
            <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse" aria-hidden="true" />
            Same-day available
          </span>
        </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Stat belt -------------------- */
function StatBelt() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.18),rgba(15,23,42,0)_70%)]"
      />
      <Container className={`relative ${RHYTHM.sectionTight}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 xl:gap-x-14 text-center">
          <Stat number="96%" label="Fill Rate" />
          <Stat number="120,000+" label="Jobs Staffed" />
          <Stat number="90,000" label="Vetted Workers" />
          <Stat number="4.8 / 5" label="Google Rating" />
        </div>
      </Container>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="leading-none font-bold text-white tracking-tight text-[clamp(2.2rem,3.2vw,3.7rem)]">
        {number}
      </div>
      <div className="font-semibold text-slate-100/90 text-[clamp(0.85rem,1.1vw,1.1rem)]">{label}</div>
    </div>
  );
}

/* -------------------- Task categories -------------------- */
function TaskCategories() {
  // Find the real service slugs from SERVICES so links always stay correct.
  const serviceSlugs = React.useMemo(() => {
    const keys = Object.keys(SERVICES || {}).map((k) => k.toLowerCase());

    const find = (...needles) => keys.find((k) => needles.some((n) => k.includes(n))) || "";

    return {
      moving: find("moving"),
      warehouse: find("warehouse"),
      event: find("event"),
      cleanout: find("junk", "cleanout", "trash"),
      construction: find("construction"),
    };
  }, []);

  // ✅ memoized so we can preload once and avoid re-creating the array each render
  const options = React.useMemo(
    () => [
      {
        id: "logistics",
        title: "Logistics load and unload",
        subtitle: "Trucks, trailers, PODs, containers, storage units",
        href: serviceSlugs.moving ? `/services/${serviceSlugs.moving}` : "/services",
        desc:
          "Labor-only crews for fast loading and unloading. We handle lifting, carrying, and moving items to the exact spots you direct. Ideal for tight timelines, large deliveries, and overflow days.",
        badge: "Most booked",
        image: movingImg,
        chips: ["Flexible crew size", "Clear arrival window", "Same-day often available"],
      },
      {
        id: "warehouse",
        title: "Warehouse support",
        subtitle: "Receiving help, staging, pick and pack support",
        href: serviceSlugs.warehouse ? `/services/${serviceSlugs.warehouse}` : "/services",
        desc:
          "Extra hands for busy warehouse days. We support receiving, hand unloading, staging inventory, order prep, and general floor assistance under your on-site lead. Great for consistent, repeat staffing.",
        image: cleanImg,
        chips: ["Receiving support", "Staging and organization", "Repeat staffing"],
      },
      {
        id: "events",
        title: "Event setup and teardown",
        subtitle: "Chairs, tables, staging, booths, breakdown crews",
        href: serviceSlugs.event ? `/services/${serviceSlugs.event}` : "/services",
        desc:
          "Reliable crews for setup day and breakdown night. We handle tables, chairs, staging pieces, booth materials, and load-out support so venues clear on time and schedules stay on track.",
        image: eventImg,
        chips: ["Setup and breakdown", "Time-critical jobs", "Large crews available"],
      },
      {
        id: "junk",
        title: "Junk removal and disposal labor",
        subtitle: "Cleanouts, lifting, sorting, loading for haul-away",
        href: serviceSlugs.cleanout ? `/services/${serviceSlugs.cleanout}` : "/services",
        desc:
          "Fast cleanout labor for units, storage, and backrooms. We lift, carry, sort, and load. You provide the dumpster or truck and we provide the hands to clear it efficiently.",
        image: outdoorImg,
        chips: ["Unit and storage cleanouts", "Lift and load", "You provide disposal"],
      },
      {
        id: "construction",
        title: "Construction site cleanup",
        subtitle: "Post-con cleanup, debris bagging, site sweep outs",
        href: serviceSlugs.construction ? `/services/${serviceSlugs.construction}` : "/services",
        desc:
          "Cleanup crews that help you close out jobs faster. We handle debris pickup, bagging, sweep outs, moving materials, and end-of-day site reset so your team can stay focused on skilled work.",
        image: propertyImg,
        chips: ["Post-job cleanup", "Material moves", "Short notice crews"],
      },
      {
        id: "other",
        title: "Something else?",
        subtitle: "Describe the job and we’ll staff it",
        href: "/services",
        desc:
          "If you need extra hands on-site and the task is clear, tell us what you need, where it is, and when. We will match and dispatch workers in your area with updates from booking to arrival.",
        image: somethingImg,
        chips: ["One-time or recurring", "Fast dispatch", "Clear communication"],
      },
    ],
    [serviceSlugs]
  );

  const iconMap = {
    logistics: FiTruck,
    warehouse: FiPackage,
    construction: FiTool,
    junk: FiTrash2,
    events: FiCalendar,
    other: FiHelpCircle,
  };

  const [active, setActive] = React.useState(options[0]);
  const previewRef = React.useRef(null);

  // ✅ Preload images once to eliminate white flicker on swaps
  React.useEffect(() => {
    options.forEach(({ image }) => {
      const img = new Image();
      img.decoding = "async";
      img.src = image;
    });
  }, [options]);

  return (
    // Full top padding (as before) + half bottom padding to prevent double spacing into the next section
    <section className={`bg-white ${RHYTHM.sectionPT} ${RHYTHM.sectionHalfPB}`}>
      <Container>
        <header className={`max-w-3xl ${RHYTHM.headerMB}`}>
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1.9rem,3vw,3.4rem)]">
            How can we help?
          </h2>
          <p className="mt-4 text-slate-700 text-[clamp(1rem,1.2vw,1.25rem)]">
            Pick a work type and we will staff a crew that fits it.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-14">
          <div
            ref={previewRef}
            className="flex-1 rounded-3xl border border-slate-200/60 bg-slate-50/50 overflow-hidden flex flex-col shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
          >
            {/* ✅ Smooth crossfade + non-white base paint to prevent flashing */}
            <div className="relative h-56 sm:h-64 lg:h-[420px] xl:h-[480px] 2xl:h-[540px] bg-slate-200">
              <div className="absolute inset-0 bg-slate-200" aria-hidden="true" />

              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover transform-gpu"
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  decoding="async"
                  draggable={false}
                  fetchPriority="high"
                  loading="eager"
                  style={{ willChange: "opacity, transform" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

              {active.badge ? (
                <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1">
                  {active.badge}
                </span>
              ) : null}
            </div>

            <div className="p-6 sm:p-7 lg:p-8 space-y-5">
              <div>
                <h3 className="text-slate-900 font-bold text-[clamp(1.15rem,1.4vw,1.8rem)]">{active.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-[clamp(0.98rem,1.1vw,1.2rem)]">
                  {active.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.chips?.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* ✅ CTA moved into the active card (Book + Learn more) */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <PremiumBookButton href={BOOKING_URL} className="w-full sm:w-auto">
              Book
            </PremiumBookButton>

                <Link
                  href={active.href || "/services"}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Learn more
                </Link>
              </div>

              <p className="text-xs text-slate-500 pt-1">
                Labor only service. You provide any trucks, tools, dumpsters, or materials.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[440px] xl:w-[500px] 2xl:w-[560px] space-y-3">
            {options.map((item) => {
              const isActive = item.id === active.id;
              const Icon = iconMap[item.id];

              return (
                <button
                  key={item.id}
                  type="button"
                  style={{ WebkitTapHighlightColor: "transparent" }} // ✅ removes mobile tap flash
                  onClick={() => {
                    setActive(item);
                    if (typeof window !== "undefined" && window.innerWidth < 1024 && previewRef.current) {
                      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={[
                    "group w-full flex items-start sm:items-center gap-4 rounded-2xl border transition",
                    "py-6 sm:py-7 px-6 sm:px-7",
                    isActive
                      ? "border-rose-200 bg-rose-50/70 shadow-[0_20px_70px_rgba(15,23,42,0.07)] ring-2 ring-rose-100"
                      : "border-slate-200/60 hover:border-slate-300 hover:bg-slate-50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  <div
                    className={`h-12 w-1 rounded-full transition ${
                      isActive ? "bg-rose-600" : "bg-slate-200 group-hover:bg-slate-300"
                    }`}
                  />

                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center shrink-0">
                    {Icon ? (
                      <Icon className={`text-rose-600 ${isActive ? "scale-110" : ""}`} size={18} />
                    ) : (
                      <span className="text-rose-600 text-xs">•</span>
                    )}
                  </div>

                  <div className="flex-1 text-left">
                    <p
                      className={`font-bold ${isActive ? "text-slate-900" : "text-slate-800"} text-[clamp(0.95rem,1vw,1.2rem)]`}
                    >
                      {item.title}
                    </p>
                    <p className="mt-1 text-slate-500 text-[clamp(0.8rem,0.9vw,1rem)]">{item.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Popular locations (dark like stats) -------------------- */
function PopularLocations() {
  const movingSlug = React.useMemo(() => {
    const keys = Object.keys(SERVICES || {}).map((k) => k.toLowerCase());
    return keys.find((k) => k.includes("moving")) || "";
  }, []);

  // Curated “popular” metros — fall back gracefully\db if a slug isn’t present in METROS
  const POPULAR = [
    "new-york-ny",
    "los-angeles-ca",
    "chicago-il",
    "houston-tx",
    "phoenix-az",
    "philadelphia-pa",
    "san-antonio-tx",
    "san-diego-ca",
    "dallas-tx",
    "san-jose-ca",
    "austin-tx",
    "jacksonville-fl",
    "fort-worth-tx",
    "columbus-oh",
    "charlotte-nc",
    "san-francisco-ca",
    "indianapolis-in",
    "seattle-wa",
    "denver-co",
    "washington-dc",
    "boston-ma",
    "nashville-tn",
    "detroit-mi",
    "portland-or",
    "las-vegas-nv",
    "miami-fl",
    "atlanta-ga",
    "minneapolis-mn",
    "tampa-fl",
    "orlando-fl",
  ];

  const metroSlugs = React.useMemo(() => {
    const existing = POPULAR.filter((s) => METROS?.[s]);
    if (existing.length >= 18) return existing;
    return Object.keys(METROS || {}).slice(0, 30);
  }, []);


  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.14),rgba(15,23,42,0)_70%)]"
      />

      <Container className={`relative ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionHalfPB}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 2xl:gap-16 items-start">
          <div className="max-w-2xl">
            <h2 className="font-bold tracking-tight text-white text-[clamp(1.9rem,3vw,3.4rem)]">
              Popular locations
            </h2>
            <p className="mt-4 text-slate-200/90 leading-relaxed text-[clamp(1rem,1.2vw,1.25rem)]">
              Browse top cities we serve and jump straight into local service pages.
            </p>

            <div className="mt-6">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold
                        hover:bg-slate-100 transition
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Browse cities →
            </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {metroSlugs.map((slug) => {
                const m = METROS?.[slug];
                if (!m) return null;

                const href = movingSlug ? `/services/${movingSlug}/${slug}` : "/services";

                return (
                  <Link
                    key={slug}
                    href={href}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100
                               hover:bg-white/10 hover:border-white/25 transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {m.city}, {m.region}
                  </Link>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-slate-300/80">More locations available across the U.S.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- How it works (image = exact steps height on desktop) -------------------- */
function HowItWorksChat() {
  const stepsRef = React.useRef(null);
  const [stepsH, setStepsH] = React.useState("auto");

  // Parallax for the process imagery
  const artRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: artRef,
    offset: ["start end", "end start"],
  });

  // subtle, premium movement
  const yA = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const yB = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  React.useLayoutEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const update = () => {
      const h = el.getBoundingClientRect().height;
      setStepsH(`${Math.round(h)}px`);
    };

    update();

    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
    }

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    // Half top + half bottom so it splits spacing with the grey section above and dark CTA below
    <section className={`bg-white ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionHalfPB}`}>
      <Container>
        <header className={`max-w-3xl ${RHYTHM.headerMB}`}>
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1.9rem,3vw,3.4rem)]">
            Our <span className="text-rose-600">Process</span>
          </h2>
          <p className="mt-4 text-slate-700 text-[clamp(1rem,1.2vw,1.25rem)]">
            Four steps and you’ve got people on-site.
          </p>

          {/* ✅ CTA added */}
          <div className="mt-6">
            <a
              href="https://www.loom.com/share/c8e08c4697bd4712bd061d890190a060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white
                        px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-sm
                        hover:bg-slate-800 transition
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
            >
              Watch how it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 2xl:gap-14 items-start">
          {/* Left: steps */}
          <div ref={stepsRef} className="flex-1 w-full space-y-3">
            {HOW_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={[
                    "w-full flex items-start sm:items-center gap-4 rounded-2xl border",
                    "py-5 sm:py-6 px-5 sm:px-6",
                    "border-slate-200/60 bg-white",
                    "shadow-[0_10px_28px_rgba(15,23,42,0.03)]",
                    "cursor-default",
                  ].join(" ")}
                >
                  <div className="h-10 sm:h-12 w-1 rounded-full bg-slate-200" />

                  <div className="h-11 w-11 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center shrink-0">
                    <Icon className="text-rose-600" size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="text-[0.75rem] uppercase tracking-wide text-slate-400">Step {step.id}</p>
                    <h3 className="mt-1 font-bold text-slate-900 text-[clamp(1rem,1vw,1.25rem)]">{step.title}</h3>
                    <p className="mt-1 text-slate-600 leading-relaxed text-[clamp(0.95rem,0.95vw,1.1rem)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: dual process images (diagonal + parallax) — height locked to steps on lg+ */}
          <div
            className="w-full max-w-[520px] mx-auto lg:mx-0 lg:w-[min(42vw,600px)] lg:h-[var(--steps-h)] shrink-0"
            style={{ "--steps-h": stepsH }}
          >
            <div ref={artRef} className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              {/* Top-left card */}
              <motion.div
                style={{ y: yA }}
                className="absolute left-0 top-3 sm:top-5 w-[78%] sm:w-[72%] h-[66%] rotate-[-4deg] transform-gpu
                           overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70
                           shadow-[0_28px_90px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={movingProcessImg}
                  alt="Moving process"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
              </motion.div>

              {/* Bottom-right card */}
              <motion.div
                style={{ y: yB }}
                className="absolute right-0 bottom-3 sm:bottom-5 w-[70%] sm:w-[64%] h-[60%] rotate-[4deg] transform-gpu
                           overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70
                           shadow-[0_28px_90px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={warehouseingProcessImg}
                  alt="Warehousing process"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- (kept as-is) MessageBubble -------------------- */
function MessageBubble({ from, text }) {
  const isYou = from === "you";
  return (
    <div className={`flex ${isYou ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isYou ? "bg-slate-900 text-white shadow-sm" : "bg-white border border-slate-200/60 text-slate-800",
        ].join(" ")}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

/* -------------------- Trust / reviews -------------------- */
function TrustSectionRail() {
  const [active, setActive] = React.useState(0);
  const total = REVIEWS.length;

  React.useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    // Half top + half bottom so the white/grey boundaries split evenly
    <section className={`bg-slate-50 ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionHalfPB}`}>
      <Container>
        <div className={`text-center max-w-3xl mx-auto ${RHYTHM.headerMB}`}>
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1.9rem,3vw,3.4rem)]">
            People use us for everyday jobs
          </h2>
<div className="mt-4 flex flex-col items-center gap-3">
  {/* Subtitle row with stat beside it */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
    <p className="text-slate-700 text-[clamp(1rem,1.2vw,1.25rem)]">
      Feedback from Great American Labor customers
    </p>

    {/* 740+ pill moved beside subtitle */}
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full",
        "bg-white border border-slate-200/70",
        "px-4 sm:px-5 py-2",
        "text-sm font-semibold text-slate-900",
        "shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        "whitespace-nowrap",
      ].join(" ")}
    >
      <span className="text-amber-400" aria-hidden="true">★★★★★</span>
      <span>{VERIFIED_REVIEWS_MIN.toLocaleString()}+ verified reviews</span>
    </span>
  </div>

  {/* Bottom line: leave exactly as-is */}
  <div className="flex flex-wrap justify-center gap-2">
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
      <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
      Starting at ${STARTING_RATE}/hr
    </span>

    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-600">
      Pay after completion
    </span>
  </div>
</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-14 items-stretch">
          <div className="w-full lg:w-[440px] xl:w-[520px] 2xl:w-[600px]">
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/60 shadow-sm h-full min-h-[280px] sm:min-h-[360px] 2xl:min-h-[420px]">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] 2xl:min-h-[420px]">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={active}
                    src={WORKER_IMAGES[active]}
                    alt="CLP worker"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="h-full rounded-3xl bg-white border border-slate-200/60 shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7 lg:p-9 flex flex-col justify-between min-h-[280px] sm:min-h-[360px] 2xl:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-amber-400 text-base">★★★★★</span>
                    <span className="text-xs text-slate-400">{REVIEWS[active].author} on Google</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[clamp(1.02rem,1.1vw,1.35rem)]">
                    {REVIEWS[active].title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600 text-[clamp(0.98rem,1.1vw,1.25rem)]">
                    {REVIEWS[active].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 sm:mt-8 flex gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === active ? "w-8 bg-slate-900" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Show review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Why us (clean, site-consistent) -------------------- */
function WhyUs() {
  return (
    // Half top + half bottom so it splits spacing evenly with the sections above/below
    <section className={`bg-white ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionHalfPB}`}>
      <Container>
        {/* centered header */}
        <header className={`text-center max-w-3xl lg:max-w-5xl mx-auto ${RHYTHM.headerMB}`}>
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1.9rem,3vw,3.4rem)]">
            Why <span className="text-rose-600">Us</span>
          </h2>
          <p className="mt-4 text-slate-700 text-[clamp(1rem,1.2vw,1.25rem)]">
            We use AI to match vetted workers fast and keep you updated from booking to completion.
          </p>
        </header>

        {/* main block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-14 items-stretch">
          {/* left: big visual (NO on-load animation) */}
          <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
            {/* prevents “white bar” on desktop when the column stretches */}
            <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src={calendarAIImg}
                alt="Calendar AI scheduling dashboard"
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />

              {/* crisp edge (very subtle) */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />

              {/* chips */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                    90,000+ workers
                  </span>

                  <span className="rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                    AI dispatching
                  </span>

                  {/* Hide on phone, show on sm+ */}
                  <span className="hidden sm:inline-flex rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                    Fast fills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* right: editorial copy (NO on-load animation) */}
          <div className="lg:col-span-5">
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="pt-1">
                  <h3 className="mt-3 font-bold text-slate-900 leading-tight text-[clamp(1.25rem,1.6vw,2.05rem)]">
                    A smarter labor platform
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="border-l-2 border-slate-200 pl-4">
                    <p className="font-semibold text-slate-900">Faster fills, better matches</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      AI matches workers by location, job type, and timing so you get the right crew.
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-200 pl-4">
                    <p className="font-semibold text-slate-900">No-show backup</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Automatic reminders reduce no-shows. If someone drops, we can send a replacement fast.
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-200 pl-4">
                    <p className="font-semibold text-slate-900">Everything stays organized</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Booking, schedules, and invoices live in one place so repeat jobs are easy.
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-200 pl-4">
                    <p className="font-semibold text-slate-900">Support anytime</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      24/7 help plus clear updates from booking to arrival to completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA row (kept empty like your current code) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Final CTA (solid like stats) -------------------- */
function FinalCTA() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.16),rgba(15,23,42,0)_70%)]"
      />
      {/* Half top padding to avoid doubling with the section above; keep full bottom padding */}
      <Container className={`relative ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionPB}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-14 2xl:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-bold tracking-tight text-white leading-[1.05] text-[clamp(2rem,3.2vw,3.6rem)]">
              Ready to get help?
            </h2>
            <p className="mt-5 text-slate-200/90 leading-relaxed text-[clamp(1rem,1.2vw,1.25rem)]">
              Tell us the job and when you want it. We’ll handle the rest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <PrimaryButton href={BOOKING_URL} variant="light" className="w-full sm:w-auto">
              Book workers
            </PrimaryButton>

            <SecondaryButton href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
              Call {PHONE_DISPLAY}
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Footer -------------------- */
function SiteFooter() {
  return (
    <footer className={`bg-slate-50 border-t border-slate-200 ${RHYTHM.footer}`}>
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Great American Labor ·{" "}
          <a className="hover:text-slate-900 transition" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
        </p>

        <div className="flex gap-5 text-xs text-slate-500 justify-center md:justify-end">
          <Link className="hover:text-slate-900 transition" href="/terms-of-service">
            Terms
          </Link>
          <Link className="hover:text-slate-900 transition" href="/privacy">
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
