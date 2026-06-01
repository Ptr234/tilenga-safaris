"use client";

import { useState } from "react";
import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";
import ItineraryDownloadPopup from "@/components/ItineraryDownloadPopup";
import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Masai Mara",
    detail: "Kenya's Crown Jewel Reserve",
    image: `${base}/photos/newstock/Hot-Air-Balloon.jpg`,
  },
  {
    name: "Great Migration",
    detail: "1.5 Million Wildebeest Crossing",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=900&q=85",
  },
  {
    name: "Amboseli National Park",
    detail: "Elephants Against Kilimanjaro",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=85",
  },
  {
    name: "Lake Nakuru",
    detail: "Flamingo-Lined Soda Lake",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=85",
  },
  {
    name: "Samburu Reserve",
    detail: "Rare Northern Species",
    image: `${base}/photos/newstock/cheetah.jpg`,
  },
  {
    name: "Hells Gate National Park",
    detail: "Gorges, Geysers & Cycling Safaris",
    image: `${base}/photos/newstock/zebras.jpg`,
  },
  {
    name: "Giraffe Centre",
    detail: "Nairobi — Endangered Rothschild's Giraffe",
    image: `${base}/photos/newstock/girrafe.jpg`,
  },
  {
    name: "Mount Kenya",
    detail: "Africa's Second-Highest Peak",
    image: `${base}/photos/newstock/Mount-Kenya.jpg`,
  },
  {
    name: "Indian Ocean Beaches",
    detail: "Diani & Mombasa — Pristine Coastline",
    image: `${base}/photos/newstock/indianocean.jpg`,
  },
];

const packages = [
  {
    name: "7-Day Kenya Prime Safari",
    tagline: "Classic wildlife first-timer",
    duration: "7 Days",
    price: "From $2,000 / person",
    description:
      "Explore Kenya’s most iconic reserves with game drives, cultural visits, and the Great Migration circuit including Samburu, Lake Nakuru, and Maasai Mara.",
    activities: ["Nairobi city tour", "Samburu game drives", "Lake Nakuru flamingoes", "Masai Mara safari"],
    image: `${base}/photos/newstock/elephantcars.jpg`,
    downloadUrl: `${base}/photos/newstock/7–DAY-KENYA-PRIME-SAFARI-2.pdf`,
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Nairobi; Giraffe Centre & city tour, drive north to Samburu Reserve." },
      { days: "Days 3–4", desc: "Samburu game drives for rare northern species; drive to Lake Nakuru flamingo circuit." },
      { days: "Days 5–7", desc: "Maasai Mara — Great Migration viewing, Big Five game drives, farewell dinner, departure." },
    ],
  },
  {
    name: "7-Day Magical Kenya Tour",
    tagline: "Big five & cultural highlights",
    duration: "7 Days",
    price: "From $2,000 / person",
    description:
      "From Amboseli’s legendary elephant herds and Kilimanjaro views to Lake Nakuru and Masai Mara, this itinerary blends wildlife with authentic local culture.",
    activities: ["Amboseli NP", "Lake Nakuru", "Masai Mara", "Maasai village visit"],
    image: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=700&q=85",
    downloadUrl: `${base}/photos/newstock/7-–-DAY-MAGICAL-KENYA-TOUR-1.pdf`,
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Nairobi; drive to Amboseli NP — elephant herds framed by Kilimanjaro at dawn." },
      { days: "Days 3–4", desc: "Lake Nakuru flamingo lake circuit; game drives for rhino and leopard." },
      { days: "Days 5–7", desc: "Maasai Mara safari, authentic Maasai village visit, farewell dinner, departure Nairobi." },
    ],
  },
];

export default function KenyaPage() {
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
            backgroundImage:
              `url(${base}/photos/newstock/splendifd.jpg)`,
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
            <SplitText text="Kenya" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              Iconic Maasai Mara
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
                src={`${base}/photos/newstock/safari.jpg`}
                alt="Kenya safari landscape"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src={`${base}/photos/newstock/lioness.jpg`}
                alt="Lioness on the savannah"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src={`${base}/photos/newstock/mothernbabyelephant.jpg`}
                alt="Elephant family, Amboseli"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src={`${base}/photos/newstock/greatbeastmigration.jpg`}
                alt="Great wildebeest migration"
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
          <div className="space-y-20">
            {packages.map((pkg) => (
              <div key={pkg.name} className="grid md:grid-cols-2 gap-12 items-start border-b border-gold/10 pb-20 last:border-0 last:pb-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">{pkg.duration}</span>
                </div>
                <div>
                  <p className="section-label mb-2">{pkg.tagline}</p>
                  <h3 className="font-serif text-3xl text-forest mb-4">{pkg.name}</h3>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="text-stone font-sans text-sm leading-relaxed mb-8">{pkg.description}</p>
                  <div className="space-y-4 mb-8">
                    {pkg.itinerary.map((item) => (
                      <div key={item.days} className="flex gap-4 border-t border-gold/10 pt-4">
                        <span className="text-gold text-[10px] uppercase tracking-widest font-sans w-20 shrink-0 pt-0.5">{item.days}</span>
                        <span className="text-stone font-sans text-sm leading-relaxed">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {pkg.activities.map((act) => (
                      <span key={act} className="text-[10px] uppercase tracking-widest font-sans border border-gold/30 text-forest/70 px-3 py-1.5 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold" />{act}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-serif italic text-gold text-sm">{pkg.price}</span>
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
            <h4 className="font-serif text-2xl text-forest mb-4">Discover More of Kenya</h4>
            <p className="text-stone font-sans text-sm mb-6 max-w-2xl mx-auto">
              We offer a wide range of additional Kenya itineraries, including luxury beach retreats in Diani, Mount Kenya climbing expeditions, and multi-country East Africa adventures. All our tours can be delivered upon request.
            </p>
            <Link href="/plan-a-trip" className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors">
              Request Custom Itinerary &rarr;
            </Link>
          </FadeIn>
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
            Tailor My Kenya Safari
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
