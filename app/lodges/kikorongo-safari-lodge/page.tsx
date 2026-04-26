import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";

const rooms = [
  {
    name: "Premium Cottages",
    count: "18 Units",
    description:
      "Named in the Lukhonzo language of Kasese, each cottage captures wide views of both Lake Kikorongo and Lake George — private terraces perfectly positioned for sunset watching over the Rwenzori Mountains.",
    features: ["Lake Kikorongo & George views", "Private terrace", "Rwenzori Mountain panorama", "Indoor bathroom", "Daily housekeeping"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=85",
  },
  {
    name: "Premium Tents",
    count: "13 Units",
    description:
      "Tented accommodation that brings you closest to nature — bird calls at dawn, the lake shimmering below. Ideal for birders and photographers seeking complete immersion in Queen Elizabeth NP.",
    features: ["Natural tented setting", "Bird watching access", "Photographer-friendly", "Lake views", "En suite facilities"],
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Intimate Cottages",
    count: "5 Units",
    description:
      "Smaller, ground-level cottages suited to guests who prefer not to hike. Cozy and private, these units offer a quieter retreat within the lodge grounds with direct garden access.",
    features: ["Ground-level access", "Secluded & private", "Indoor bathroom", "Garden view", "Ideal for mobility-conscious guests"],
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=85",
  },
];

const activities = [
  { name: "Kazinga Channel Cruise", desc: "Sail the 40km channel between Lake Edward and Lake George — home to the world's greatest concentration of hippos, Nile crocodiles, and 600+ bird species." },
  { name: "Game Drives", desc: "Track lions, elephants, buffaloes, leopards, and the famous tree-climbing lions of Ishasha sector on guided morning and evening drives." },
  { name: "Bird Watching", desc: "Over 600 bird species — including shoebill storks, African skimmers, and the rare martial eagle — right on the lodge doorstep." },
  { name: "Rwenzori Climbing", desc: "The legendary Mountains of the Moon — Africa's third-highest peak with equatorial glaciers, giant heathers, and stunning Albertine Rift views." },
  { name: "Lake Kikorongo Sunset", desc: "Evening boat cruises on Lake Kikorongo with spectacular sunsets over the Rwenzori Mountains and prolific birdlife." },
  { name: "Chimpanzee Tracking", desc: "Kibale National Park, just 3 hours away, offers one of Africa's finest chimpanzee tracking experiences." },
];

const quickFacts = [
  { label: "Premium Cottages", value: "18" },
  { label: "Premium Tents", value: "13" },
  { label: "Intimate Cottages", value: "5" },
  { label: "Location", value: "Equator" },
];

const locationDistances = [
  { place: "Kasese Town", distance: "~10 min" },
  { place: "Kasese Airstrip", distance: "~15 min" },
  { place: "Kazinga Channel", distance: "~20 min" },
  { place: "Queen Elizabeth NP Gate", distance: "~25 min" },
  { place: "Kampala", distance: "~5 hrs" },
];

export default function KikorongoSafariLodgePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1800&q=85)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/25" />

        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-3xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <p className="section-label text-gold">Our Lodges · Uganda</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-4">
              Kikorongo<br /><em className="italic text-gold">Safari Lodge</em>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.42}>
            <p className="text-cream/60 font-sans text-sm mb-8 leading-relaxed max-w-md">
              At the Equator, Above the Lakes — Queen Elizabeth National Park, Kasese
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.56}>
            <Link href="/plan-a-trip" className="btn-ghost">Book a Stay</Link>
          </FadeIn>
        </div>

        {/* Quick facts */}
        <div className="absolute bottom-8 right-8 md:right-16 z-10 hidden md:block">
          <FadeIn direction="up" delay={0.7}>
            <div className="flex gap-6">
              {quickFacts.map((f) => (
                <div key={f.label} className="text-center">
                  <p className="font-serif text-2xl text-gold">{f.value}</p>
                  <p className="text-cream/40 text-[10px] uppercase tracking-widest font-sans mt-0.5">{f.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── LODGE OVERVIEW ── */}
      <section className="grid md:grid-cols-2 overflow-hidden" style={{ minHeight: "75vh" }}>
        {/* Text */}
        <div className="bg-cream flex flex-col justify-center px-8 md:px-16 py-20 order-2 md:order-1">
          <FadeIn direction="left">
            <p className="section-label mb-3">Lodge Overview</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Perched at the Equator,<br />Above the Lakes
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              Situated directly on the Equator on a steep hill in Kasese, Kikorongo Safari Lodge looks
              out over the glistening waters of Lake George and Lake Kikorongo — with the snow-capped
              Rwenzori Mountains on the horizon.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              The lodge is the perfect base for exploring all that Queen Elizabeth NP has to offer — from
              the legendary Kazinga Channel boat safari to tracking tree-climbing lions in Ishasha.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-10 text-sm">
              Guests describe a profoundly peaceful atmosphere — morning bird song, cool mountain air,
              and the lakes shimmering gold at sunset from their private terrace.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-gold/15 pt-8 mb-10">
              {[
                { value: "36", label: "Units" },
                { value: "0°", label: "The Equator" },
                { value: "600+", label: "Bird Species" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl text-gold mb-1">{s.value}</p>
                  <p className="text-stone/60 text-[10px] uppercase tracking-widest font-sans">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/plan-a-trip" className="btn-primary">Book a Stay</Link>
              <a href="mailto:bookings@kikorongosafarilodge.com" className="btn-outline">Email Lodge</a>
            </div>
          </FadeIn>
        </div>

        {/* Single large image */}
        <div className="relative min-h-[50vh] md:min-h-0 order-1 md:order-2">
          <ImageReveal direction="right" className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1000&q=85"
              alt="Kikorongo Safari Lodge lake view"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </ImageReveal>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-forest-dark/20 pointer-events-none z-[1]" />

          {/* Floating caption */}
          <FadeIn direction="up" delay={0.5} className="absolute bottom-8 left-8 z-10 max-w-[240px]">
            <div className="bg-forest-dark/85 backdrop-blur-sm px-5 py-4 border-l-2 border-gold">
              <p className="font-serif italic text-cream/80 text-sm leading-relaxed">
                &ldquo;Lake George shimmers gold at sunset from every terrace.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ACCOMMODATION ── */}
      <section className="bg-forest-dark py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16 mb-14">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div>
                <p className="section-label text-gold mb-3">Where You Sleep</p>
                <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">Accommodation</h2>
              </div>
              <p className="hidden md:block text-cream/40 font-sans text-sm max-w-xs leading-relaxed">
                36 units across three accommodation styles — each capturing the panoramic lake and mountain views.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="space-y-1.5">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`grid md:grid-cols-2 min-h-[400px] ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden h-64 md:h-auto group">
                <ImageReveal direction={i % 2 === 0 ? "left" : "right"} className="absolute inset-0 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                </ImageReveal>
                <div className="absolute top-5 left-5 font-serif text-cream/10 text-7xl leading-none select-none z-[1]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="absolute top-5 right-5 z-[1] border border-gold/40 text-gold text-[10px] uppercase tracking-widest font-sans px-3 py-1 bg-forest-dark/50 backdrop-blur-sm">
                  {room.count}
                </span>
              </div>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"} className="bg-cream flex flex-col justify-center px-8 md:px-14 py-12">
                <div className="w-8 h-px bg-gold mb-5" />
                <h3 className="font-serif text-3xl md:text-4xl text-forest mb-4">{room.name}</h3>
                <p className="text-stone font-sans text-sm leading-relaxed mb-7">{room.description}</p>
                <ul className="space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-stone text-sm font-sans">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex items-end gap-8 mb-16">
            <div>
              <p className="section-label mb-3">Things to Do</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Activities &amp;<br />Experiences
              </h2>
            </div>
            <div className="flex-1 h-px bg-gold/20 mb-3 hidden md:block" />
            <Link href="/plan-a-trip" className="hidden md:inline-block btn-primary shrink-0">
              Plan Your Stay
            </Link>
          </FadeIn>

          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {activities.map((act, i) => (
              <StaggerItem key={act.name}>
                <div className="group py-7 border-t border-gold/15 hover:border-gold/50 transition-colors duration-300">
                  <p className="font-serif text-5xl text-gold/20 group-hover:text-gold/45 transition-colors duration-400 leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-xl text-forest mb-2 group-hover:text-forest-light transition-colors duration-300">
                    {act.name}
                  </h3>
                  <p className="text-stone font-sans text-sm leading-relaxed">{act.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <div className="flex gap-0.5 h-52 md:h-72 overflow-hidden">
        {[
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=85",
          "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=85",
          "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=85",
          "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=85",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=85",
        ].map((src, i) => (
          <div key={i} className="flex-1 overflow-hidden group">
            <img
              src={src}
              alt={`Kikorongo gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* ── LOCATION & ACCESS ── */}
      <section className="bg-cream-dark py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="section-label mb-3">Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Location &amp;<br />Getting Here
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <div className="space-y-3 mb-8">
              {[
                { label: "Address", value: "Mpondwe Road, Kasese — directly on the Equator, above Queen Elizabeth NP" },
                { label: "Nearest City", value: "Kasese Town (~10 min) · Kampala (~5 hrs)" },
                { label: "By Air", value: "Kasese Airstrip (~15 min) — charter flights from Kampala" },
                { label: "By Road", value: "Tarmac to Kasese; transfer to lodge via Mpondwe Road" },
                { label: "Website", value: "www.kikorongosafarilodge.com", href: "https://www.kikorongosafarilodge.com" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm pt-4 border-t border-gold/10">
                  <span className="text-gold/70 uppercase tracking-widest text-[10px] font-sans w-24 shrink-0 pt-0.5">{item.label}</span>
                  {"href" in item && item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-stone font-sans leading-relaxed hover:text-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-stone font-sans leading-relaxed">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-forest-dark p-8">
              <p className="section-label text-gold mb-6">Distances from Lodge</p>
              <div className="space-y-0">
                {locationDistances.map((d, i) => (
                  <div
                    key={d.place}
                    className="flex items-center justify-between py-4 border-b border-white/8 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-gold/30 text-lg leading-none w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-cream/70 font-sans text-sm">{d.place}</span>
                    </div>
                    <span className="text-gold font-serif text-base shrink-0 ml-4">{d.distance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-cream/40 font-sans text-xs leading-relaxed">
                  Transfer arrangements from Kampala, Kasese, or Entebbe available on request. Contact us to arrange.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="bg-forest py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label text-gold mb-3">Reserve Your Stay</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-6">
              Book Kikorongo<br /><em className="italic text-gold">Safari Lodge</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <ul className="space-y-5 mb-10">
              {[
                { label: "Phone", value: "+256 789 390 350 / +256 77569 2334", href: "tel:+256789390350" },
                { label: "Email", value: "bookings@kikorongosafarilodge.com", href: "mailto:bookings@kikorongosafarilodge.com" },
                { label: "Web", value: "www.kikorongosafarilodge.com", href: "https://www.kikorongosafarilodge.com" },
                { label: "Location", value: "Kasese, Mpondwe Road — on the Equator, Queen Elizabeth NP" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4 text-sm">
                  <span className="text-gold/60 uppercase tracking-widest text-[10px] font-sans w-20 shrink-0 pt-0.5">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-cream/70 font-sans hover:text-gold transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-cream/70 font-sans">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/plan-a-trip" className="btn-outline">Plan a Full Itinerary</Link>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-forest-dark/60 border border-white/10 p-10">
              <p className="font-serif text-2xl text-cream mb-2">Enquire Now</p>
              <p className="text-cream/40 font-sans text-xs uppercase tracking-widest mb-8">Response within 24 hours</p>
              <p className="text-cream/60 font-sans text-sm leading-relaxed mb-8">
                Share your travel dates and we&apos;ll come back with availability, current rates, and a tailored proposal.
              </p>
              <div className="space-y-3">
                <Link href="/plan-a-trip" className="btn-outline w-full text-center block">
                  Request a Proposal
                </Link>
                <a
                  href="https://wa.me/256789390350?text=I'm interested in Kikorongo Safari Lodge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-[#25D366]/40 text-[#25D366] px-6 py-3 hover:bg-[#25D366]/10 transition-colors font-sans text-xs uppercase tracking-widest w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
