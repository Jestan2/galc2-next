"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const PHONE_DISPLAY = "(888) 285-9302";
const PHONE_TEL = "+18882859302";
const services = [
  {
    title: "Unit Turnovers",
    desc: "Cleaning, minor repairs, make-ready support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 20V10.5L12 4l8 6.5V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20v-6h6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Clean-Ups",
    desc: "Regular cleaning, deep cleans, post-tenant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Yard Work",
    desc: "Mowing, landscaping, exterior cleanup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M20.893 13.393 19.758 12.258a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18a.94.94 0 0 0-.662.274.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Heavy Lifting",
    desc: "Moving furniture, appliances, tenant moves",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.5v6.75m0 0-3-3m3 3 3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Junk Removal",
    desc: "Cleanouts, debris hauling, unit clearing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m14.74 9-.346 9m-4.788 0L9.26 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.228 5.79 18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 5.25v-.916c0-1.18.91-2.164 2.09-2.201a51.964 51.964 0 0 1 3.32 0c1.18.037 2.09 1.022 2.09 2.201v.916"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.5 5.25h15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Property address, scope, number of workers, time window. Call, text, or book online.",
  },
  {
    num: "02",
    title: "We dispatch 5-star workers",
    desc: "Same-day when available, next-day standard. Workers earn access to PM jobs through proven performance — and every job includes backup workers assigned automatically.",
  },
  {
    num: "03",
    title: "Work gets done. One invoice.",
    desc: "Card on file. We handle worker pay and all compliance. You get one clean invoice.",
  },
];

const proofItems = [
  { num: "120K+", label: "Jobs staffed" },
  { num: "90K", label: "5-star workers" },
  { num: "96%", label: "Fill rate" },
  { num: "4.8 ★", label: "Google rating" },
  { num: "50", label: "States" },
];

