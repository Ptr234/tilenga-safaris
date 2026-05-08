"use client";

import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import DestinationHeroVideo from "@/components/DestinationHeroVideo";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Mountain Gorillas",
    detail: "Bwindi Impenetrable Forest",
    image: `${base}/Newstock/Gorrillahd.jpg`,
  },
  {
    name: "Murchison Falls",
    detail: "The World's Most Powerful Waterfall",
    image: `${base}/Newstock/Source of the Nile2.jpg`,
  },
  {
    name: "Queen Elizabeth NP",
    detail: "Kazinga Channel & Tree-Climbing Lions",
    image: `${base}/Newstock/Queen Elizabeth NP.jpg`,
  },
  {
    name: "Mt. Rwenzori",
    detail: "Mountains of the Moon — Africa's Third-Highest Peak",
    image: `${base}/Newstock/Mountain Climbing06Mountain Climbing.jpg`,
  },
  {
    name: "Source of the Nile",
    detail: "Jinja — White Water Rafting & Bungee Jumping",
    image: `${base}/Newstock/Source of the Nile.jpg`,
  },
  {
    name: "Lake Mburo National Park",
    detail: "Zebras, Hippos & 350 Bird Species",
    image: `${base}/Newstock/zebras.jpg`,
  },
  {
    name: "Kibale Forest",
    detail: "Chimpanzee Trekking Capital of the World",
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
  },
  {
    name: "Buganda Kingdom",
    detail: "Uganda's Rich Cultural Heritage",
    image: `${base}/Newpicselection/BugandaKingdom.png`,
  },
];

const packages = [
  {
    name: "Lake Mburo National Park Experience",
    tagline: "Compact gem & smallest park",
    duration: "2 Days",
    price: "From $500 / person (group of 4)",
    description:
      "Lake Mburo National Park is a compact gem and Uganda's smallest park, home to 350 bird species and animals such as zebras, impalas, buffalos, leopards, and hippos. Located conveniently close to the highway, it's easily accessible from Kampala.",
    activities: [
      "Pick up from Kampala",
      "Bicycle Tour",
      "Nature walk",
      "Traveling Back to Kampala",
    ],
    image: `${base}/Newstock/wildanimals.jpg`,
    itineraryUrl: `${base}/pdfs/LAKE-MBURO-NATIONAL-PARK-EXPERIENCE.pdf`,
  },
  {
    name: "5-Day Wildlife Safari to Murchison Falls & Queen Elizabeth",
    tagline: "Waterfalls & Big Four adventure",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "A bespoke adventure through Uganda's extraordinary sights. Visit the world's most powerful waterfalls, see the big four in the largest National Park, and admire sunsets on the Nile and at Kazinga Channel.",
    activities: [
      "World's most powerful waterfalls",
      "Game drive (Big Four)",
      "Safari Boat cruise",
      "Birding",
      "Kazinga Channel sunset",
      "Nature walk",
    ],
    image: `${base}/Newstock/bigelephant.jpg`,
    itineraryUrl: `${base}/pdfs/5-DAY-WILDLIFE-SAFARI-IN-UGANDA-4.pdf`,
  },
  {
    name: "3-Day Gorilla Trekking Experience",
    tagline: "Focus on Bwindi's giants",
    duration: "3 Days",
    price: "From $2,800 (2+ pax)",
    description:
      "A life-changing journey to Bwindi Impenetrable National Park. Trek to see mountain gorillas in one of four sectors (Ruhija, Rushaga, Buhoma, or Nkuringo) with a maximum of 8 people per group.",
    activities: [
      "Landing in Entebbe",
      "Drive to Kisoro - Bwindi",
      "Gorilla trekking",
      "Return to Entebbe",
    ],
    image: `${base}/Newstock/gorrillla.jpg`,
    itineraryUrl: `${base}/pdfs/3-DAYS-GORILLA-TRACKING-IN-UGANDA-ROAD-TRIP-OPTION-1.pdf`,
  },
  {
    name: "8-Day Trip Around Uganda",
    tagline: "The ultimate adventure circuit",
    duration: "8 Days",
    price: "Starting from $3,000",
    description:
      "Experience the best of Uganda: Gorilla trekking, game drives at Queen Elizabeth, and Kazinga Channel boat cruises, combined with adrenaline activities like white water rafting, bungee jumping, and quad biking in Jinja.",
    activities: [
      "Gorilla Trekking",
      "Game drive & Boat cruise",
      "White water rafting/Kayaking",
      "Bungee jumping",
      "Local food tasting",
    ],
    image: `${base}/Newstock/greatbeastmigration.jpg`,
    itineraryUrl: `${base}/pdfs/8-DAY-ROUND-TRIP-AROUND-UGANDA-June.pdf`,
  },
  {
    name: "10-Day Rwenzori Mountains Trekking",
    tagline: "Legendary Margherita Peak ascent",
    duration: "10 Days",
    price: "Starting from $2,000",
    description:
      "Discover the untouched beauty of Rwenzori Mountains National Park. Experience diverse ecosystems and stunning landscapes as you ascend to Margherita Peak, Africa's third-highest point.",
    activities: [
      "Arrival in Entebbe",
      "Transfer to Kasese",
      "Varying ecosystems trek",
      "Margherita Peak Ascent",
    ],
    image: `${base}/Newstock/lioness.jpg`,
    itineraryUrl: "#",
  },
  {
    name: "4-Day Gorilla Trekking Experience",
    tagline: "Extended primate encounter",
    duration: "4 Days",
    price: "From $3,000 (2+ pax)",
    description:
      "Explore Uganda’s extraordinary sights and engage in a life-changing gorilla trekking adventure. This package includes air or road transfer to Kisoro for an immersive Bwindi experience.",
    activities: [
      "Arrival in Entebbe",
      "Fly or drive to Kisoro",
      "Gorilla Trekking",
      "Return to Entebbe",
    ],
    image: `${base}/Newstock/gorrillahigh.jpg`,
    itineraryUrl: "#",
  },
  {
    name: "5-Day Wild Safari Itinerary",
    tagline: "Murchison Falls & Queen Elizabeth",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "Experience Uganda’s extraordinary sights and unlimited adventure. This itinerary focuses on the thundering Murchison Falls and the diverse fauna of Queen Elizabeth National Park's Kazinga Channel.",
    activities: [
      "Murchison Falls visit",
      "Game Drive (Big Four)",
      "Safari Boat Cruise",
      "Kazinga Channel sunset",
      "Nature Walk",
    ],
    image: `${base}/Newstock/safari.jpg`,
    itineraryUrl: `${base}/pdfs/5-DAY-WILDLIFE-SAFARI-IN-UGANDA-4.pdf`,
  },
];

