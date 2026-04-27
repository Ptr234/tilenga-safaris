import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Sossusvlei",
    detail: "World's Highest Red Sand Dunes",
    image: "https://images.unsplash.com/photo-1547952237-23dcc22f66fc?w=900&q=85",
  },
  {
    name: "Etosha National Park",
    detail: "Big Five on the Salt Pan",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Skeleton Coast",
    detail: "Shipwrecks, Seals & Desert Lion",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Fish River Canyon",
    detail: "Africa's Largest Canyon",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=85",
  },
  {
    name: "Damaraland",
    detail: "Desert-Adapted Elephant & Rhino",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=85",
  },
  {
    name: "Namib Desert",
    detail: "Earth's Oldest Desert — Star Trails",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=85",
  },
  {
    name: "Swakopmund",
    detail: "Desert Meets Ocean — Adventure Hub",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=85",
  },
  {
    name: "Himba Villages",
    detail: "Ancient Culture of the Kaokoveld",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=85",
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
    activities: ["Sossusvlei dunes", "Etosha game drives", "Swakopmund adventure", "Desert stargazing"],
    image: "https://images.unsplash.com/photo-1547952237-23dcc22f66fc?w=700&q=85",
  },
  {
    name: "10-Day Namibia Full Circuit",
    tagline: "Complete Namibia experience",
    duration: "10 Days",
    price: "From $3,500 / person",
    description:
      "Explore Namibia end to end — Skeleton Coast wildlife, Damaraland's desert elephants, the iconic Sossusvlei dunes, and Fish River Canyon — Africa's largest canyon.",
    activities: ["Skeleton Coast", "Damaraland rhino tracking", "Sossusvlei", "Fish River Canyon"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=85",
  },
  {
    name: "14-Day Namibia & Botswana Combo",
    tagline: "Two unmissable wildernesses",
    duration: "14 Days",
    price: "From $4,500 / person",
    description:
      "Combine Namibia's stark desert beauty with Botswana's lush Okavango Delta for the ultimate southern Africa contrast — from dunes to floodplains, silence to abundance.",
    activities: ["Sossusvlei dunes", "Etosha NP", "Okavango Delta", "Chobe NP"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=85",
  },
];

export default function NamibiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1547952237-23dcc22f66fc?w=1800&q=80)",
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
            <p className="font-serif italic text-2xl text-gold">Desert &amp; Dunes</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>
            May–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>
            Namibian Dollar
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>
            GMT +2
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>
            Windhoek (WDH)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Earth&apos;s Most Dramatic Wilderness</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Namibia is a land of extraordinary contrasts — where ancient red dunes meet a diamond-clear Atlantic, where desert-adapted elephants roam landscapes unchanged for millennia, and where the Milky Way blazes overhead with unmatched clarity.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Sossusvlei&apos;s iconic dunes, some rising over 300 metres, glow copper and crimson at dawn — a photographer&apos;s dream and one of the world&apos;s most surreal landscapes. Etosha National Park, built around a vast salt pan, draws lion, leopard, elephant, and rhino to its waterholes in extraordinary concentrations.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              The Skeleton Coast, Fish River Canyon, and Damaraland complete a country that rewards those who venture beyond the ordinary — a true wilderness of silence, scale, and wonder.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1547952237-23dcc22f66fc?w=500&q=80"
                alt="Sossusvlei dunes"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img
                src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=500&q=80"
                alt="Etosha wildlife"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80"
                alt="Skeleton Coast"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80"
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
            <SplitText text="A Landscape Like No Other" by="word" stagger={0.06} />
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
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Explore Namibia?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From Sossusvlei&apos;s dunes to Etosha&apos;s wildlife — let us craft your perfect Namibia journey.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Namibia Safari</Link>
        </FadeIn>
      </section>
    </>
  );
}
