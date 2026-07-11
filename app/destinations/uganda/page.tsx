"use client";

import { useState } from "react";
import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import ItineraryDownloadPopup from "@/components/ItineraryDownloadPopup";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";
import useSiteImages from "@/lib/useSiteImages";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";
import { LANDSCAPE_4_3, WIDE_16_9 } from "@/lib/imageDimensions";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Mountain Gorillas",
    detail: "Bwindi Impenetrable Forest",
    imageKey: "hotspotUgandaMountainGorillas",
    image: `${base}/photos/newstock/Gorrillahd.jpg`,
  },
  {
    name: "Murchison Falls",
    detail: "The World's Most Powerful Waterfall",
    imageKey: "hotspotUgandaMurchisonFalls",
    image:
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Queen Elizabeth NP",
    detail: "Kazinga Channel & Tree-Climbing Lions",
    imageKey: "hotspotUgandaQueenElizabethNP",
    image: `${base}/photos/newstock/Queen-Elizabeth-NP.jpg`,
  },
  {
    name: "Mt. Rwenzori",
    detail: "Mountains of the Moon — Africa's Third-Highest Peak",
    imageKey: "hotspotUgandaMtRwenzori",
    image: `${base}/photos/newstock/Mountain-Climbing06Mountain-Climbing.jpg`,
  },
  {
    name: "Source of the Nile",
    detail: "Jinja — White Water Rafting & Bungee Jumping",
    imageKey: "hotspotUgandaSourceOfTheNile",
    image: `${base}/photos/newstock/Source-of-the-Nile.jpg`,
  },
  {
    name: "Lake Mburo National Park",
    detail: "Zebras, Hippos & 350 Bird Species",
    imageKey: "hotspotUgandaLakeMburoNP",
    image: `${base}/photos/newstock/zebras-(1).jpg`,
  },
  {
    name: "Kibale Forest",
    detail: "Chimpanzee Trekking Capital of the World",
    imageKey: "hotspotUgandaKibaleForest",
    image: `${base}/photos/newstock/touristsmovinginforest.jpg`,
  },
  {
    name: "Buganda Kingdom",
    detail: "Uganda's Rich Cultural Heritage",
    imageKey: "hotspotUgandaBugandaKingdom",
    image: `${base}/photos/newstock/BugandaKingdom.png`,
  },
];

const packages = [
  {
    name: "5-Day Wildlife Safari to Murchison Falls & Queen Elizabeth",
    tagline: "Waterfall and wildlife adventure",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "Comprehensive safari combining the world’s most powerful waterfalls with Uganda’s largest national park — game drives, boat cruises, birding, nature walks, and sunset viewing.",
    activities: [
      "Waterfall visits",
      "Game drives",
      "Boat cruises",
      "Nature walks",
      "Sunset viewing",
    ],
    image: `${base}/photos/newstock/Big-Five-Game-Drives.jpg`,
    downloadUrl: `${base}/photos/newstock/5-DAY-WILDLIFE-SAFARI-IN-UGANDA-4.pdf`,
    itinerary: [
      {
        days: "Days 1–2",
        desc: "Depart Kampala for Murchison Falls; hike to the top of the falls, afternoon game drive.",
      },
      {
        days: "Days 3–4",
        desc: "Boat cruise on the Victoria Nile, drive to Queen Elizabeth NP, Big Four game drives.",
      },
      {
        days: "Day 5",
        desc: "Kazinga Channel boat cruise, Rift Valley sunset viewing, return journey.",
      },
    ],
  },
  {
    name: "3-Day Gorilla Tracking in Uganda",
    tagline: "Mountain gorilla immersion",
    duration: "3 Days",
    price: "From $2,800 (2+ pax)",
    description:
      "Trek into Bwindi Impenetrable National Park — across four sectors (Ruhija, Rushaga, Buhoma, Nkuringo) — for a life-changing hour with mountain gorilla families. Maximum 8 people per gorilla family.",
    activities: [
      "Gorilla trekking in Bwindi",
      "Four sector options",
      "Forest walk",
      "Community visit",
    ],
    image: `${base}/photos/newstock/gorrillla.jpg`,
    downloadUrl: `${base}/itineraries/3 DAYS GORILLA TRACKING IN UGANDA -  TILENGA SAFARIS 2026.docx`,
    itinerary: [
      {
        days: "Day 1",
        desc: "Fly or drive to Bwindi; orientation briefing with ranger team and overnight at forest lodge.",
      },
      {
        days: "Day 2",
        desc: "Morning gorilla trek deep into the impenetrable forest — one unforgettable hour with a gorilla family.",
      },
      {
        days: "Day 3",
        desc: "Batwa cultural community visit and forest walk, return transfer.",
      },
    ],
  },
];

