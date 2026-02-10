// src/app/components/SiteFooter.jsx
import Link from "next/link";
import { SERVICES } from "../lib/seo/siteData";
import { SITE_URL } from "../lib/seo/siteConfig";
import { FiArrowUpRight, FiMapPin, FiPhone, FiShield } from "react-icons/fi";

const BOOKING_URL = "https://book.greatamericanlabor.com/";
const PHONE_DISPLAY = "(888) 280-1822";
const PHONE_TEL = "+18882801822";

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

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-600 hover:text-slate-900 transition
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 rounded"
    >
      {children}
    </Link>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 rounded"
    >
      {children} <FiArrowUpRight className="opacity-70" />
    </a>
  );
}

function Pill({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
      <Icon className="text-rose-600" size={14} />
      {label}
    </div>
  );
}

export default function SiteFooter() {
  const base = (SITE_URL || "").replace(/\/$/, "");
  const year = new Date().getFullYear();

  // Compact footer “sitemap” (keep it curated)
  const serviceLinks = Object.entries(SERVICES || {})
    .map(([slug, svc]) => ({ slug, name: svc?.name || slug }))
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 12);

  return (
    <footer className="relative bg-white text-slate-900 border-t border-slate-200">
      {/* soft top fade so it blends nicely after dark sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-50 to-transparent" />

      <Container className="relative pt-14 sm:pt-16 lg:pt-18 pb-10 sm:pb-12">
        {/* Top band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Brand / CTA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <FiMapPin className="text-rose-600" />
              Nationwide labor-only crews
            </div>

            <h3 className="mt-5 font-bold tracking-tight leading-[1.05] text-[clamp(1.6rem,2.2vw,2.3rem)]">
              Great American Labor Co
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">
              Reliable crews for moving help, warehouse support, event staffing, cleanouts, and site cleanup — with
              clear updates from booking to arrival.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-7 py-3 text-sm font-semibold hover:bg-slate-800 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
              >
                Book now
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
              >
                <FiPhone className="mr-2 text-slate-700" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill icon={FiShield} label="Vetted workers" />
              <Pill icon={FiMapPin} label="City coverage" />
              <Pill icon={FiPhone} label="Live support" />
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick nav */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick nav</p>
              <div className="mt-3 flex flex-col gap-2.5">
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/locations">Locations</FooterLink>
                <ExternalLink href={BOOKING_URL}>Booking</ExternalLink>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Company</p>
              <div className="mt-3 flex flex-col gap-2.5">
                <FooterLink href="/terms-of-service">Terms</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
              </div>
            </div>

            {/* Services (compact “footer sitemap”) */}
            <div className="col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Services</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {serviceLinks.map((s) => (
                  <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                    {s.name}
                  </FooterLink>
                ))}
              </div>

              <div className="mt-3">
                <FooterLink href="/services">
                  View all services <span className="opacity-70">→</span>
                </FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-slate-500">© {year} Great American Labor Co. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <a
                href={`${base}/sitemap.xml`}
                className="hover:text-slate-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 rounded"
              >
                Sitemap
              </a>
              <a
                href={`${base}/robots.txt`}
                className="hover:text-slate-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 rounded"
              >
                Robots
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}