export type TourItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  price: number;
  location: string;
  featuredImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  facilities: string[];
  itinerary: TourItineraryDay[];
  preparations: string[];
  precautions: string[];
  terms: string[];
  guideId: string;
};
