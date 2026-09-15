export interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface Lodge {
  name: string;
  location: string;
  description: string;
  image: SanityImage;
  href: string;
  tag: string;
  stats?: { value: string; label: string }[];
  amenities?: string[];
}

export interface Experience {
  title: string;
  description: string;
  image: SanityImage;
}

export interface DestinationHotspot {
  name: string;
  detail?: string;
  image?: SanityImage;
}

export interface Destination {
  name: string;
  tag: string;
  description: string;
  image: SanityImage;
  href: string;
  num?: string;
  bestTime?: string;
  hotspots?: DestinationHotspot[];
  overviewGallery?: (SanityImage & { alt?: string })[];
}

export interface Partner {
  name: string;
  logo: SanityImage;
  link: string;
}

export interface SiteImage {
  _id: string;
  key: string;
  category?: string;
  title?: string;
  altText?: string;
  image: SanityImage;
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  quote: string;
  tag?: string;
  _createdAt: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface ItineraryDestinationRef {
  name: string;
  href: string;
}

export interface ItineraryDay {
  dayLabel: string;
  title?: string;
  body: string;
}

export interface ItineraryRelated {
  title: string;
  slug: SanitySlug;
  heroImage?: SanityImage;
  duration?: string;
  price?: string;
}

export interface Itinerary {
  _id: string;
  title: string;
  slug: SanitySlug;
  tagline?: string;
  destinations: ItineraryDestinationRef[];
  duration: string;
  price: string;
  priceFrom?: number;
  summary: string;
  heroImage?: SanityImage;
  days?: ItineraryDay[];
  activities?: string[];
  seoTitle?: string;
  seoDescription?: string;
  file?: SanityFile;
  relatedItineraries?: ItineraryRelated[];
}