export default function UgandaPage() {
  return (
    <>
      <DestinationHeroVideo 
        videoSrc="/Destinations videos/uganda-hero.mp4"
        title="Uganda"
        subtitle="The Pearl of Africa"
      />

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Best Time
            </span>
            Jan–Mar, Jul–Sep
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Ugandan Shilling
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Time Zone
            </span>
            GMT +3
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Main Airport
            </span>
            Entebbe (EBB)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Africa&apos;s Most Rewarding Safari
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Uganda is a multicultural country in East Africa whose diverse
              landscape spans from the lush rainforests of Bwindi Impenetrable
              National Park — home to half the world&apos;s mountain gorillas —
              to the stunning savannas of Queen Elizabeth National Park and the
              thundering power of Murchison Falls.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Often called the Pearl of Africa, Uganda packs extraordinary
              biodiversity into a compact country: over 1,000 bird species, 13
              primate species including chimpanzees and gorillas, and the Big
              Five roaming its national parks.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              At Tilenga Safaris, we are uniquely positioned in Uganda — our two
              lodges sit at the gates of Murchison Falls and Queen Elizabeth
              National Parks.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src={`${base}/Newstock/Gorrilla.jpg`}
                alt="Mountain Gorillas"
                className="w-full h-52 object-cover hover:scale-110 transition-transform duration-700"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src={`${base}/Newstock/girrafe.jpg`}
                alt="African Wildlife"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src={`${base}/Newstock/bufallo.jpg`}
                alt="Wildlife"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src={`${base}/Newstock/elephantcars.jpg`}
                alt="Game drive"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Uganda Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Places That Leave You Speechless"
              by="word"
              stagger={0.06}
            />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Tour Packages */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-gold/20">
            <div>
              <p className="section-label mb-3">Safari Packages</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Uganda Tour Packages
              </h2>
            </div>
            <Link href="/plan-a-trip" className="btn-primary shrink-0 self-start md:self-end">
              Get a Custom Quote
            </Link>
          </FadeIn>
          <StaggerGrid className="package-grid">
            {packages.map((pkg, i) => (
              <StaggerItem key={pkg.name}>
                <div className="package-card group">
                  <img src={pkg.image} alt={pkg.name} className="package-card-img" />
                  <div className="package-card-overlay" />
                  <span className="package-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="package-card-duration">{pkg.duration}</span>

                  <div className="package-card-body">
                    <p className="package-card-tagline">{pkg.tagline}</p>
                    <h3 className="package-card-title">{pkg.name}</h3>
                    <div className="package-card-rule" />

                    <div className="package-card-description-wrap">
                      <div><p className="package-description">{pkg.description}</p></div>
                    </div>

                    <div className="package-features">
                      {pkg.activities.map((act) => (
                        <span key={act} className="package-feature-pill">
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {act}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-cream/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-serif italic text-gold text-sm">{pkg.price}</span>
                        <Link href="/plan-a-trip" className="package-cta">
                          Enquire
                          <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                      </div>
                      <a 
                        href={pkg.itineraryUrl} 
                        className="flex items-center justify-center gap-2 w-full py-2 border border-gold/30 text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-forest transition-all duration-300"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Itinerary
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Ready to Explore Uganda?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Let our Uganda specialists tailor your perfect itinerary — gorillas,
            parks, or both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-a-trip" className="btn-outline">
              Plan My Trip
            </Link>
            <Link href="/lodges" className="btn-ghost">
              Our Uganda Lodges
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
