"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { 
    name: "Uganda Tourism Board", 
    logo: "/photos/partnerslogo/uganda-tourism-board-logo-25518EC15B-seeklogo.com_.webp",
    link: "https://utb.go.ug/"
  },
  { 
    name: "Association of Uganda Tour Operators", 
    logo: "/photos/partnerslogo/autologo-114x114x0x0x114x114x1670356750.webp",
    link: "https://auto.ug/"
  },
  { 
    name: "Adventure Travel Trade Association", 
    logo: "/photos/partnerslogo/ATTAlogo.png",
    link: "https://www.adventuretravel.biz/"
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-12 md:py-20 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="section-label text-gold mb-3">Our Network</p>
          <h2 className="font-serif text-2xl md:text-3xl text-forest uppercase tracking-widest">Industry Partners</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p) => (
            <motion.a 
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-sans text-stone/80 text-center max-w-[150px] group-hover:text-gold transition-colors duration-300">
                {p.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
