import Link from "next/link";

const rooms = [
  {
    name: "Premium Cottages",
    count: 15,
    description: "Located at the property edge with stunning sunrise and sunset River Nile views. Each cottage features a wide private balcony, indoor bathroom, and electric mosquito repellent — a perfect blend of bush comfort and contemporary style.",
    features: ["River Nile views", "Private balcony", "Indoor bathroom", "Electric mosquito repellent", "Daily housekeeping"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  },
  {
    name: "Executive Cottages",
    count: 11,
    description: "Designed for families and groups, these 3-in-1 cottages feature twin and single beds, with balconies large enough to seat up to 8 people — ideal for group gatherings at sunrise over the Nile.",
    features: ["Twin & single beds", "Family/group layout", "Large balcony (seats 8)", "Indoor bathroom", "Bush view"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=80",
  },
];

const activities = [
  { name: "Game Drives", desc: "Guided morning and evening drives through Murchison Falls National Park — elephants, giraffes, lions, buffaloes, and hippos await." },
  { name: "Murchison Falls Hike", desc: "Trek to the top of Africa's most powerful waterfall — 45 metres of the Nile squeezed through a 7-metre gorge." },
  { name: "Nile Boat Safari", desc: "A 3-hour boat safari along the Albert Nile to the base of Murchison Falls, with hippos, crocodiles, and over 450 bird species." },
  { name: "Sport Fishing", desc: "Cast for Nile perch and tiger fish in the Albert Nile with experienced local guides and all equipment provided." },
  { name: "Night Game Drives", desc: "Spot nocturnal creatures — civets, genets, bush babies, and African wild cats — under the stars." },
  { name: "Basketry Workshops", desc: "Connect with local artisans and learn traditional basket weaving techniques — a meaningful community experience." },
];

export default function TilengaSafariLodgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[550px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/20 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Our Lodges · Uganda</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-3">Tilenga Safari Lodge</h1>
          <p className="font-serif italic text-xl text-gold">Where the Nile Meets the Wild</p>
          <p className="text-cream/70 font-sans text-sm mt-3">
            Murchison Falls National Park · 1.7km from Tangi Gate
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Total Cottages</span>26</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Premium</span>15 cottages</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Executive</span>11 cottages</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Park Gate</span>1.7km away</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Lodge Overview</p>
            <h2 className="section-heading mb-6">A Haven of Comfort &amp; Serenity</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Tilenga Safari Lodge is positioned at the northern park boundaries of Murchison Falls
              National Park — 1.7km from the Tangi gate on the Karuma-Pakwach road, with panoramic
              views overlooking the Albert Nile River.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              Wake to elephants grazing below your balcony. Watch giraffes moving through the acacia
              woodland as the Nile glitters in the morning light. At Tilenga Safari Lodge, wildlife
              encounters begin at your doorstep — long before you step into a game drive vehicle.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              Guests rave about the spacious rooms, extraordinarily friendly staff, and the notable
              lodge chef whose cuisine blends Ugandan flavors with international cooking — all served
              with a sunset Nile view.
            </p>
            <div className="flex gap-4">
              <Link href="/plan-a-trip" className="btn-primary">Book a Stay</Link>
              <a href="mailto:booking@tilengasafarilodge.com" className="btn-outline">Email Lodge</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80" alt="Lodge" className="w-full h-52 object-cover" />
            <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Falls" className="w-full h-52 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80" alt="Wildlife" className="w-full h-52 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Nile" className="w-full h-52 object-cover" />
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-cream-dark py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Where You Sleep</p>
            <h2 className="section-heading">Accommodation</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room.name} className="bg-white overflow-hidden shadow-sm">
                <div className="relative h-56 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-forest text-cream text-xs font-sans uppercase tracking-widest px-3 py-1">
                    {room.count} units
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-forest mb-3">{room.name}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed mb-5">{room.description}</p>
                  <ul className="space-y-1.5">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-stone text-sm font-sans">
                        <span className="text-gold text-xs">✦</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Things to Do</p>
            <h2 className="section-heading">Activities &amp; Experiences</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <div key={act.name} className="bg-cream-dark border border-gold/10 p-6 hover:shadow-sm transition-shadow">
                <p className="font-serif text-3xl text-gold/40 mb-3 leading-none">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-lg text-forest mb-2">{act.name}</h3>
                <p className="text-stone font-sans text-sm leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Book */}
      <section className="bg-forest py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-cream mb-6">Book Your Stay</h2>
            <ul className="space-y-4 text-cream/70 font-sans text-sm mb-8">
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Phone: <a href="tel:+256789390350" className="hover:text-gold">+256 789 390 350</a> / <a href="tel:+256703999688" className="hover:text-gold">+256 703 999 688</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Email: <a href="mailto:booking@tilengasafarilodge.com" className="hover:text-gold">booking@tilengasafarilodge.com</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Location: Northern park boundary, Murchison Falls NP, Uganda</span>
              </li>
            </ul>
            <Link href="/plan-a-trip" className="btn-outline">Plan a Full Itinerary</Link>
          </div>
          <div className="bg-forest-dark/50 p-8 border border-white/10">
            <p className="font-serif text-xl text-gold mb-4">Enquire Now</p>
            <p className="text-cream/60 font-sans text-sm mb-6">
              Our team will respond within 24 hours with availability, pricing, and a tailored proposal.
            </p>
            <a
              href="https://wa.me/256789390350?text=I'm interested in booking Tilenga Safari Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 hover:bg-[#1ebe5d] transition-colors font-sans text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
