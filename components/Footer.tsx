import Link from "next/link";

const destinations = [
  { name: "Uganda",       sub: "Pearl of Africa",   image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&q=85", href: "/destinations/uganda" },
  { name: "Kenya",        sub: "Maasai Mara",        image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&q=85", href: "/destinations/kenya" },
  { name: "Tanzania",     sub: "Serengeti",          image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=85", href: "/destinations/tanzania" },
  { name: "Rwanda",       sub: "A Thousand Hills",   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85", href: "/destinations/rwanda" },
  { name: "South Africa", sub: "Cape & Kruger",      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=85", href: "/destinations/south-africa" },
  { name: "Dubai",        sub: "Desert Luxury",      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=85", href: "/destinations/dubai" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tilengasafaris_travel/",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/256789390350",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="bg-[#060f09] overflow-hidden">

      {/* ── HERO SPLIT PANEL ── */}
      <div className="relative border-b border-gold/10">

        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&q=70"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f09] via-[#060f09]/90 to-[#060f09]/80" />
        </div>

        {/* Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none overflow-hidden pl-4 md:pl-10">
          <img
            src={`${base}/tilenga-logo-light.svg`}
            alt=""
            aria-hidden
            className="h-64 md:h-[28rem] w-auto opacity-[0.05] select-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/10">

            {/* LEFT — Brand & CTA */}
            <div className="flex flex-col justify-center py-14 md:py-32 md:pr-16">
              <Link href="/" className="inline-flex mb-10">
                <img
                  src={`${base}/tilenga-logo-light.svg`}
                  alt="Tilenga Safaris"
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>

              <div className="w-10 h-px bg-gold/40 mb-8" />

              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.06] mb-6">
                Where Your African<br />
                <span className="italic text-gold font-serif">Story Begins</span>
              </h2>

              <p className="font-serif italic text-cream/35 text-base md:text-lg leading-relaxed mb-12 max-w-sm">
                &ldquo;Crafting journeys that leave lasting impressions across East Africa.&rdquo;
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/plan-a-trip"
                  className="inline-block bg-gold hover:bg-[#b8933a] text-[#060f09] font-sans text-[10px] uppercase tracking-[0.3em] font-bold px-8 py-3.5 transition-colors duration-300"
                >
                  Plan a Trip
                </Link>
                <Link
                  href="/lodges"
                  className="inline-block border border-gold/30 text-gold/80 hover:border-gold hover:text-gold font-sans text-[10px] uppercase tracking-[0.3em] px-8 py-3.5 transition-all duration-300"
                >
                  Our Lodges
                </Link>
              </div>
            </div>

            {/* RIGHT — Newsletter + Contact */}
            <div className="flex flex-col justify-center py-10 md:py-32 md:pl-16">

              <p className="text-gold/60 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-3">
                Safari Stories &amp; Travel Inspiration
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Stay Connected
              </h3>

              {/* Newsletter form */}
              <div className="mb-12">
                <form className="flex flex-col sm:flex-row gap-0">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-white/[0.04] border border-white/10 text-cream placeholder-cream/20 px-5 py-3.5 text-[12px] font-sans focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold hover:bg-[#b8933a] text-[#060f09] font-sans text-[9px] uppercase tracking-[0.3em] px-7 py-3.5 transition-colors duration-300 font-bold whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-cream/20 text-[9px] font-sans mt-3 tracking-wide">
                  No spam. Unsubscribe at any time.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-3 mb-10 pl-4 border-l border-gold/20">
                <p className="text-cream/40 text-[11px] font-sans leading-relaxed">
                  Lungujja, Ssendawula Zone<br />
                  Eseza House · Kampala, Uganda
                </p>
                <a href="tel:+256789390350"
                  className="block text-cream/50 text-[11px] font-sans hover:text-gold transition-colors duration-300 tracking-wide">
                  +256 789 390 350
                </a>
                <a href="mailto:destinations@tilengasafaris.com"
                  className="block text-cream/50 text-[11px] font-sans hover:text-gold transition-colors duration-300">
                  destinations@tilengasafaris.com
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-cream/10 flex items-center justify-center text-cream/30 hover:border-gold/60 hover:text-gold transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
                <span className="ml-3 text-cream/20 text-[9px] font-sans uppercase tracking-[0.25em]">
                  Follow us
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── DESTINATION STRIP ── */}
      <div className="border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-4 flex items-center justify-between">
          <p className="text-gold/50 text-[8px] uppercase tracking-[0.5em] font-sans font-semibold">
            Our Destinations
          </p>
          <Link href="/destinations"
            className="text-cream/30 text-[8px] uppercase tracking-[0.3em] font-sans hover:text-gold transition-colors duration-300">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {destinations.map((d, i) => (
            <Link
              key={d.name}
              href={d.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "2/3" }}
            >
              <img
                src={d.image}
                alt={d.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f09]/90 via-[#060f09]/20 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-all duration-500 z-10" />
              <div className="absolute top-3 left-3 z-10">
                <span className="font-serif text-cream/20 text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <div className="w-4 h-px bg-gold/50 mb-2 group-hover:w-8 transition-all duration-500" />
                <p className="text-cream font-serif text-sm leading-tight">{d.name}</p>
                <p className="text-cream/40 font-sans text-[8px] uppercase tracking-[0.2em] mt-1">{d.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── NAV GRID ── */}
      <div className="relative bg-[#f2ebe0] overflow-hidden">

        {/* Logo watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
          <img
            src={`${base}/tilenga-logo.svg`}
            alt=""
            aria-hidden
            className="h-72 md:h-96 w-auto opacity-[0.06] select-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-forest/30 text-xs">01</span>
                <div className="h-px flex-1 bg-forest/10" />
              </div>
              <p className="text-forest/50 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-6">
                Destinations
              </p>
              <ul className="space-y-3">
                {["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Dubai"].map((d) => (
                  <li key={d}>
                    <Link
                      href={`/destinations/${d.toLowerCase().replace(" ", "-")}`}
                      className="text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300 tracking-wide group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 inline-block shrink-0" />
                      {d}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-forest/30 text-xs">02</span>
                <div className="h-px flex-1 bg-forest/10" />
              </div>
              <p className="text-forest/50 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-6">
                Experiences
              </p>
              <ul className="space-y-3">
                {["Gorilla Trekking", "Game Drives", "Boat Safaris", "Cultural Immersion", "Mountain Climbing", "Beach Extensions"].map((e) => (
                  <li key={e}>
                    <Link href="/plan-a-trip"
                      className="text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300 tracking-wide group flex items-center gap-2">
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 inline-block shrink-0" />
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-forest/30 text-xs">03</span>
                <div className="h-px flex-1 bg-forest/10" />
              </div>
              <p className="text-forest/50 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-6">
                Our Lodges
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge" },
                  { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300 tracking-wide group flex items-center gap-2">
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 inline-block shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-forest/50 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-6">
                Company
              </p>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Plan a Trip", href: "/plan-a-trip" },
                ].map((c) => (
                  <li key={c.label}>
                    <Link href={c.href}
                      className="text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300 tracking-wide group flex items-center gap-2">
                      <span className="w-0 group-hover:w-3 h-px bg-gold transition-all duration-300 inline-block shrink-0" />
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-serif text-forest/30 text-xs">04</span>
                <div className="h-px flex-1 bg-forest/10" />
              </div>
              <p className="text-forest/50 text-[8px] uppercase tracking-[0.45em] font-sans font-semibold mb-6">
                Get In Touch
              </p>
              <div className="space-y-5">
                <div className="border-l-2 border-gold/40 pl-4">
                  <p className="text-forest/70 text-[11px] font-sans leading-relaxed">
                    Lungujja, Ssendawula Zone<br />
                    Eseza House, P.O. Box 2599<br />
                    Kampala, Uganda
                  </p>
                </div>
                <div className="border-l-2 border-gold/40 pl-4 space-y-2">
                  <a href="tel:+256789390350"
                    className="block text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300">
                    +256 789 390 350
                  </a>
                  <a href="mailto:destinations@tilengasafaris.com"
                    className="block text-forest/70 text-[11px] font-sans hover:text-gold transition-colors duration-300 break-all">
                    destinations@tilengasafaris.com
                  </a>
                </div>
                <div className="border-l-2 border-gold/40 pl-4">
                  <p className="text-forest/40 text-[9px] font-sans uppercase tracking-[0.2em] mb-3">Follow Along</p>
                  <div className="flex gap-2">
                    {socials.map((s) => (
                      <a key={s.label} href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-8 h-8 border border-forest/15 flex items-center justify-center text-forest/40 hover:border-gold hover:text-gold transition-all duration-300">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="bg-[#f2ebe0] border-t border-forest/10 py-5 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 text-forest/35 text-[8px] font-sans uppercase tracking-[0.3em]">
            <span>Uganda Tourism Board</span>
            <span className="mx-2 text-gold/50">·</span>
            <span>Certified Operator</span>
            <span className="mx-2 text-gold/50">·</span>
            <span>Conservation Partner</span>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-forest/35 text-[8px] font-sans tracking-[0.25em] uppercase">
              &copy; {new Date().getFullYear()} Tilenga Safaris
            </p>
            <span className="text-gold/50">·</span>
            <Link href="/privacy" className="text-forest/35 text-[8px] font-sans hover:text-gold transition-colors tracking-wide uppercase">Privacy</Link>
            <Link href="/terms" className="text-forest/35 text-[8px] font-sans hover:text-gold transition-colors tracking-wide uppercase">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
