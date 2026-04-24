import Link from "next/link";

const destinations = [
  {
    name: "Uganda",
    tag: "Pearl of Africa",
    description:
      "From the lush rainforests of Bwindi Impenetrable National Park to the stunning savannas of Queen Elizabeth and the thundering Murchison Falls — Uganda is Africa at its most raw and rewarding.",
    hotspots: ["Gorilla Tracking", "Murchison Falls", "Queen Elizabeth NP", "Source of the Nile"],
    bestTime: "Jan–Mar, Jul–Sep",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=80",
    href: "/destinations/uganda",
    featured: true,
  },
  {
    name: "Kenya",
    tag: "Iconic Maasai Mara",
    description:
      "Home to the legendary Maasai Mara, Mount Kenya, the Great Wildebeest Migration, and the flamingo-fringed shores of Lake Nakuru — Kenya is the quintessential African safari destination.",
    hotspots: ["Maasai Mara", "Wildebeest Migration", "Amboseli NP", "Lake Nakuru"],
    bestTime: "Dec–Mar, Jun–Oct",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=900&q=80",
    href: "/destinations/kenya",
  },
  {
    name: "Tanzania",
    tag: "Serengeti & Zanzibar",
    description:
      "The vast Serengeti plains, the ancient Ngorongoro Crater, snow-capped Kilimanjaro, and Zanzibar's crystal-clear waters make Tanzania one of the world's most diverse safari destinations.",
    hotspots: ["Serengeti NP", "Ngorongoro Crater", "Zanzibar", "Mount Kilimanjaro"],
    bestTime: "Dec–Mar, Jun–Oct",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80",
    href: "/destinations/tanzania",
  },
  {
    name: "Rwanda",
    tag: "Land of a Thousand Hills",
    description:
      "The rolling hills of Rwanda shelter endangered mountain gorillas in Volcanoes National Park, golden monkeys in Nyungwe Forest, and the serene shores of Lake Kivu.",
    hotspots: ["Gorilla Tracking", "Volcanoes NP", "Kigali City Tour", "Lake Kivu"],
    bestTime: "May–Oct",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&q=80",
    href: "/destinations/rwanda",
  },
  {
    name: "South Africa",
    tag: "Cape & Kruger",
    description:
      "From the Big Five in Kruger National Park to the dramatic Cape Peninsula and the world-class wines of Stellenbosch — South Africa offers the most diverse safari experience on the continent.",
    hotspots: ["Kruger National Park", "Cape Town", "Garden Route", "Winelands"],
    bestTime: "May–Sep",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=900&q=80",
    href: "/destinations/south-africa",
  },
  {
    name: "Dubai",
    tag: "Desert Luxury",
    description:
      "Combine your African safari with a layover or extension in Dubai — dune safaris, record-breaking architecture, world-class dining, and souks overflowing with spices and gold.",
    hotspots: ["Desert Safari", "Burj Khalifa", "Old Dubai Souks", "Palm Jumeirah"],
    bestTime: "Nov–Mar",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
    href: "/destinations/dubai",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 md:h-96 overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 to-forest-dark/80" />
        <div className="relative z-10 px-6 md:px-16 pb-12 w-full max-w-4xl">
          <p className="section-label text-gold mb-2">Africa &amp; Beyond</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream">Our Destinations</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone font-sans leading-relaxed text-lg">
            Explore a curated selection of breathtaking safari destinations — from iconic Murchison Falls
            to the lush Kibale Forest, from the Serengeti plains to the beaches of Zanzibar.
            Each destination offers its own character, wildlife, and transformative experiences.
          </p>
        </div>
      </section>

      {/* Destinations list */}
      <section className="bg-cream-dark py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`grid md:grid-cols-2 gap-0 bg-white shadow-sm overflow-hidden ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 md:h-auto">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-forest-dark/20" />
                {dest.featured && (
                  <span className="absolute top-4 left-4 bg-gold text-forest text-[10px] uppercase tracking-widest font-sans px-3 py-1">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="section-label mb-2">{dest.tag}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-forest mb-1">{dest.name}</h2>
                <p className="text-gold text-xs uppercase tracking-wider font-sans mb-5">
                  Best time: {dest.bestTime}
                </p>
                <p className="text-stone font-sans leading-relaxed mb-6">{dest.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {dest.hotspots.map((spot) => (
                    <span
                      key={spot}
                      className="bg-cream text-forest-dark text-xs uppercase tracking-wider font-sans px-3 py-1 border border-gold/30"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
                <Link href={dest.href} className="btn-primary self-start">
                  Explore {dest.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <p className="section-label text-gold mb-4">Tailored for You</p>
        <h2 className="font-serif text-4xl text-cream mb-6">Can&apos;t decide? Let us help.</h2>
        <p className="text-cream/60 font-sans max-w-xl mx-auto mb-10">
          Tell us your travel dates, interests, and budget — we&apos;ll craft a bespoke itinerary
          that combines the best of multiple destinations.
        </p>
        <Link href="/plan-a-trip" className="btn-outline">
          Plan My Safari
        </Link>
      </section>
    </>
  );
}
