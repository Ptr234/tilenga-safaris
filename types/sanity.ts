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

export interface Itinerary {
  _id: string;
  packageName: string;
  category?: string;
  description?: string;
  file: {
    _type: "file";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
}
