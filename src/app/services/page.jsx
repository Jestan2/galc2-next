// src/app/services/page.jsx

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "../lib/seo/siteData";
import {
  SITE_URL,
  BRAND_NAME,
  OG_IMAGE,
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../lib/seo/siteConfig";

export const metadata = {
  title: `Services | ${BRAND_NAME}`,
  description:
    "Browse labor-only services nationwide: moving help, loading/unloading, cleanouts, warehouse support, event setup/teardown, and construction cleanup. Book online with live updates and pay after the job.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Services | ${BRAND_NAME}`,
    description:
      "Browse labor-only services nationwide: moving help, loading/unloading, cleanouts, warehouse support, event setup/teardown, and construction cleanup. Book online with live updates and pay after the job.",
    url: `${SITE_URL}/services`,
    siteName: BRAND_NAME,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

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

function TinyLabel({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-bold text-[clamp(1.6rem,2.4vw,2.2rem)]">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-slate-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

const FAQ = [
  {
    q: "Do you provide a truck?",
    a: "We’re labor-only. You provide the truck/trailer/PODS/dumpster/tools, and we provide vetted workers to do the lifting, loading, unloading, staging, and placement.",
  },
  {
    q: "Can I book same-day or last-minute help?",
    a: "Yes — same-day and short-notice availability varies by city and time, but our system is built to match crews quickly when you’re on a deadline.",
  },
  {
    q: "How does pricing work?",
    a: "You’ll see transparent pricing in the portal before confirming. Most jobs are hourly labor with clear expectations and job details.",
  },
  {
    q: "When do I pay?",
    a: "Payment is collected after the job is marked complete at the scheduled end time. You stay in control the whole way.",
  },
  {
    q: "Do you handle commercial jobs too?",
    a: "Yes — businesses book us for warehouse labor, event crews, and cleanup work when they need reliable hands without the staffing-agency friction.",
  },
];

export default function ServicesIndexPage() {
  // Optional “featured” slice so the page feels curated even if the grid is long
  const featured = Object.entries(SERVICES).slice(0, 6);

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        {/* Background image + premium overlays */}
        <div className="absolute inset-0">
          <Image
            src="/assets/head2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center saturate-[0.85] brightness-[1.06]"
          />

          {/* Left readable fade (keeps text premium + consistent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/35" />

          {/* Top/bottom softness */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/70" />
        </div>

        <Container className="relative pt-16 sm:pt-20 lg:pt-24 pb-14">
          {/* Clean hero content (no boxes) */}
          <div className="max-w-4xl">
            <h1 className="font-bold tracking-tight leading-[1.03] text-[clamp(2.25rem,4vw,4.75rem)]">
              Extra hands, exactly when you need them.
            </h1>

            <p className="mt-5 text-slate-700 text-[clamp(1rem,1.15vw,1.25rem)] leading-relaxed max-w-3xl">
              {BRAND_NAME} dispatches reliable labor-only workers across the U.S.
              People book us for <strong>moving help</strong>,{" "}
              <strong>loading and unloading</strong>,
              <strong> cleanouts</strong>, <strong>warehouse support</strong>,{" "}
              <strong>event setup & teardown</strong>, and{" "}
              <strong>construction cleanup</strong>. If you already have a U-Haul,
              PODS container, trailer, or storage unit and just need muscle —
              this is the easiest way to do it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PrimaryButton href={BOOKING_URL}>Get a quote</PrimaryButton>
              <SecondaryButton href={`tel:${PHONE_TEL}`}>
                Call {PHONE_DISPLAY}
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED SERVICES (curated feel + great UX) */}
      <section className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <SectionTitle title="Popular services" />

            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-50 transition"
              >
                Home
              </Link>
              <a
                href={BOOKING_URL}
                className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800 transition"
              >
                Book now
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(([slug, s]) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className={[
                  "group rounded-3xl border border-slate-200 bg-white p-6 transition",
                  "hover:bg-slate-50 hover:border-slate-300",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-lg leading-tight">{s.name}</p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {s.heroSubtitle}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                    Labor-only
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">
                    View details →
                  </span>
                  <span className="text-xs text-slate-500 group-hover:text-slate-700 transition">
                    Fast booking • clear updates
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* LABOR-ONLY EXPLAINED */}
      <section className="py-14 bg-white border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-10 items-start">
            <div className="max-w-3xl">
              <h2 className="font-bold text-[clamp(1.55rem,2.3vw,2.15rem)]">
                Labor-only explained (in 15 seconds)
              </h2>

              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Labor-only</strong> means you’re hiring the crew — not a
                  full-service truck company. You provide the
                  truck/trailer/PODS/dumpster/tools, and we provide vetted workers
                  to do the lifting.
                </p>

                <p>
                  It’s the cleanest option when you already have the vehicle and
                  just need strong hands: load the truck, unload into your home,
                  carry items up stairs, stage furniture, or move heavy pieces
                  safely.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    t: "You bring the truck or container",
                    d: "U-Haul, trailer, PODS, storage unit, or dumpster",
                  },
                  {
                    t: "We bring the crew",
                    d: "Reliable workers who move, carry, load, and place items",
                  },
                  {
                    t: "You direct priorities",
                    d: "Tell the onsite lead what matters most and what goes where",
                  },
                  {
                    t: "We keep it predictable",
                    d: "Updates, support, and accountability from start to finish",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold">{x.t}</p>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card + PODS image */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden">
              {/* image banner */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="/assets/pod.webp"
                  alt="Packed moving truck ready for unloading"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <p className="font-semibold text-slate-900">
                  Common booking scenarios
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Loading / unloading a moving truck</li>
                  <li>• Unloading a PODS / storage container</li>
                  <li>• Heavy items (appliances, oversized furniture)</li>
                  <li>• Apartment, garage, and office cleanouts</li>
                  <li>• Warehouse unloading or event setup crews</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionTitle
            title="Quick questions"
            subtitle="The most common things people ask before they book."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold text-slate-900">
                  Browse services or book now
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Choose a service to see full details and the cities we cover —
                  then lock in a time that works.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <PrimaryButton href={BOOKING_URL} className="w-full sm:w-auto">
                  Get a quote
                </PrimaryButton>
                <SecondaryButton
                  href={`tel:${PHONE_TEL}`}
                  className="w-full sm:w-auto"
                >
                  Call {PHONE_DISPLAY}
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
