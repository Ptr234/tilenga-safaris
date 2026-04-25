import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Burj Khalifa",
    detail: "World's Tallest Building — 828m",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85",
  },
  {
    name: "Desert Safari",
    detail: "Dune Bashing, Camel Rides & Bedouin Dinner",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85",
  },
  {
    name: "Dubai Marina",
    detail: "Superyachts, Promenades & Fine Dining",
    image: "https://images.unsplash.com/photo-1548813395-afeb41e01842?w=900&q=85",
  },
  {
    name: "Gold & Spice Souks",
    detail: "Old Dubai's Legendary Bazaars",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=85",
  },
  {
    name: "Palm Jumeirah",
    detail: "Iconic Palm-Shaped Archipelago",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13126b5?w=900&q=85",
  },
  {
    name: "Dubai Creek",
    detail: "Historic Waterway & Abra Boat Rides",
    image: "https://images.unsplash.com/photo-1581345837049-20d2c4b25ef3?w=900&q=85",
  },
];

export default function DubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">Middle East</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Dubai" by="char" stagger={0.05} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">Desert Luxury</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>Nov–Mar</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>UAE Dirham</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +4</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Airport</span>Dubai (DXB)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">The Perfect Safari Extension</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Many of our East Africa flights route through Dubai — making it the perfect destination
              to combine with your African safari. Spend a few days exploring one of the world&apos;s
              most ambitious cities before or after your wildlife adventure.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              From exhilarating desert dune safaris at sunset to the record-breaking Burj Khalifa,
              traditional abra boat rides on Dubai Creek, and the labyrinthine Gold and Spice Souks —
              Dubai blends ancient Arab culture with futuristic ambition.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              World-class hotels, Michelin-starred dining, pristine beaches, and some of the world&apos;s
              best shopping — Dubai delivers luxury at every turn.
            </p>
            <Link href="/plan-a-trip" className="btn-primary">Add Dubai to My Itinerary</Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80" alt="Dubai Burj Khalifa" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80" alt="Dubai desert camels" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1548813395-afeb41e01842?w=500&q=80" alt="Dubai Marina" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1533587851505-d119e13126b5?w=500&q=80" alt="Palm Jumeirah" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Dubai Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="Where the Future Meets Tradition" by="word" stagger={0.05} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Add Dubai to Your Safari</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Our specialists seamlessly combine Dubai with any East Africa safari itinerary — one trip, two worlds.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Combined Trip</Link>
        </FadeIn>
      </section>
    </>
  );
}
