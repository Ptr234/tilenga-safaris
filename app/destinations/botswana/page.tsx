import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Okavango Delta",
    detail: "World's Largest Inland Delta",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Chobe National Park",
    detail: "Africa's Densest Elephant Population",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=85",
  },
  {
    name: "Moremi Game Reserve",
    detail: "Wild Dogs & Leopard in the Delta",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Makgadikgadi Pans",
    detail: "Salt Flats & Zebra Migration",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=85",
  },
  {
    name: "Linyanti Wetlands",
    detail: "Exclusive Private Concessions",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=85",
  },
  {
    name: "Central Kalahari Reserve",
    detail: "Black-Maned Lions & Meerkats",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=85",
  },
  {
    name: "Okavango Mokoro Safaris",
    detail: "Silent Dugout Canoe Through Lily Pads",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=85",
  },
  {
    name: "Savuti Channel",
    detail: "Lion vs Elephant — Ancient Battleground",
    image: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=900&q=85",
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
    activities: ["Mokoro canoe excursions", "Moremi game drives", "Walking safaris", "Night drives"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
  },
  {
    name: "10-Day Botswana Highlights",
    tagline: "Delta, elephants & salt pans",
    duration: "10 Days",
    price: "From $5,500 / person",
    description:
      "Journey from the lush Okavango Delta to Chobe's legendary elephant herds and the vast silence of the Makgadikgadi Pans — one of Africa's greatest wildlife safaris.",
    activities: ["Okavango Delta", "Chobe river cruise", "Makgadikgadi Pans", "Elephant encounters"],
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=700&q=85",
  },
  {
    name: "14-Day Botswana & Zimbabwe Combo",
    tagline: "Victoria Falls + ultimate delta",
    duration: "14 Days",
    price: "From $6,000 / person",
    description:
      "Combine Botswana's extraordinary wilderness with Zimbabwe's Victoria Falls and Hwange's wildlife for a comprehensive southern Africa adventure that has it all.",
    activities: ["Okavango Delta", "Chobe NP", "Victoria Falls", "Hwange NP"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=85",
  },
];

export default function BotswanaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=80)",
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
            <p className="font-serif italic text-2xl text-gold">Okavango Delta</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>
            Apr–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>
            Botswana Pula
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>
            GMT +2
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>
            Maun (MUB)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Africa&apos;s Last Great Wilderness</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Botswana is synonymous with exclusivity — a country that has chosen low-volume, high-value tourism to protect its extraordinary natural heritage. The result is an Africa that feels untouched, wild, and genuinely remote.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Okavango Delta — a UNESCO World Heritage Site and one of Africa&apos;s Seven Natural Wonders — is an inland sea of crystal channels, papyrus islands, and floodplains teeming with elephant, buffalo, lion, leopard, and wild dog. Glide silently through its waterways by mokoro or explore on foot with expert guides.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              Chobe National Park hosts Africa&apos;s greatest elephant concentration — over 120,000 individuals. The Makgadikgadi Pans host the second-largest zebra migration on the continent, and the Central Kalahari shelters Africa&apos;s magnificent black-maned lions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80"
                alt="Okavango Delta"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img
                src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80"
                alt="Chobe elephants"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img
                src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=500&q=80"
                alt="Moremi game reserve"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80"
                alt="Mokoro safari"
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
            <p className="section-label text-gold">Botswana Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="Where Wilderness Remains Wild" by="word" stagger={0.06} />
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
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Explore Botswana?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the Okavango Delta to Chobe&apos;s elephants — let us craft your ultimate Botswana safari.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Botswana Safari</Link>
        </FadeIn>
      </section>
    </>
  );
}
