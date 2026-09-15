import { groq } from "next-sanity";

export const lodgesQuery = groq`*[_type == "lodge"] | order(_createdAt asc) {
  name,
  location,
  description,
  image,
  href,
  tag,
  stats,
  amenities
}`;

export const experiencesQuery = groq`*[_type == "experience"] | order(_createdAt asc) {
  title,
  description,
  image
}`;

export const destinationsQuery = groq`*[_type == "destination"] | order(_createdAt asc) {
  name,
  tag,
  description,
  image,
  href,
  num,
  bestTime,
  hotspots,
  overviewGallery
}`;

export const partnersQuery = groq`*[_type == "partner"] | order(_createdAt asc) {
  name,
  logo,
  link
}`;

export const siteImagesQuery = groq`*[_type == "siteImage"] | order(_createdAt asc) {
  _id,
  key,
  category,
  title,
  altText,
  image
}`;

export const itinerariesQuery = groq`*[_type == "itinerary" && published != false] | order(_createdAt asc) {
  _id,
  title,
  slug,
  tagline,
  destinations[]->{name, href},
  duration,
  price,
  summary,
  heroImage,
  activities,
  file
}`;

export const itinerarySlugsQuery = groq`*[_type == "itinerary" && published != false && defined(slug.current)].slug.current`;

export const itineraryBySlugQuery = groq`*[_type == "itinerary" && slug.current == $slug && published != false][0] {
  _id,
  title,
  slug,
  tagline,
  destinations[]->{name, href},
  duration,
  price,
  priceFrom,
  summary,
  heroImage,
  days,
  activities,
  seoTitle,
  seoDescription,
  file,
  relatedItineraries[]->{title, slug, heroImage, duration, price}
}`;

export const reviewsQuery = groq`*[_type == "review" && published == true] | order(_createdAt desc) [0...6] {
  _id,
  name,
  rating,
  quote,
  tag,
  _createdAt
}`;
