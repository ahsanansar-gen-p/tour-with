import toursData from "@/data/tours.json";
import type { Tour } from "@/types/tour";

const tours = toursData as Tour[];

export function getAllTours(): Tour[] {
  return tours;
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
