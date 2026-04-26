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
  },
  {
    num: "02",
    title: "Bespoke Itinerary Design",
    desc: "Custom, day-by-day journeys built around your interests, pace, and budget. No two Tilenga itineraries are alike.",
  },
  {
    num: "03",
    title: "Gorilla & Chimp Permits",
    desc: "We secure the hard-to-get permits for gorilla tracking and chimpanzee habituation experiences in Uganda and Rwanda.",
  },
  {
    num: "04",
    title: "Private Vehicle Transfers",
    desc: "Luxury 4WD and standard vehicles with experienced drivers — across Uganda, Kenya, Tanzania, and Rwanda.",
  },
  {
    num: "05",
    title: "Airport Transportation",
    desc: "Punctual, professional airport transfers coordinated precisely with your flight schedule — day or night.",
  },
  {
    num: "06",
    title: "VIP Concierge",
    desc: "Exclusive access, restaurant reservations, last-minute permits, and anything in between — handled discreetly.",
  },
  {
    num: "07",
    title: "Lodge & Hotel Bookings",
    desc: "Curated lodges, camps, and boutique hotels across East Africa — including our own Tilenga and Kikorongo properties.",
  },
  {
    num: "08",
    title: "Group & Family Safaris",
    desc: "Specialist coordination for multi-generational families, corporate retreats, and private group travel of any size.",
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

      {/* Services */}
      <section className="bg-forest-dark py-14 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* Header row */}
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 pb-10 border-b border-white/10">
            <div>
              <p className="section-label text-gold mb-3">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
                Our Services
              </h2>
            </div>
            <p className="text-cream/45 font-sans text-sm leading-relaxed max-w-sm md:text-right">
              Every detail handled — from your first flight to your final sunset. Here is how we make your journey extraordinary.
            </p>
          </FadeIn>

          {/* Services magazine grid */}
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
            {services.map((s) => (
              <StaggerItem key={s.num}>
                <div className="group py-8 border-t border-white/10 hover:border-gold/40 transition-colors duration-300">
                  <p className="font-serif text-5xl text-gold/15 group-hover:text-gold/35 transition-colors duration-500 leading-none mb-5">
                    {s.num}
                  </p>
                  <h3 className="font-serif text-lg text-cream mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {s.title}
                  </h3>
                  <div className="w-5 h-px bg-gold/30 mb-4 group-hover:w-10 transition-all duration-500" />
                  <p className="text-cream/45 font-sans text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Bottom CTA */}
          <FadeIn className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-serif italic text-cream/40 text-lg">
              &ldquo;From airport to wilderness — every step, handled.&rdquo;
            </p>
            <Link href="/plan-a-trip" className="btn-outline shrink-0">
              Start Planning
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
                <a href="tel:+256789390350" className="hover:text-gold transition-colors">+256 789 390 350</a>
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
