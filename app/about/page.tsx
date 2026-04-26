import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";

const values = [
  {
    title: "Customer-Centricity",
    desc: "Every itinerary we design is built around you — your interests, pace, budget, and vision. We foster enduring relationships, not one-time transactions.",
    num: "01",
  },
  {
    title: "Integrity",
    desc: "Transparency in pricing, honest communication, and ethical partnerships. What we promise, we deliver.",
    num: "02",
  },
  {
    title: "Quality",
    desc: "From our lodge standards to our guide expertise and partner networks — we maintain elevated standards at every touchpoint of your journey.",
    num: "03",
  },
  {
    title: "Sustainability",
    desc: "We support environmentally conscious practices, local communities, and cultural preservation — ensuring Africa's wild beauty endures.",
    num: "04",
  },
];

const team = [
  {
    role: "Safari Operations",
    tag: "In-Field Experts",
    desc: "Our operations team coordinates every detail of your journey — from airport meet-and-greet to lodge transfers, activity bookings, and in-country support.",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=700&q=85",
  },
  {
    role: "Travel Concierge",
    tag: "Bespoke Itineraries",
    desc: "Dedicated specialists who craft bespoke itineraries, secure permits, and provide VIP assistance tailored to your exact travel style.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700&q=85",
  },
  {
    role: "Lodge Management",
    tag: "Hospitality & Comfort",
    desc: "On-site teams at Tilenga and Kikorongo Safari Lodges ensure warm hospitality, guest safety, and unmatched wildlife expertise.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=85",
  },
  {
    role: "Community Liaisons",
    tag: "Culture & Conservation",
    desc: "Local partners who connect guests with authentic cultural experiences while actively supporting community livelihoods and conservation.",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=700&q=85",
  },
];

