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

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Sossusvlei",
    detail: "World's Highest Red Sand Dunes",
    image:
      "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=900&q=85",
  },
  {
    name: "Etosha National Park",
    detail: "Big Five on the Salt Pan",
    image:
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Skeleton Coast",
    detail: "Shipwrecks, Seals & Desert Lion",
    image: `${base}/photos/newstock/Skeleton-Coast.jpg`,
  },
  {
    name: "Fish River Canyon",
    detail: "Africa's Largest Canyon",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=85",
  },
  {
    name: "Damaraland",
    detail: "Desert-Adapted Elephant & Rhino",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=85",
  },
  {
    name: "Namib Desert",
    detail: "Earth's Oldest Desert — Star Trails",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=85",
  },
  {
    name: "Swakopmund",
    detail: "Desert Meets Ocean — Adventure Hub",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=85",
  },
  {
    name: "Himba Villages",
    detail: "Ancient Culture of the Kaokoveld",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=85",
  },
];

const packages = [
  {
    name: "8-Day Namibia Desert Safari",
    tagline: "Dunes, wildlife & vast skies",
    duration: "8 Days",
    price: "From $2,800 / person",
    description:
      "From the towering red dunes of Sossusvlei to Etosha's wildlife-rich salt pan and the raw Atlantic shores of Swakopmund — an epic journey through one of Africa's most dramatic landscapes.",
    activities: [
      "Sossusvlei dunes",
      "Etosha game drives",
      "Swakopmund adventure",
      "Desert stargazing",
    ],
    image:
      "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=700&q=85",
    itinerary: [
      {
        days: "Days 1–2",
        desc: "Arrive Windhoek; drive south to Sossusvlei, sunset view over the ancient red dunes.",
      },
      {
        days: "Days 3–5",
        desc: "Dawn dune climb & Dead Vlei photography; drive to Swakopmund via Walvis Bay lagoon.",
      },
      {
        days: "Days 6–8",
        desc: "Swakopmund — sandboarding and marine safari; Etosha NP game drives, departure Windhoek.",
      },
    ],
  },
  {
    name: "10-Day Namibia Full Circuit",
    tagline: "Complete Namibia experience",
    duration: "10 Days",
    price: "From $3,500 / person",
    description:
      "Explore Namibia end to end — Skeleton Coast wildlife, Damaraland's desert elephants, the iconic Sossusvlei dunes, and Fish River Canyon — Africa's largest canyon.",
    activities: [
      "Skeleton Coast",
      "Damaraland rhino tracking",
      "Sossusvlei",
      "Fish River Canyon",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
    itinerary: [
      {
        days: "Days 1–2",
        desc: "Arrive Windhoek; drive north to the raw Atlantic shores of the Skeleton Coast.",
      },
      {
        days: "Days 3–5",
        desc: "Damaraland — desert-adapted elephant tracking and black rhino conservation walks.",
      },
      {
        days: "Days 6–8",
        desc: "Sossusvlei dunes and Dead Vlei; Namib Desert night under a billion stars.",
      },
      {
        days: "Days 9–10",
        desc: "Fish River Canyon viewpoints and hiking, return Windhoek, departure.",
      },
    ],
  },
];

export default function NamibiaPage() {
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
            backgroundImage: `url('${getSiteImageUrlLocal("destinationNamibiaHero", `${base}/photos/newstock/Namibia%20Desert.jpg`)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">Southern Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Namibia" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              Desert &amp; Dunes
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
            May–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Namibian Dollar
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Time Zone
            </span>
            GMT +2
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Main Airport
            </span>
            Windhoek (WDH)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Earth&apos;s Most Dramatic Wilderness
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Namibia is a land of extraordinary contrasts — where ancient red
              dunes meet a diamond-clear Atlantic, where desert-adapted
              elephants roam landscapes unchanged for millennia, and where the
              Milky Way blazes overhead with unmatched clarity.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Sossusvlei&apos;s iconic dunes, some rising over 300 metres, glow
              copper and crimson at dawn — a photographer&apos;s dream and one
              of the world&apos;s most surreal landscapes. Etosha National Park,
              built around a vast salt pan, draws lion, leopard, elephant, and
              rhino to its waterholes in extraordinary concentrations.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              The Skeleton Coast, Fish River Canyon, and Damaraland complete a
              country that rewards those who venture beyond the ordinary — a
              true wilderness of silence, scale, and wonder.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src={getSiteImageUrlLocal(
                  "destinationNamibiaDesert",
                  `${base}/photos/newstock/Namibia-Desert.jpg`,
                )}
                alt="Sossusvlei dunes"
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
                  "destinationNamibiaElephantFamily",
                  `${base}/photos/newstock/Elephantfamily.jpg`,
                )}
                alt="Etosha wildlife"
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
                  "destinationNamibiaSkeletonCoast",
                  `${base}/photos/newstock/Skeleton-Coast.jpg`,
                )}
                alt="Skeleton Coast"
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
                  "destinationNamibiaAfricanLandscape",
                  `${base}/photos/newstock/AfricanLandscape.jpg`,
                )}
                alt="Desert landscape"
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
            <p className="section-label text-gold">Namibia Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="A Landscape Like No Other"
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
                Namibia Tour Packages
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
              Explore More of Namibia
            </h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              We offer several other Namibia itineraries, including self-drive
              adventures, photography workshops in the desert, and multi-country
              southern Africa expeditions. All tours can be delivered upon
              request.
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
            Ready to Explore Namibia?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From Sossusvlei&apos;s dunes to Etosha&apos;s wildlife — let us
            craft your perfect Namibia journey.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan My Namibia Safari
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
