"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import ItineraryRequestPopup from "@/components/ItineraryRequestPopup";
import useSiteImages from "@/lib/useSiteImages";
import useDestinationGallery from "@/lib/useDestinationGallery";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";
import { urlForImage } from "@/lib/sanity.image";
import useItinerariesForDestination from "@/lib/useItinerariesForDestination";
import { LANDSCAPE_4_3, WIDE_16_9, PORTRAIT_3_4 } from "@/lib/imageDimensions";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fallbackHotspots = [
  {
    name: "Kruger National Park",
    detail: "Ultimate Big Five Territory",
    imageKey: "hotspotSouthAfricaKrugerNP",
    image: `${base}/photos/newstock/wildanimals.jpg`,
  },
  {
    name: "Cape Town",
    detail: "Table Mountain & Coastal Magic",
    imageKey: "hotspotSouthAfricaCapeTown",
    image: `${base}/photos/newstock/Cape-Town.jpg`,
  },
  {
    name: "Cape Winelands",
    detail: "Stellenbosch & Franschhoek Vineyards",
    imageKey: "hotspotSouthAfricaCapeWinelands",
    image: `${base}/photos/newstock/splendifd.jpg`,
  },
  {
    name: "Garden Route",
    detail: "Scenic Cliffs & Whale Watching",
    imageKey: "hotspotSouthAfricaGardenRoute",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&q=85",
  },
  {
    name: "Table Mountain",
    detail: "Iconic Flat-Top Landmark",
    imageKey: "hotspotSouthAfricaTableMountain",
    image: `${base}/photos/newstock/Table-Mountain.jpg`,
  },
  {
    name: "Boulders Beach",
    detail: "African Penguin Colony",
    imageKey: "hotspotSouthAfricaBouldersBeach",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=900&q=85",
  },
];


export default function SouthAfricaPage() {
  const siteImages = useSiteImages();
  const { image: heroImage, overviewGallery, hotspots: sanityHotspots } =
    useDestinationGallery("South Africa");
  const itineraries = useItinerariesForDestination("South Africa");
  const getSiteImageUrlLocal = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => getSiteImageUrl(siteImages, key, fallback, dimensions);
  const heroImageUrl = heroImage
    ? urlForImage(heroImage, WIDE_16_9).url()
    : `${base}/photos/newstock/Table%20Mountain.jpg`;

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

  const [isItineraryRequestOpen, setIsItineraryRequestOpen] = useState(false);

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
            <ImageReveal direction="top" delay={0} className="relative h-72 overflow-hidden">
              <Image
                src={overviewImage(
                  0,
                  getSiteImageUrlLocal(
                    "destinationSouthAfricaCapeTown",
                    `${base}/photos/newstock/Cape-Town.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Cape Town Coast"
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
                    "destinationSouthAfricaWildanimals",
                    `${base}/photos/newstock/wildanimals.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Safari in Kruger"
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
                  getSiteImageUrlLocal(
                    "destinationSouthAfricaTableMountain",
                    `${base}/photos/newstock/Table-Mountain.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Table Mountain"
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
                    "destinationSouthAfricaSplendifd",
                    `${base}/photos/newstock/splendifd.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Winelands Estate"
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
            {itineraries.map((it) => (
              <div
                key={it.slug.current}
                className="grid md:grid-cols-2 gap-12 items-start border-b border-gold/10 pb-20 last:border-0 last:pb-0"
              >
                <Link href={`/itineraries/${it.slug.current}/`} className="relative overflow-hidden aspect-[4/3] block group">
                  {it.heroImage && (
                    <Image
                      src={urlForImage(it.heroImage, LANDSCAPE_4_3).url()}
                      alt={it.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {it.duration}
                  </span>
                </Link>
                <div>
                  <p className="section-label mb-2">{it.tagline}</p>
                  <h3 className="font-serif text-3xl text-forest mb-4">
                    <Link href={`/itineraries/${it.slug.current}/`} className="hover:text-gold transition-colors">
                      {it.title}
                    </Link>
                  </h3>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="text-stone font-sans text-sm leading-relaxed mb-8">
                    {it.summary}
                  </p>
                  {it.activities && it.activities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {it.activities.map((act) => (
                        <span
                          key={act}
                          className="text-[10px] uppercase tracking-widest font-sans border border-gold/30 text-forest/70 px-3 py-1.5 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold" />
                          {act}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-serif italic text-gold text-sm">
                      {it.price}
                    </span>
                    <div className="flex gap-4">
                      <Link
                        href={`/itineraries/${it.slug.current}/`}
                        className="btn-primary !px-6 !py-2.5 text-[11px]"
                      >
                        View Full Itinerary
                      </Link>
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
            <button
              onClick={() => setIsItineraryRequestOpen(true)}
              className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"
            >
              Request Custom Itinerary &rarr;
            </button>
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



      <ItineraryRequestPopup
        isOpen={isItineraryRequestOpen}
        onClose={() => setIsItineraryRequestOpen(false)}
        destination="South Africa"
      />
    </>
  );
}
