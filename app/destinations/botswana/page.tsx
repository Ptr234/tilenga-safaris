"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";
import useSiteImages from "@/lib/useSiteImages";
import useDestinationGallery from "@/lib/useDestinationGallery";
import { getSiteImageUrl } from "@/lib/siteImageHelpers";
import { urlForImage } from "@/lib/sanity.image";
import { LANDSCAPE_4_3, WIDE_16_9, PORTRAIT_3_4 } from "@/lib/imageDimensions";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fallbackHotspots = [
  {
    name: "Okavango Delta",
    detail: "World's Largest Inland Delta",
    imageKey: "hotspotBotswanaOkavangoDelta",
    image: `${base}/photos/newstock/Elephantfamily.jpg`,
  },
  {
    name: "Chobe National Park",
    detail: "Africa's Densest Elephant Population",
    imageKey: "hotspotBotswanaChoboNP",
    image: `${base}/photos/newstock/bigelephant.jpg`,
  },
  {
    name: "Moremi Game Reserve",
    detail: "Wild Dogs & Leopard in the Delta",
    imageKey: "hotspotBotswanaMoremiGameReserve",
    image: `${base}/photos/newstock/wildlifeconservation.jpg`,
  },
  {
    name: "Makgadikgadi Pans",
    detail: "Salt Flats & Zebra Migration",
    imageKey: "hotspotBotswanaMakgadikgadiPans",
    image: `${base}/photos/newstock/zebras-(1).jpg`,
  },
  {
    name: "Linyanti Wetlands",
    detail: "Exclusive Private Concessions",
    imageKey: "hotspotBotswanaLinyantiWetlands",
    image: `${base}/photos/newstock/wildanimals.jpg`,
  },
  {
    name: "Central Kalahari Reserve",
    detail: "Black-Maned Lions & Meerkats",
    imageKey: "hotspotBotswanaCentralKalahariReserve",
    image: `${base}/photos/newstock/lioness.jpg`,
  },
  {
    name: "Okavango Mokoro Safaris",
    detail: "Silent Dugout Canoe Through Lily Pads",
    imageKey: "hotspotBotswanaOkavangoMokoroSafaris",
    image: `${base}/photos/newstock/Boat-Safaris08Boat-Safaris.jpg`,
  },
  {
    name: "Savuti Channel",
    detail: "Lion vs Elephant — Ancient Battleground",
    imageKey: "hotspotBotswanaSavutiChannel",
    image: `${base}/photos/newstock/elephantcars.jpg`,
  },
];

const packages = [
  {
    name: "7-Day Okavango Delta Safari",
    tagline: "Fly-in wilderness experience",
    duration: "7 Days",
    price: "From $4,000 / person",
    description:
      "Fly into the heart of the Okavango Delta for an intimate safari by mokoro, motorboat, and game drive — encountering elephant, lion, leopard, and wild dog in Africa's most pristine wilderness.",
    activities: [
      "Mokoro canoe excursions",
      "Moremi game drives",
      "Walking safaris",
      "Night drives",
    ],
    image: `${base}/photos/newstock/Elephantfamily.jpg`,
    itinerary: [
      {
        days: "Days 1–2",
        desc: "Fly into Maun; light aircraft transfer deep into the Okavango Delta, first mokoro excursion.",
      },
      {
        days: "Days 3–5",
        desc: "Moremi Game Reserve game drives, walking safaris with expert guides, hippo pod encounters.",
      },
      {
        days: "Days 6–7",
        desc: "Night drives for nocturnal predators, farewell sundowner on the floodplains, fly out to Maun.",
      },
    ],
  },
  {
    name: "10-Day Botswana Highlights",
    tagline: "Delta, elephants & salt pans",
    duration: "10 Days",
    price: "From $5,500 / person",
    description:
      "Journey from the lush Okavango Delta to Chobe's legendary elephant herds and the vast silence of the Makgadikgadi Pans — one of Africa's greatest wildlife safaris.",
    activities: [
      "Okavango Delta",
      "Chobe river cruise",
      "Makgadikgadi Pans",
      "Elephant encounters",
    ],
    image: `${base}/photos/newstock/bigelephant.jpg`,
    itinerary: [
      {
        days: "Days 1–3",
        desc: "Maun arrival; Okavango Delta — mokoro excursions, game drives, and wild dog tracking.",
      },
      {
        days: "Days 4–6",
        desc: "Chobe NP — sunset river cruise and world-famous elephant encounters at the water's edge.",
      },
      {
        days: "Days 7–10",
        desc: "Makgadikgadi Pans — zebra migration, Kalahari meerkats, and starlit salt flat nights.",
      },
    ],
  },
];

export default function BotswanaPage() {
  const siteImages = useSiteImages();
  const { image: heroImage, overviewGallery, hotspots: sanityHotspots } =
    useDestinationGallery("Botswana");
  const getSiteImageUrlLocal = (
    key: string,
    fallback: string,
    dimensions?: { width: number; height: number },
  ) => getSiteImageUrl(siteImages, key, fallback, dimensions);
  const heroImageUrl = heroImage
    ? urlForImage(heroImage, WIDE_16_9).url()
    : `${base}/photos/newstock/Elephantfamily.jpg`;

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

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activePackage, setActivePackage] = useState("");


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
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">Southern Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Botswana" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              Okavango Delta
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
            Apr–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Botswana Pula
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
            Maun (MUB)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Africa&apos;s Last Great Wilderness
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Botswana is synonymous with exclusivity — a country that has
              chosen low-volume, high-value tourism to protect its extraordinary
              natural heritage. The result is an Africa that feels untouched,
              wild, and genuinely remote.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Okavango Delta — a UNESCO World Heritage Site and one of
              Africa&apos;s Seven Natural Wonders — is an inland sea of crystal
              channels, papyrus islands, and floodplains teeming with elephant,
              buffalo, lion, leopard, and wild dog. Glide silently through its
              waterways by mokoro or explore on foot with expert guides.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              Chobe National Park hosts Africa&apos;s greatest elephant
              concentration — over 120,000 individuals. The Makgadikgadi Pans
              host the second-largest zebra migration on the continent, and the
              Central Kalahari shelters Africa&apos;s magnificent black-maned
              lions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="relative h-72 overflow-hidden">
              <Image
                src={overviewImage(
                  0,
                  getSiteImageUrlLocal(
                    "destinationBotswanaElephantFamily",
                    `${base}/photos/newstock/Elephantfamily.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Okavango Delta"
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
                    "destinationBotswanaBigElephant",
                    `${base}/photos/newstock/bigelephant.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Chobe elephants"
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
                    "destinationBotswanaWildlifeConservation",
                    `${base}/photos/newstock/wildlifeconservation.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Moremi game reserve"
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
                    "destinationBotswanaBoatSafari",
                    `${base}/photos/newstock/Boat-Safaris08Boat-Safaris.jpg`,
                    LANDSCAPE_4_3,
                  ),
                  LANDSCAPE_4_3,
                )}
                alt="Mokoro safari"
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
            <p className="section-label text-gold">Botswana Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Where Wilderness Remains Wild"
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
                Botswana Tour Packages
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
              Explore More of Botswana
            </h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              We offer several other Botswana itineraries, including
              combinations with Victoria Falls and specialized birding or
              photography safaris. All tours can be delivered upon request and
              fully customized.
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
            Ready to Explore Botswana?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the Okavango Delta to Chobe&apos;s elephants — let us craft
            your ultimate Botswana safari.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan My Botswana Safari
          </Link>
        </FadeIn>
      </section>


      <PackageEnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageName={activePackage}
      />
    </>
  );
}
