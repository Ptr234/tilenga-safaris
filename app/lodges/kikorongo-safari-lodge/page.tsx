import Link from "next/link";

const rooms = [
  {
    name: "Premium Cottages",
    count: 18,
    description: "Named in the Lukhonzo language of the Kasese region, each premium cottage captures wide views of both Lake Kikorongo and Lake George — with private terraces perfectly positioned for sunset watching over the Rwenzori Mountains.",
    features: ["Lake Kikorongo & George views", "Private terrace", "Rwenzori Mountain panorama", "Indoor bathroom", "Daily housekeeping"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=80",
  },
  {
    name: "Premium Tents",
    count: 13,
    description: "Tented accommodation that brings you closest to nature — bird calls at dawn, the lake shimmering below. Ideal for birders and photographers seeking complete immersion in the Queen Elizabeth NP ecosystem.",
    features: ["Natural tented setting", "Bird watching access", "Photographer-friendly", "Lake views", "En suite facilities"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  },
  {
    name: "Intimate Cottages",
    count: 5,
    description: "Smaller, edge-located cottages suited to guests who prefer not to hike to their accommodation. Cozy and private, these units offer a quieter retreat within the lodge grounds.",
    features: ["Ground-level access", "Secluded & private", "Indoor bathroom", "Garden view", "Ideal for mobility-conscious guests"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
  },
];

const activities = [
  { name: "Kazinga Channel Cruise", desc: "Sail the 40km channel between Lake Edward and Lake George — one of the world's greatest concentrations of hippos, Nile crocodiles, and 600+ bird species." },
  { name: "Queen Elizabeth Game Drive", desc: "Track lions, elephants, buffaloes, leopards, and the famous tree-climbing lions of Ishasha sector on guided morning and evening drives." },
  { name: "Bird Watching", desc: "Over 600 bird species in Queen Elizabeth NP — including shoebill storks, African skimmers, and the rare martial eagle." },
  { name: "Mount Rwenzori Climbing", desc: "The legendary Mountains of the Moon — Africa's third-highest peak with equatorial glaciers, giant heathers, and stunning Albertine Rift views." },
  { name: "Boat Cruise", desc: "Evening boat cruises on Lake Kikorongo with spectacular sunset over the Rwenzori Mountains and prolific birdlife." },
  { name: "Chimpanzee Tracking", desc: "Kibale National Park, just 3 hours away, offers one of the best chimpanzee tracking experiences in Africa." },
];

export default function KikorongoSafariLodgePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[550px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/20 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Our Lodges · Uganda</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-3">Kikorongo Safari Lodge</h1>
          <p className="font-serif italic text-xl text-gold">At the Equator, Above the Lakes</p>
          <p className="text-cream/70 font-sans text-sm mt-3">
            Queen Elizabeth National Park · Kasese, Mpondwe Road
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Cottages</span>18 Premium</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Tents</span>13 Premium</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Intimate</span>5 Cottages</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Location</span>On the Equator</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Lodge Overview</p>
            <h2 className="section-heading mb-6">Perched at the Equator</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Kikorongo Safari Lodge is situated directly on the Equator on a steep hill in Kasese,
              overlooking the glistening waters of Lake George and Lake Kikorongo — with the snow-capped
              Rwenzori Mountains on the horizon and Queen Elizabeth National Park spreading below.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The lodge is the perfect base for exploring all that Queen Elizabeth NP has to offer —
              from the legendary Kazinga Channel boat safari with its extraordinary hippo and
              crocodile populations, to tracking tree-climbing lions in Ishasha and the prolific
              birdlife of the channel shores.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              Guests describe a profoundly peaceful atmosphere — morning bird song, cool mountain air,
              and the lakes shimmering gold at sunset from their private terrace.
            </p>
            <div className="flex gap-4">
              <Link href="/plan-a-trip" className="btn-primary">Book a Stay</Link>
              <a href="mailto:bookings@kikorongosafarilodge.com" className="btn-outline">Email Lodge</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80" alt="Lake view" className="w-full h-52 object-cover" />
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Landscape" className="w-full h-52 object-cover mt-6" />
            <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80" alt="Wildlife" className="w-full h-52 object-cover -mt-6" />
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80" alt="Lodge" className="w-full h-52 object-cover" />
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
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.name} className="bg-white overflow-hidden shadow-sm">
                <div className="relative h-44 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 bg-forest text-cream text-[10px] font-sans uppercase tracking-widest px-2 py-1">
                    {room.count} units
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest mb-3">{room.name}</h3>
                  <p className="text-stone font-sans text-sm leading-relaxed mb-4">{room.description}</p>
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
                <span>Phone: <a href="tel:+256789390350" className="hover:text-gold">+256 789 390 350</a> / <a href="tel:+256775692334" className="hover:text-gold">+256 77569 2334</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Email: <a href="mailto:bookings@kikorongosafarilodge.com" className="hover:text-gold">bookings@kikorongosafarilodge.com</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Website: <a href="https://www.kikorongosafarilodge.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">www.kikorongosafarilodge.com</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">✦</span>
                <span>Location: Kasese, Mpondwe Road — on the Equator, Queen Elizabeth NP</span>
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
              href="https://wa.me/256789390350?text=I'm interested in Kikorongo Safari Lodge"
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
