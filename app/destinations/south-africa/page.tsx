"use client";

import { useState } from "react";
import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import ItineraryDownloadPopup from "@/components/ItineraryDownloadPopup";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";
import useSiteImages from "@/lib/useSiteImages";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Kruger National Park",
    detail: "Ultimate Big Five Territory",
    image: `${base}/photos/newstock/wildanimals.jpg`,
  },
  {
    name: "Cape Town",
    detail: "Table Mountain & Coastal Magic",
    image: `${base}/photos/newstock/Cape-Town.jpg`,
  },
  {
    name: "Cape Winelands",
    detail: "Stellenbosch & Franschhoek Vineyards",
    image: `${base}/photos/newstock/splendifd.jpg`,
  },
  {
    name: "Garden Route",
    detail: "Scenic Cliffs & Whale Watching",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&q=85",
  },
  {
    name: "Table Mountain",
    detail: "Iconic Flat-Top Landmark",
    image: `${base}/photos/newstock/Table-Mountain.jpg`,
  },
  {
    name: "Boulders Beach",
    detail: "African Penguin Colony",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=900&q=85",
  },
];

const packages = [
  {
    name: "7-Day Cape & Kruger Essential",
    tagline: "City soul and wild heart",
    duration: "7 Days",
    price: "From $2,500 / person",
    description:
      "The perfect South Africa introduction — combine the cosmopolitan flair of Cape Town and the Winelands with the raw adrenaline of a Big Five safari in Kruger.",
    activities: [
      "Table Mountain cableway",
      "Cape Point tour",
      "Kruger game drives",
      "Winelands tasting",
    ],
    image: `${base}/photos/newstock/Cape-Town.jpg`,
    itinerary: [
      {
        days: "Days 1–3",
        desc: "Arrive Cape Town; Table Mountain sunset, Cape Peninsula scenic drive and penguin visit.",
      },
      {
        days: "Day 4",
        desc: "Full day in the Cape Winelands — estate tastings and historic Stellenbosch wander.",
      },
      {
        days: "Days 5–7",
        desc: "Fly to Kruger; open-vehicle game drives for the Big Five, wilderness boma dinner, departure.",
      },
    ],
  },
  {
    name: "10-Day Garden Route Journey",
    tagline: "The ultimate coastal road trip",
    duration: "10 Days",
    price: "From $3,200 / person",
    description:
      "A scenic self-drive or guided journey from Cape Town through the whales of Hermanus, the lagoons of Knysna, and the elephants of Addo.",
    activities: [
      "Hermanus whale watching",
      "Knysna Lagoon cruise",
      "Addo Elephant Park",
      "Tsitsikamma canopy",
    ],
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=85",
    itinerary: [
      {
        days: "Days 1–3",
        desc: "Cape Town explorations; drive to Hermanus for world-class land-based whale watching.",
      },
      {
        days: "Days 4–6",
        desc: "Garden Route transit to Knysna; lagoon sailing and oyster tasting in the heads.",
      },
      {
        days: "Days 7–10",
        desc: "Tsitsikamma forest walks and Addo Elephant Park safari, return Cape Town or fly from Gqeberha.",
      },
    ],
  },
];

export default function SouthAfricaPage() {
  const siteImages = useSiteImages();
  const getSiteImageUrlLocal = (key: string, fallback: string) =>
    getSiteImageUrl(siteImages, key, fallback);

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
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url('${getSiteImageUrlLocal("destinationSouthAfricaHero", `${base}/photos/newstock/Table%20Mountain.jpg`)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">Southern Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText
              text="South Africa"
              by="char"
              stagger={0.04}
              delay={0.2}
            />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              A World in One Country
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
            Year-round (varies by region)
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            South African Rand
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Time Zone
            </span>
            GMT +2
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Airports
            </span>
            Cape Town (CPT) / Joburg (JNB)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Diversity Beyond Imagination
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              South Africa is a destination of staggering variety — a place
              where you can go from a world-class vineyard to a wild savanna
              within hours, and where the rugged Atlantic meets the warm Indian
              Ocean.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Cape Town, often voted the world&apos;s most beautiful city, is
              defined by the iconic Table Mountain and its stunning coastline.
              Just a short drive away, the Cape Winelands offer gourmet
              experiences in landscapes of rolling green mountains.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              In the north, the Greater Kruger ecosystem provides one of the
              world&apos;s most dense concentrations of wildlife, home to all
              the Big Five and renowned for its luxury private lodges and expert
              field guides.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src={getSiteImageUrlLocal(
                  "destinationSouthAfricaCapeTown",
                  `${base}/photos/newstock/Cape-Town.jpg`,
                )}
                alt="Cape Town Coast"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src={getSiteImageUrlLocal(
                  "destinationSouthAfricaWildanimals",
                  `${base}/photos/newstock/wildanimals.jpg`,
                )}
                alt="Safari in Kruger"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src={getSiteImageUrlLocal(
                  "destinationSouthAfricaTableMountain",
                  `${base}/photos/newstock/Table-Mountain.jpg`,
                )}
                alt="Table Mountain"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src={getSiteImageUrlLocal(
                  "destinationSouthAfricaSplendifd",
                  `${base}/photos/newstock/splendifd.jpg`,
                )}
                alt="Winelands Estate"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">South Africa Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="The Full Spectrum of Africa"
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
                South Africa Tour Packages
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
              Discover the Rainbow Nation
            </h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              We provide several other South Africa itineraries, including
              luxury rail journeys, shark cage diving adventures, and coastal
              explorations through the Garden Route. All tours can be delivered
              upon request and custom tailored.
            </p>
            <Link
              href="/plan-a-trip"
              className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"
            >
              Request Custom Itinerary &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Ready to Explore South Africa?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the peak of Table Mountain to the lions of Kruger — let us
            design your perfect South Africa itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Tailor My South Africa Trip
          </Link>
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