export default function UgandaPage() {
  const siteImages = useSiteImages();
  const getSiteImageUrlLocal = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => getSiteImageUrl(siteImages, key, fallback, dimensions);

  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activePackage, setActivePackage] = useState("");

  const handleDownload = (pkgName: string) => {
    setActivePackage(pkgName);
    setIsDownloadOpen(true);
  };

  const handleEnquiry = (pkgName: string) => {
    setActivePackage(pkgName);
    setIsEnquiryOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-[8000ms]"
          style={{
            backgroundImage: `url('${getSiteImageUrlLocal("destinationUgandaHero", `${base}/photos/newstock/UgandaDestinationHero.jpg`, WIDE_16_9)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">East Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Uganda" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              The Pearl of Africa
            </p>
          </FadeIn>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80"
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
                src={getSiteImageUrlLocal(
                  "destinationUgandaSourceOfNile2",
                  `${base}/photos/newstock/Source-of-the-Nile2.jpg`,
                  LANDSCAPE_4_3,
                )}
                alt="Source of the Nile, Uganda"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&q=80"
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
                src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=500&q=80"
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
            <Link
              href="/plan-a-trip"
              className="btn-primary shrink-0 self-start md:self-end"
            >
              Get a Custom Quote
            </Link>
          </FadeIn>
          <div className="space-y-20">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="grid md:grid-cols-2 gap-12 items-start border-b border-gold/10 pb-20 last:border-0 last:pb-0"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {pkg.duration}
                  </span>
                </div>
                <div>
                  <p className="section-label mb-2">{pkg.tagline}</p>
                  <h3 className="font-serif text-3xl text-forest mb-4">
                    {pkg.name}
                  </h3>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="text-stone font-sans text-sm leading-relaxed mb-8">
                    {pkg.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {pkg.itinerary.map((item) => (
                      <div
                        key={item.days}
                        className="flex gap-4 border-t border-gold/10 pt-4"
                      >
                        <span className="text-gold text-[10px] uppercase tracking-widest font-sans w-20 shrink-0 pt-0.5">
                          {item.days}
                        </span>
                        <span className="text-stone font-sans text-sm leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pkg.activities.map((act) => (
                      <span
                        key={act}
                        className="text-[10px] uppercase tracking-widest font-sans border border-gold/30 text-forest/70 px-3 py-1.5 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {act}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-serif italic text-gold text-sm">
                      {pkg.price}
                    </span>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleDownload(pkg.name)}
                        className="btn-outline !px-6 !py-2.5 text-[11px]"
                      >
                        Download Detailed Itinerary
                      </button>
                      <button
                        onClick={() => handleEnquiry(pkg.name)}
                        className="btn-primary !px-6 !py-2.5 text-[11px]"
                      >
                        Enquire About This Package
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <FadeIn className="mt-20 p-8 border border-gold/20 bg-forest-dark/5 text-center">
            <h4 className="font-serif text-2xl text-forest mb-4">
              Looking for something else?
            </h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              We have a wide range of additional Uganda itineraries, including
              primate-specific treks, bird-watching tours, and cross-border
              experiences. All our tours can be delivered upon request and
              tailored to your specific interests.
            </p>
            <Link
              href="/plan-a-trip"
              className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"
            >
              Request More Itineraries &rarr;
            </Link>
          </FadeIn>
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
              Tailor Your Journey
            </Link>
            <Link href="/lodges" className="btn-ghost">
              Our Uganda Lodges
            </Link>
          </div>
        </FadeIn>
      </section>

      <ItineraryDownloadPopup
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        packageName={activePackage}
      />

      <PackageEnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageName={activePackage}
      />
    </>
  );
}
