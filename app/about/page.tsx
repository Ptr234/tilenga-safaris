import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ConciergeSection from "@/components/ConciergeSection";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const values = [
  {
    title: "Customer-centricity",
    desc: "Putting the customer experience at the forefront of everything, and building long-term relationships.",
    num: "01",
  },
  {
    title: "Integrity",
    desc: "Committing to honesty and transparency in all dealings, including pricing, communication, and partnerships.",
    num: "02",
  },
  {
    title: "Quality",
    desc: "Delivering high standards of service, accommodation, and experiences to ensure memorable and enjoyable trips.",
    num: "03",
  },
  {
    title: "Sustainability",
    desc: "Promoting responsible travel practices that minimize environmental impact, support local communities, and preserve cultural heritage.",
    num: "04",
  },
];

const team = [
  {
    role: "Safari Operations",
    tag: "In-Field Experts",
    desc: "Our operations team coordinates every detail of your journey — from airport meet-and-greet to lodge transfers, activity bookings, and in-country support.",
    image: `${base}/Newstock/elephantcars.jpg`,
  },
  {
    role: "Travel Concierge",
    tag: "Bespoke Itineraries",
    desc: "Dedicated specialists who craft bespoke itineraries, secure permits, and provide VIP assistance tailored to your exact travel style.",
    image: `${base}/Newstock/tourist.jpg`,
  },
  {
    role: "Lodge Management",
    tag: "Hospitality & Comfort",
    desc: "On-site teams at Tilenga and Kikorongo Safari Lodges ensure warm hospitality, guest safety, and unmatched wildlife expertise.",
    image: `${base}/Newstock/Queen Elizabeth NP.jpg`,
  },
  {
    role: "Community Liaisons",
    tag: "Culture & Conservation",
    desc: "Local partners who connect guests with authentic cultural experiences while actively supporting community livelihoods and conservation.",
    image: `${base}/Newstock/touristsmovinginforest.jpg`,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110 transition-transform duration-[10000ms] ease-out"
          style={{
            backgroundImage: `url(${base}/Newstock/greatbeastmigration.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/40 to-forest-dark/90" />
        <div className="relative z-10 px-6 md:px-16 pb-20 max-w-5xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-4 uppercase tracking-[0.4em] font-bold">
              About Tilenga
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-cream mb-6 uppercase tracking-[0.05em] leading-[1.1]">
              Founded on the <br />
              <span className="italic text-gold lowercase tracking-normal">
                Passion
              </span>{" "}
              for Travel
            </h1>
            <p className="text-cream/70 font-sans text-lg md:text-xl max-w-2xl leading-relaxed">
              Rooted in a deep understanding of customer needs and a legacy of
              discovery across the East African landscape.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Tilenga Main */}
      <section className="bg-cream py-16 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="section-label mb-3 text-gold uppercase tracking-widest font-bold">
              About Tilenga
            </p>
            <h2 className="section-heading mb-8 uppercase tracking-[0.1em] text-forest">
              Our Story
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <div className="space-y-6 text-stone font-sans text-lg leading-relaxed mb-12">
              <p>
                At Tilenga Safaris, we are passionate explorers and dedicated
                travel enthusiasts who believe that travel is not just about
                reaching a destination; it’s about immersing yourself in new
                experiences, creating unforgettable memories, and discovering
                the world around you.
              </p>
              <p>
                Founded on the principles of passion for travel and a deep
                understanding of customer needs, we strive to provide
                exceptional service and curated travel experiences beyond the
                ordinary.
              </p>
            </div>
            <Link href="/plan-a-trip" className="btn-primary px-10">
              Plan Your Safari
            </Link>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="film-frame h-56">
                <img
                  src={`${base}/gorrilas/gorrillas.jpg`}
                  alt="Uganda gorilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="film-frame h-56 mt-12">
                <img
                  src={`${base}/Newstock/girrafe.jpg`}
                  alt="African Wildlife"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="film-frame h-64">
              <img
                src={`${base}/gorrilas/gorrillas3.jpg`}
                alt="Gorillas in mist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-forest-dark py-20 md:py-40 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">
            Our Purpose
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-10 uppercase tracking-widest leading-tight">
            Our Mission
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mb-10" />
          <p className="font-serif italic text-2xl md:text-3xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
            &ldquo;Our mission is simple yet profound: to inspire and enrich
            lives through travel. We strive to offer meticulously crafted
            bespoke itineraries that blend adventure, culture, and relaxation,
            ensuring each trip leaves a lasting impact.&rdquo;
          </p>
        </div>
      </section>

      {/* Values — Editorial Grid */}
      <section
        id="conservation"
        className="bg-cream-dark py-20 md:py-40 px-6 md:px-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-32">
            <div className="max-w-2xl">
              <FadeIn direction="fade">
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block text-center md:text-left">
                  The Tilenga Ethos
                </span>
              </FadeIn>
              <h2 className="font-serif text-5xl md:text-8xl text-forest uppercase tracking-tighter leading-[0.85] text-center md:text-left">
                Our Core <br />
                <span className="italic text-gold lowercase tracking-normal">
                  Values
                </span>
              </h2>
            </div>
            <div className="hidden md:block w-24 h-px bg-gold/30 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {values.map((v, i) => (
              <FadeIn
                key={v.title}
                direction="up"
                delay={i * 0.1}
                className="relative group"
                id={v.title.toLowerCase().replace(/\s+/g, "-")}
              >
                {/* Large Background Number */}
                <div className="absolute -top-10 -left-4 pointer-events-none select-none">
                  <span className="font-serif text-[8rem] text-forest/[0.04] leading-none group-hover:text-gold/[0.08] transition-colors duration-1000">
                    {v.num}
                  </span>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-8 h-px bg-gold mb-8 transition-all duration-700 group-hover:w-full group-hover:bg-gold/40" />
                  <h3 className="font-serif text-2xl text-forest uppercase tracking-widest mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
                    {v.title}
                  </h3>
                  <p className="text-stone/70 font-sans text-[15px] leading-relaxed group-hover:text-stone transition-colors duration-500">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-24 md:py-40 px-6 md:px-16 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${base}/photos/kikorongo_cottage1.jpg`}
            alt="Tilenga Hospitality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/65" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
                Commitment to Excellence
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-cream uppercase tracking-widest leading-tight">
                Why Choose Us?
              </h2>
              <div className="w-16 h-px bg-gold/50 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="flex flex-col items-center text-center group">
                <h4 className="font-serif text-xl text-gold uppercase tracking-[0.2em] mb-6">
                  Expertise
                </h4>
                <p className="text-cream/80 font-sans text-[15px] leading-relaxed">
                  With years of experience in the travel industry, our team of
                  travel specialists has insider knowledge and expertise to
                  ensure seamless travel experiences.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <h4 className="font-serif text-xl text-gold uppercase tracking-[0.2em] mb-6">
                  Personalized Service
                </h4>
                <p className="text-cream/80 font-sans text-[15px] leading-relaxed">
                  We understand that every traveler is unique. That&apos;s why
                  we take the time to listen to your desires and preferences to
                  tailor-make your journey according to your needs.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <h4 className="font-serif text-xl text-gold uppercase tracking-[0.2em] mb-6">
                  Trust and Reliability
                </h4>
                <p className="text-cream/80 font-sans text-[15px] leading-relaxed">
                  We prioritise your safety and comfort above all else. Our
                  trusted network of partners and suppliers enables us to
                  deliver reliable and secure travel arrangements.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services — The Full Concierge */}
      <ConciergeSection />

      {/* Team — Editorial Portrait Grid */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <FadeIn direction="fade">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
                  The People Behind Your Journey
                </span>
              </FadeIn>
              <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-widest leading-none">
                Our Expert <br />
                <span className="italic text-gold lowercase tracking-normal">
                  Team
                </span>
              </h2>
            </div>
            <FadeIn direction="up" delay={0.3} className="max-w-xs">
              <p className="text-stone/70 font-sans text-sm leading-relaxed mb-6">
                Specialists who live and breathe East Africa — committed to
                making every detail of your safari extraordinary.
              </p>
              <div className="w-12 h-px bg-gold/40" />
            </FadeIn>
          </div>

          {/* Cinematic Portrait Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
            {team.map((t, i) => (
              <FadeIn
                key={t.role}
                direction="up"
                delay={i * 0.1}
                id={t.role.toLowerCase().replace(/\s+/g, "-")}
              >
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
            <p className="section-label mb-3 text-gold">Find Us</p>
            <h2 className="section-heading mb-6">Get in Touch</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <ul className="space-y-5 text-stone font-sans">
              <li className="flex gap-4">
                <svg
                  className="w-5 h-5 text-gold shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Lungujja, Ssendawula Zone
                  <br />
                  Eseza House, P.O. Box 2599
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex gap-4">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+256789390350"
                  className="hover:text-gold transition-colors font-bold"
                >
                  +256 789 390 350
                </a>
              </li>
              <li className="flex gap-4">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:destinations@tilengasafaris.com"
                  className="hover:text-gold transition-colors font-bold"
                >
                  destinations@tilengasafaris.com
                </a>
              </li>
              <li className="flex gap-4">
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  href="https://www.instagram.com/tilengasafaris_travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @tilengasafaris_travel
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-forest text-cream p-8 text-center film-frame">
            <p className="font-serif text-2xl mb-4 uppercase tracking-wider">
              Ready to Start Planning?
            </p>
            <p className="text-cream/60 font-sans text-sm mb-8">
              Tell us your dream safari and we&apos;ll handle every detail from
              planning to return.
            </p>
            <Link
              href="/plan-a-trip"
              className="btn-outline block border-cream/30 text-cream hover:bg-cream hover:text-forest"
            >
              Plan a Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
