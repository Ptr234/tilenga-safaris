"use client";

import Link from "next/link";

const destinations = [
  { name: "Uganda", href: "/destinations/uganda" },
  { name: "Kenya", href: "/destinations/kenya" },
  { name: "Tanzania", href: "/destinations/tanzania" },
  { name: "Rwanda", href: "/destinations/rwanda" },
  { name: "South Africa", href: "/destinations/south-africa" },
  { name: "Namibia", href: "/destinations/namibia" },
  { name: "Botswana", href: "/destinations/botswana" },
];

const lodges = [
  { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge" },
  { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Plan a Trip", href: "/plan-a-trip" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tilengasafaris_travel/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TilengaSafaris/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/256789390350",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="bg-[#060f09] text-cream overflow-hidden">
      
      {/* ── TOP SECTION: Brand & Newsletter ── */}
      <div className="relative border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT — Brand & Mission */}
            <div className="flex flex-col">
              <Link href="/" className="inline-flex mb-8">
                <img
                  src={`${base}/tilenga-logo-light.svg`}
                  alt="Tilenga Safaris"
                  className="h-12 md:h-14 w-auto"
                />
              </Link>
              
              <div className="w-12 h-px bg-gold/40 mb-8" />
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-6">
                Where Your African<br />
                <span className="italic text-gold">Story Begins</span>
              </h2>

              <p className="font-serif italic text-cream/40 text-lg md:text-xl leading-relaxed max-w-md mb-12">
                &ldquo;Crafting journeys that leave lasting impressions across East Africa.&rdquo;
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/plan-a-trip"
                  className="bg-gold hover:bg-[#b8933a] text-[#060f09] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300"
                >
                  Plan a Trip
                </Link>
                <Link
                  href="/lodges"
                  className="border border-gold/30 text-gold hover:bg-gold hover:text-[#060f09] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300"
                >
                  Our Lodges
                </Link>
              </div>
            </div>

            {/* RIGHT — Newsletter */}
            <div className="flex flex-col justify-center">
              <div className="mb-12">
                <p className="text-gold/60 text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-4">
                  Safari Stories &amp; Travel Inspiration
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-8">Stay Connected</h3>
                
                <form className="flex flex-col sm:flex-row gap-0 group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold hover:bg-[#b8933a] text-[#060f09] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-cream/30 text-[10px] mt-4 italic">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MIDDLE SECTION: Navigation Grid ── */}
      <div className="border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            
            {/* 01 Destinations */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-serif text-gold/40 text-xs">01</span>
                <div className="h-px flex-1 bg-gold/10" />
              </div>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-8">
                Destinations
              </p>
              <ul className="space-y-4">
                {destinations.map((d) => (
                  <li key={d.name}>
                    <Link href={d.href} className="text-cream/50 hover:text-gold text-[12px] font-sans tracking-wide transition-colors duration-300">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 02 Our Lodges & Company */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-serif text-gold/40 text-xs">02</span>
                <div className="h-px flex-1 bg-gold/10" />
              </div>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-8">
                Our Lodges
              </p>
              <ul className="space-y-4 mb-12">
                {lodges.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-cream/50 hover:text-gold text-[12px] font-sans tracking-wide transition-colors duration-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-8">
                Company
              </p>
              <ul className="space-y-4">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-cream/50 hover:text-gold text-[12px] font-sans tracking-wide transition-colors duration-300">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 03 Get In Touch */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-serif text-gold/40 text-xs">03</span>
                <div className="h-px flex-1 bg-gold/10" />
              </div>
              <p className="text-gold/60 text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-8">
                Get In Touch
              </p>
              <div className="space-y-8">
                <div className="space-y-3 border-l border-gold/20 pl-4">
                  <p className="text-cream/70 text-[13px] font-sans leading-relaxed">
                    Lungujja, Ssendawula Zone<br />
                    Eseza House, P.O. Box 2599<br />
                    Kampala, Uganda
                  </p>
                </div>
                <div className="space-y-3 border-l border-gold/20 pl-4">
                  <a href="tel:+256789390350" className="block text-cream/70 text-[13px] font-sans hover:text-gold transition-colors">
                    +256 789 390 350
                  </a>
                  <a href="mailto:destinations@tilengasafaris.com" className="block text-cream/70 text-[13px] font-sans hover:text-gold transition-colors break-all">
                    destinations@tilengasafaris.com
                  </a>
                </div>
                <div className="border-l border-gold/20 pl-4">
                  <p className="text-gold/40 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">Follow Along</p>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-white/10 flex items-center justify-center text-cream/40 hover:border-gold/50 hover:text-gold transition-all duration-300 rounded-full"
                      >
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

      {/* ── BOTTOM SECTION: Partners & Copyright ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="flex flex-col items-center gap-12">
          
          {/* Partners */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <img src={`${base}/photos/partnerslogo/uganda-tourism-board-logo-25518EC15B-seeklogo.com_.webp`} alt="UTB" className="h-8 md:h-10 w-auto" />
            <img src={`${base}/photos/partnerslogo/autologo-114x114x0x0x114x114x1670356750.webp`} alt="AUTO" className="h-8 md:h-10 w-auto" />
            <img src={`${base}/photos/partnerslogo/ATTAlogo.png`} alt="ATTA" className="h-8 md:h-10 w-auto" />
          </div>

          <div className="w-full h-px bg-gold/10" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-[9px] uppercase tracking-[0.25em] text-cream/30 font-bold">
            <div className="flex gap-4">
              <span>&copy; {new Date().getFullYear()} Tilenga Safaris</span>
              <span className="text-gold/20">|</span>
              <span>All Rights Reserved</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
