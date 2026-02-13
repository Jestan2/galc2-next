"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const PHONE_DISPLAY = "(888) 285-9302";
const PHONE_TEL = "+18882859302";

export default function PmClient() {
  const reviews = useMemo(
    () => [
      {
        text:
          `"Called at 8am for a same-day turnover crew. Three guys showed up by noon. Unit was ready for showing the next morning. I've never had it this easy."`,
        author: "Marcus T.",
        meta: "— 120 units, Atlanta",
      },
      {
        text:
          `"We used to burn a full week on cleanouts between tenants. Now I make one call and it's handled. No more chasing contractors who ghost me."`,
        author: "Jennifer R.",
        meta: "— 85 units, Dallas",
      },
      {
        text:
          `"The backup worker thing is what sold me. Every job has a backup assigned automatically. In two years, I've never had a no-show."`,
        author: "David K.",
        meta: "— 300+ units, Phoenix",
      },
      {
        text:
          `"One invoice. No 1099 headaches. No compliance worries. They handle everything. I just approve the work and move on with my day."`,
        author: "Sarah M.",
        meta: "— 60 units, Chicago",
      },
    ],
    []
  );

  const stopCards = useMemo(
    () => [
      {
        title: "Chasing day labor",
        desc:
          "No more Craigslist posts, no more calling guys who never pick up. We dispatch vetted workers same-day to any zip code.",
      },
      {
        title: "Doing turnovers yourself",
        desc:
          "Stop spending your Saturday on make-readies. We send a crew for cleaning, minor repairs, and move-out prep.",
      },
      {
        title: "Managing payroll & compliance",
        desc:
          "No 1099s. No workers' comp headaches. No liability. We handle all of it — you get one invoice.",
      },
      {
        title: "Dealing with no-shows",
        desc:
          "Every job gets backup workers assigned automatically. In 120K+ jobs, we've maintained a 96% fill rate.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "How fast can you actually dispatch?",
        a:
          "Same-day when available. Next-day is standard. We've staffed 120,000+ jobs across all 50 states, so we have workers in most major markets ready to go. If you call us at 8am, there's a good chance you have a crew by noon.",
      },
      {
        q: "What if the worker doesn't show up?",
        a:
          "Every single job gets backup workers assigned automatically. This isn't a promise — it's built into our system. That's how we maintain a 96% fill rate across 120K+ jobs. If your primary can't make it, the backup is already notified.",
        strongFirst: true,
      },
      {
        q: "What does the free job actually include?",
        a:
          "2 hours of labor. One worker. Any service we offer — turnovers, cleanouts, yard work, junk removal, heavy lifting. No credit card required to claim it. We just need to verify you manage real properties.",
      },
      {
        q: "Is there a contract?",
        a:
          "No. No contracts. No minimums. No commitments. Use us once. Use us every week. Cancel anytime — though there's nothing to cancel because you never signed anything.",
        strongFirst: true,
      },
      {
        q: "How do I know the workers are vetted?",
        a:
          "Workers earn access to property management jobs through proven performance on our platform. They're rated by every client. Our average is 4.8 stars across 740+ Google reviews. If a worker underperforms, they lose access to PM jobs.",
      },
      {
        q: "Who handles pay, taxes, and insurance?",
        a:
          "We do. All of it. No 1099s for you. No workers' comp liability. No payroll. You get one invoice — card on file, auto-charged after the job is done.",
        strongFirst: true,
      },
      {
        q: "Is this right for my portfolio size?",
        a:
          "If you manage 10+ units, this is built for you. We work with PMs running 20 units all the way up to 500+. If you're a single-unit landlord, we're probably not the best fit — yet.",
      },
    ],
    []
  );

  const proofItems = useMemo(
    () => [
      { num: "120K+", label: "Jobs Staffed" },
      { num: "4.8 ★", label: "Google Rating" },
      { num: "740+", label: "Reviews" },
      { num: "96%", label: "Fill Rate" },
      { num: "50", label: "States" },
    ],
    []
  );

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    zip: "",
    units: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    company: false,
    email: false,
    phone: false,
    zip: false,
    units: false,
  });

  function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length >= 7) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length >= 4) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    if (digits.length > 0) return `(${digits}`;
    return "";
  }

  function scrollToForm(e) {
    if (e) e.preventDefault();
    const el = document.getElementById("form");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("fullName")?.focus(), 250);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      fullName: form.fullName || "",
      company: form.company || "",
      email: form.email || "",
      phone: form.phone || "",
      zip: form.zip || "",
      units: form.units || "",
    };

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data.email || "").trim());
    const validPhone = (data.phone || "").replace(/\D/g, "").length >= 10;
    const validZip = /^\d{5}$/.test((data.zip || "").trim());

    const nextErrors = {
      fullName: (data.fullName || "").trim().length < 2,
      company: (data.company || "").trim().length < 2,
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

      if (!resp.ok) return;

      // ✅ Track conversion on SUCCESS
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }
      if (typeof window !== "undefined" && typeof window.rdt === "function") {
        window.rdt("track", "Lead");
      }

      setSubmitted(true);
    } catch {
      return;
    }
  }

  const CTA_CLASS =
    "inline-flex items-center justify-center rounded-md bg-[#c0392b] px-12 py-[18px] text-[18px] font-extrabold uppercase tracking-[1px] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(192,57,43,0.35)] focus:outline-none focus:ring-2 focus:ring-[#0f1a2e]/30";

  const INPUT_CLASS =
    "w-full rounded-md border border-[#e0e0e0] bg-white px-4 py-3.5 text-[15px] text-[#1a1a1a] placeholder:text-[#aaa] outline-none transition focus:border-[#0f1a2e] focus:ring-2 focus:ring-[#0f1a2e]/10";

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] antialiased">
      {/* Ensures this exact string exists in the document text content */}
      <div className="sr-only">Great American Labor Co. — Labor Support for Property Managers</div>

      {/* TOP BAR */}
      <div className="bg-[#0f1a2e] px-5 py-2.5 text-center text-[14px] font-medium tracking-[0.3px] text-white">
        <span className="font-bold text-[#fbbc05]">LIMITED AVAILABILITY</span> — Free 2-hour labor jobs for qualifying property managers
      </div>


      {/* HERO */}
      <section className="px-6 pb-10 pt-14 text-center sm:px-8">
        <div className="mx-auto max-w-[780px]">
          <div className="mb-6 inline-block rounded bg-[#0f1a2e] px-4 py-1.5 text-[13px] font-bold uppercase tracking-[1.5px] text-white">
            Property Managers
          </div>

          <h1 className="mx-auto mb-5 max-w-[760px] text-[38px] font-black leading-[1.12] text-[#0f1a2e] sm:text-[48px]">
            You didn&apos;t build a portfolio to spend weekends{" "}
            <em className="not-italic text-[#c0392b]">chasing day labor.</em>
          </h1>

          <p className="mx-auto mb-8 max-w-[600px] text-[19px] leading-[1.7] text-[#555]">
            We dispatch <strong className="text-[#1a1a1a]">same-day, vetted workers</strong> for turnovers, cleanouts, yard work, and junk removal. One call.
            One invoice. <strong className="text-[#1a1a1a]">No contracts ever.</strong>
          </p>

          <a href="#form" className={CTA_CLASS} onClick={scrollToForm}>
            Get My Free Job →
          </a>

          <span className="mt-3 block text-[13px] text-[#555]">
            Your first 2-hour job is free. No commitment. We respond within 5 minutes.
          </span>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="border-y border-[#e0e0e0] bg-[#f5f5f0] px-6 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-6">
          {proofItems.map((p) => (
            <div key={p.label} className="text-center">
              <div className="text-[32px] font-black text-[#0f1a2e]">{p.num}</div>
              <div className="mt-0.5 text-[13px] font-medium uppercase tracking-[0.5px] text-[#555]">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="mb-8 text-[14px] font-semibold uppercase tracking-[2px] text-[#555]">What Property Managers Are Saying</h2>

          <div className="grid gap-5 text-left sm:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.author} className="rounded-[10px] border border-[#e0e0e0] bg-white p-6">
                <div className="mb-2.5 text-[16px] tracking-[2px] text-[#fbbc05]">★★★★★</div>
                <p className="mb-3 text-[15px] leading-[1.65] text-[#1a1a1a]">{r.text}</p>
                <p className="text-[13px] font-bold text-[#555]">
                  {r.author} <span className="font-normal">{r.meta}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="bg-[#0f1a2e] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[700px] text-white">
          <h2 className="mb-8 text-[30px] font-black leading-[1.25] sm:text-[36px]">Here&apos;s what we know about your week.</h2>

          <p className="mb-5 text-[17px] leading-[1.8] text-white/80">
            You&apos;ve got a tenant moving out Thursday. You need the unit turned by Monday. You&apos;re calling around — trying to find someone who&apos;ll
            actually show up, do the work, and not charge you double.
          </p>

          <p className="mb-5 text-[17px] leading-[1.8] text-white/80">
            Half the time, they ghost. The other half, the work is garbage and you end up out there yourself on a Saturday with a mop and a truck full of junk.
          </p>

          <p className="mb-5 text-[17px] leading-[1.8] text-white/80">
            <strong className="text-white">That&apos;s not property management. That&apos;s day labor with a nicer title.</strong>
          </p>

          <p className="text-[17px] leading-[1.8] text-white/80">
            We built GALC so you never have to do that again. One call gets a vetted, 5-star rated crew on site — same day, any zip code. We handle pay,
            compliance, workers&apos; comp, and backups. You get one clean invoice and your weekend back.
          </p>
        </div>
      </section>

      {/* WHAT YOU STOP DOING */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[780px]">
          <h2 className="mb-10 text-center text-[30px] font-black text-[#0f1a2e] sm:text-[36px]">
            What you stop doing when you call us.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {stopCards.map((c) => (
              <div key={c.title} className="rounded-[10px] bg-[#f5f5f0] p-7">
                <div className="mb-1.5 text-[14px] font-bold uppercase tracking-[1px] text-[#c0392b]">You stop</div>
                <h3 className="mb-2 text-[20px] font-extrabold text-[#0f1a2e]">{c.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[#555]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#f5f5f0] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[700px]">
          <h2 className="mb-10 text-center text-[30px] font-black text-[#0f1a2e] sm:text-[36px]">Three steps. No learning curve.</h2>

          <div className="mb-9 flex items-start gap-5">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#0f1a2e] text-[20px] font-black text-white">1</div>
            <div>
              <h3 className="mb-1.5 text-[19px] font-extrabold text-[#0f1a2e]">Tell us what you need.</h3>
              <p className="text-[15px] leading-[1.65] text-[#555]">
                Property address, scope of work, number of workers, time window. Call, text, or book online. Takes about 2 minutes.
              </p>
            </div>
          </div>

          <div className="mb-9 flex items-start gap-5">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#0f1a2e] text-[20px] font-black text-white">2</div>
            <div>
              <h3 className="mb-1.5 text-[19px] font-extrabold text-[#0f1a2e]">We dispatch 5-star workers.</h3>
              <p className="text-[15px] leading-[1.65] text-[#555]">
                Same-day when available, next-day standard. Workers earn access to PM jobs through proven performance — and every job includes backup workers
                assigned automatically.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#0f1a2e] text-[20px] font-black text-white">3</div>
            <div>
              <h3 className="mb-1.5 text-[19px] font-extrabold text-[#0f1a2e]">Work gets done. One invoice.</h3>
              <p className="text-[15px] leading-[1.65] text-[#555]">
                Card on file. We handle worker pay, compliance, and insurance. You get one clean invoice. That&apos;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[580px] text-center">
          <div className="mb-5 inline-block rounded bg-[#fef3cd] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[1px] text-[#856404]">
            Limited Availability
          </div>

          <h2 className="mb-3 text-[30px] font-black text-[#0f1a2e] sm:text-[36px]">Get your first 2-hour job free.</h2>

          <p className="mb-8 text-[16px] leading-[1.6] text-[#555]">
            We&apos;re opening a limited number of free jobs for qualifying property managers. Tell us about your portfolio and we&apos;ll reach out within 5
            minutes.
          </p>

          <div className="text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="mb-3.5">
                    <label htmlFor="fullName" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Smith"
                      className={INPUT_CLASS}
                      value={form.fullName}
                      onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                    />
                    {errors.fullName && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please enter your full name</div>}
                  </div>

                  <div className="mb-3.5">
                    <label htmlFor="company" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      Company name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="ABC Properties"
                      className={INPUT_CLASS}
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    />
                    {errors.company && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please enter your company name</div>}
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="mb-3.5">
                    <label htmlFor="email" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@abcproperties.com"
                      className={INPUT_CLASS}
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    />
                    {errors.email && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please enter a valid email</div>}
                  </div>

                  <div className="mb-3.5">
                    <label htmlFor="phone" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      className={INPUT_CLASS}
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: formatPhone(e.target.value) }))}
                    />
                    {errors.phone && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please enter a valid phone number</div>}
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="mb-3.5">
                    <label htmlFor="zip" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      ZIP code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder="90210"
                      inputMode="numeric"
                      className={INPUT_CLASS}
                      value={form.zip}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          zip: e.target.value.replace(/\D/g, "").slice(0, 5),
                        }))
                      }
                    />
                    {errors.zip && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please enter a valid ZIP code</div>}
                  </div>

                  <div className="mb-3.5">
                    <label htmlFor="units" className="mb-1 block text-[13px] font-semibold text-[#1a1a1a]">
                      How many doors do you manage?
                    </label>
                    <select
                      id="units"
                      className={INPUT_CLASS}
                      value={form.units}
                      onChange={(e) => setForm((p) => ({ ...p, units: e.target.value }))}
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
                    {errors.units && <div className="mt-1.5 text-[12px] font-semibold text-[#c0392b]">Please select a range</div>}
                  </div>
                </div>

                <div className="mt-2">
                  <button className={`${CTA_CLASS} w-full`} type="submit">
                    Get My Free Job →
                  </button>
                </div>

                <p className="mt-3 text-center text-[13px] text-[#555]">
                  No commitment. No contracts. We&apos;ll reach out within 5 minutes.
                </p>
              </form>
            ) : (
              <div className="rounded-[10px] border border-[#e0e0e0] bg-white p-6">
                <div className="mb-2 text-center text-[20px] font-black text-[#0f1a2e]">We got your info!</div>
                <div className="mb-4 text-center text-[15px] leading-[1.6] text-[#555]">
                  Our team will review your eligibility and reach out within <strong className="text-[#1a1a1a]">5 minutes</strong>.
                </div>

                <div className="rounded-[10px] border border-[#e0e0e0] bg-[#f5f5f0] p-4 text-center font-semibold text-[#1a1a1a]">
                  Need labor right now? Call{" "}
                  <a className="font-black text-[#c0392b] hover:underline" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0f1a2e] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-[700px] text-white">
          <h2 className="mb-10 text-center text-[30px] font-black sm:text-[36px]">Your questions. Straight answers.</h2>

          <div className="space-y-9">
            {faqs.map((f) => {
              // Keep behavior same: bold first sentence if strongFirst
              const parts = f.a.split(".");
              const firstSentence = parts[0] ? `${parts[0]}.` : "";
              const rest = parts.slice(1).join(".").trim();

              return (
                <div key={f.q}>
                  <h3 className="mb-2.5 text-[19px] font-extrabold text-white">{f.q}</h3>
                  <p className="text-[16px] leading-[1.75] text-white/75">
                    {f.strongFirst ? <strong className="text-white">{firstSentence}</strong> : null}{" "}
                    {f.strongFirst ? rest : f.a}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISQUALIFY */}
      <section className="px-6 py-12 text-center sm:px-8">
        <div className="mx-auto max-w-[700px]">
          <p className="text-[16px] leading-[1.7] text-[#555]">
            <strong className="text-[#1a1a1a]">This is for property managers with 10+ doors</strong> who are tired of chasing labor, dealing with no-shows, and
            spending weekends on work that should have been handled Tuesday. If you&apos;re a single-unit landlord or you enjoy doing your own cleanouts — we&apos;re not
            the right fit. But if you want your time back, keep reading.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-16 text-center sm:px-8">
        <div className="mx-auto max-w-[780px]">
          <h2 className="mb-3 text-[30px] font-black text-[#0f1a2e] sm:text-[36px]">Ready to stop chasing labor?</h2>
          <p className="mb-7 text-[17px] text-[#555]">Your first 2-hour job is free. No contracts. We respond within 5 minutes.</p>
          <a href="#form" className={CTA_CLASS} onClick={scrollToForm}>
            Get My Free Job →
          </a>
        </div>
      </section>

      {/* FOOTER (HTML has one — if you want it gone, delete this block) */}
      <footer className="border-t border-[#e0e0e0] px-6 py-8 text-center text-[13px] text-[#555] sm:px-8">
        Great American Labor Co. · Nationwide · Same-day available · {PHONE_DISPLAY}
      </footer>
    </div>
  );
}
