"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const instaPosts = [
  { 
    id: 1, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/img-3021-67d4293c0ecf0.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "1.2k",
    type: "image"
  },
  { 
    id: 2, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/dsc00581-67d42bdcd0d95.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "850",
    type: "video"
  },
  { 
    id: 3, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/img-2997-1-67d42be336589.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "2.4k",
    type: "image"
  },
  { 
    id: 4, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/krs-1550-67d42be762650.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "1.5k",
    type: "image"
  },
  { 
    id: 5, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/night-2-67d42be9793eb.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "3.1k",
    type: "image"
  },
  { 
    id: 6, 
    image: "https://tilengasafarilodge.com/wp-content/uploads/2025/03/krs-3898-67d42ebf04248.webp", 
    link: "https://www.instagram.com/tilengasafaris_travel/",
    likes: "920",
    type: "image"
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-[#fdfcf8] py-20 overflow-hidden border-t border-gold/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
                Social Connection
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#060f09] leading-tight">
              Follow the <span className="italic text-gold">Wild Journey</span>
            </h2>
          </div>
          
          <Link 
            href="https://www.instagram.com/tilengasafaris_travel/" 
            target="_blank"
            className="group flex flex-col items-start md:items-end gap-1"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#060f09]/40 font-bold">Instagram Feed</span>
            <div className="flex items-center gap-3 text-[#060f09] hover:text-gold transition-colors duration-300">
              <span className="text-sm font-sans tracking-widest uppercase font-bold">@tilengasafaris_travel</span>
              <div className="w-8 h-8 rounded-full border border-[#060f09]/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#060f09]/5">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative aspect-square overflow-hidden bg-stone-100"
            >
              <img
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay with Meta Info */}
              <div className="absolute inset-0 bg-[#060f09]/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <div className="flex items-center gap-6 text-cream">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                    </svg>
                    <span className="text-xs font-bold tracking-wider">{post.likes}</span>
                  </div>
                  {post.type === 'video' && (
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Instagram Icon indicator top right */}
              <div className="absolute top-3 right-3 z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                {post.type === 'video' ? (
                  <svg className="w-4 h-4 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-[#060f09]/40 text-[11px] font-sans italic max-w-sm text-center">
            Tag us <span className="text-gold font-bold">#TilengaSafaris</span> for a chance to be featured in our gallery.
          </p>
          <Link
            href="https://www.instagram.com/tilengasafaris_travel/"
            target="_blank"
            className="group relative inline-flex items-center gap-8 overflow-hidden"
          >
            <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-500" />
            <span className="text-[#060f09] font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
              Explore our World
            </span>
            <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
