// src/app/confirmation/page.jsx
import Link from "next/link";
import {
  BOOKING_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  BRAND_NAME,
} from "../lib/seo/siteConfig";

export const metadata = {
  title: `Confirmation | ${BRAND_NAME}`,
  description:
    "Your request was received. We’ll text you shortly with next steps and your crew details.",
  robots: { index: true, follow: true },
};

export default function ConfirmationPage() {
  return (
    <main className="min-h-[70vh] bg-white">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
          {/* icon */}
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          <h1 className="mt-5 text-center font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl">
            Request received
          </h1>

          <p className="mt-4 text-center text-slate-600 text-base sm:text-lg leading-relaxed">
            Thanks — we’ve got it. You’ll receive a text shortly with next steps,
            including your crew details and arrival window.
          </p>

          {/* next steps */}
          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
            <p className="font-semibold text-slate-900">What happens next</p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                We confirm your job details
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                We assign vetted workers nearby
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                We text you names + arrival window
              </li>
            </ul>
          </div>

          {/* actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center rounded-full font-semibold
                         bg-slate-900 text-white px-6 py-3
                         hover:bg-slate-800 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
            >
              Book another job
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full font-semibold
                         bg-white text-slate-900 border border-slate-200 px-6 py-3
                         hover:bg-slate-50 hover:border-slate-300 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          {/* small links */}
          <div className="mt-7 text-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}