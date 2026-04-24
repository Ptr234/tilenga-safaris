import Link from "next/link";

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
    desc: "Our operations team coordinates every detail of your journey — from airport meet-and-greet to lodge transfers, activity bookings, and in-country support.",
  },
  {
    role: "Travel Concierge",
    desc: "Dedicated specialists who craft bespoke itineraries, secure permits, and provide VIP assistance tailored to your travel style.",
  },
  {
    role: "Lodge Management",
    desc: "On-site teams at both Tilenga Safari Lodge and Kikorongo Safari Lodge ensure warm hospitality, safety, and wildlife expertise.",
  },
  {
    role: "Community Liaisons",
    desc: "Local community partners who connect our guests with authentic cultural experiences while supporting livelihoods and conservation.",
  },
];

const services = [
  "Meet and greet services with airport assistance",
  "Custom itinerary design for all travel styles",
  "Gorilla and chimpanzee permit procurement",
  "Luxury and standard private vehicle transfers",
  "Airport transportation coordination",
  "VIP concierge experiences",
  "Lodge bookings across East Africa",
  "Group and family safari coordination",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/30 to-forest-dark/85" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <p className="section-label text-gold mb-3">Who We Are</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-3">About Us</h1>
          <p className="font-serif italic text-2xl text-gold">Passion for Travel. Care for People.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-heading mb-6">Crafting Personalized Adventures</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Tilenga Safaris was founded on a simple, powerful belief — that travel has the power
              to transform. We serve explorers and travel enthusiasts who view journeys not as
              mere destination-reaching, but as opportunities to discover themselves and the world.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              With over 5 years of expertise in the travel industry and a passionate team of
              specialists who know East Africa deeply, we develop carefully designed itineraries
              that combine adventure, culture, and relaxation — creating lasting impressions
              that our guests carry home for a lifetime.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-8">
              Our mission is simple: <em className="text-forest font-serif">&ldquo;to inspire and enrich lives through travel.&rdquo;</em>
            </p>
            <Link href="/plan-a-trip" className="btn-primary">Plan Your Safari</Link>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Uganda" className="w-full h-44 object-cover" />
              <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=500&q=80" alt="Gorilla" className="w-full h-44 object-cover mt-6" />
            </div>
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80" alt="Africa" className="w-full h-44 object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How We Work</p>
            <h2 className="section-heading">Our Core Values</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border-l-2 border-gold">
                <p className="font-serif text-3xl text-gold mb-4">{v.num}</p>
                <h3 className="font-serif text-xl text-forest mb-3">{v.title}</h3>
                <p className="text-stone font-sans text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-6 md:px-16 bg-cream relative overflow-hidden">
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
      <section className="bg-forest py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-label text-gold mb-3">What We Do</p>
          <h2 className="font-serif text-4xl text-cream mb-5">Our Services</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {services.map((s) => (
              <div key={s} className="flex gap-4 items-start bg-forest-dark/40 px-6 py-4 border border-white/10">
                <span className="text-gold mt-0.5">✦</span>
                <p className="text-cream/80 font-sans text-sm">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The People Behind Your Journey</p>
            <h2 className="section-heading">Our Team</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.role} className="bg-cream-dark p-7 border border-gold/20">
                <h3 className="font-serif text-lg text-forest mb-3">{t.role}</h3>
                <p className="text-stone font-sans text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section className="bg-cream-dark py-20 px-6 md:px-16">
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
