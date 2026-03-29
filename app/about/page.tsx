import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";

const missionPoints = [
  {
    title: "Accessible Adventure",
    body: "Make Northern Pakistan travel comfortable and easy for families, couples, and groups.",
  },
  {
    title: "Reliable Execution",
    body: "Deliver well-planned itineraries, transparent pricing, and dependable on-ground coordination.",
  },
  {
    title: "Responsible Tourism",
    body: "Protect local landscapes and communities through respectful travel practices.",
  },
];

const trustPoints = [
  "Verified drivers and local guides",
  "Structured day-wise tour planning",
  "Fast support before and during tours",
  "Strong repeat-customer referrals",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Travel With Neha, our mission, and why travelers trust our Northern Pakistan tour services.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="About"
        title="A travel company built for Northern Pakistan experiences."
        description="Travel With Neha combines local destination knowledge with modern tour operations to deliver safe, scenic, and stress-free journeys."
      />

      <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Company Intro</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
          We specialize in curated tours across Hunza, Skardu, Naran Kaghan, and
          nearby destinations. Our team focuses on practical route design,
          comfort-first accommodation choices, and quick communication so
          travelers can enjoy the journey without planning stress.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            View Tour Packages
          </Link>
          <a
            href="https://wa.me/923266335377?text=Hi%2C%20I%20want%20to%20plan%20a%20tour"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            Talk on WhatsApp
          </a>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {missionPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Why Travelers Trust Us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-700">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                  <path d="M7.7 13.1 4.6 10l-1.4 1.4 4.5 4.5L17 6.6l-1.4-1.4-7.9 7.9Z" />
                </svg>
              </span>
              <p className="text-sm text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
