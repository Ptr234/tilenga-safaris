import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const packages = [
  {
    name: "8-Day Dubai Experience",
    tagline: "Desert luxury & city thrills",
    duration: "8 Days",
    price: "Request a Quote",
    description:
      "Thrilling desert activities and luxurious city experiences — Burj Khalifa, desert safari with dune bashing, camel riding, sandboarding, luxury yacht cruise, skydiving over Palm Jumeirah, Dubai Museum, Dubai Mall, and authentic local food tasting.",
    activities: [
      "Burj Khalifa visit",
      "Desert safari & dune bashing",
      "Camel riding & sandboarding",
      "Luxury yacht cruise",
      "Skydiving over Palm Jumeirah",
      "Dubai Museum & Dubai Mall",
      "Local food tasting",
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85",
  },
];

const hotspots = [
  {
    name: "Burj Khalifa",
    detail: "World's Tallest Building — 828m",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85",
  },
  {
    name: "Desert Safari",
    detail: "Dune Bashing, Camel Riding & Sandboarding",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85",
  },
  {
    name: "The Dubai Fountain",
    detail: "World's Largest Choreographed Fountain",
    image: "https://images.unsplash.com/photo-1548813395-afeb41e01842?w=900&q=85",
  },
  {
    name: "Dubai Aquarium",
    detail: "One of the World's Largest Indoor Aquariums",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=900&q=85",
  },
  {
    name: "Palm Jumeirah",
    detail: "Iconic Palm-Shaped Archipelago",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13126b5?w=900&q=85",
  },
  {
    name: "Dubai Miracle Garden",
    detail: "World's Largest Natural Flower Garden",
    image: "https://images.unsplash.com/photo-1581345837049-20d2c4b25ef3?w=900&q=85",
  },
  {
    name: "Ski Dubai",
    detail: "Indoor Snow Park in the Arabian Desert",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
  },
  {
    name: "Al Fahidi Historical Neighbourhood",
    detail: "Old Dubai's Cultural & Heritage Quarter",
    image: "https://images.unsplash.com/photo-1581345837049-20d2c4b25ef3?w=900&q=80",
  },
];

export default function DubaiPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
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

      {/* Tour Package */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-gold/20">
            <div>
              <p className="section-label mb-3">Tour Package</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">Dubai Tour Package</h2>
            </div>
            <Link href="/plan-a-trip" className="btn-primary shrink-0 self-start md:self-end">Get a Custom Quote</Link>
          </FadeIn>

          {packages.map((pkg) => (
            <div key={pkg.name} className="grid md:grid-cols-2 gap-12 items-start">
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
                <div className="flex flex-wrap gap-2 mb-8">
                  {pkg.activities.map((act) => (
                    <span key={act} className="text-[10px] uppercase tracking-widest font-sans border border-gold/30 text-forest/70 px-3 py-1.5 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold" />{act}
                    </span>
                  ))}
                </div>
                <Link href="/plan-a-trip" className="btn-primary">Enquire About This Package</Link>
              </div>
            </div>
          ))}
        </div>
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
