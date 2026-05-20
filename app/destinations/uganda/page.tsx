import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Mountain Gorillas",
    detail: "Bwindi Impenetrable Forest",
    image: `${base}/photos/newstock/Gorrillahd.jpg`,
  },
  {
    name: "Murchison Falls",
    detail: "The World's Most Powerful Waterfall",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Queen Elizabeth NP",
    detail: "Kazinga Channel & Tree-Climbing Lions",
    image: `${base}/photos/newstock/Queen Elizabeth NP.jpg`,
  },
  {
    name: "Mt. Rwenzori",
    detail: "Mountains of the Moon — Africa's Third-Highest Peak",
    image: `${base}/photos/newstock/Mountain Climbing06Mountain Climbing.jpg`,
  },
  {
    name: "Source of the Nile",
    detail: "Jinja — White Water Rafting & Bungee Jumping",
    image: `${base}/photos/newstock/Source of the Nile.jpg`,
  },
  {
    name: "Lake Mburo National Park",
    detail: "Zebras, Hippos & 350 Bird Species",
    image: `${base}/photos/newstock/zebras (1).jpg`,
  },
  {
    name: "Kibale Forest",
    detail: "Chimpanzee Trekking Capital of the World",
    image: `${base}/photos/newstock/touristsmovinginforest.jpg`,
  },
  {
    name: "Buganda Kingdom",
    detail: "Uganda's Rich Cultural Heritage",
    image: `${base}/photos/newstock/BugandaKingdom.png`,
  },
];

