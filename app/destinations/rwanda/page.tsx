import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Volcanoes National Park",
    detail: "Mountain Gorilla Trekking in the Virungas",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=85",
  },
  {
    name: "Nyungwe Forest",
    detail: "Ancient Canopy & Chimpanzee Sanctuary",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=900&q=85",
  },
  {
    name: "Lake Kivu",
    detail: "Volcanic Crater Lake on Congo Border",
    image: "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=900&q=85",
  },
  {
    name: "Kigali Genocide Memorial",
    detail: "A Powerful Tribute to History & Remembrance",
    image: "https://images.unsplash.com/photo-1526319238109-56f76eaba7f2?w=900&q=85",
  },
  {
    name: "Kigali",
    detail: "Africa's Cleanest, Most Vibrant Capital",
    image: "https://images.unsplash.com/photo-1526319238109-56f76eaba7f2?w=900&q=85",
  },
];

const itinerary = [
  { day: "Days 1–2", title: "Kigali Arrival & City Tour", desc: "Arrive in Kigali, visit the moving Kigali Genocide Memorial, explore vibrant city markets, and enjoy authentic Rwandan cuisine." },
  { day: "Days 3–5", title: "Volcanoes National Park", desc: "Trek into the mist-covered volcanic forests for gorilla tracking and golden monkey tracking. Each hour-long gorilla encounter is profoundly rare — up to 8 people per family group." },
  { day: "Days 6–8", title: "Lake Kivu & Departure", desc: "Relax on the serene shores of Lake Kivu, boat to the islands, experience a cultural village stay, and taste local food before your journey home." },
];

export default function RwandaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=1800&q=80)",
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
            <SplitText text="Rwanda" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">Land of a Thousand Hills</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Oct</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Rwandan Franc</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Kigali (KGL)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Where Gorillas Roam the Misty Mountains</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Rwanda is a small but extraordinary country in East Africa whose landscape spans from
              the lush, rolling hills of its famed &apos;Land of a Thousand Hills&apos; to the breathtaking
              Volcanoes National Park — home to the endangered mountain gorillas — and the serene
              waters of Lake Kivu.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Gorilla trekking in Rwanda is widely considered the pinnacle of African wildlife
              experiences. With only around 1,000 mountain gorillas remaining in the wild,
              each encounter is profoundly rare and deeply moving.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              Rwanda is also one of Africa&apos;s cleanest, safest, and most progressive nations —
              Kigali regularly ranked among Africa&apos;s most liveable cities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Mountain Gorillas in mist" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&q=80" alt="Nyungwe forest" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80" alt="Lake Kivu" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526319238109-56f76eaba7f2?w=500&q=80" alt="Kigali city" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Rwanda Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="A Land That Inspires Awe" by="word" stagger={0.06} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Featured Package */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">Recommended Package</p>
            <h2 className="section-heading">8-Day Visit Rwanda Safari</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-stone font-sans mt-6 max-w-xl mx-auto">
              The complete Rwanda experience — gorillas, golden monkeys, Kigali&apos;s culture,
              Lake Kivu&apos;s tranquility, and the living history of a nation reborn.
            </p>
          </FadeIn>

          <StaggerGrid className="space-y-0">
            <StaggerItem>
              <div className="bg-white border border-gold/10 overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                    alt="Rwanda gorilla trekking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-forest-dark/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-3xl text-cream">8 Days in Rwanda</p>
                      <p className="text-gold text-sm font-sans uppercase tracking-widest mt-2">Gorillas · Culture · Lake Kivu</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6 mb-8">
                    {itinerary.map((day) => (
                      <div key={day.day} className="flex gap-6 border-l-2 border-gold/30 pl-6">
                        <div className="shrink-0">
                          <p className="text-gold font-serif text-sm">{day.day}</p>
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-forest mb-1">{day.title}</h4>
                          <p className="text-stone text-sm font-sans leading-relaxed">{day.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Gorilla Tracking", "Kigali City Tour", "Genocide Memorial", "Golden Monkey Trek", "Lake Kivu Boat Ride", "Cultural Village", "Local Food Tasting"].map((act) => (
                      <span key={act} className="text-[10px] uppercase tracking-wider text-stone border border-stone/30 px-2 py-0.5 font-sans">{act}</span>
                    ))}
                  </div>
                  <Link href="/plan-a-trip" className="btn-primary">Enquire About This Package</Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Meet the Gorillas?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Rwanda&apos;s mountain gorillas await. Let our specialists secure your permits and design your perfect itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Rwanda Safari</Link>
        </FadeIn>
      </section>
    </>
  );
}
