import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import { getAllTours } from "@/lib/tours";

const whyChooseUs = [
  {
    title: "Verified Local Team",
    description: "Experienced local operators and trusted tour planning support.",
    icon: "M10 2a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm3.59 6.41L9 13l-2.59-2.58L5 11.82 9 15.8l6-5.98-1.41-1.41Z",
  },
  {
    title: "Comfort-First Travel",
    description: "Reliable transport, balanced itineraries, and clean accommodation.",
    icon: "M2 11h16v5H2v-5Zm1-7h14v5H3V4Zm2 8v2h2v-2H5Zm0-7v2h2V5H5Zm8 7v2h2v-2h-2Zm0-7v2h2V5h-2Z",
  },
  {
    title: "Transparent Pricing",
    description: "Clearly listed tour inclusions with upfront and simple pricing.",
    icon: "M10 2 2 6l8 4 8-4-8-4Zm-8 7 8 4 8-4v5l-8 4-8-4V9Z",
  },
  {
    title: "Fast WhatsApp Support",
    description: "Get route plans, availability, and booking support in minutes.",
    icon: "M16.6 13.4c-.2-.1-1.4-.7-1.6-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8c-.1.1-.2.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.3.1-.4l.3-.3c.1-.1.2-.2.2-.3.1-.1 0-.2 0-.3s-.5-1.3-.7-1.7c-.2-.5-.4-.4-.5-.4H7c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4c.1.2 1.6 2.4 3.9 3.4.5.2 1 .4 1.3.4.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2ZM10 2a8 8 0 0 0-6.9 12.1L2 18l4-1A8 8 0 1 0 10 2Z",
  },
];

const testimonials = [
  {
    quote:
      "The Hunza trip was perfectly managed. Hotels, timing, and support were excellent.",
    name: "Ayesha M.",
    city: "Lahore",
  },
  {
    quote:
      "We booked on WhatsApp and everything was smooth from day one to return.",
    name: "Usman K.",
    city: "Islamabad",
  },
  {
    quote:
      "Great guide, safe travel, and unforgettable views. Highly recommended for families.",
    name: "Sara A.",
    city: "Karachi",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Northern Pakistan with curated tours, trusted guides, and fast WhatsApp booking support.",
};

export default function Home() {
  const tours = getAllTours();
  const featuredTours = tours.slice(0, 3);
  const heroImage = featuredTours[0]?.featuredImage ?? "/images/tours/hunza/featured.jpg";
  const galleryPreview = tours
    .flatMap((tour) =>
      tour.gallery.map((image) => ({
        image,
        title: tour.title,
      }))
    )
    .slice(0, 6);
  const whatsappHref = `https://wa.me/923266335377?text=${encodeURIComponent(
    "Hi, I want to book a tour in Northern Pakistan"
  )}`;

  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative left-1/2 -mt-10 w-[100dvw] -translate-x-1/2 overflow-hidden sm:-mt-12 lg:-mt-14">
        <div className="relative min-h-[calc(100svh-72px)] sm:min-h-[calc(100svh-84px)]">
          <Image
            src={heroImage}
            alt="Northern Pakistan landscape"
            fill
            priority
            sizes="100vw"
            quality={86}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/35" />

          <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-6xl items-center px-4 py-12 sm:min-h-[calc(100svh-84px)] sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                Premium Northern Tours
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Explore Northern Pakistan With Neha
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                Book curated travel experiences for Murree, Kashmir, Swat,
                Naran Kaghan, and beyond with comfortable stays and trusted local
                guides.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  View Tours
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  WhatsApp Book
                </a>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                  <p className="text-xl font-semibold text-white">1000+</p>
                  <p className="text-xs text-slate-200">Travelers Served</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                  <p className="text-xl font-semibold text-white">4.9/5</p>
                  <p className="text-xs text-slate-200">Client Satisfaction</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                  <p className="text-xl font-semibold text-white">24/7</p>
                  <p className="text-xs text-slate-200">WhatsApp Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Tours"
          title="Popular packages travelers book first."
          description="Handpicked tour packages from our latest listing data, designed for scenic coverage and comfort."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredTours.map((tour) => (
            <article
              key={tour.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.featuredImage}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  quality={78}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {tour.duration}
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    PKR {tour.price.toLocaleString("en-PK")}
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{tour.title}</h3>
                <p className="text-sm leading-6 text-slate-600">
                  {tour.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/923266335377?text=${encodeURIComponent(
                      `Hi, I want to book ${tour.title}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    WhatsApp Book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for reliable, stress-free travel."
          description="Everything is optimized to help visitors decide faster and book with confidence."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-surface p-5 shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                  <path d={item.icon} />
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Gallery Preview"
          title="See the destinations before you book."
          description="A quick visual preview from our tour galleries."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
            >
              <Image
                src={item.image}
                alt={`${item.title} preview ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                quality={74}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What travelers say after touring with us."
          description="Static testimonials for now, ready to replace with real client feedback later."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft"
            >
              <p className="text-sm leading-7 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-slate-500">{testimonial.city}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-600 to-cyan-600 p-8 shadow-soft sm:p-10">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
              Ready to Travel?
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Plan Your Northern Pakistan Tour on WhatsApp
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-sky-100">
              Share your dates and group size. We will suggest the best package
              and respond quickly.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
          >
            Big WhatsApp Booking CTA
          </a>
        </div>
      </section>
    </div>
  );
}
