import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const rooms = [
  {
    name: "Premium Cottages",
    count: "15 Units",
    description:
      "Located at the property edge with stunning sunrise and sunset views over the Albert Nile. Each cottage features a wide private balcony, indoor bathroom, and electric mosquito repellent — a perfect blend of bush comfort and contemporary style.",
    features: ["River Nile views", "Private balcony", "Indoor bathroom", "Electric mosquito repellent", "Daily housekeeping"],
    image: `${base}/photos/tilengasafarilodge/cottage1.png`,
  },
  {
    name: "Executive Cottages",
    count: "11 Units",
    description:
      "Designed for families and groups — 3-in-1 cottages with twin and single beds, and balconies large enough to seat up to 8 people. Ideal for group gatherings at sunrise over the Nile.",
    features: ["Twin & single beds", "Family / group layout", "Large balcony seats 8", "Indoor bathroom", "Bush view"],
    image: `${base}/photos/tilengasafarilodge/cottage2.png`,
  },
];

const activities = [
  { name: "Game Drives", desc: "Guided morning and evening drives through Murchison Falls NP — elephants, giraffes, lions, buffaloes, and hippos." },
  { name: "Murchison Falls Hike", desc: "Trek to the top of Africa's most powerful waterfall — 45 metres of the Nile squeezed through a 7-metre gorge." },
  { name: "Nile Boat Safari", desc: "3-hour boat safari to the base of Murchison Falls, with hippos, crocodiles, and over 450 bird species." },
  { name: "Sport Fishing", desc: "Cast for Nile perch and tiger fish in the Albert Nile with experienced local guides and all equipment." },
  { name: "Night Game Drives", desc: "Spot nocturnal creatures — civets, genets, bush babies, and African wild cats — under the stars." },
  { name: "Basketry Workshops", desc: "Connect with local artisans and learn traditional basket weaving — a meaningful community experience." },
];

const quickFacts = [
  { label: "Total Cottages", value: "26" },
  { label: "Premium", value: "15" },
  { label: "Executive", value: "11" },
  { label: "Park Gate", value: "1.7km" },
];

const locationDistances = [
  { place: "Tangi Gate (Murchison Falls NP)", distance: "1.7 km" },
  { place: "Pakuba Airstrip", distance: "~30 min" },
  { place: "Murchison Falls Top", distance: "~45 min" },
  { place: "Gulu City", distance: "~2.5 hrs" },
  { place: "Kampala", distance: "4.5 – 5 hrs" },
];

