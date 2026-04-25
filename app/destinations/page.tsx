import Link from "next/link";

const destinations = [
  {
    name: "Uganda",
    tag: "Pearl of Africa",
    description: "From the lush rainforests of Bwindi to the thundering Murchison Falls and the source of the Nile — Africa at its most raw and rewarding.",
    hotspots: ["Gorilla Tracking", "Murchison Falls", "Queen Elizabeth NP", "Source of the Nile"],
    bestTime: "Jan–Mar · Jul–Sep",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80",
    href: "/destinations/uganda",
    num: "01",
    large: true,
  },
  {
    name: "Kenya",
    tag: "Iconic Maasai Mara",
    description: "The Great Migration. Maasai Mara. Amboseli's elephants against Kilimanjaro. Kenya is the quintessential African safari.",
    hotspots: ["Maasai Mara", "Wildebeest Migration", "Amboseli NP", "Lake Nakuru"],
    bestTime: "Dec–Mar · Jun–Oct",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=80",
    href: "/destinations/kenya",
    num: "02",
  },
  {
    name: "Tanzania",
    tag: "Serengeti & Zanzibar",
    description: "Vast Serengeti plains, the ancient Ngorongoro Crater, Kilimanjaro, and Zanzibar's crystal shores.",
    hotspots: ["Serengeti NP", "Ngorongoro Crater", "Zanzibar", "Mount Kilimanjaro"],
    bestTime: "Dec–Mar · Jun–Oct",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
    href: "/destinations/tanzania",
    num: "03",
  },
  {
    name: "Rwanda",
    tag: "Land of a Thousand Hills",
    description: "Mountain gorillas in volcanic mist. Golden monkeys in Nyungwe Forest. The serene shores of Lake Kivu.",
    hotspots: ["Gorilla Tracking", "Volcanoes NP", "Kigali City Tour", "Lake Kivu"],
    bestTime: "May–Oct",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80",
    href: "/destinations/rwanda",
    num: "04",
  },
  {
    name: "South Africa",
    tag: "Cape & Kruger",
    description: "Big Five in Kruger. Dramatic Cape Peninsula. World-class wines of Stellenbosch. Africa's most diverse destination.",
    hotspots: ["Kruger NP", "Cape Town", "Garden Route", "Winelands"],
    bestTime: "May–Sep",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=1200&q=80",
    href: "/destinations/south-africa",
    num: "05",
  },
  {
    name: "Dubai",
    tag: "Desert Luxury",
    description: "The perfect safari extension — dune safaris, record-breaking architecture, world-class dining, and ancient souks.",
    hotspots: ["Desert Safari", "Burj Khalifa", "Old Dubai Souks", "Palm Jumeirah"],
    bestTime: "Nov–Mar",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    href: "/destinations/dubai",
    num: "06",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
        <div className="relative z-10 px-8 md:px-20 pb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <p className="section-label text-gold">Africa &amp; Beyond</p>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-cream leading-[0.9] mb-6 uppercase tracking-heritage">
            Our<br /><em className="not-italic text-gold">Destinations</em>
          </h1>
          <p className="text-cream/60 font-sans text-base max-w-md leading-relaxed">
            Six breathtaking destinations. Each with its own character, wildlife, and transformative story.
          </p>
        </div>
      </section>

      {/* Editorial asymmetric grid — top row */}
      <section className="bg-forest-dark p-2">
        {/* Row 1: Uganda (large 2/3) + Kenya+Tanzania stacked (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-2">
          {/* Uganda — large feature */}
          <Link
            href={destinations[0].href}
            className="lg:col-span-2 group relative overflow-hidden h-[85vh] min-h-[500px] block"
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/20 to-transparent" />
            {/* Large number */}
            <span className="absolute top-6 left-8 font-serif text-cream/5 text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none uppercase">
              {destinations[0].num}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="w-12 h-px bg-gold mb-4 transition-all duration-500 group-hover:w-20" />
              <p className="text-gold text-xs uppercase tracking-[0.35em] font-sans mb-3">{destinations[0].tag}</p>
              <h2 className="font-serif text-5xl md:text-7xl text-cream leading-none mb-4 uppercase tracking-heritage">{destinations[0].name}</h2>
              <p className="text-cream/60 text-base font-sans leading-relaxed max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-6">
                {destinations[0].description}
              </p>
              <span className="text-gold text-[11px] uppercase tracking-widest font-sans border border-gold/30 px-4 py-2 bg-black/20 backdrop-blur-sm">
                Best time: {destinations[0].bestTime}
              </span>
            </div>
          </Link>

          {/* Kenya + Tanzania stacked */}
          <div className="lg:col-span-1 flex flex-col gap-2">
            {[destinations[1], destinations[2]].map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative overflow-hidden flex-1 min-h-[300px] block"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
                <span className="absolute top-6 right-8 font-serif text-cream/10 text-7xl leading-none select-none uppercase">{dest.num}</span>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="w-8 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-16" />
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">{dest.tag}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-heritage">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Rwanda, South Africa, Dubai — equal thirds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[destinations[3], destinations[4], destinations[5]].map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group relative overflow-hidden h-[65vh] min-h-[400px] block"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent" />
              <span className="absolute top-6 left-6 font-serif text-cream/10 text-7xl leading-none select-none uppercase">{dest.num}</span>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-10 h-px bg-gold mb-3 transition-all duration-500 group-hover:w-20" />
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-1">{dest.tag}</p>
                <h3 className="font-serif text-3xl text-cream mb-3 uppercase tracking-heritage">{dest.name}</h3>
                <p className="text-cream/55 text-sm font-sans leading-relaxed translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial info strip */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold/50" />
            <p className="section-label">Plan Your Journey</p>
            <div className="w-10 h-px bg-gold/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
            Every Destination, <em className="font-serif italic text-gold">Tailored to You</em>
          </h2>
          <p className="text-stone font-sans text-sm leading-relaxed max-w-2xl mx-auto mb-12">
            From Uganda&apos;s gorillas to Zanzibar&apos;s shores — our specialists combine destinations
            into seamless multi-country itineraries, or craft single-destination deep dives timed
            to wildlife seasons and your travel style.
          </p>
          {/* Destination quick-links as horizontal pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {destinations.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group border border-gold/40 text-forest text-xs uppercase tracking-widest font-sans px-5 py-2.5 hover:bg-forest hover:text-cream hover:border-forest transition-all duration-400"
              >
                {d.name}
              </Link>
            ))}
          </div>
          <Link href="/plan-a-trip" className="btn-primary">Plan My Safari</Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest py-24 px-6 md:px-16 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1400&q=60)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <p className="section-label text-gold mb-4">Can&apos;t Decide?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">Let Our Specialists Help</h2>
          <p className="text-cream/50 font-sans max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Tell us your dates, interests, and budget — we&apos;ll craft a bespoke itinerary
            spanning the best of Africa.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Get a Custom Itinerary</Link>
        </div>
      </section>
    </>
  );
}
