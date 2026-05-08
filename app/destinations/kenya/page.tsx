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
    name: "Masai Mara",
    detail: "Kenya's Crown Jewel Reserve",
    image: `${base}/Newstock/masai-mara.jpg`,
  },
  {
    name: "Great Migration",
    detail: "1.5 Million Wildebeest Crossing",
    image: `${base}/Newstock/greatbeastmigration.jpg`,
  },
  {
    name: "Amboseli National Park",
    detail: "Elephants Against Kilimanjaro",
    image: `${base}/Newstock/bigelephant.jpg`,
  },
  {
    name: "Lake Nakuru",
    detail: "Flamingo-Lined Soda Lake",
    image: `${base}/Newstock/wildanimals.jpg`,
  },
  {
    name: "Samburu Reserve",
    detail: "Rare Northern Species",
    image: `${base}/Newstock/cheetah.jpg`,
  },
  {
    name: "Hells Gate National Park",
    detail: "Gorges, Geysers & Cycling Safaris",
    image: `${base}/Newstock/safari.jpg`,
  },
  {
    name: "Giraffe Centre",
    detail: "Nairobi — Endangered Rothschild's Giraffe",
    image: `${base}/Newstock/girrafe.jpg`,
  },
  {
    name: "Mount Kenya",
    detail: "Africa's Second-Highest Peak",
    image: `${base}/Newstock/mount-kenya.jpg`,
  },
  {
    name: "Indian Ocean Beaches",
    detail: "Diani & Mombasa — Pristine Coastline",
    image: `${base}/Newstock/Zanzibar Beaches.jpg`,
  },
];

const packages = [
  {
    name: "7-Day Kenya Prime Safari",
    tagline: "Premier parks & daily game drives",
    duration: "7 Days",
    price: "Starting from $2000 per person",
    description:
      "Showcasing premier national parks with daily game drives. Experience the land, wildlife, cultural diversity, and rich history of Kenya up close.",
    activities: [
      "Nairobi Airport Transfer",
      "Samburu National Reserve",
      "Lake Nakuru National Park",
      "Masai Mara National Reserve",
      "Nairobi Return",
    ],
    image: `${base}/Newstock/lioness.jpg`,
    itineraryUrl: `${base}/pdfs/7–DAY-KENYA-PRIME-SAFARI-2.pdf`,
  },
  {
    name: "7-Day Magical Kenya Tour",
    tagline: "Evergreen marshes & pink lakes",
    duration: "7 Days",
    price: "Starting from $2000 per person",
    description:
      "From the evergreen marshes of Amboseli to the pink flamingo-lined shores of Lake Nakuru and the dotted plains of the Mara.",
    activities: [
      "Nairobi Airport Transfer",
      "Amboseli National Park",
      "Lake Nakuru National Park",
      "Masai Mara National Reserve",
    ],
    image: `${base}/Newstock/elephantcars.jpg`,
    itineraryUrl: `${base}/pdfs/7-–-DAY-MAGICAL-KENYA-TOUR-1.pdf`,
  },
  {
    name: "12-Day Safari Tour Around Kenya & Tanzania",
    tagline: "Two countries, one epic adventure",
    duration: "12 Days",
    price: "Starting from $3000 (group of 4)",
    description:
      "Visit Kenya and Tanzania. Explore Ngorongoro Crater, Serengeti's endless plains, Masai Mara's scenery, and authentic Maasai culture.",
    activities: [
      "Lake Nakuru & Masai Mara",
      "Serengeti National Park",
      "Ngorongoro Crater Tour",
      "Arusha & Amboseli",
    ],
    image: `${base}/Newstock/bufallo.jpg`,
    itineraryUrl: `${base}/pdfs/12-DAY-SAFARI-TOUR-AROUND-KENYA-AND-TANZANIA-1-.pdf`,
  },
];

export default function KenyaPage() {
  return (
    <>
      <DestinationHeroVideo 
        videoSrc="/Destinations videos/kenya-hero.mp4"
        title="Kenya"
        subtitle="Iconic Maasai Mara"
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
            Kenyan Shilling
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
            Nairobi (NBO)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              The Quintessential African Safari
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Kenya is a vibrant country in East Africa known for its stunning
              landscapes — ranging from the iconic savannahs of the Maasai Mara
              to the pristine beaches of the Indian Ocean, and home to the
              majestic Mount Kenya, the second-highest peak in Africa.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Masai Mara is home to one of nature&apos;s greatest
              spectacles: the annual Great Wildebeest Migration, when more than
              1.5 million wildebeest, zebra, and gazelle cross from Tanzania
              into Kenya in search of fresh pasture.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              From Amboseli&apos;s elephant herds against the Kilimanjaro
              backdrop to Samburu&apos;s rare species and Lake Nakuru&apos;s
              flamingo flocks — Kenya delivers iconic safari moments at every
              turn.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src={`${base}/Newstock/greatbeastmigration.jpg`}
                alt="Great Migration"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src={`${base}/Newstock/mothernbabyelephant.jpg`}
                alt="Elephant family"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src={`${base}/Newstock/cheetah.jpg`}
                alt="Cheetah"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src={`${base}/Newstock/zebras.jpg`}
                alt="Zebras on safari"
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
            <p className="section-label text-gold">Kenya Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Landscapes That Define Safari"
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
                Kenya Tour Packages
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
            Ready to Explore Kenya?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the Great Migration to the Masai Mara — let us build your dream
            Kenya itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan My Kenya Safari
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
