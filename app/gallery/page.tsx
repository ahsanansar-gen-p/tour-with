import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import { getAllTours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Preview destination photos from Hunza, Skardu, Naran Kaghan, and other Northern Pakistan tours.",
};

export default function GalleryPage() {
  const tours = getAllTours();
  const galleryItems = tours.flatMap((tour) =>
    tour.gallery.map((image, index) => ({
      id: `${tour.id}-${index}`,
      image,
      title: tour.title,
      location: tour.location,
      slug: tour.slug,
    }))
  );

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Gallery"
        title="Photo moments from our Northern Pakistan tours."
        description="A curated visual grid built from live tour gallery data so visitors can quickly understand the destinations and experiences."
      />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Link
            key={item.id}
            href={`/tours/${item.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`relative overflow-hidden ${
                index % 4 === 0 ? "aspect-[4/4.6]" : "aspect-[4/3]"
              } bg-slate-200`}
            >
              <Image
                src={item.image}
                alt={`${item.title} gallery`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                quality={74}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-200">{item.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-surface p-6 text-center shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-900">
          Want These Views in Real Life?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Explore all available packages and choose your preferred destination,
          duration, and budget.
        </p>
        <div className="mt-6">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            Browse Tour Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
