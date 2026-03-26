import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/types/tour";

const formatter = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

const whatsappNumber = "923091045145";

type TourCardProps = {
  tour: Tour;
};

export default function TourCard({ tour }: TourCardProps) {
  const detailsHref = `/tours/${tour.slug}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to book ${tour.title}`
  )}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={detailsHref} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={tour.featuredImage}
            alt={tour.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            quality={78}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            {tour.duration}
          </p>
          <p className="text-sm font-semibold text-slate-800">
            {formatter.format(tour.price)}
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">{tour.title}</h2>
          <p className="text-sm text-slate-500">{tour.location}</p>
          <p className="text-sm leading-6 text-slate-600">
            {tour.shortDescription}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={detailsHref}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            View Details
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            WhatsApp Book
          </a>
        </div>
      </div>
    </article>
  );
}
