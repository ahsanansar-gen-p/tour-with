import type { Metadata } from "next";
import SectionHeading from "@/components/site/SectionHeading";

const faqs = [
  {
    question: "What is included in a typical tour package?",
    answer:
      "Most packages include transport, accommodation, guided sightseeing, and selected meals. Exact inclusions are listed on each tour details page.",
  },
  {
    question: "How do I confirm a booking?",
    answer:
      "You can book directly through WhatsApp. Our team shares package details, confirms availability, and guides you through the payment process.",
  },
  {
    question: "Are tours family-friendly?",
    answer:
      "Yes. Many tours are designed for families with balanced travel time, comfortable hotels, and safe sightseeing points.",
  },
  {
    question: "Can itineraries change due to weather?",
    answer:
      "Yes. Mountain travel can be weather-dependent, so route and timing adjustments may be made for safety and road conditions.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Travel With Neha by phone or WhatsApp and send your Northern Pakistan tour inquiry.",
};

export default function ContactPage() {
  const whatsappHref =
    "https://wa.me/923091045145?text=Hi%2C%20I%20want%20to%20plan%20a%20tour";

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Start planning your Northern Pakistan journey."
        description="Share your preferred travel dates, group size, and destinations. Our team will respond with a tailored package."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <section className="space-y-5 rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Contact Info</h2>
          <div className="space-y-3 text-sm">
            <p className="text-slate-600">
              Phone:{" "}
              <a
                href="tel:+923091045145"
                className="font-semibold text-slate-800 transition hover:text-sky-700"
              >
                +92 300 1234567
              </a>
            </p>
            <p className="text-slate-600">
              WhatsApp:{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Chat Now
              </a>
            </p>
            <p className="text-slate-600">Email: hello@travelwithneha.com</p>
            <p className="text-slate-600">Office: Islamabad, Pakistan</p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Book on WhatsApp
          </a>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Send Inquiry</h2>
          <form className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm sm:col-span-1">
              <span className="font-medium text-slate-700">Full Name</span>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm sm:col-span-1">
              <span className="font-medium text-slate-700">Phone Number</span>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
                placeholder="+92..."
              />
            </label>
            <label className="space-y-2 text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">Email Address</span>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-2 text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">Message</span>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-sky-500"
                placeholder="Tell us about your ideal trip..."
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="button"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
        <p className="mt-3 text-sm text-slate-600">
          Common travel questions from first-time and returning travelers.
        </p>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
