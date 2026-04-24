import Link from "next/link";

const packages = [
  {
    name: "Zanzibar Beach Holiday (5 nights / 6 days)",
    duration: "5 nights / 6 days",
    price: "From $1,200",
    minPax: "Min. 2 participants",
    description: "Stone Town tour, Prison Island, Safari Blue, snorkeling at Mnemba, and turtle swimming at Nungwi Aquarium — the perfect Indian Ocean escape.",
    activities: ["Stone Town tour", "Prison Island", "Safari Blue", "Mnemba snorkeling", "Turtle swimming"],
  },
  {
    name: "Zanzibar Beach Holiday (6 nights / 7 days)",
    duration: "6 nights / 7 days",
    price: "From $1,200",
    minPax: "Min. 2 participants",
    description: "An extended Zanzibar experience adding a Spice Tour, Jozani Forest walk with red colobus monkeys, and a dolphin swimming excursion.",
    activities: ["Stone Town", "Prison Island", "Spice Tour", "Jozani Forest", "Dolphin swimming"],
  },
  {
    name: "12-Day Kenya & Tanzania Safari",
    duration: "12 days",
    price: "From $3,000 / person",
    minPax: "Min. 4 participants",
    description: "The ultimate East Africa circuit — Serengeti plains, the ancient Ngorongoro Crater, Masai Mara, and Amboseli, showcasing Africa's most iconic landscapes.",
    activities: ["Serengeti NP", "Ngorongoro Crater", "Lake Nakuru", "Masai Mara", "Amboseli NP"],
  },
];

const highlights = [
  "Hot Air Balloon",
  "Zanzibar",
  "Wildebeest Migration",
  "Mt. Kilimanjaro",
  "Ruaha NP",
  "Serengeti",
];

export default function TanzaniaPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/30 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">East Africa</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-3">Tanzania</h1>
          <p className="font-serif italic text-2xl text-gold">Serengeti &amp; Zanzibar</p>
        </div>
      </section>

      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>Dec–Mar, Jun–Oct</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Tanzanian Shilling</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +3</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Airports</span>Arusha (JRO) / Dar (DAR)</div>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">Africa&apos;s Most Diverse Safari Land</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Tanzania is a multicultural country in East Africa whose diverse landscape spans from
              the majestic snow-capped Mount Kilimanjaro to the vast plains of the Serengeti — home
              to the world-renowned Great Migration — and the crystal-clear waters of the Zanzibar Archipelago.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Ngorongoro Crater, a UNESCO World Heritage Site, shelters the highest density of
              wildlife in Africa within its ancient volcanic walls. The Serengeti is synonymous with
              the dramatic wildebeest crossing — over 1.5 million animals in one of nature&apos;s
              greatest spectacles.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              After your safari, unwind on Zanzibar&apos;s pristine white beaches — ancient Stone Town,
              spice tours, snorkeling with whale sharks, and the warm azure waters of the Indian Ocean.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80" alt="Serengeti" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80" alt="Zanzibar" className="w-full h-48 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&q=80" alt="Kilimanjaro" className="w-full h-48 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&q=80" alt="Wildlife" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-8">Tanzania Hot Spots</p>
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((h) => (
              <span key={h} className="border border-gold/50 text-forest text-xs font-sans uppercase tracking-widest px-4 py-2">{h}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Safari Packages</p>
            <h2 className="section-heading">Tanzania Tour Packages</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white border border-gold/10 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-forest">{pkg.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-wider font-sans mt-1">{pkg.duration} · {pkg.minPax}</p>
                  </div>
                  <span className="bg-forest text-cream text-xs font-sans px-3 py-1 shrink-0 ml-4 text-center">{pkg.price}</span>
                </div>
                <p className="text-stone font-sans text-sm leading-relaxed mb-5">{pkg.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.activities.map((act) => (
                    <span key={act} className="text-[10px] uppercase tracking-wider text-stone border border-stone/30 px-2 py-0.5 font-sans">{act}</span>
                  ))}
                </div>
                <Link href="/plan-a-trip" className="text-forest font-sans text-sm uppercase tracking-wider border-b border-gold hover:text-gold transition-colors">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">Ready to Explore Tanzania?</h2>
        <p className="text-cream/60 font-sans max-w-lg mx-auto mb-8">
          Serengeti game drives by day, Zanzibar sunsets by evening. Let us build your perfect Tanzania itinerary.
        </p>
        <Link href="/plan-a-trip" className="btn-outline">Plan My Tanzania Safari</Link>
      </section>
    </>
  );
}