export default function TilengaSafariLodgePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="grain-overlay relative h-screen min-h-[600px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${base}/photos/tilengasafarilodge/entrance.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/25" />

        <div className="relative z-10 px-5 md:px-20 pb-10 md:pb-20 max-w-3xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <p className="section-label text-gold">Our Lodges · Uganda</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-cream leading-none mb-4">
              Tilenga<br /><em className="italic text-gold">Safari Lodge</em>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.42}>
            <p className="text-cream/60 font-sans text-sm mb-8 leading-relaxed max-w-md">
              Where the Nile Meets the Wild — Murchison Falls National Park, 1.7km from Tangi Gate
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
        <div className="bg-cream flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 order-2 md:order-1">
          <FadeIn direction="left">
            <p className="section-label mb-3">Lodge Overview</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              A Haven of<br />Comfort &amp; Serenity
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              Positioned at the northern park boundary of Murchison Falls National Park, Tilenga Safari Lodge
              offers panoramic views over the Albert Nile River — with wildlife encounters beginning at your doorstep.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4 text-sm">
              Wake to elephants grazing below your balcony. Watch giraffes moving through acacia woodland
              as the Nile glitters in the morning light.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-10 text-sm">
              Guests rave about the spacious rooms, extraordinarily friendly staff, and the lodge chef whose
              cuisine blends Ugandan flavours with international cooking — all with a sunset Nile view.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-gold/15 pt-8 mb-10">
              {[
                { value: "26", label: "Cottages" },
                { value: "1.7km", label: "To Park Gate" },
                { value: "450+", label: "Bird Species" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl text-gold mb-1">{s.value}</p>
                  <p className="text-stone/60 text-[10px] uppercase tracking-widest font-sans">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/plan-a-trip" className="btn-primary">Book a Stay</Link>
              <a href="mailto:booking@tilengasafarilodge.com" className="btn-outline">Email Lodge</a>
            </div>
          </FadeIn>
        </div>

        {/* Single large image */}
        <div className="relative min-h-[50vh] md:min-h-0 order-1 md:order-2">
          <ImageReveal direction="right" className="absolute inset-0 overflow-hidden">
            <img
              src={`${base}/photos/tilengasafarilodge/cottage3.png`}
              alt="Tilenga Safari Lodge wildlife view"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </ImageReveal>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-forest-dark/20 pointer-events-none z-[1]" />

          {/* Floating caption */}
          <FadeIn direction="up" delay={0.5} className="absolute bottom-8 left-8 z-10 max-w-[220px]">
            <div className="bg-forest-dark/85 backdrop-blur-sm px-5 py-4 border-l-2 border-gold">
              <p className="font-serif italic text-cream/80 text-sm leading-relaxed">
                &ldquo;Wildlife begins at your balcony door.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ACCOMMODATION ── */}
      <section className="bg-forest-dark py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-16 mb-8 md:mb-14">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div>
                <p className="section-label text-gold mb-3">Where You Sleep</p>
                <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">Accommodation</h2>
              </div>
              <p className="hidden md:block text-cream/40 font-sans text-sm max-w-xs leading-relaxed">
                26 cottages — each positioned to maximise the Nile views and the surrounding bushveld.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="space-y-1.5">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`grid md:grid-cols-2 min-h-[420px] ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
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

              <FadeIn direction={i % 2 === 0 ? "right" : "left"} className="bg-cream flex flex-col justify-center px-5 md:px-14 py-8 md:py-12">
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
      <section className="bg-cream py-14 md:py-24 px-6 md:px-16">
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

      {/* ── GALLERY — Tightened Album Spread ── */}
      <section className="bg-forest-dark py-12 md:py-20 overflow-hidden relative">
        <div className="absolute inset-0 grain-overlay opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8 md:mb-14 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold">Tilenga Field Journal</span>
                <div className="w-12 h-px bg-gold/30" />
              </div>
              <h2 className="font-serif text-5xl md:text-8xl text-cream leading-[0.8] uppercase tracking-tighter">
                Lodge <br />
                <span className="italic text-gold lowercase tracking-normal pl-8 md:pl-20 block">Life</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="max-w-[240px]">
               <div className="space-y-3 border-l border-gold/20 pl-6 py-1">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-cream/40 font-mono">Location Data</p>
                  <p className="text-gold font-mono text-[11px] leading-relaxed">2° 14' 54.6" N · 31° 31' 44.4" E</p>
                  <p className="text-cream/30 font-serif italic text-sm">"Overlooking the Albert Nile."</p>
               </div>
            </FadeIn>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 items-start">
            
            {/* Left Page */}
            <div className="md:col-span-5 space-y-12 md:space-y-16 md:pr-10">
               <FadeIn direction="up" delay={0.1}>
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-white/[0.02] -rotate-2 group-hover:rotate-[-0.5deg] transition-transform duration-1000 ease-out" />
                    <div className="relative z-10 overflow-hidden shadow-2xl border border-white/5">
                       <img src={`${base}/photos/tilengasafarilodge/night.png`} alt="Cottage Night View" className="w-full aspect-[4/5] object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
                    </div>
                    <div className="relative z-20 mt-6">
                       <p className="font-serif italic text-gold text-xl md:text-2xl">"The tranquility of the bush at twilight."</p>
                       <span className="text-cream/20 text-[9px] font-mono mt-2 block uppercase tracking-widest">— 20:15 HRS</span>
                    </div>
                 </div>
               </FadeIn>

               <FadeIn direction="up" delay={0.3}>
                 <div className="relative group md:ml-20">
                    <div className="absolute -inset-4 bg-white/[0.02] rotate-2 group-hover:rotate-[0.5deg] transition-transform duration-1000 ease-out" />
                    <div className="relative z-10 overflow-hidden shadow-xl border border-white/10">
                       <img src={`${base}/photos/tilengasafarilodge/insideview.png`} alt="Inside View" className="w-full aspect-square object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
                    </div>
                    <div className="relative z-20 mt-6 flex items-center gap-4">
                       <div className="w-6 h-px bg-gold" />
                       <span className="text-gold text-[9px] uppercase tracking-[0.5em] font-bold">Sanctuary Details</span>
                    </div>
                 </div>
               </FadeIn>
            </div>

            {/* Right Page */}
            <div className="md:col-span-7 space-y-12 md:space-y-16 md:pt-16">
               <FadeIn direction="up" delay={0.2}>
                 <div className="relative group">
                    <div className="absolute -inset-6 bg-white/[0.015] rotate-1 group-hover:rotate-0 transition-transform duration-[1.8s] ease-out" />
                    <div className="relative z-10 overflow-hidden shadow-2xl">
                       <img src={`${base}/photos/tilengasafarilodge/pool.png`} alt="Swimming Pool View" className="w-full aspect-[16/10] object-cover transition-transform duration-[4s] group-hover:scale-105" />
                    </div>
                    
                    <div className="absolute -bottom-12 -right-2 hidden lg:block w-52 z-30 group-hover:translate-y-[-8px] transition-transform duration-1000">
                        <FadeIn direction="up" delay={0.5}>
                           <div className="bg-[#fcfbf4] p-3 pb-10 shadow-2xl rotate-3 group-hover:rotate-1 transition-transform duration-700 border border-black/5">
                              <div className="relative overflow-hidden aspect-square">
                                <img src={`${base}/photos/tilengasafarilodge/watersafari.png`} alt="Water Safari" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                              </div>
                              <p className="font-serif italic text-[#1a3c2b] text-center mt-3 text-sm">"Cruising the Nile"</p>
                           </div>
                        </FadeIn>
                    </div>
                 </div>
               </FadeIn>

               <div className="grid grid-cols-2 gap-6 md:gap-10">
                  <FadeIn direction="up" delay={0.4}>
                    <div className="group">
                       <div className="relative overflow-hidden shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000">
                          <img src={`${base}/photos/tilengasafarilodge/breakfast.png`} alt="Breakfast" className="w-full aspect-[3/4] object-cover transition-transform duration-[3s] group-hover:scale-110" />
                       </div>
                       <div className="mt-4 flex justify-between items-center">
                          <span className="text-[9px] uppercase tracking-widest text-cream/30 font-mono">03 · DAWN</span>
                          <h4 className="text-gold font-serif italic text-sm">Nile Side Breakfast</h4>
                       </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn direction="up" delay={0.5}>
                    <div className="group pt-12 md:pt-20">
                       <div className="relative overflow-hidden shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000">
                          <img src={`${base}/photos/tilengasafarilodge/lunch.png`} alt="Lunch Setup" className="w-full aspect-[3/4] object-cover transition-transform duration-[3s] group-hover:scale-110" />
                       </div>
                       <div className="mt-4 flex justify-between items-center">
                          <span className="text-[9px] uppercase tracking-widest text-cream/30 font-mono">04 · MIDDAY</span>
                          <h4 className="text-gold font-serif italic text-sm">Culinary Journey</h4>
                       </div>
                    </div>
                  </FadeIn>
               </div>
            </div>
          </div>

          <div className="absolute bottom-[-5vw] left-0 pointer-events-none opacity-[0.02]">
             <p className="font-serif text-[15vw] whitespace-nowrap uppercase tracking-tighter select-none">Albert Nile</p>
          </div>
        </div>
      </section>

      {/* ── LOCATION & ACCESS ── */}
      <section className="bg-cream-dark py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="section-label mb-3">Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Location &amp;<br />Getting Here
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <div className="space-y-3 mb-8">
              {[
                { label: "Address", value: "1.7km from Tangi Gate, Karuma–Pakwach Road, Murchison Falls NP" },
                { label: "Nearest City", value: "Gulu (~2.5 hrs) · Kampala (~4.5–5 hrs)" },
                { label: "By Air", value: "Pakuba Airstrip — charter flights from Kampala" },
                { label: "By Road", value: "Well-tarmacked to Tangi Gate; 4WD recommended within the park" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm pt-4 border-t border-gold/10">
                  <span className="text-gold/70 uppercase tracking-widest text-[10px] font-sans w-24 shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-stone font-sans leading-relaxed">{item.value}</span>
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
                  Transfer arrangements from Kampala or Gulu available on request. Contact us to arrange.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="bg-forest py-14 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label text-gold mb-3">Reserve Your Stay</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-6">
              Book Tilenga<br /><em className="italic text-gold">Safari Lodge</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <ul className="space-y-5 mb-10">
              {[
                { label: "Phone", value: "Call Us Now", href: "tel:+256789390350" },
                { label: "Email", value: "booking@tilengasafarilodge.com", href: "mailto:booking@tilengasafarilodge.com" },
                { label: "Location", value: "Northern park boundary, Murchison Falls NP, Uganda" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4 text-sm">
                  <span className="text-gold/60 uppercase tracking-widest text-[10px] font-sans w-20 shrink-0 pt-0.5">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-cream/70 font-sans hover:text-gold transition-colors">{item.value}</a>
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
                  href="https://wa.me/256789390350?text=I'm interested in booking Tilenga Safari Lodge"
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
