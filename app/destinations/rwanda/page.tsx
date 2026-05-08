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
    name: "Volcanoes National Park",
    detail: "Mountain Gorilla Trekking in the Virungas",
    image: `${base}/gorrilas/gorrilas21.jpg`,
  },
  {
    name: "Nyungwe Forest",
    detail: "Ancient Canopy & Chimpanzee Sanctuary",
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
  },
  {
    name: "Lake Kivu",
    detail: "Volcanic Crater Lake on Congo Border",
    image: `${base}/Newstock/Source of the Nile.jpg`,
  },
  {
    name: "Kigali Genocide Memorial",
    detail: "A Powerful Tribute to History & Remembrance",
    image: `${base}/Newstock/wildanimals.jpg`,
  },
  {
    name: "Kigali",
    detail: "Africa's Cleanest, Most Vibrant Capital",
    image: `${base}/Newstock/safari.jpg`,
  },
];

const packages = [
  {
    name: "8-Day Visit Rwanda",
    tagline: "Gorillas & cultural immersion",
    duration: "8 Days",
    price: "Enquire for Rates",
    description:
      "Explore Rwanda’s extraordinary sights including gorilla tracking in Volcanoes National Park, Kigali city tours, and Lake Kivu boat rides.",
    activities: [
      "Gorilla Tracking",
      "Kigali City Tour",
      "Genocide Memorial",
      "Golden Monkey Tracking",
      "Lake Kivu Boat Ride",
      "Cultural Village",
      "Local Food Tasting",
    ],
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
    itineraryUrl: "#", // Add specific Rwanda PDF if available, or keep as #
  },
];

export default function RwandaPage() {
  return (
    <>
      <DestinationHeroVideo 
        videoSrc="/Destinations videos/rwanda-hero.mp4"
        title="Rwanda"
        subtitle="Land of a Thousand Hills"
      />

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Oct</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Rwandan Franc</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Kigali (KGL)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Where Gorillas Roam the Misty Mountains</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Rwanda is a small but extraordinary country in East Africa whose landscape spans from
              the lush, rolling hills of its famed &apos;Land of a Thousand Hills&apos; to the breathtaking
              Volcanoes National Park — home to the endangered mountain gorillas — and the serene
              waters of Lake Kivu.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Gorilla trekking in Rwanda is widely considered the pinnacle of African wildlife
              experiences. With only around 1,000 mountain gorillas remaining in the wild,
              each encounter is profoundly rare and deeply moving.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              Rwanda is also one of Africa&apos;s cleanest, safest, and most progressive nations —
              Kigali regularly ranked among Africa&apos;s most liveable cities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src={`${base}/gorrilas/gorillar.webp`} alt="Mountain Gorillas in mist" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src={`${base}/Newstock/Gorrillahd.jpg`} alt="Mountain Gorilla" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src={`${base}/Newstock/gorrillla.jpg`} alt="Gorillas in forest" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src={`${base}/Newstock/Gorrilla.jpg`} alt="Mountain Gorilla encounter" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Rwanda Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="A Land That Inspires Awe" by="word" stagger={0.06} />
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
                Rwanda Tour Packages
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
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Meet the Gorillas?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Rwanda&apos;s mountain gorillas await. Let our specialists secure your permits and design your perfect itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Rwanda Safari</Link>
        </FadeIn>
      </section>
    </>
  );
}
