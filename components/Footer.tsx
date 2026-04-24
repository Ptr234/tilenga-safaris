import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      {/* Newsletter bar */}
      <div className="bg-forest border-b border-white/10 py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-gold">Stay Connected</p>
            <p className="text-cream/60 text-sm font-sans mt-1">
              Sign up for safari stories, seasonal offers &amp; travel inspiration.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 bg-white/10 border border-white/20 text-cream placeholder-cream/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold"
            />
            <button className="bg-gold hover:bg-gold-dark text-forest font-sans text-xs uppercase tracking-widest px-6 py-3 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex flex-col leading-none mb-4">
            <span className="font-serif text-2xl text-cream">Tilenga Safaris</span>
            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-sans">
              Explore · Discover · Experience
            </span>
          </Link>
          <p className="text-cream/50 text-sm font-sans leading-relaxed">
            Crafting personalized adventures for unforgettable memories across East Africa and beyond.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/tilengasafaris_travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] font-sans mb-5">Destinations</h4>
          <ul className="space-y-2.5">
            {["Uganda", "Kenya", "Tanzania", "Rwanda", "South Africa", "Dubai"].map((dest) => (
              <li key={dest}>
                <Link
                  href={`/destinations/${dest.toLowerCase().replace(" ", "-")}`}
                  className="text-cream/60 text-sm font-sans hover:text-gold transition-colors"
                >
                  {dest}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Lodges */}
        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] font-sans mb-5">Our Lodges</h4>
          <ul className="space-y-2.5">
            <li>
              <Link href="/lodges/tilenga-safari-lodge" className="text-cream/60 text-sm font-sans hover:text-gold transition-colors">
                Tilenga Safari Lodge
              </Link>
            </li>
            <li>
              <Link href="/lodges/kikorongo-safari-lodge" className="text-cream/60 text-sm font-sans hover:text-gold transition-colors">
                Kikorongo Safari Lodge
              </Link>
            </li>
          </ul>

          <h4 className="text-gold text-xs uppercase tracking-[0.25em] font-sans mt-8 mb-5">Company</h4>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="text-cream/60 text-sm font-sans hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/plan-a-trip" className="text-cream/60 text-sm font-sans hover:text-gold transition-colors">Plan a Trip</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] font-sans mb-5">Contact</h4>
          <ul className="space-y-4 text-cream/60 text-sm font-sans">
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Lungujja, Ssendawula Zone<br />Eseza House, P.O. Box 2599<br />Kampala, Uganda</span>
            </li>
            <li>
              <a href="tel:+256789390350" className="hover:text-gold transition-colors flex gap-3 items-center">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +256 789 390 350
              </a>
            </li>
            <li>
              <a href="mailto:destinations@tilengasafaris.com" className="hover:text-gold transition-colors flex gap-3 items-center">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                destinations@tilengasafaris.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-cream/30 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} Tilenga Safaris. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
