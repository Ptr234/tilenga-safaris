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
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=85",
  },
  {
    name: "Murchison Falls",
    detail: "The World's Most Powerful Waterfall",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=85",
  },
  {
    name: "Queen Elizabeth NP",
    detail: "Kazinga Channel & Tree-Climbing Lions",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Kibale Forest",
    detail: "Chimpanzee Trekking Capital",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Source of the Nile",
    detail: "Jinja — Where the River Begins",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=85",
  },
  {
    name: "Lake Bunyonyi",
    detail: "Africa's Deepest & Most Beautiful Lake",
    image: "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=900&q=85",
  },
];

const packages = [
  {
    name: "Lake Mburo National Park",
    duration: "2 days",
    price: "From $500 / person",
    description: "A compact gem offering zebra, impala, hippo, and over 300 bird species in one intimate park — perfect for a short escape.",
    activities: ["Game drives", "Boat cruise", "Nature walks", "Bird watching"],
  },
  {
    name: "Murchison Falls & Queen Elizabeth",
    duration: "5 days",
    price: "From $2,000 / person",
    description: "Experience the sheer power of Murchison Falls and the prolific wildlife of Queen Elizabeth National Park — elephants, lions, and the famous tree-climbing lions of Ishasha.",
    activities: ["Game drives", "Murchison Falls hike", "Kazinga Channel cruise", "Night drives"],
  },
  {
    name: "Gorilla Trekking Experience",
    duration: "3 days",
    price: "From $2,800 (2+ pax)",
    description: "Journey into Bwindi Impenetrable National Park for a life-changing hour with mountain gorilla families — the most sought-after wildlife encounter in Africa.",
    activities: ["Gorilla trekking permit", "Forest walk", "Community visit", "Batwa experience"],
  },
  {
    name: "8-Day Uganda Discovery",
    duration: "8 days",
    price: "From $3,000+",
    description: "The complete Uganda experience — gorillas in Bwindi, chimps in Kibale, the Big Five in Queen Elizabeth, and the thundering beauty of Murchison Falls.",
    activities: ["Gorilla trekking", "Chimp tracking", "Game drives", "Boat safari", "Cultural visits"],
  },
  {
    name: "Rwenzori Mountains Trekking",
    duration: "10 days",
    price: "From $2,000+",
    description: "Summit the legendary Mountains of the Moon — Africa's third-highest peak, with glaciers, giant heathers, and breathtaking Albertine Rift Valley views.",
    activities: ["Mountain trekking", "Alpine glacier visit", "Equatorial forest walk", "Village visit"],
  },
  {
    name: "4-Day Gorilla Trekking",
    duration: "4 days",
    price: "From $3,000 / person",
    description: "An extended gorilla experience with time to explore Bwindi's forest trails, visit the Batwa pygmies, and acclimate to the montane environment.",
    activities: ["2x gorilla trek options", "Batwa trail", "Lake Bunyonyi excursion", "Bird watching"],
  },
];

export default function UgandaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-[8000ms]"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1800&q=80)",
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
            <p className="font-serif italic text-2xl text-gold">The Pearl of Africa</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>Jan–Mar, Jul–Sep</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Ugandan Shilling</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +3</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Entebbe (EBB)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Africa&apos;s Most Rewarding Safari</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Uganda is a multicultural country in East Africa whose diverse landscape spans from
              the lush rainforests of Bwindi Impenetrable National Park — home to half the world&apos;s
              mountain gorillas — to the stunning savannas of Queen Elizabeth National Park and the
              thundering power of Murchison Falls.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Often called the Pearl of Africa, Uganda packs extraordinary biodiversity into a
              compact country: over 1,000 bird species, 13 primate species including chimpanzees
              and gorillas, and the Big Five roaming its national parks.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              At Tilenga Safaris, we are uniquely positioned in Uganda — our two lodges sit at
              the gates of Murchison Falls and Queen Elizabeth National Parks.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Mountain Gorillas" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80" alt="Murchison Falls" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80" alt="Wildlife" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Savannah" className="w-full h-52 object-cover" />
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
            <SplitText text="Places That Leave You Speechless" by="word" stagger={0.06} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Tour Packages */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">Safari Packages</p>
            <h2 className="section-heading">Uganda Tour Packages</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </FadeIn>
          <StaggerGrid className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div className="bg-white border border-gold/10 p-8 hover:shadow-lg transition-shadow duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl text-forest">{pkg.name}</h3>
                      <p className="text-gold text-xs uppercase tracking-wider font-sans mt-1">{pkg.duration}</p>
                    </div>
                    <span className="bg-forest text-cream text-xs font-sans px-3 py-1 shrink-0 ml-4 text-center">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-stone font-sans text-sm leading-relaxed mb-5">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.activities.map((act) => (
                      <span key={act} className="text-[10px] uppercase tracking-wider text-stone border border-stone/30 px-2 py-0.5 font-sans">
                        {act}
                      </span>
                    ))}
                  </div>
                  <Link href="/plan-a-trip" className="text-forest font-sans text-sm uppercase tracking-wider border-b border-gold hover:text-gold transition-colors">
                    Enquire →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Explore Uganda?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Let our Uganda specialists tailor your perfect itinerary — gorillas, parks, or both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-a-trip" className="btn-outline">Plan My Trip</Link>
            <Link href="/lodges" className="btn-ghost">Our Uganda Lodges</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
