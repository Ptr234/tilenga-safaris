"use client";

import Link from "next/link";

const navLinks = [
  {
    column: [
      { label: "Tilenga Safari Lodge", href: "/lodges/tilenga-safari-lodge" },
      { label: "Kikorongo Safari Lodge", href: "/lodges/kikorongo-safari-lodge" },
      { label: "Experiences & Activities", href: "/experiences" },
      { label: "Our Legacy", href: "/about" },
    ]
  },
  {
    column: [
      { label: "Sustainability & Conservation", href: "/about#conservation" },
      { label: "Travel Concierge", href: "/plan-a-trip" },
      { label: "Terms & Conditions", href: "/about" },
      { label: "Privacy Policy", href: "/about" },
    ]
  },
  {
    column: [
      { label: "Agent Portal", href: "/agents-portal" },
      { label: "Offers", href: "/offers" },
      { label: "FAQ", href: "/faq" },
      { label: "Gallery", href: "https://www.instagram.com/tilengasafaris_travel/", target: "_blank" },
    ]
  }
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TilengaSafaris/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tilengasafaris_travel/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.06 1.01 2.73.91.82 2.22.9 3.21.36.86-.41 1.44-1.25 1.58-2.19.14-1.11.02-2.22.02-3.34 0-4.85-.01-9.7-.01-14.55z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="bg-forest-dark text-gold pt-20 pb-10 overflow-hidden font-sans">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Left Column: Socials, Newsletter, Contact */}
          <div className="lg:col-span-4 space-y-12">
            {/* Social Icons */}
            <div className="flex gap-6 items-center">
              {socials.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold/80 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Button */}
            <div>
              <Link 
                href="/plan-a-trip"
                className="inline-block bg-gold text-forest-dark px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-cream transition-colors rounded-sm"
              >
                Sign Up For Our Newsletter
              </Link>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <a 
                href="mailto:destinations@tilengasafaris.com" 
                className="block text-gold/70 hover:text-white text-lg transition-colors"
              >
                destinations@tilengasafaris.com
              </a>
              <a 
                href="tel:+256789390350" 
                className="block text-gold/70 hover:text-white text-lg transition-colors"
              >
                +256 789 390 350
              </a>
            </div>
          </div>

          {/* Right Column: Nav Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {navLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                {col.column.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Awards / Partners Section */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 py-12 border-t border-white/10 mb-12">
          <img src={`${base}/photos/partnerslogo/uganda-tourism-board-logo-25518EC15B-seeklogo.com_.webp`} alt="UTB" className="h-16 md:h-24 w-auto object-contain transition-all duration-700" />
          <img src={`${base}/photos/partnerslogo/autologo-114x114x0x0x114x114x1670356750.webp`} alt="AUTO" className="h-16 md:h-24 w-auto object-contain transition-all duration-700" />
          <img src={`${base}/photos/partnerslogo/ATTAlogo.png`} alt="ATTA" className="h-16 md:h-24 w-auto object-contain transition-all duration-700" />
          
          {/* Placeholder for Awards from Screenshot */}
          <div className="flex items-center gap-8">
             <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center p-4">
                <span className="text-[8px] uppercase tracking-tighter text-center font-bold text-gold/40">Award Winner 2025</span>
             </div>
             <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center p-4">
                <span className="text-[8px] uppercase tracking-tighter text-center font-bold text-gold/40">Award Winner 2024</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/">
            <img
              src={`${base}/tilenga-logo-light.svg`}
              alt="Tilenga Safaris"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* WhatsApp Button Pill */}
          <a 
            href="https://wa.me/256789390350"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold text-[#060f09] hover:bg-cream px-6 py-3 rounded-full text-[12px] font-bold transition-all group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Have a Question? Chat with Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
