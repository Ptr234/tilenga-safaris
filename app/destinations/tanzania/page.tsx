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
    name: "Serengeti",
    detail: "Endless Plains & the Great Migration",
    image: `${base}/Newstock/serengeti-national-park.jpg`,
  },
  {
    name: "Ngorongoro Crater",
    detail: "UNESCO World Heritage — Big Five & Black Rhino",
    image: `${base}/Newstock/ngorongoro-crater.jpg`,
  },
  {
    name: "Zanzibar",
    detail: "Stone Town, Spice Tours & Crystal-Clear Waters",
    image: `${base}/Newstock/Zanzibar Beaches.jpg`,
  },
  {
    name: "Mount Kilimanjaro",
    detail: "Africa's Rooftop at 5,895m",
    image: `${base}/Newstock/Mountain Climbing06Mountain Climbing.jpg`,
  },
  {
    name: "Ruaha National Park",
    detail: "Tanzania's Largest & Most Wild Park",
    image: `${base}/Newstock/ruaha-national-park.jpg`,
  },
  {
    name: "Tarangire National Park",
    detail: "Baobab Giants & Elephant Herds",
    image: `${base}/Newstock/tarangire-national-park.jpg`,
  },
];

const packages = [
  {
    name: "Zanzibar Beach Holiday (5N/6D)",
    tagline: "Snorkeling & turtles at Nungwi",
    duration: "6 Days / 5 Nights",
    price: "Starting from $1200",
    description:
      "Includes Stone Town, Prison Island, Safari Blue, Mnemba snorkeling, and swimming with turtles at Nungwi Natural Aquarium.",
    activities: [
      "Arrive Zanzibar Airport",
      "Stone Town Walking Tour",
      "Safari Blue Full-Day Trip",
      "Mnemba Snorkeling",
      "Nungwi Turtle Swimming",
    ],
    image: `${base}/Newstock/safari.jpg`,
    itineraryUrl: `${base}/pdfs/ZANZIBAR-BEACH-HOLIDAY-AND-SNORKELING-1.pdf`,
  },
  {
    name: "Zanzibar Beach Holiday (6N/7D)",
    tagline: "Dolphin swimming & Jozani forest",
    duration: "7 Days / 6 Nights",
    price: "Starting from $1200",
    description:
      "A complete island escape featuring Prison Island, spice tours, Jozani Forest, Safari Blue, and dolphin swimming encounters.",
    activities: [
      "Arrive Zanzibar Airport",
      "Stone Town & Prison Island",
      "Safari Blue Full-Day",
      "Dolphin & Jozani Forest Tour",
      "Beach Relaxation",
    ],
    image: `${base}/Newstock/cheetah.jpg`,
    itineraryUrl: `${base}/pdfs/ZANZIBAR-BEACH-HOLIDAY-6-NIGHTS-AND-7-DAYS-2.pdf`,
  },
  {
    name: "12-Day Safari Tour Around Kenya & Tanzania",
    tagline: "Grand East African circuit",
    duration: "12 Days",
    price: "Starting from $3000 (group of 4)",
    description:
      "Showcasing Ngorongoro Crater, the Big Five, rare Black Rhino, Serengeti's endless plains, Masai Mara, and authentic Maasai culture.",
    activities: [
      "Lake Nakuru & Masai Mara",
      "Serengeti National Park",
      "Ngorongoro Crater Tour",
      "Arusha & Amboseli",
    ],
    image: `${base}/Newstock/zebras.jpg`,
    itineraryUrl: `${base}/pdfs/12-DAY-SAFARI-TOUR-AROUND-KENYA-AND-TANZANIA-1-.pdf`,
  },
];

export default function TanzaniaPage() {
  return (
    <>
      <DestinationHeroVideo 
        videoSrc="/Destinations videos/tanzania-hero.mp4"
        title="Tanzania"
        subtitle="Serengeti & Zanzibar"
      />

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Best Time
            </span>
            Dec–Mar, Jun–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Tanzanian Shilling
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Time Zone
            </span>
            GMT +3
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Airports
            </span>
            Arusha (JRO) / Dar (DAR)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Africa&apos;s Most Diverse Safari Land
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Tanzania is a multicultural country in East Africa whose diverse
              landscape spans from the majestic snow-capped Mount Kilimanjaro to
              the vast plains of the Serengeti — home to the world-renowned
              Great Migration — and the crystal-clear waters of the Zanzibar
              Archipelago.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Ngorongoro Crater, a UNESCO World Heritage Site, shelters the
              highest density of wildlife in Africa within its ancient volcanic
              walls. Over 1.5 million wildebeest make their annual crossing in
              one of nature&apos;s greatest spectacles.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              After your safari, unwind on Zanzibar&apos;s pristine white
              beaches — ancient Stone Town, spice tours, snorkeling with whale
              sharks, and the warm azure waters of the Indian Ocean.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src={`${base}/Newstock/Mountain Climbing06Mountain Climbing.jpg`}
                alt="Mount Kilimanjaro"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src={`${base}/Newstock/Zanzibar Beaches.jpg`}
                alt="Zanzibar beach"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src={`${base}/Newstock/wildanimals.jpg`}
                alt="Ngorongoro wildlife"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src={`${base}/Newstock/bigelephant.jpg`}
                alt="Serengeti elephants"
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
            <p className="section-label text-gold">Tanzania Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Wonder at Every Horizon"
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
                Tanzania Tour Packages
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
            Ready to Explore Tanzania?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Serengeti game drives by day, Zanzibar sunsets by evening. Let us
            build your perfect Tanzania itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan My Tanzania Safari
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
