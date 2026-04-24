import Link from "next/link";

const itinerary = [
  { day: "Days 1–2", title: "Kigali Arrival & City Tour", desc: "Arrive in Kigali, visit the moving Kigali Genocide Memorial, explore the vibrant city markets, and enjoy local Rwandan cuisine." },
  { day: "Days 3–5", title: "Volcanoes National Park", desc: "Trek to encounter mountain gorilla families and golden monkeys in the mist-covered volcanic forests. Each trek is a life-changing, hour-long encounter." },
  { day: "Days 6–8", title: "Lake Kivu & Departure", desc: "Relax on the serene shores of Lake Kivu, take a boat ride to the islands, participate in a cultural village experience, and taste local food before departure." },
];

const highlights = [
  { icon: "🦍", label: "Gorilla Tracking" },
  { icon: "🌆", label: "Kigali City Tours" },
  { icon: "🚗", label: "Game Drives" },
  { icon: "🕊️", label: "Genocide Memorial" },
  { icon: "🌋", label: "Volcanoes NP" },
  { icon: "🌿", label: "Nyungwe Forest" },
];

export default function RwandaPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/30 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">East Africa</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-3">Rwanda</h1>
          <p className="font-serif italic text-2xl text-gold">Land of a Thousand Hills</p>
        </div>
      </section>

      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>May–Oct</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Rwandan Franc</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +2</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Kigali (KGL)</div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Where Gorillas Roam the Misty Mountains</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Rwanda is a multicultural country in East Africa whose diverse landscape spans from
              the lush, rolling hills of its famed &apos;Land of a Thousand Hills&apos; to the breathtaking
              Volcanoes National Park — home to the endangered mountain gorillas — and the serene
              waters of Lake Kivu.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Gorilla trekking in Rwanda is widely considered the pinnacle of African wildlife
              experiences. With only around 1,000 mountain gorillas remaining in the wild —
              split between Rwanda, Uganda, and the DRC — each encounter is profoundly rare
              and deeply moving.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              Rwanda is also one of Africa&apos;s cleanest, safest, and most progressive nations —
              its capital Kigali regularly ranked among Africa&apos;s most liveable cities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=500&q=80" alt="Mountain gorilla" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Rwanda hills" className="w-full h-48 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Forest" className="w-full h-48 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&q=80" alt="Community" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-8">Rwanda Hot Spots</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {highlights.map((h) => (
              <div key={h.label} className="bg-white p-4 border border-gold/20">
                <div className="text-3xl mb-2">{h.icon}</div>
                <p className="text-forest text-xs font-sans uppercase tracking-wider">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Recommended Package</p>
            <h2 className="section-heading">8-Day Visit Rwanda Safari</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-stone font-sans mt-6 max-w-xl mx-auto">
              The complete Rwanda experience — gorillas, golden monkeys, Kigali&apos;s culture,
              Lake Kivu&apos;s tranquility, and the living history of a nation reborn.
            </p>
          </div>

          <div className="bg-white border border-gold/10 overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1200&q=80"
                alt="Rwanda"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-dark/40" />
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
              <Link href="/plan-a-trip" className="btn-primary">
                Enquire About This Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">Ready to Meet the Gorillas?</h2>
        <p className="text-cream/60 font-sans max-w-lg mx-auto mb-8">
          Rwanda&apos;s mountain gorillas await. Let our specialists secure your permits and design your perfect itinerary.
        </p>
        <Link href="/plan-a-trip" className="btn-outline">Plan My Rwanda Safari</Link>
      </section>
    </>
  );
}
