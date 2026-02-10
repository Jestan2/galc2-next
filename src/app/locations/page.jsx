//locations

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SERVICES, METROS } from "../lib/seo/siteData";
import {
  FiMapPin,
  FiSearch,
  FiCheckCircle,
  FiArrowRight,
  FiTruck,
  FiPackage,
  FiTrash2,
  FiTool,
  FiZap,
  FiLayers,
} from "react-icons/fi";

const usamapImg = "/assets/usamap.webp";

const BOOKING_URL = "https://book.greatamericanlabor.com/";
const PHONE_DISPLAY = "(888) 280-1822";
const PHONE_TEL = "+18882801822";

/* -------------------- Vertical rhythm (Apple x Uber) -------------------- */
const RHYTHM = {
  hero: "pt-10 sm:pt-12 lg:pt-14 2xl:pt-16 pb-12 sm:pb-14 lg:pb-16 2xl:pb-18",
  section: "py-16 sm:py-20 lg:py-24 2xl:py-28",
  sectionTight: "py-14 sm:py-16 lg:py-20 2xl:py-24",
  headerMB: "mb-10 sm:mb-12 lg:mb-14",
  sectionHalfPT: "pt-10 sm:pt-12 lg:pt-14 2xl:pt-16",
  sectionHalfPB: "pb-10 sm:pb-12 lg:pb-14 2xl:pb-16",
  sectionPB: "pb-16 sm:pb-20 lg:pb-24 2xl:pb-28",
};

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
  const common =
    "inline-flex items-center justify-center rounded-full font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2";

  const styles =
    variant === "light"
      ? "bg-gradient-to-b from-white to-slate-100 text-slate-950 " +
        "shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/25 " +
        "hover:to-white hover:shadow-[0_22px_60px_rgba(0,0,0,0.42)] active:scale-[0.99] " +
        "px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base " +
        "focus-visible:ring-offset-slate-950"
      : "bg-slate-900 text-white shadow-sm hover:bg-slate-800 " +
        "px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base " +
        "focus-visible:ring-offset-white";

  return (
    <a href={href} className={`${common} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}

function SecondaryLink({ href, children, className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full border border-slate-200 bg-white " +
    "px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 " +
    "hover:bg-slate-50 hover:border-slate-300 transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2";
  return (
    <Link href={href} className={`${base} ${className}`} {...props}>
      {children}
    </Link>
  );
}

function MiniPill({ children }) {
  return (
    <span className="rounded-full bg-white border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-600">
      {children}
    </span>
  );
}

/* -------------------- Service icon helper -------------------- */
function iconForServiceSlug(slug) {
  const s = (slug || "").toLowerCase();
  if (s.includes("moving")) return FiTruck;
  if (s.includes("warehouse") || s.includes("unload") || s.includes("loading")) return FiPackage;
  if (s.includes("junk") || s.includes("cleanout") || s.includes("trash")) return FiTrash2;
  if (s.includes("event")) return FiZap;
  if (s.includes("cleanup") || s.includes("site") || s.includes("construction")) return FiTool;
  return FiLayers;
}

/* -------------------- Page -------------------- */
export default function LocationsPage() {
  const router = useRouter();

  // Build metro list + derived states + featured picks
  const { metroList, states, featuredMetros } = React.useMemo(() => {
    const items = Object.entries(METROS || {}).map(([slug, m]) => {
      const city = (m?.city || "").trim();
      const region = (m?.region || "").trim();
      const label = city && region ? `${city}, ${region}` : city || slug;
      const sortKey = `${city} ${region} ${slug}`.toLowerCase();
      return { slug, city, region, label, sortKey };
    });

    items.sort((a, b) => a.sortKey.localeCompare(b.sortKey));

    const stateSet = new Set(items.map((m) => (m.region || "").toUpperCase()).filter(Boolean));
    const stateArr = Array.from(stateSet).sort((a, b) => a.localeCompare(b));

    const PICKS = [
      "new-york-ny",
      "los-angeles-ca",
      "chicago-il",
      "houston-tx",
      "phoenix-az",
      "philadelphia-pa",
      "san-diego-ca",
      "dallas-tx",
      "san-francisco-ca",
      "seattle-wa",
      "denver-co",
      "miami-fl",
    ];
    const pickSet = new Set(PICKS);
    const picked = items.filter((m) => pickSet.has(m.slug));
    const featured = picked.length ? picked : items.slice(0, 12);

    return { metroList: items, states: stateArr, featuredMetros: featured };
  }, []);

  // Services list for selector
  const serviceList = React.useMemo(() => {
    const entries = Object.entries(SERVICES || {}).map(([slug, svc]) => ({
      slug,
      name: svc?.name || slug,
    }));
    return entries;
  }, []);

  // Choose a good default service slug
  const defaultServiceSlug = React.useMemo(() => {
    const keys = Object.keys(SERVICES || {});
    if (!keys.length) return "";
    const find = (...needles) => keys.find((k) => needles.some((n) => k.toLowerCase().includes(n)));
    return find("moving") || keys[0] || "";
  }, []);

  // Service selection synced to URL (?service=...)
  const [serviceSlug, setServiceSlug] = React.useState(defaultServiceSlug);

  React.useEffect(() => {
    const read = () => {
      const sp = new URLSearchParams(window.location.search || "");
      const fromUrl = (sp.get("service") || "").trim();

      if (fromUrl && SERVICES?.[fromUrl]) setServiceSlug(fromUrl);
      else setServiceSlug(defaultServiceSlug);
    };

    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [defaultServiceSlug]);

  const setServiceFromUI = React.useCallback(
    (nextSlug) => {
      if (!nextSlug || !SERVICES?.[nextSlug]) return;

      setServiceSlug(nextSlug);

      const sp = new URLSearchParams(window.location.search || "");
      sp.set("service", nextSlug);
      const qs = sp.toString();

      router.replace(qs ? `?${qs}` : "/locations", { scroll: false });
    },
    [router]
  );

  const selectedServiceName = React.useMemo(() => {
    if (!serviceSlug) return "";
    return SERVICES?.[serviceSlug]?.name || serviceSlug;
  }, [serviceSlug]);

  const [q, setQ] = React.useState("");
  const [stateFilter, setStateFilter] = React.useState("ALL");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    const state = (stateFilter || "ALL").toUpperCase();

    return metroList.filter((m) => {
      const stateOk = state === "ALL" ? true : (m.region || "").toUpperCase() === state;
      if (!stateOk) return false;

      if (!query) return true;
      return (
        m.city.toLowerCase().includes(query) ||
        m.region.toLowerCase().includes(query) ||
        m.slug.toLowerCase().includes(query)
      );
    });
  }, [q, stateFilter, metroList]);

  const linkForMetro = React.useCallback(
    (metroSlug) => {
      if (serviceSlug) return `/services/${serviceSlug}/${metroSlug}`;
      if (defaultServiceSlug) return `/services/${defaultServiceSlug}/${metroSlug}`;
      return "/services";
    },
    [serviceSlug, defaultServiceSlug]
  );

  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-rose-100 selection:text-slate-900">
      <HeroMap />

      <CoverageStrip />

      <LocationFinder
        serviceList={serviceList}
        serviceSlug={serviceSlug}
        selectedServiceName={selectedServiceName}
        setServiceFromUI={setServiceFromUI}
        q={q}
        setQ={setQ}
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        states={states}
        featuredMetros={featuredMetros}
        filtered={filtered}
        linkForMetro={linkForMetro}
      />

      <FinalCTA />
    </div>
  );
}

/* -------------------- Hero (map-first, tighter fit) -------------------- */
function HeroMap() {
  return (
    <section className="bg-white">
      <Container className={RHYTHM.hero}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
              <FiMapPin className="text-rose-600" />
              Nationwide coverage · Local crews
            </div>

            <h1
              className="mt-5 font-bold tracking-tight leading-[1.03] text-[clamp(2.1rem,3.7vw,4.6rem)] max-w-[16ch]"
              style={{ color: "#09152f" }}
            >
              Find your city. Staff the job.
            </h1>

            <p
              className="mt-4 font-semibold tracking-tight text-[clamp(1.02rem,1.4vw,1.45rem)]"
              style={{ color: "#e11d48" }}
            >
              Great American Labor Co — crews across the U.S.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-slate-700 text-[clamp(1rem,1.1vw,1.2rem)]">
              We dispatch reliable labor for real work — moving help, warehouse support, event crews, cleanouts, and
              site cleanup. Same clean experience city to city, with clear updates from booking to arrival.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <PrimaryButton href={BOOKING_URL} className="w-full sm:w-auto">
                Book<span className="ml-2">→</span>
              </PrimaryButton>

              <SecondaryLink href="/services" className="w-full sm:w-auto">
                Services
              </SecondaryLink>

              <a
                href={`tel:${PHONE_TEL}`}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 hover:bg-slate-50 transition
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <MiniPill>Fast assignment</MiniPill>
              <MiniPill>Vetted workers</MiniPill>
              <MiniPill>Clear arrival windows</MiniPill>
              <MiniPill>Text updates</MiniPill>
            </div>
          </div>

          {/* Map visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200/60 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <img
                  src={usamapImg}
                  alt="United States coverage map"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                      Nationwide staffing
                    </span>
                    <span className="rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                      Local crews by city
                    </span>
                    <span className="hidden sm:inline-flex rounded-full bg-white/90 backdrop-blur border border-slate-200/70 px-3.5 py-1.5 text-xs text-slate-700 shadow-sm">
                      Built for repeat ops
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Labor-only service. You provide any trucks, tools, dumpsters, or materials.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Coverage strip -------------------- */
function CoverageStrip() {
  const items = [
    { title: "Nationwide reach", desc: "Coverage across major metros and expanding markets." },
    { title: "Reliable assignments", desc: "Workers matched by job type, timing, and reliability history." },
    { title: "Clear communication", desc: "Names, arrival windows, and text updates you can count on." },
  ];

  return (
    <section className={`bg-slate-50 ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionHalfPB}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-slate-200/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7"
            >
              <div className="h-11 w-11 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center">
                <FiCheckCircle className="text-rose-600" size={18} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-[clamp(1.05rem,1.1vw,1.35rem)]">{it.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Service Selector (full-width, usable) -------------------- */
function ServiceSelector({ serviceList, value, onChange }) {
  if (!serviceList?.length) return null;

  return (
    <div className="rounded-3xl border border-slate-200/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Service</p>
          <h3 className="mt-1 font-bold text-slate-900 text-[clamp(1.1rem,1.35vw,1.6rem)]">
            Choose what you need help with
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            City links will open the selected service page.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 w-fit">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          Selected: <span className="font-semibold text-slate-900">{SERVICES?.[value]?.name || value}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {serviceList.map((svc) => {
          const active = svc.slug === value;
          const Icon = iconForServiceSlug(svc.slug);

          return (
            <button
              key={svc.slug}
              type="button"
              onClick={() => onChange(svc.slug)}
              aria-pressed={active}
              className={[
                "group w-full rounded-2xl border px-4 py-3 transition text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
                active
                  ? "border-slate-900 bg-slate-900 text-white shadow-[0_16px_45px_rgba(15,23,42,0.18)]"
                  : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-300",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={[
                    "h-10 w-10 rounded-2xl flex items-center justify-center border transition shrink-0",
                    active ? "bg-white/10 border-white/15" : "bg-white border-slate-200/70",
                  ].join(" ")}
                >
                  <Icon className={active ? "text-white" : "text-rose-600"} size={18} />
                </div>

                <div className="min-w-0">
                  <div className="font-semibold leading-tight truncate">{svc.name}</div>
                  <div className={active ? "text-xs text-white/70" : "text-xs text-slate-500"}>
                    Open city pages for this service
                  </div>
                </div>

                <div className="ml-auto">
                  <div
                    className={[
                      "h-6 w-6 rounded-full border flex items-center justify-center transition",
                      active ? "border-white/20 bg-white/10" : "border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-2 w-2 rounded-full transition",
                        active ? "bg-rose-400" : "bg-slate-200 group-hover:bg-slate-300",
                      ].join(" ")}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------- Location Finder -------------------- */
function LocationFinder({
  serviceList,
  serviceSlug,
  selectedServiceName,
  setServiceFromUI,
  q,
  setQ,
  stateFilter,
  setStateFilter,
  states,
  featuredMetros,
  filtered,
  linkForMetro,
}) {
  return (
    <section className={`bg-white ${RHYTHM.section}`}>
      <Container>
        <header className={`max-w-3xl ${RHYTHM.headerMB}`}>
          <h2 className="font-bold tracking-tight text-slate-900 text-[clamp(1.8rem,2.8vw,3.2rem)]">
            Find your location
          </h2>
          <p className="mt-4 text-slate-700 text-[clamp(1rem,1.15vw,1.22rem)]">
            Choose a service, then pick a city to open the local page.
          </p>
        </header>

        {/* Full-width selector (fixes the squished issue) */}
        <ServiceSelector serviceList={serviceList} value={serviceSlug} onChange={setServiceFromUI} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left rail: search + filters */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7">
              <div>
                <h3 className="font-bold text-slate-900 text-[clamp(1.05rem,1.2vw,1.4rem)]">Search locations</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Selected service: <span className="font-semibold text-slate-900">{selectedServiceName}</span>
                </p>
              </div>

              <p className="mt-5 text-xs font-semibold text-slate-500 uppercase tracking-wide">Search</p>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <FiSearch className="text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Try: New York, Dallas, TX, CA…"
                  className="w-full bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Showing <span className="font-semibold text-slate-700">{filtered.length}</span> locations
                </p>

                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">State</label>
                  <select
                    value={stateFilter}
                    onChange={(e) => setStateFilter(e.target.value)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 outline-none
                               focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                  >
                    <option value="ALL">All</option>
                    {states.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">
                  Don’t see your city? Book anyway — we’ll confirm availability and follow up with details.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <SecondaryLink href="/services" className="w-full justify-between">
                  View all services <FiArrowRight />
                </SecondaryLink>
              </div>
            </div>

            {/* Popular quick links */}
            <div className="mt-6 rounded-3xl border border-slate-200/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7">
              <h3 className="font-bold text-slate-900 text-[clamp(1.05rem,1.1vw,1.35rem)]">Popular locations</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Quick entry points for <span className="font-semibold">{selectedServiceName}</span>.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredMetros.map((m) => (
                  <Link
                    key={m.slug}
                    href={linkForMetro(m.slug)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition"
                  >
                    {m.city}, {m.region}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: results */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-xl">
                  <h3 className="font-bold text-slate-900 text-[clamp(1.1rem,1.3vw,1.6rem)]">
                    Browse cities for {selectedServiceName}
                  </h3>
                  <p className="mt-2 text-slate-600">Click a city to open the local service page.</p>
                </div>

                <div className="hidden sm:block">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    <FiMapPin className="text-rose-600" />
                    Direct city links
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {(filtered.length ? filtered : []).slice(0, 240).map((m) => (
                  <Link
                    key={m.slug}
                    href={linkForMetro(m.slug)}
                    className="group rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-slate-900">{m.city}</span>
                      <span className="text-xs text-slate-400">{m.region}</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-500 group-hover:text-slate-600 transition">{m.slug}</div>
                  </Link>
                ))}
              </div>

              {filtered.length > 240 ? (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  Showing the first <span className="font-semibold">240</span> matches. Narrow your search to find a
                  specific city faster.
                </div>
              ) : null}

              {!filtered.length ? (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">No matches.</p>
                  <p className="mt-1 text-sm text-slate-700">Try “Austin TX”, search a state code, or clear filters.</p>
                </div>
              ) : null}

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-xs text-slate-500">Tip: Search “city + state” (e.g. “Austin TX”).</div>
                <div className="flex gap-2">
                  <SecondaryLink href="/services" className="w-full sm:w-auto">
                    Explore services
                  </SecondaryLink>
                  <PrimaryButton href={BOOKING_URL} className="w-full sm:w-auto">
                    Book now →
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Final CTA -------------------- */
function FinalCTA() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(72,160,255,0.16),rgba(15,23,42,0)_70%)]"
      />
      <Container className={`relative ${RHYTHM.sectionHalfPT} ${RHYTHM.sectionPB}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-14 2xl:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-bold tracking-tight text-white leading-[1.05] text-[clamp(2rem,3.2vw,3.6rem)]">
              Ready to staff a job in your city?
            </h2>
            <p className="mt-5 text-slate-200/90 leading-relaxed text-[clamp(1rem,1.2vw,1.25rem)]">
              Tell us the work, the address, and when you need it. We’ll assign a crew and keep you updated.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <PrimaryButton href={BOOKING_URL} variant="light" className="w-full sm:w-auto">
              Book workers
            </PrimaryButton>

            <a
              href={`tel:${PHONE_TEL}`}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-white/10 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
