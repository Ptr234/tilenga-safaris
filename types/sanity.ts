export interface SanityImage {
  _type: 'image';
  asset: {
    _type: 'reference';
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

export interface Destination {
  name: string;
  tag: string;
  description: string;
  image: SanityImage;
  href: string;
  num?: string;
  bestTime?: string;
  hotspots?: string[];
}

export interface Partner {
  name: string;
  logo: SanityImage;
  link: string;
}
