import Link from "next/link";

const highlights = [
  "Kruger National Park",
  "Cape Town",
  "Garden Route",
  "Winelands",
  "Whale Watching",
  "Table Mountain",
];

export default function SouthAfricaPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/30 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Southern Africa</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-3">South Africa</h1>
          <p className="font-serif italic text-2xl text-gold">Cape &amp; Kruger</p>
        </div>
      </section>

      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Sep</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>South African Rand</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Johannesburg (JNB)</div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Africa&apos;s Most Complete Safari Experience</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              South Africa offers Africa&apos;s most diverse travel experience — world-class Big Five
              safaris in Kruger National Park, dramatic Atlantic and Indian Ocean coastlines,
              the breathtaking Cape Peninsula, and internationally acclaimed wine regions all
              within one country.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Kruger National Park is one of Africa&apos;s largest game reserves, home to the
              Big Five — lion, leopard, elephant, rhino, and buffalo — along with over 500 bird
              species and an extraordinary variety of antelope and predators.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              Cape Town consistently ranks among the world&apos;s most beautiful cities —
              framed by Table Mountain, with pristine beaches, vibrant culture, and the
              famous Cape Winelands just an hour away.
            </p>
            <Link href="/plan-a-trip" className="btn-primary">Plan a South Africa Trip</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&q=80" alt="Lion" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Landscape" className="w-full h-48 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&q=80" alt="Wildlife" className="w-full h-48 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80" alt="Cape" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-8">South Africa Hot Spots</p>
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((h) => (
              <span key={h} className="border border-gold/50 text-forest text-xs font-sans uppercase tracking-widest px-4 py-2">{h}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">Ready for South Africa?</h2>
        <p className="text-cream/60 font-sans max-w-lg mx-auto mb-8">
          Kruger sunrises, Cape Town sunsets, and wine under Table Mountain — let us design your perfect South Africa itinerary.
        </p>
        <Link href="/plan-a-trip" className="btn-outline">Plan My South Africa Trip</Link>
      </section>
    </>
  );
}
