import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Kruger National Park",
    detail: "Africa's Premier Big Five Reserve",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=85",
  },
  {
    name: "Cape Town",
    detail: "Table Mountain & the Atlantic Seaboard",
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=900&q=85",
  },
  {
    name: "Cape Peninsula",
    detail: "Boulders Beach & Cape of Good Hope",
    image: "https://images.unsplash.com/photo-1576085834044-92c469b79d11?w=900&q=85",
  },
  {
    name: "Cape Winelands",
    detail: "Stellenbosch, Franschhoek & World-Class Wine",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=85",
  },
  {
    name: "Garden Route",
    detail: "Scenic Coastal Drive & Tsitsikamma Forest",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85",
  },
  {
    name: "Kruger Wildlife",
    detail: "Elephant, Rhino, Buffalo & Leopard",
    image: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?w=900&q=85",
  },
];

export default function SouthAfricaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1800&q=80)",
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
            <SplitText text="South Africa" by="word" stagger={0.07} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">Cape &amp; Kruger</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Sep</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>South African Rand</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Johannesburg (JNB)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Africa&apos;s Most Complete Safari Experience</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              South Africa offers Africa&apos;s most diverse travel experience — world-class Big Five
              safaris in Kruger National Park, dramatic Atlantic and Indian Ocean coastlines,
              the breathtaking Cape Peninsula, and internationally acclaimed wine regions, all
              within one country.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Kruger National Park is one of Africa&apos;s largest game reserves, home to the
              Big Five — lion, leopard, elephant, rhino, and buffalo — along with over 500 bird
              species and an extraordinary variety of predators.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              Cape Town consistently ranks among the world&apos;s most beautiful cities —
              framed by Table Mountain, with pristine beaches, vibrant culture, and the
              famous Cape Winelands just an hour away.
            </p>
            <Link href="/plan-a-trip" className="btn-primary">Plan a South Africa Trip</Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80" alt="Kruger lion" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=500&q=80" alt="Cape Town Table Mountain" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1576085834044-92c469b79d11?w=500&q=80" alt="Cape Town aerial" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501705388883-4ed8a543392c?w=500&q=80" alt="Kruger elephant" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">South Africa Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="Wild, Scenic & World-Class" by="word" stagger={0.06} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready for South Africa?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Kruger sunrises, Cape Town sunsets, and wine under Table Mountain — let us design your perfect South Africa itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My South Africa Trip</Link>
        </FadeIn>
      </section>
    </>
  );
}
