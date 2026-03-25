import type { Metadata } from "next";
import SectionHeading from "@/components/site/SectionHeading";
import TourCard from "@/components/tours/TourCard";
import { getAllTours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse Northern Pakistan tour packages with duration, pricing, itinerary details, and quick WhatsApp booking.",
};

export default function ToursPage() {
  const tours = getAllTours();

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Tours Listing"
        title="Find your next trip in Northern Pakistan."
        description="Browse all available tour packages with duration, pricing, and quick booking options. Select a package to view full itinerary and tour details."
      />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </section>
    </div>
  );
}
