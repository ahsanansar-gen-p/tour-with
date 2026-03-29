import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideById, getGuideHref } from "@/lib/guides";
import { getAllTours, getTourBySlug } from "@/lib/tours";

const priceFormatter = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

const whatsappNumber = "923266335377";

function getWhatsAppLink(tourTitle: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to book ${tourTitle}`
  )}`;
}

type TourDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

type InfoListSectionProps = {
  title: string;
  items: string[];
  tone?: "neutral" | "warn";
};

function InfoListSection({
  title,
  items,
  tone = "neutral",
}: InfoListSectionProps) {
  const iconClasses =
    tone === "warn"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : "border-sky-200 bg-sky-50 text-sky-700";

  return (
    <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${iconClasses}`}
            >
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                <path d="M7.7 13.1 4.6 10l-1.4 1.4 4.5 4.5L17 6.6l-1.4-1.4-7.9 7.9Z" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function generateStaticParams() {
  return getAllTours().map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: TourDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
      description: "The requested tour could not be found.",
    };
  }

  return {
    title: tour.title,
    description: tour.shortDescription,
  };
}

export default async function TourDetailsPage({ params }: TourDetailsPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const whatsappHref = getWhatsAppLink(tour.title);
  const assignedGuide = getGuideById(tour.guideId);

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-3xl shadow-soft">
        <div className="relative h-[340px] sm:h-[420px] lg:h-[500px]">
          <Image
            src={tour.featuredImage}
            alt={tour.title}
            fill
            priority
            sizes="100vw"
            quality={86}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              {tour.location}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {tour.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                {tour.duration}
              </span>
              <span className="rounded-full border border-white/35 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                {priceFormatter.format(tour.price)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              {tour.shortDescription}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {tour.fullDescription}
            </p>

            {assignedGuide ? (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Assigned Guide
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={assignedGuide.image}
                      alt={assignedGuide.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {assignedGuide.name}
                    </p>
                    <p className="text-xs text-slate-600">
                      {assignedGuide.experience} experience
                    </p>
                  </div>
                </div>
                <Link
                  href={getGuideHref(assignedGuide)}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  View Guide Profile
                </Link>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to Tours
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">Gallery</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {tour.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={image}
                    alt={`${tour.title} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    quality={74}
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">Facilities</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tour.facilities.map((facility) => (
                <li
                  key={facility}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M7.7 13.1 4.6 10l-1.4 1.4 4.5 4.5L17 6.6l-1.4-1.4-7.9 7.9Z" />
                    </svg>
                  </span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">
              Day-wise Itinerary
            </h2>
            <div className="mt-6 space-y-4">
              {tour.itinerary.map((day) => (
                <article
                  key={`${day.day}-${day.title}`}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                    Day {day.day}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {day.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {day.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <InfoListSection title="Preparations" items={tour.preparations} />
          <InfoListSection
            title="Precautions"
            items={tour.precautions}
            tone="warn"
          />
          <InfoListSection title="Terms & Conditions" items={tour.terms} />

          <section className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-900">
              Ready to Book This Tour?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Message us directly with your preferred travel dates and group
              size. Our team will share the full booking plan.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              WhatsApp Book {tour.title}
            </a>
          </section>
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Quick Booking
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              {tour.title}
            </h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Duration</dt>
                <dd className="font-semibold text-slate-800">{tour.duration}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Location</dt>
                <dd className="font-semibold text-slate-800">{tour.location}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-500">Price</dt>
                <dd className="font-semibold text-slate-800">
                  {priceFormatter.format(tour.price)}
                </dd>
              </div>
            </dl>

            {assignedGuide ? (
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Guide
                </p>
                <Link
                  href={getGuideHref(assignedGuide)}
                  className="mt-1 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  {assignedGuide.name}
                </Link>
              </div>
            ) : null}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              WhatsApp Book
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