const services = [
  {
    num: "01",
    title: "Airport Meet & Greet",
    desc: "Seamless arrivals — our team meets you on landing, handles your luggage, and transfers you comfortably to your first destination.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80",
    tag: "Logistics"
  },
  {
    num: "02",
    title: "Bespoke Itinerary Design",
    desc: "Custom, day-by-day journeys built around your interests, pace, and budget. No two Tilenga itineraries are alike.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1000&q=80",
    tag: "Consultancy"
  },
  {
    num: "03",
    title: "Gorilla & Chimp Permits",
    desc: "We secure the hard-to-get permits for gorilla tracking and chimpanzee habituation experiences in Uganda and Rwanda.",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1000&q=80",
    tag: "Special Access"
  },
  {
    num: "04",
    title: "Private Vehicle Transfers",
    desc: "Luxury 4WD and standard vehicles with experienced drivers — across Uganda, Kenya, Tanzania, and Rwanda.",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=1000&q=80",
    tag: "Transportation"
  },
  {
    num: "05",
    title: "Airport Transportation",
    desc: "Punctual, professional airport transfers coordinated precisely with your flight schedule — day or night.",
    image: "https://images.unsplash.com/photo-1542296332-2b4473347e76?w=1000&q=80",
    tag: "Logistics"
  },
  {
    num: "06",
    title: "VIP Concierge",
    desc: "Exclusive access, restaurant reservations, last-minute permits, and anything in between — handled discreetly.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80",
    tag: "Exclusive"
  },
  {
    num: "07",
    title: "Lodge & Hotel Bookings",
    desc: "Curated lodges, camps, and boutique hotels across East Africa — including our own Tilenga and Kikorongo properties.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80",
    tag: "Hospitality"
  },
  {
    num: "08",
    title: "Group & Family Safaris",
    desc: "Specialist coordination for multi-generational families, corporate retreats, and private group travel of any size.",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1000&q=80",
    tag: "Specialist"
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[65vh] min-h-[450px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/30 to-forest-dark/85" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl text-cream mb-4 uppercase tracking-[0.15em] leading-none">About Us</h1>
          <p className="font-serif italic text-2xl text-gold">Passion for Travel. Care for People.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-16 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-heading mb-8 uppercase tracking-[0.15em]">Crafting Personalized Adventures</h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <div className="space-y-6 text-stone font-sans text-base leading-relaxed mb-12">
              <p>
                Tilenga Safaris was founded on a simple, powerful belief — that travel has the power
                to transform. We serve explorers and travel enthusiasts who view journeys not as
                mere destination-reaching, but as opportunities to discover themselves and the world.
              </p>
              <p>
                With over 5 years of expertise in the travel industry and a passionate team of
                specialists who know East Africa deeply, we develop carefully designed itineraries
                that combine adventure, culture, and relaxation — creating lasting impressions
                that our guests carry home for a lifetime.
              </p>
              <p className="text-forest font-serif italic text-lg">
                &ldquo;Our mission is to inspire and enrich lives through travel.&rdquo;
              </p>
            </div>
            <Link href="/plan-a-trip" className="btn-primary px-10">Plan Your Safari</Link>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="film-frame h-56">
                <img src="https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=500&q=80" alt="Uganda gorilla" className="w-full h-full object-cover" />
              </div>
              <div className="film-frame h-56 mt-12">
                <img src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=500&q=80" alt="Murchison Falls" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="film-frame h-64">
              <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=700&q=80" alt="Gorillas in mist" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark py-14 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="section-heading uppercase tracking-[0.15em]">Our Core Values</h2>
            <div className="w-20 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 md:p-10 border border-gold/10 relative group hover:border-gold/30 transition-colors duration-500">
                <p className="font-serif text-5xl text-gold/10 absolute top-6 right-8 group-hover:text-gold/20 transition-colors">{v.num}</p>
                <h3 className="font-serif text-2xl text-forest mb-4 uppercase tracking-wide">{v.title}</h3>
                <div className="w-8 h-px bg-gold/40 mb-6 group-hover:w-12 transition-all duration-500" />
                <p className="text-stone font-sans text-base leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 md:py-24 px-6 md:px-16 bg-cream relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block bg-forest-dark/40" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-xl">
            <p className="section-label mb-3">Why Tilenga Safaris</p>
            <h2 className="section-heading mb-6">What Sets Us Apart</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <span className="text-gold text-xl mt-0.5">✦</span>
                <div>
                  <h4 className="font-serif text-lg text-forest mb-1">Specialized Local Expertise</h4>
                  <p className="text-stone font-sans text-sm leading-relaxed">Our team comprises specialists who know every corner of East Africa — from the best gorilla family groups to the most productive game drive circuits.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-gold text-xl mt-0.5">✦</span>
                <div>
                  <h4 className="font-serif text-lg text-forest mb-1">Truly Personalized Service</h4>
                  <p className="text-stone font-sans text-sm leading-relaxed">No two itineraries are alike. We listen deeply to your travel dreams and craft experiences that reflect exactly what matters to you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-gold text-xl mt-0.5">✦</span>
                <div>
                  <h4 className="font-serif text-lg text-forest mb-1">Safety &amp; Reliable Networks</h4>
                  <p className="text-stone font-sans text-sm leading-relaxed">Backed by established partner networks and trusted transport providers — your safety and comfort are our first priority throughout every journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-gold text-xl mt-0.5">✦</span>
                <div>
                  <h4 className="font-serif text-lg text-forest mb-1">Our Own Lodges</h4>
                  <p className="text-stone font-sans text-sm leading-relaxed">Uniquely, we own and operate two of Uganda&apos;s finest safari lodges — giving you unparalleled access and quality assurance from your accommodations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — High-End Lookbook Grid */}
      <section className="bg-forest-dark py-20 md:py-40 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 grain-overlay opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24 md:mb-40">
            <div className="max-w-3xl">
              <FadeIn direction="fade">
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Our Craft</span>
              </FadeIn>
              <h2 className="font-serif text-5xl md:text-8xl text-cream uppercase tracking-tight leading-[0.85]">
                The Full <br />
                <span className="italic text-gold lowercase tracking-normal">Concierge</span>
              </h2>
            </div>
            <FadeIn direction="up" delay={0.3} className="max-w-xs">
              <p className="text-cream/40 font-sans text-sm leading-relaxed mb-8">
                Seamless coordination from touch-down to takeoff. Discover the pillars of a Tilenga-standard journey.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gold/50" />
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Explore Our Services</span>
              </div>
            </FadeIn>
          </div>

          {/* Premium Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-3">
            
            {/* 01. Airport Meet & Greet — Large Featured */}
            <div className="md:col-span-8 md:row-span-2">
              <FadeIn direction="up">
                <div className="group relative aspect-[16/10] md:aspect-auto md:h-[80vh] overflow-hidden">
                  <img src={services[0].image} alt={services[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/20 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-10 left-10">
                    <span className="font-serif text-7xl md:text-9xl text-white/10">{services[0].num}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
                    <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{services[0].tag}</p>
                    <h3 className="font-serif text-3xl md:text-5xl text-cream uppercase tracking-widest mb-6">{services[0].title}</h3>
                    <p className="text-cream/60 font-sans text-base md:text-lg max-w-xl leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                      {services[0].desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 02. Bespoke Design — Tall Vertical */}
            <div className="md:col-span-4 md:row-span-2">
              <FadeIn direction="up" delay={0.2}>
                <div className="group relative aspect-[4/5] md:h-[80vh] overflow-hidden">
                  <img src={services[1].image} alt={services[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-forest-dark/50 group-hover:bg-forest-dark/30 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <span className="font-serif text-5xl text-gold/30 block mb-6">{services[1].num}</span>
                    <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{services[1].tag}</p>
                    <h3 className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-wider mb-6">{services[1].title}</h3>
                    <p className="text-cream/50 font-sans text-sm leading-relaxed">
                      {services[1].desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Row 2: Alternating smaller/medium blocks */}
            {/* 03. Gorilla Permits — Wide impact */}
            <div className="md:col-span-5">
              <FadeIn direction="up">
                <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden border border-white/5">
                  <img src={services[2].image} alt={services[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-forest-dark/60 group-hover:bg-forest-dark/40 transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                    <div>
                      <span className="text-gold/40 font-serif text-xl block mb-4">— {services[2].num} —</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-widest mb-6">{services[2].title}</h3>
                      <p className="text-cream/60 font-sans text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {services[2].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 04. Private Vehicles — Detailed */}
            <div className="md:col-span-7">
              <FadeIn direction="up" delay={0.2}>
                <div className="group relative aspect-video md:aspect-auto md:h-full overflow-hidden border border-white/5">
                  <img src={services[3].image} alt={services[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-forest-dark/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16 max-w-lg">
                    <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{services[3].tag}</p>
                    <h3 className="font-serif text-3xl text-cream uppercase tracking-widest mb-6">{services[3].title}</h3>
                    <p className="text-cream/70 font-sans text-sm md:text-base leading-loose">
                      {services[3].desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Row 3: Service Cards Grid (05, 06, 07, 08) */}
            {services.slice(4).map((s, i) => (
              <div key={s.num} className="md:col-span-3">
                <FadeIn direction="up" delay={0.1 * i}>
                  <div className="group relative aspect-[3/4] overflow-hidden border border-white/5">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1500ms]" />
                    <div className="absolute inset-0 bg-forest-dark/70 group-hover:bg-forest-dark/40 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="font-serif text-4xl text-gold/20 mb-4 block group-hover:text-gold/50 transition-colors">{s.num}</span>
                      <h3 className="font-serif text-lg md:text-xl text-cream uppercase tracking-widest mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
                      <p className="text-cream/40 font-sans text-xs leading-relaxed group-hover:text-cream/80 transition-colors line-clamp-3">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeIn className="mt-24 md:mt-40 pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
               <p className="font-serif italic text-cream/30 text-2xl md:text-4xl leading-tight">
                &ldquo;From your first arrival to the final wilderness sunset — every detail is handled with absolute care.&rdquo;
              </p>
            </div>
            <Link href="/plan-a-trip" className="group inline-flex items-center gap-8">
               <span className="btn-primary px-14 py-5 shadow-2xl">Start Your Journey</span>
               <div className="flex flex-col">
                  <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Concierge</span>
                  <span className="text-cream/40 text-[9px] uppercase tracking-[0.2em] font-sans">Request Itinerary</span>
               </div>
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* Team — Editorial Portrait Grid */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <FadeIn direction="fade">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">The People Behind Your Journey</span>
              </FadeIn>
              <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-widest leading-none">
                Our Expert <br />
                <span className="italic text-gold lowercase tracking-normal">Team</span>
              </h2>
            </div>
            <FadeIn direction="up" delay={0.3} className="max-w-xs">
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-6">
                Specialists who live and breathe East Africa — committed to making every detail of your safari extraordinary.
              </p>
              <div className="w-12 h-px bg-gold/40" />
            </FadeIn>
          </div>

          {/* Cinematic Portrait Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
            {team.map((t, i) => (
              <FadeIn key={t.role} direction="up" delay={i * 0.1}>
                <div className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm border border-gold/5">
                    <img
                      src={t.image}
                      alt={t.role}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1500ms] ease-out group-hover:scale-105"
                    />
                    {/* Elegant overlay on hover */}
                    <div className="absolute inset-0 bg-forest-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Vertical tag label on side */}
                    <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                      <span className="[writing-mode:vertical-lr] rotate-180 text-[9px] uppercase tracking-[0.4em] text-cream/40 font-bold group-hover:text-gold transition-colors duration-500">
                        {t.tag}
                      </span>
                    </div>

                    {/* Number decoration */}
                    <span className="absolute top-6 left-6 font-serif text-4xl text-cream/10 group-hover:text-gold/20 transition-colors duration-700">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-px bg-gold/40 transition-all duration-500 group-hover:w-16" />
                      <h3 className="font-serif text-2xl md:text-3xl text-forest uppercase tracking-widest leading-tight">
                        {t.role}
                      </h3>
                    </div>
                    <p className="text-stone font-sans text-[15px] leading-loose opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* Contact / Location */}
      <section className="bg-cream-dark py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Find Us</p>
            <h2 className="section-heading mb-6">Get in Touch</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <ul className="space-y-5 text-stone font-sans">
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lungujja, Ssendawula Zone<br />Eseza House, P.O. Box 2599<br />Kampala, Uganda</span>
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+256789390350" className="hover:text-gold transition-colors">Call Us Now</a>
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:destinations@tilengasafaris.com" className="hover:text-gold transition-colors">destinations@tilengasafaris.com</a>
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a href="https://www.instagram.com/tilengasafaris_travel/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">@tilengasafaris_travel</a>
              </li>
            </ul>
          </div>
          <div className="bg-forest text-cream p-8 text-center">
            <p className="font-serif text-2xl mb-4">Ready to Start Planning?</p>
            <p className="text-cream/60 font-sans text-sm mb-8">
              Tell us your dream safari and we&apos;ll handle every detail from planning to return.
            </p>
            <Link href="/plan-a-trip" className="btn-outline block">
              Plan a Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
