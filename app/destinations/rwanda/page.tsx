import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const hotspots = [
  {
    name: "Volcanoes National Park",
    detail: "Mountain Gorilla Trekking in the Virungas",
    image: "/gorrilas/gorrilas21.jpg",
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
    image: `${base}/photos/newstock/Kigali Genocide Memorial.png`,
  },
  {
    name: "Kigali",
    detail: "Africa's Cleanest, Most Vibrant Capital",
    image: `${base}/photos/newstock/kigali city.jpg`,
  },
];

const packages = [
  {
    name: "8-Day Visit Rwanda Safari",
    tagline: "Recommended Rwanda experience",
    duration: "8 Days",
    price: "Request a Quote",
    description:
      "The complete Rwanda experience — gorillas, golden monkeys, Kigali's culture, Lake Kivu's tranquility, and the living history of a nation reborn.",
    activities: ["Gorilla Tracking", "Kigali City Tour", "Genocide Memorial", "Golden Monkey Trek", "Lake Kivu Boat Ride", "Cultural Village", "Local Food Tasting"],
    image: `${base}/photos/newstock/Gorrilla.jpg`,
    itinerary: [
      { days: "Days 1–2", desc: "Arrive Kigali; Kigali Genocide Memorial, vibrant city markets, and authentic Rwandan cuisine." },
      { days: "Days 3–5", desc: "Volcanoes NP — gorilla tracking and golden monkey trek in the mist-covered Virunga forests." },
      { days: "Days 6–8", desc: "Lake Kivu — boat to the islands, cultural village stay, local food tasting, departure." },
    ],
  },
];

export default function RwandaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${base}/experinces/Game%20drives.jpg)`,
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
              <img src="/gorrilas/gorillar.webp" alt="Mountain Gorillas in mist" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&q=80" alt="Nyungwe forest" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80" alt="Lake Kivu" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src={`${base}/photos/newstock/kigali city.jpg`} alt="Kigali city" className="w-full h-52 object-cover" />
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

      {/* Tour Package */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-gold/20">
            <div>
              <p className="section-label mb-3">Safari Package</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">Rwanda Tour Package</h2>
            </div>
            <Link href="/plan-a-trip" className="btn-primary shrink-0 self-start md:self-end">Get a Custom Quote</Link>
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
                  <div className="flex items-center justify-between">
                    <span className="font-serif italic text-gold text-sm">{pkg.price}</span>
                    <Link href="/plan-a-trip" className="btn-primary">Enquire About This Package</Link>
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