export default function PropertyManagersClient() {
  const states = useMemo(
    () => [
      "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
    ],
    []
  );

  const [submitted, setSubmitted] = useState(false);

  // Per-field error flags (only show the red message for fields that are actually invalid)
  const [errors, setErrors] = useState({
    fullName: false,
    company: false,
    email: false,
    phone: false,
    zip: false,
    units: false,
  });

  function focusFullName() {
    document.getElementById("fullName")?.focus();
  }

  function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length >= 7) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length >= 4) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    if (digits.length > 0) return `(${digits}`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const company = document.getElementById("company");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const zip = document.getElementById("zip");
    const units = document.getElementById("units");

    const data = {
      fullName: fullName?.value || "",
      company: company?.value || "",
      email: email?.value || "",
      phone: phone?.value || "",
      zip: zip?.value || "",
      units: units?.value || "",
    };

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
    const validPhone = data.phone.replace(/\D/g, "").length >= 10;
    const validZip = /^\d{5}$/.test((data.zip || "").trim());

    const nextErrors = {
      fullName: data.fullName.trim().length < 2,
      company: data.company.trim().length < 2,
      email: !validEmail,
      phone: !validPhone,
      zip: !validZip,
      units: data.units === "",
    };

    const valid = !Object.values(nextErrors).some(Boolean);

    if (!valid) {
      setErrors(nextErrors);
      return;
    }

    // clear visible errors if everything is valid
    setErrors({
      fullName: false,
      company: false,
      email: false,
      phone: false,
      zip: false,
      units: false,
    });

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:8000"}/v1/leads/property-managers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!resp.ok) {
      // keep original behavior: do not change UI beyond field validation
      return;
    }

    // ✅ Track conversion on SUCCESS
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    setSubmitted(true);
  } catch (err) {
    // no console logs/errors
    return;
  }
  }

  return (
    <div id="top" className="min-h-screen bg-white text-neutral-800">
      {/* Ensures this exact string exists in the document text content */}
      <div className="sr-only">Great American Labor — Labor Support for Property Managers</div>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-start">
          {/* LEFT */}
          <div className="pt-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Property Management Solutions
            </div>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
              Dispatching same-day labor now
            </div>

            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Never scramble for labor again.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-neutral-600">
              Turnovers, cleanouts, yard work, heavy lifting — we know the work that keeps your properties running. One call gets 5-star workers on site, same day, any zip code. We handle pay, compliance, and backups so you don't have to.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1 text-amber-500">{"★★★★★"}</div>
              <div className="text-sm font-semibold text-neutral-800">
                4.8 stars · 740+ Google reviews
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm font-medium text-neutral-800">
                  <CheckIcon />
                  <span>
                    <strong className="text-neutral-900">Same-day dispatch</strong> — nationwide, any zip code
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-neutral-800">
                  <CheckIcon />
                  <span>
                    <strong className="text-neutral-900">5-star workers with backups</strong> on every job
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-neutral-800">
                  <CheckIcon />
                  <span>
                    <strong className="text-neutral-900">One call, one invoice</strong> — we handle pay &amp; compliance
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-neutral-800">
                  <CheckIcon />
                  <span>
                    <strong className="text-neutral-900">No contracts</strong> — use us when you need us
                  </span>
                </li>
              </ul>

              <div className="mt-6 border-t border-neutral-200 pt-5 text-xs font-bold tracking-wide text-neutral-500">
                Trusted by property managers across 50 states
              </div>
            </div>
          </div>

          {/* RIGHT — FORM CARD */}
          <div
            id="request"
            className="scroll-mt-28 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute -top-6 left-4 right-4 h-1 rounded-b bg-blue-600" />
            </div>

            {!submitted ? (
              <>
                <div className="mb-4 flex items-start gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>Limited availability — claim your free job</span>
                </div>

                <h2 className="text-xl font-extrabold leading-snug text-neutral-900">
                  Get your first 2-hour job free
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  We're opening a limited number of free jobs for qualifying property managers. Tell us about your portfolio and we'll let you know within 5 minutes.
                </p>

                <form className="mt-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="fullName"
                      placeholder="Jane Smith"
                      errorText="Please enter your full name"
                      showError={errors.fullName}
                    />
                    <Field
                      label="Company name"
                      name="company"
                      placeholder="Acme Property Group"
                      errorText="Please enter your company name"
                      showError={errors.company}
                    />
                    <Field
                      label="Email"
                      name="email"
                      placeholder="jane@company.com"
                      errorText="Please enter a valid email"
                      showError={errors.email}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      errorText="Please enter a valid phone number"
                      showError={errors.phone}
                      onValueChange={(v) => formatPhone(v)}
                    />
                    <Field
                      label="ZIP code"
                      name="zip"
                      placeholder="92101"
                      errorText="Please enter a valid ZIP code"
                      showError={errors.zip}
                      inputMode="numeric"
                      onValueChange={(v) => v.replace(/\D/g, "").slice(0, 5)}
                    />

                    <div className="sm:col-span-2">
                      <label htmlFor="units" className="block text-xs font-bold text-neutral-800">
                        How many doors do you manage?
                      </label>
                      <div className="relative mt-1">
                        <select
                          id="units"
                          name="units"
                          className="w-full appearance-none rounded-lg border border-neutral-200 bg-white px-3 py-2.5 pr-10 text-sm text-neutral-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                          defaultValue=""
                          onChange={() => {}}
                        >
                          <option value="" disabled>
                            Select range
                          </option>
                          <option value="1-10">1–10 units</option>
                          <option value="11-50">11–50 units</option>
                          <option value="51-200">51–200 units</option>
                          <option value="201-500">201–500 units</option>
                          <option value="500+">500+ units</option>
                        </select>
                        <ChevronIcon />
                      </div>
                      <div className={errors.units ? "mt-1 text-[11px] font-medium text-red-600" : "mt-1 hidden text-[11px] font-medium text-red-600"}>
                        Please select a range
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="mt-1 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                      >
                        Check My Eligibility →
                      </button>

                      <p className="mt-3 text-center text-xs leading-relaxed text-neutral-500">
                        No commitment. We'll reach out within 5 minutes.
                      </p>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-green-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#16A34A">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                <h3 className="mb-2 text-xl font-extrabold text-neutral-900">We got your info!</h3>
                <p className="mb-5 text-sm leading-relaxed text-neutral-600">
                  Our team will review your eligibility and reach out within <strong className="text-neutral-900">5 minutes</strong>.
                </p>

                <div className="rounded-xl bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600">
                  <strong className="text-neutral-900">Need labor right now?</strong>
                  <br />
                  Call us directly at{" "}
                  <a href={`tel:${PHONE_TEL}`} className="font-bold text-blue-600">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section className="mt-14 border-y border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            What we support
          </div>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
            Labor for the work that keeps your properties running
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-neutral-200 bg-white p-5 text-center transition hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-[0_8px_26px_rgba(0,0,0,0.06)]"
              >
                <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  {s.icon}
                </div>
                <h3 className="text-sm font-extrabold text-neutral-900">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-neutral-900 py-10 text-white">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 px-4 text-center sm:px-6">
          {proofItems.map((p) => (
            <ProofItem key={p.label} num={p.num} label={p.label} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
          How it works
        </div>
        <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
          Three steps. No learning curve.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((st) => (
            <div key={st.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-blue-600 font-mono text-xs font-bold text-white">
                {st.num}
              </div>
              <h3 className="text-sm font-extrabold text-neutral-900">{st.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Ready to take labor off your plate?
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-pretty text-base text-neutral-600">
          Check if you qualify for a free 2-hour job — or call us to get started today.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={focusFullName}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            <ArrowRightIcon className="h-4 w-4" />
            Check My Eligibility
          </button>

          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 px-6 py-3 font-mono text-sm font-semibold text-neutral-900 transition hover:border-neutral-900 sm:w-auto"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-4 py-6 text-center text-xs text-neutral-500 sm:px-6">
        Great American Labor Co. · Nationwide · Same-day available
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-3">
          <button
            type="button"
            onClick={focusFullName}
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-extrabold text-white"
          >
            Get Free Job
          </button>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-900 bg-white px-4 py-3 text-sm font-extrabold text-neutral-900"
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>

      <div className="h-24 md:hidden" />
    </div>
  );
}

function Field({ label, name, placeholder, errorText, showError, onValueChange, ...inputProps }){
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold text-neutral-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
        {...inputProps}
        onChange={(e) => {
          if (onValueChange) e.target.value = onValueChange(e.target.value);
        }}
      />
      <div className={showError ? "mt-1 text-[11px] font-medium text-red-600" : "mt-1 hidden text-[11px] font-medium text-red-600"}>
        {errorText}
      </div>
    </div>
  );
}

function ProofItem({ num, label }) {
  return (
    <div className="min-w-[140px]">
      <div className="font-mono text-3xl font-bold leading-none">{num}</div>
      <div className="mt-1 text-xs font-semibold text-white/60">{label}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true">
      <path
        d="m4.5 12.75 6 6 9-13.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}
