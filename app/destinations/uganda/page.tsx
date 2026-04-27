import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Mountain Gorillas",
    detail: "Bwindi Impenetrable Forest",
    image: "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=900&q=85",
  },
  {
    name: "Murchison Falls",
    detail: "The World's Most Powerful Waterfall",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Queen Elizabeth NP",
    detail: "Kazinga Channel & Tree-Climbing Lions",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=900&q=85",
  },
  {
    name: "Mt. Rwenzori",
    detail: "Mountains of the Moon — Africa's Third-Highest Peak",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
  },
  {
    name: "Source of the Nile",
    detail: "Jinja — White Water Rafting & Bungee Jumping",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Lake Mburo National Park",
    detail: "Zebras, Hippos & 350 Bird Species",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80",
  },
  {
    name: "Kibale Forest",
    detail: "Chimpanzee Trekking Capital of the World",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=85",
  },
  {
    name: "Buganda Kingdom",
    detail: "Uganda's Rich Cultural Heritage",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=85",
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
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
  },
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
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
  },
  {
    name: "3-Day Gorilla Trekking Experience",
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
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=85",
  },
  {
    name: "8-Day Trip Around Uganda",
    tagline: "Complete Uganda adventure",
    duration: "8 Days",
    price: "From $3,000",
    description:
      "The complete Uganda experience — gorilla trekking, game drives, boat cruises, plus adrenaline adventures on the Nile: white-water rafting, kayaking, bungee jumping, quad biking, and local food tasting.",
    activities: [
      "Gorilla trekking",
      "Game drives & boat cruises",
      "White-water rafting",
      "Bungee jumping & quad biking",
      "Local food tasting",
    ],
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=700&q=85",
  },
  {
    name: "5-Day Wild Safari Itinerary",
    tagline: "Murchison & Queen Elizabeth highlights",
    duration: "5 Days",
    price: "From $2,000 / person (2+ pax)",
    description:
      "Visit the thundering Murchison Falls and Queen Elizabeth National Park — encounter the Big Four on game drives, cruise the Kazinga Channel, and watch the sunset over the Rift Valley.",
    activities: [
      "Waterfall visits",
      "Game drives",
      "Boat cruises",
      "Nature walks",
      "Sunset viewing",
    ],
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=700&q=85",
  },
  {
    name: "10-Day Rwenzori Mountains Trekking",
    tagline: "Legendary mountain trek",
    duration: "10 Days",
    price: "From $2,000",
    description:
      "Trek through varying ecosystems to Margherita Peak — Africa’s third-highest summit. Equatorial glaciers, giant heathers, and breathtaking Albertine Rift Valley panoramas.",
    activities: [
      "Multi-day mountain trekking",
      "Alpine glacier visit",
      "Diverse ecosystem walk",
      "Village visit",
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85",
  },
  {
    name: "4-Day Gorilla Trekking Experience",
    tagline: "Extended gorilla stay",
    duration: "4 Days",
    price: "From $3,000 (2+ pax)",
    description:
      "An extended gorilla experience with overnight stays in Entebbe and Kisoro — time to explore Bwindi’s forest trails, visit the Batwa trail, and unwind at Lake Bunyonyi.",
    activities: [
      "Gorilla trekking in Bwindi",
      "Batwa trail",
      "Lake Bunyonyi excursion",
      "Bird watching",
    ],
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=700&q=85",
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
              "url(https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1800&q=80)",
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
                src="https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=500&q=80"
                alt="Mountain Gorillas"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80"
                alt="Murchison Falls"
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

                    <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                      <span className="font-serif italic text-gold text-sm">{pkg.price}</span>
                      <Link href="/plan-a-trip" className="package-cta">
                        Enquire
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
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
