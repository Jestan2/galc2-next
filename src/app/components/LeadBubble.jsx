"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHONE_DISPLAY = "(888) 280-1822";
const PHONE_TEL = "+8882801822";
/**
 * Services from your verticals + property management.
 * Matches the list shown in your screenshot + adds Property Management.
 */
const SERVICE_OPTIONS = [
  { value: "logistics_load_unload", label: "Logistics load and unload" },
  { value: "warehouse_support", label: "Warehouse support" },
  { value: "event_setup_teardown", label: "Event setup and teardown" },
  { value: "junk_removal_disposal", label: "Junk removal and disposal labor" },
  { value: "construction_site_cleanup", label: "Construction site cleanup" },
  { value: "property_management", label: "Property management" },
  { value: "something_else", label: "Something else" },
];

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

const EASE_OUT = [0.16, 1, 0.3, 1];

// Backdrop fades in/out
const BACKDROP = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Panel does a subtle rise + scale (modern “sheet” feel)
const PANEL = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 14, scale: 0.99 },
};

function PremiumPillButton({ children, className = "", ...props }) {
  return (
    <button
      className={[
        "group relative inline-flex items-center justify-center rounded-full",
        "px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold",
        "select-none touch-manipulation",
        "bg-[#09152f] text-white",
        "ring-1 ring-slate-900/10",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(9,21,47,0.18)]",
        "hover:bg-[#0b1b3b]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_30px_rgba(9,21,47,0.22)]",
        "active:translate-y-[0.5px]",
        "active:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_18px_rgba(9,21,47,0.16)]",
        "overflow-hidden",
        "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
        "before:bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.20),transparent_58%)]",
        "before:opacity-90 group-hover:before:opacity-100",
        "transition-[transform,box-shadow,background-color] duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

function GhostButton({ children, className = "", ...props }) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-full",
        "border border-slate-200 bg-white",
        "px-5 sm:px-6 py-2.5 text-sm font-semibold text-slate-900",
        "hover:bg-slate-50 hover:border-slate-300",
        "transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ label, id, placeholder, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-neutral-800">
        {label}
      </label>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className={[
          "mt-1 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition",
          error
            ? "border-rose-300 focus:border-rose-600 focus:ring-4 focus:ring-rose-600/10"
            : "border-neutral-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10",
        ].join(" ")}
        {...props}
      />
      <div
        className={
          error
            ? "mt-1 text-[11px] font-medium text-rose-600"
            : "mt-1 hidden text-[11px] font-medium text-rose-600"
        }
      >
        {error}
      </div>
    </div>
  );
}

function Select({ label, id, name, children, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-neutral-800">
        {label}
      </label>

      <div className="relative mt-1">
        <select
          id={id}
          name={name ?? id}
          className={[
            "w-full appearance-none rounded-lg border bg-white px-3 py-2.5 pr-10 text-sm text-neutral-900 outline-none transition",
            error
              ? "border-rose-300 focus:border-rose-600 focus:ring-4 focus:ring-rose-600/10"
              : "border-neutral-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10",
          ].join(" ")}
          defaultValue=""
          {...props}
        >
          {children}
        </select>

        <ChevronIcon />
      </div>

      <div
        className={
          error
            ? "mt-1 text-[11px] font-medium text-rose-600"
            : "mt-1 hidden text-[11px] font-medium text-rose-600"
        }
      >
        {error}
      </div>
    </div>
  );
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length >= 7)
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length >= 4) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length > 0) return `(${digits}`;
  return "";
}

