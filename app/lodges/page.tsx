import Link from "next/link";

const lodges = [
  {
    name: "Tilenga Safari Lodge",
    tagline: "Where the Nile Meets the Wild",
    location: "Murchison Falls National Park, Uganda",
    description:
      "Positioned 1.7km from the Tangi gate on the Karuma-Pakwach road, Tilenga Safari Lodge is a haven of comfort and serenity with sweeping views over the Albert Nile. 26 cottages — premium and executive — designed for wildlife lovers and comfort seekers alike.",
    rooms: [
      { type: "Premium Cottages (15)", desc: "Located at the property edge with sunrise and sunset River Nile views, private balconies, and indoor bathrooms." },
      { type: "Executive Cottages (11)", desc: "3-in-1 configuration with twin and single beds — ideal for families and groups. Balconies seating up to 8." },
    ],
    amenities: ["Private balconies", "Dining & bar", "Wildlife game viewing", "Sport fishing", "Night game drives", "Basketry workshops", "Electric mosquito repellent"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    href: "/lodges/tilenga-safari-lodge",
    contact: "booking@tilengasafarilodge.com",
    phone: "+256 703 999 688",
  },
  {
    name: "Kikorongo Safari Lodge",
    tagline: "At the Equator, Above the Lakes",
    location: "Queen Elizabeth National Park, Uganda",
    description:
      "Situated in Kasese on the Mpondwe Road, directly on the Equator on a steep hill overlooking Lake George and Lake Kikorongo, Kikorongo Safari Lodge delivers sweeping views of the Rwenzori Mountains and the Kazinga Channel — home to one of the world's largest concentrations of hippos.",
    rooms: [
      { type: "Premium Cottages (18)", desc: "Named after the local Lukhonzo language — wide views of Lake Kikorongo and Lake George with private terraces." },
      { type: "Premium Tents (13)", desc: "Tented accommodation with natural immersion — perfect for bird watchers and photographers." },
      { type: "Intimate Cottages (5)", desc: "Smaller, edge-located units ideal for guests who prefer not to hike to their accommodation." },
    ],
    amenities: ["Swimming pool", "Bar & restaurant", "Bird watching", "Boat cruises", "Kazinga Channel safari", "Mt. Rwenzori climbing", "Laundry service"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
    href: "/lodges/kikorongo-safari-lodge",
    contact: "bookings@kikorongosafarilodge.com",
    phone: "+256 77569 2334",
  },
];

export default function LodgesPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 to-forest-dark/80" />
        <div className="relative z-10 px-6 md:px-16 pb-12">
          <p className="section-label text-gold mb-2">Where You Stay</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream">Our Lodges</h1>
        </div>
      </section>

      <section className="bg-cream py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone font-sans leading-relaxed text-lg">
            Both Tilenga Safaris lodges are strategically positioned at the entrance gates
            of Uganda&apos;s two most spectacular national parks — so you spend less time driving
            and more time experiencing Africa&apos;s wild beauty.
          </p>
        </div>
      </section>

      <section className="bg-cream-dark pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {lodges.map((lodge, i) => (
            <div key={lodge.name} className={`grid md:grid-cols-2 gap-0 bg-white shadow-sm overflow-hidden ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative overflow-hidden h-80 md:h-auto">
                <img src={lodge.image} alt={lodge.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-forest-dark/20" />
              </div>
              <div className="p-8 md:p-12">
                <p className="section-label mb-2">{lodge.location.split(",")[0]}</p>
                <h2 className="font-serif text-3xl text-forest mb-1">{lodge.name}</h2>
                <p className="font-serif italic text-gold mb-1">{lodge.tagline}</p>
                <p className="text-stone text-xs font-sans uppercase tracking-wider mb-6">{lodge.location}</p>
                <p className="text-stone font-sans leading-relaxed mb-6">{lodge.description}</p>

                <div className="mb-6">
                  <p className="text-forest text-xs uppercase tracking-widest font-sans mb-3">Accommodation</p>
                  <ul className="space-y-2">
                    {lodge.rooms.map((room) => (
                      <li key={room.type} className="flex gap-3 text-sm text-stone font-sans">
                        <span className="text-gold mt-0.5">✦</span>
                        <span><strong className="text-forest-dark">{room.type}</strong> — {room.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {lodge.amenities.map((a) => (
                    <span key={a} className="text-[10px] uppercase tracking-wider text-stone border border-stone/30 px-2 py-0.5 font-sans">{a}</span>
                  ))}
                </div>

                <Link href={lodge.href} className="btn-primary">
                  View Lodge Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">Ready to Book Your Stay?</h2>
        <p className="text-cream/60 font-sans max-w-lg mx-auto mb-8">
          Contact our team to check availability, get a custom quote, or bundle your lodge with a full safari itinerary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/plan-a-trip" className="btn-outline">Plan My Safari</Link>
          <a href="mailto:destinations@tilengasafaris.com" className="btn-ghost">Email Us</a>
        </div>
      </section>
    </>
  );
}