const packages = [
  {
    name: "Lake Mburo National Park",
    tagline: "Short safari introduction",
    duration: "2 Days",
    price: "From $500 / person (group of 4)",
    description:
      "A compact national park featuring 350 bird species and wildlife including zebras, impalas, buffalos, leopards, and hippos — located 3–4 hours from Kampala. Includes pick-up, bicycle tour, nature walk, and return.",
    activities: ["Pick-up from Kampala", "Bicycle tour", "Nature walk", "Bird watching"],
    image: `${base}/photos/newstock/bufallo.jpg`,
    downloadUrl: `${base}/photos/newstock/LAKE-MBURO-NATIONAL-PARK-EXPERIENCE.pdf`,
    itinerary: [
      { days: "Day 1", desc: "Depart Kampala, arrive Lake Mburo NP; afternoon game drive and bicycle tour along the lakeshore." },
      { days: "Day 2", desc: "Early morning bird watching (350+ species), nature walk with a ranger, return to Kampala." },
    ],
  },
  {
    name: "5-Day Wildlife Safari to Murchison Falls & Queen Elizabeth",
    tagline: "Waterfall and wildlife adventure",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "Comprehensive safari combining the world’s most powerful waterfalls with Uganda’s largest national park — game drives, boat cruises, birding, nature walks, and sunset viewing.",
    activities: ["Waterfall visits", "Game drives", "Boat cruises", "Nature walks", "Sunset viewing"],
    image: `${base}/photos/newstock/Big Five Game Drives.jpg`,
    downloadUrl: `${base}/photos/newstock/5-DAY-WILDLIFE-SAFARI-IN-UGANDA-4.pdf`,
    itinerary: [
      { days: "Days 1–2", desc: "Depart Kampala for Murchison Falls; hike to the top of the falls, afternoon game drive." },
      { days: "Days 3–4", desc: "Boat cruise on the Victoria Nile, drive to Queen Elizabeth NP, Big Four game drives." },
      { days: "Day 5", desc: "Kazinga Channel boat cruise, Rift Valley sunset viewing, return journey." },
    ],
  },
  {
    name: "3-Day Gorilla Tracking in Uganda",
    tagline: "Mountain gorilla immersion",
    duration: "3 Days",
    price: "From $2,800 (2+ pax)",
    description:
      "Trek into Bwindi Impenetrable National Park — across four sectors (Ruhija, Rushaga, Buhoma, Nkuringo) — for a life-changing hour with mountain gorilla families. Maximum 8 people per gorilla family.",
    activities: ["Gorilla trekking in Bwindi", "Four sector options", "Forest walk", "Community visit"],
    image: `${base}/photos/newstock/gorrillla.jpg`,
    downloadUrl: `${base}/itineraries/3 DAYS GORILLA TRACKING IN UGANDA -  TILENGA SAFARIS 2026.docx`,
    itinerary: [
      { days: "Day 1", desc: "Fly or drive to Bwindi; orientation briefing with ranger team and overnight at forest lodge." },
      { days: "Day 2", desc: "Morning gorilla trek deep into the impenetrable forest — one unforgettable hour with a gorilla family." },
      { days: "Day 3", desc: "Batwa cultural community visit and forest walk, return transfer." },
    ],
  },
  {
    name: "9-Day Experience Uganda",
    tagline: "The Pearl of Africa Tour",
    duration: "9 Days",
    price: "From $3,500",
    description:
      "The complete Uganda experience — gorilla trekking, game drives, boat cruises, plus adrenaline adventures on the Nile: white-water rafting, kayaking, bungee jumping, quad biking, and local food tasting.",
    activities: ["Gorilla trekking", "Game drives & boat cruises", "White-water rafting", "Bungee jumping & quad biking", "Local food tasting"],
    image: `${base}/photos/newstock/Boat Safaris08Boat Safaris.jpg`,
    downloadUrl: `${base}/itineraries/EXPERIENCE UGANDA  - 9 DAYS  - TILENGA SAFARIS 2026.docx`,
    itinerary: [
      { days: "Days 1–2", desc: "Kampala city tour, drive to Murchison Falls NP; waterfall hike and evening game drive." },
      { days: "Days 3–4", desc: "Boat cruise on the Nile, drive south to Bwindi; gorilla trekking and cultural village visit." },
      { days: "Days 5–7", desc: "Drive to Jinja — Source of the Nile; white-water rafting, kayaking, and bungee jumping." },
      { days: "Days 8–9", desc: "Quad biking, local food tasting tour, farewell dinner in Kampala, departure." },
    ],
  },
  {
    name: "Primates Experience",
    tagline: "Chimpanzees & Gorillas",
    duration: "7 Days",
    price: "Request a Quote",
    description:
      "A specialized primate circuit focusing on the most intimate encounters with chimpanzees in Kibale and gorillas in Bwindi, paired with stunning forest walks.",
    activities: ["Chimpanzee trekking", "Gorilla tracking", "Forest walks", "Primate research center visit"],
    image: `${base}/photos/newstock/Gorrillahd.jpg`,
    downloadUrl: `${base}/itineraries/PRIMATES EXPERIENCE - TILENGA SAFARIS 2026.docx`,
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Entebbe, drive to Kibale Forest — the primate capital of the world." },
      { days: "Days 3–4", desc: "Chimpanzee tracking and Bigodi swamp walk; drive to Bwindi Impenetrable Forest." },
      { days: "Days 5–7", desc: "Gorilla tracking experience, Batwa cultural trail, return to Entebbe for departure." },
    ],
  },
  {
    name: "10-Day Rwanda & Uganda Cross-Border",
    tagline: "The Ultimate Primate Trek",
    duration: "10 Days",
    price: "Request a Quote",
    description:
      "An epic cross-border journey combining the best of Rwanda's Volcanoes National Park and Uganda's Bwindi and Queen Elizabeth parks for a comprehensive East African experience.",
    activities: ["Gorilla tracking in two countries", "Kigali tour", "Queen Elizabeth NP game drives", "Boat cruises"],
    image: `${base}/photos/newstock/AfricanLandscape.jpg`,
    downloadUrl: `${base}/itineraries/RWANDA  - UGANDA - 10 DAYS  - TILENGA SAFARIS 2026.docx`,
    itinerary: [
      { days: "Days 1–3", desc: "Kigali arrival, city tour, and drive to Volcanoes NP for Rwanda gorilla tracking." },
      { days: "Days 4–6", desc: "Cross to Uganda — Bwindi gorilla trek and Lake Bunyonyi relaxation." },
      { days: "Days 7–10", desc: "Queen Elizabeth NP wildlife, Kazinga Channel cruise, and return to Kampala/Entebbe." },
    ],
  },
];

export default function UgandaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-[8000ms]"
          style={{
            backgroundImage:
              `url(${base}/photos/newstock/UgandaDestinationHero.jpg)`,
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
                src={`${base}/photos/newstock/Source of the Nile2.jpg`}
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
                      {pkg.downloadUrl && (
                        <a 
                          href={pkg.downloadUrl} 
                          download 
                          className="btn-outline !px-6 !py-2.5 text-[11px]"
                        >
                          Download PDF
                        </a>
                      )}
                      <Link href="/plan-a-trip" className="btn-primary !px-6 !py-2.5 text-[11px]">Enquire</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              Plan My Trip
            </Link>
            <Link href="/lodges" className="btn-ghost">
              Our Uganda Lodges
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
