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
    name: "Kruger National Park",
    detail: "Africa's Premier Big Five Safari Reserve",
    image: `${base}/Newstock/safari.jpg`,
  },
  {
    name: "Cape Town",
    detail: "Table Mountain & the Atlantic Seaboard",
    image: `${base}/Newstock/cape-town.jpg`,
  },
  {
    name: "The Winelands",
    detail: "Stellenbosch & Franschhoek Heritage Estates",
    image: `${base}/Newstock/splendifd.jpg`,
  },
  {
    name: "Table Mountain",
    detail: "Iconic Flat-Topped Mountain Landmark",
    image: `${base}/Newstock/table-mountain.jpg`,
  },
  {
    name: "Hartbeespoort",
    detail: "Scenic Boat Cruises & Aerial Cableway",
    image: `${base}/Newstock/Boat Safaris08Boat Safaris.jpg`,
  },
];

const packages = [
  {
    name: "8-Day South Africa Discovery",
    tagline: "From the Highveld to the Cape",
    duration: "8 Days / 7 Nights",
    price: "Enquire for Bespoke Pricing",
    description:
      "A comprehensive journey through South Africa’s most iconic landscapes. Experience the raw wilderness of Kruger National Park, the historical depth of Johannesburg and Soweto, and the cosmopolitan beauty of Cape Town.",
    activities: [
      "Kruger NP Guided Game Drives",
      "Table Mountain Cableway",
      "Cape of Good Hope Tour",
      "Johannesburg History Tour",
      "Soweto & Apartheid Museum",
      "Bespoke Culinary Experiences",
    ],
    image: `${base}/Newstock/safari.jpg`,
    itineraryUrl: "#", 
  },
];

export default function SouthAfricaPage() {
  return (
    <>
      <DestinationHeroVideo 
        videoSrc="/Destinations videos/south-africa-hero.mp4"
        title="South Africa"
        subtitle="A World in One Country"
        tag="Southern Africa"
      />

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Sep (Safari), Nov–Mar (Cape)</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>South African Rand</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Gateways</span>Johannesburg (JNB) / Cape Town (CPT)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">The Pinnacle of African Diversity</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              South Africa is often described as &ldquo;A World in One Country,&rdquo; offering an unparalleled
              variety of experiences. From the thrumming energy of Johannesburg to the serene
              vineyards of the Cape, and from the thundering surf of the Wild Coast to the
              ancient silence of the Karoo.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              In the northeast, Kruger National Park stands as a titan of conservation. This
              vast sanctuary provides an intimate theatre for the Big Five, where expert guides
              unveil the complex rhythms of the bush across two million hectares of wild terrain.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              At the continent&apos;s edge, Cape Town sits at the intersection of two oceans. 
              Voted repeatedly as one of the world&apos;s most beautiful cities, it offers a 
              sophisticated blend of award-winning gastronomy, rich history, and dramatic
              natural landmarks like the legendary Table Mountain.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src={`${base}/Newstock/safari.jpg`} alt="Kruger Wildlife" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src={`${base}/Newstock/Zanzibar Beaches.jpg`} alt="Coastal Landscape" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src={`${base}/Newstock/wildanimals.jpg`} alt="South African Savannah" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src={`${base}/Newstock/bigelephant.jpg`} alt="Majestic Elephant" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Iconic Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="Grandeur in Every Direction" by="word" stagger={0.06} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Tour Packages */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-gold/20">
            <div>
              <p className="section-label mb-3">Curated Journeys</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                South Africa Itineraries
              </h2>
            </div>
            <Link href="/plan-a-trip" className="btn-primary shrink-0 self-start md:self-end">
              Request Custom Itinerary
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
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Experience the Rainbow Nation</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the peak of Table Mountain to the deep bushveld of the Kruger — let us curate your definitive South African adventure.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Start Your Journey</Link>
        </FadeIn>
      </section>
    </>
  );
}
