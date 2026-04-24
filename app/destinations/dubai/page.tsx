import Link from "next/link";

const highlights = [
  "Burj Khalifa",
  "Desert Safari",
  "Gold Souk",
  "Palm Jumeirah",
  "Dubai Creek",
  "World-class Dining",
];

export default function DubaiPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/30 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Middle East</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-3">Dubai</h1>
          <p className="font-serif italic text-2xl text-gold">Desert Luxury</p>
        </div>
      </section>

      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>Nov–Mar</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>UAE Dirham</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +4</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Airport</span>Dubai (DXB)</div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
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
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80" alt="Dubai skyline" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80" alt="Desert" className="w-full h-48 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80" alt="Beach" className="w-full h-48 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Culture" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-8">Dubai Highlights</p>
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((h) => (
              <span key={h} className="border border-gold/50 text-forest text-xs font-sans uppercase tracking-widest px-4 py-2">{h}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">Add Dubai to Your Safari</h2>
        <p className="text-cream/60 font-sans max-w-lg mx-auto mb-8">
          Our specialists can seamlessly combine Dubai with any East Africa safari itinerary — one trip, two worlds.
        </p>
        <Link href="/plan-a-trip" className="btn-outline">Plan My Combined Trip</Link>
      </section>
    </>
  );
}
