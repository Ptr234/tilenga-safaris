"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import ItineraryDownloadPopup from "@/components/ItineraryDownloadPopup";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";
import useSiteImages from "@/lib/useSiteImages";
import useDestinationGallery from "@/lib/useDestinationGallery";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";
import { urlForImage } from "@/lib/sanity.image";
import { LANDSCAPE_4_3, WIDE_16_9, PORTRAIT_3_4 } from "@/lib/imageDimensions";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fallbackHotspots = [
  {
    name: "Volcanoes National Park",
    detail: "Home of the Mountain Gorillas",
    imageKey: "hotspotRwandaVolcanoesNP",
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=85",
  },
  {
    name: "Akagera National Park",
    detail: "Big Five Safari on the Savanna",
    imageKey: "hotspotRwandaAkageraNP",
    image: `${base}/photos/newstock/wildanimals.jpg`,
  },
  {
    name: "Nyungwe Forest",
    detail: "Chimpanzee Trekking & Canopy Walk",
    imageKey: "hotspotRwandaNyungweForest",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Lake Kivu",
    detail: "Relaxation on the Inland Sea",
    imageKey: "hotspotRwandaLakeKivu",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=85",
  },
  {
    name: "Kigali Genocide Memorial",
    detail: "A Place of Remembrance & Learning",
    imageKey: "hotspotRwandaKigaliGenocideMemorial",
    image: `${base}/photos/newstock/Kigali-Genocide-Memorial.png`,
  },
  {
    name: "Kigali City",
    detail: "Africa's Cleanest & Safest Capital",
    imageKey: "hotspotRwandaKigaliCity",
    image: `${base}/photos/newstock/kigali-city.jpg`,
  },
];

const packages = [
  {
    name: "4-Day Remarkable Rwanda",
    tagline: "Gorillas & golden monkeys",
    duration: "4 Days",
    price: "From $3,500 / person",
    description:
      "A focused immersion into Volcanoes National Park for the ultimate primate experience — including mountain gorilla trekking and golden monkey tracking.",
    activities: [
      "Gorilla trekking",
      "Golden monkey tracking",
      "Kigali city tour",
      "Iby’Iwacu cultural village",
    ],
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85",
    itinerary: [
      {
        days: "Day 1",
        desc: "Arrive Kigali; city tour and transfer to Volcanoes NP at the base of the Virunga volcanoes.",
      },
      {
        days: "Day 2",
        desc: "Life-changing mountain gorilla trekking experience followed by cultural village visit.",
      },
      {
        days: "Day 3",
        desc: "Golden monkey tracking in the bamboo forests or hike to Dian Fossey's original research site.",
      },
      {
        days: "Day 4",
        desc: "Scenic drive back to Kigali, souvenir shopping and airport transfer.",
      },
    ],
  },
];

export default function RwandaPage() {
  const siteImages = useSiteImages();
  const { image: heroImage, overviewGallery, hotspots: sanityHotspots } =
    useDestinationGallery("Rwanda");
  const getSiteImageUrlLocal = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => getSiteImageUrl(siteImages, key, fallback, dimensions);
  const heroImageUrl = heroImage
    ? urlForImage(heroImage, WIDE_16_9).url()
    : `${base}/photos/newstock/Gorrillahd.jpg`;

  const hotspots =
    sanityHotspots && sanityHotspots.length > 0
      ? sanityHotspots.map((h) => ({
          name: h.name,
          detail: h.detail,
          image: h.image ? urlForImage(h.image, PORTRAIT_3_4).url() : undefined,
        }))
      : fallbackHotspots;

  const overviewImage = (
    index: number,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => {
    const img = overviewGallery?.[index];
    return img ? urlForImage(img, dimensions).url() : fallback;
  };

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
            backgroundImage: `url('${heroImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">East Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Rwanda" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              Land of a Thousand Hills
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
            Jun–Sep, Dec–Feb
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Rwandan Franc
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
            Kigali (KGL)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              The Primate Capital of the World
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Rwanda is a resilient and breathtakingly beautiful nation,
              famously known as the &ldquo;Land of a Thousand Hills.&rdquo; It
              has emerged as a global leader in sustainable tourism and
              conservation, particularly for the protection of the endangered
              mountain gorilla.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Volcanoes National Park offers the world&apos;s most accessible
              mountain gorilla trekking, while Nyungwe Forest protects one of
              Africa&apos;s oldest rainforests — a haven for chimpanzees and 12
              other primate species.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              In Akagera National Park, Rwanda offers a classic Big Five savanna
              safari experience, while the clean, vibrant capital of Kigali
              provides a sophisticated urban gateway with a deep sense of
              history and hope.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="relative h-72 overflow-hidden">
              <Image
                src={overviewImage(
                  0,
                  "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80",
                  LANDSCAPE_4_3,
                )}
                alt="Rwanda Gorillas"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="relative h-72 overflow-hidden mt-6"
            >
              <Image
                src={overviewImage(
                  1,
                  getSiteImageUrlLocal(
                    "destinationRwandaKigaliCity",
                    `${base}/photos/newstock/kigali-city.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Kigali City"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="relative h-72 overflow-hidden -mt-6"
            >
              <Image
                src={overviewImage(
                  2,
                  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80",
                  LANDSCAPE_4_3,
                )}
                alt="Nyungwe Forest"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="relative h-72 overflow-hidden"
            >
              <Image
                src={overviewImage(
                  3,
                  getSiteImageUrlLocal(
                    "destinationRwandaWildanimals",
                    `${base}/photos/newstock/wildanimals.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Akagera Wildlife"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
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
            <p className="section-label text-gold">Rwanda Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Hills, Hearts &amp; Heritage"
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
                Rwanda Tour Packages
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
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
              A Truly Remarkable Journey
            </h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              Rwanda is best experienced through a bespoke lens. We offer
              additional itineraries including Akagera savanna safaris and
              Nyungwe Forest canopy explorations. Your hills-and-hearts
              adventure is just a request wait. Let our specialists secure your
              permits and design your perfect itinerary.
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
            Ready to Explore Rwanda?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the mist of the Virungas to the shores of Lake Kivu — let us
            design your remarkable Rwanda journey.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Tailor My Rwanda Safari
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