function useLockBodyScroll(locked) {
  React.useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function LeadBubble() {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const [errors, setErrors] = React.useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    service: "",
  });

  useLockBodyScroll(open);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function reset() {
    setSubmitted(false);
    setSubmitting(false);
    setErrors({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      service: "",
    });
  }
  async function submitLead(payload) {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_ORIGIN || "http://localhost:8000"}/v1/leads/quick-request`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!resp.ok) return { ok: false };
    return await resp.json();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;

    const data = {
      fullName: form.fullName.value || "",
      company: form.company.value || "",
      email: form.email.value || "",
      phone: form.phone.value || "",
      city: form.city.value || "",
      state: form.state.value || "",
      service: form.service.value || "",
    };

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
    const validPhone = data.phone.replace(/\D/g, "").length >= 10;

    const nextErrors = {
      fullName: data.fullName.trim().length < 2 ? "Please enter your full name" : "",
      company: data.company.trim().length < 2 ? "Please enter your company name" : "",
      email: !validEmail ? "Please enter a valid email" : "",
      phone: !validPhone ? "Please enter a valid phone number" : "",
      city: data.city.trim().length < 2 ? "Please enter your city" : "",
      state: data.state === "" ? "Please select your state" : "",
      service: data.service === "" ? "Please select a service" : "",
    };

    const ok = !Object.values(nextErrors).some(Boolean);
    setErrors(nextErrors);
    if (!ok) return;

    try {
      setSubmitting(true);
      const resp = await submitLead(data);
      if (!resp?.ok) return;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Floating bubble */}
      <div className="fixed bottom-5 right-5 z-[60] md:bottom-7 md:right-7">
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            reset();
            // focus after animation settles
            setTimeout(() => {
              document.getElementById("lead_fullName")?.focus();
            }, 220);
          }}
          className={[
            "group relative flex items-center gap-3 rounded-full",
            "bg-[#09152f] text-white",
            "px-4 py-3 md:px-5 md:py-3.5",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_40px_rgba(9,21,47,0.22)]",
            "ring-1 ring-slate-900/10",
            "hover:bg-[#0b1b3b]",
            "transition-[transform,box-shadow,background-color] duration-200 ease-out",
            "active:translate-y-[0.5px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            "overflow-hidden",
            "before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:rounded-full",
            "before:bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.20),transparent_58%)]",
            "before:opacity-90 group-hover:before:opacity-100",
          ].join(" ")}
          aria-label="Open quick request form"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10">
            <ChatIcon />
          </span>

          <span className="relative hidden sm:flex flex-col items-start leading-tight">
            <span className="text-sm font-extrabold">Quick request</span>
            <span className="text-xs text-white/70">We’ll reach out fast</span>
          </span>

          <span className="relative sm:hidden text-sm font-extrabold">Request</span>
        </button>
      </div>

      {/* Modal (buttery animation) */}
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* backdrop */}
            <motion.button
              type="button"
              variants={BACKDROP}
              transition={{ duration: 0.18, ease: EASE_OUT }}
              className="absolute inset-0 bg-slate-950/35"
              aria-label="Close modal"
              onClick={() => setOpen(false)}
              style={{ WebkitTapHighlightColor: "transparent" }}
            />

            {/* ✅ NEW: full-height container so the card can never overflow off-screen */}
            <div
              className="absolute inset-0 flex items-end justify-center px-4 pt-6 sm:items-center sm:pt-10"
              style={{
                paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))",
              }}
            >
              {/* ✅ NEW: capped-height flex column card */}
              <motion.div
                variants={PANEL}
                transition={{
                  type: "spring",
                  stiffness: 520,
                  damping: 38,
                  mass: 0.9,
                }}
                style={{ willChange: "transform, opacity" }}
                className={[
                  "w-full max-w-xl",
                  "rounded-3xl border border-slate-200 bg-white",
                  "shadow-[0_30px_120px_rgba(15,23,42,0.22)]",
                  "overflow-hidden",
                  "flex flex-col",
                  // ✅ KEY: cap height on small screens so it never clips
                  "max-h-[calc(100vh-2.5rem)]",
                  // desktop can be slightly smaller / nicer
                  "sm:max-h-[720px]",
                ].join(" ")}
                role="dialog"
                aria-modal="true"
              >
                {/* top bar (fixed) */}
                <div className="relative shrink-0">
                  <div className="absolute inset-x-0 top-0 h-1 bg-rose-600" />
                  <div className="flex items-start justify-between gap-4 px-6 pt-6">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-700">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-rose-600" />
                        Get staffed fast
                      </div>

                      <h3 className="mt-3 text-balance text-xl font-extrabold tracking-tight text-slate-900">
                        Tell us what you need
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Fill this out and we’ll follow up quickly.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition"
                      aria-label="Close"
                    >
                      <XIcon />
                    </button>
                  </div>
                </div>

                {/* ✅ NEW: scrollable content area */}
                <div
                  className="flex-1 overflow-y-auto overscroll-contain px-6 pt-4"
                  style={{
                    WebkitOverflowScrolling: "touch",
                    paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))",
                  }}
                >
                  {!submitted ? (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Input
                          label="Full name"
                          id="lead_fullName"
                          placeholder="Jane Smith"
                          error={errors.fullName}
                          name="fullName"
                          autoComplete="name"
                        />
                        <Input
                          label="Company name"
                          id="lead_company"
                          placeholder="Acme Property Group"
                          error={errors.company}
                          name="company"
                          autoComplete="organization"
                        />
                        <Input
                          label="Email"
                          id="lead_email"
                          placeholder="jane@company.com"
                          error={errors.email}
                          name="email"
                          autoComplete="email"
                        />
                        <Input
                          label="Phone"
                          id="lead_phone"
                          placeholder="(555) 123-4567"
                          error={errors.phone}
                          name="phone"
                          inputMode="tel"
                          autoComplete="tel"
                          onChange={(e) => {
                            e.target.value = formatPhone(e.target.value);
                          }}
                        />

                        <Input
                          label="City"
                          id="lead_city"
                          placeholder="San Diego"
                          error={errors.city}
                          name="city"
                          autoComplete="address-level2"
                        />

                      <Select label="State" id="lead_state" name="state" error={errors.state}>
                        <option value="" disabled>
                          Select
                        </option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </Select>

                        <div className="sm:col-span-2">
                        <Select label="Service" id="lead_service" name="service" error={errors.service}>
                          <option value="" disabled>
                            Select a service
                          </option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </Select>
                        </div>

                        <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                          <PremiumPillButton
                            type="submit"
                            className="w-full sm:w-auto"
                            disabled={submitting}
                          >
                            {submitting ? (
                              <>
                                <Spinner />
                                Submitting…
                              </>
                            ) : (
                              <>
                                Submit request <span className="opacity-90">→</span>
                              </>
                            )}
                          </PremiumPillButton>

                          <GhostButton
                            type="button"
                            className="w-full sm:w-auto"
                            onClick={() => setOpen(false)}
                          >
                            Not now
                          </GhostButton>

                          <div className="sm:ml-auto text-xs text-slate-500"></div>
                        </div>
                      </div>

                      <p className="mt-4 text-xs leading-relaxed text-slate-500">
                        No commitment. We'll reach out within 5 minutes.
                      </p>
                    </form>
                  ) : (
                    <div className="py-5 text-center">
                      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-50">
                        <CheckIcon />
                      </div>

                      <h4 className="text-xl font-extrabold text-slate-900">We got it.</h4>
                      <p className="mt-2 text-sm text-slate-600">
                        We’ll reach out shortly. If you need help immediately, call{" "}
                        <a
                          className="font-bold text-rose-600 hover:text-rose-700"
                          href={`tel:${PHONE_TEL}`}
                        >
                          {PHONE_DISPLAY}
                        </a>
                        .
                      </p>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <PremiumPillButton type="button" onClick={() => setOpen(false)}>
                          Close <span className="opacity-90">→</span>
                        </PremiumPillButton>
                        <GhostButton
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setTimeout(() => {
                              document.getElementById("lead_fullName")?.focus();
                            }, 220);
                          }}
                        >
                          Submit another
                        </GhostButton>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* ✅ NEW: note is absolute so it never affects layout/height */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.22, ease: EASE_OUT }}
                className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[11px] text-white/80 sm:hidden"
              >
                Tap outside to close
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/* -------------------- Icons -------------------- */

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

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h8M8 14h5m8 7-4.35-2.175A8 8 0 1 1 20 12c0 1.086-.217 2.122-.61 3.067L21 21Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-90"
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="#16A34A"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}