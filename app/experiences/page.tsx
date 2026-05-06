import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const experiences = [
  { 
    title: "Gorilla Tracking", 
    tag: "Primate Encounters",
    description: "Face-to-face with endangered mountain gorillas in the misty highlands of Bwindi Impenetrable Forest. A transformative hour spent in the presence of these gentle giants.", 
    image: `${base}/experinces/gorrila treking.jpg`,
    num: "01"
  },
  { 
    title: "Great Beast Migration", 
    tag: "Wildlife Spectacle",
    description: "Witness the world's most spectacular wildlife event as millions of wildebeest and zebra cross the Mara River, braving crocodiles and predators.", 
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    num: "02"
  },
  { 
    title: "Culture Immersion", 
    tag: "Local Heritage",
    description: "Connect with the living heritage and ancient traditions of the iconic Maasai, Batwa, and Karamojong people through authentic community-led encounters.", 
    image: `${base}/experinces/culture emersion.jpg`,
    num: "03"
  },
  { 
    title: "Big Five Game Drives", 
    tag: "Classic Safari",
    description: "Expert-guided dawn and dusk drives in search of the legendary African Big Five — Lion, Leopard, Elephant, Rhino, and Buffalo.", 
    image: `${base}/experinces/Game drives.jpg`,
    num: "04"
  },
  { 
    title: "Hot Air Balloon", 
    tag: "Aerial Views",
    description: "Soar above the golden plains at sunrise for a breathtaking bird's-eye view of the wild, followed by a champagne breakfast in the bush.", 
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
    num: "05"
  },
  { 
    title: "Mountain Climbing", 
    tag: "Adventure",
    description: "Summit the legendary 'Mountains of the Moon' or climb Mt. Kilimanjaro for an epic alpine adventure and panoramic views of the continent.", 
    image: `${base}/experinces/kilimanjaro climbing.jpg`,
    num: "06"
  },
  { 
    title: "Zanzibar Beaches", 
    tag: "Coastal Escape",
    description: "Unwind on turquoise shores where spice-scented breezes meet ancient Stone Town culture. The perfect conclusion to any safari adventure.", 
    image: `${base}/experinces/zanzibar beach.jpg`,
    num: "07"
  },
  { 
    title: "Boat Safaris", 
    tag: "Water Exploration",
    description: "Glide the Albert Nile or Kazinga Channel for incredible hippo, crocodile, and bird sightings from the unique perspective of the water.", 
    image: `${base}/experinces/water safari.jpg`,
    num: "08"
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="grain-overlay relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${base}/experinces/Game%20drives.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-forest-dark/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <p className="section-label text-gold">The Tilenga Collection</p>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-cream leading-[0.9] mb-8 uppercase tracking-[0.15em]">
              Extraordinary<br /><em className="not-italic text-gold">Experiences</em>
            </h1>
            <p className="text-cream font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              From the misty gorilla highlands to the sun-drenched savannahs, we curate journeys that go beyond sight-seeing to true soul-stirring discovery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="bg-cream py-24 px-6 md:px-16 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8 leading-tight uppercase tracking-wider">
            More than a journey, <br /><span className="text-gold italic">a transformation.</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-stone-600 font-sans text-lg leading-relaxed mb-6">
            At Tilenga Safaris, we believe that the most valuable thing you bring home from a journey isn't a photograph, but a new perspective. Our experiences are designed to immerse you deeply in the pulse of Africa.
          </p>
          <p className="text-stone-500 font-sans text-base leading-relaxed">
            Whether it's the adrenaline of a lion hunt or the quiet dignity of a Maasai elder's story, each moment is carefully crafted to be authentic, respectful, and unforgettable.
          </p>
        </div>
      </section>

      {/* Grid of Experiences */}
      <section className="bg-forest-dark p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`group relative overflow-hidden block ${
                i === 0 ? "md:col-span-2 md:h-[70vh]" : "h-[50vh] md:h-[60vh]"
              }`}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
              
              {/* Numbering */}
              <span className="absolute top-6 left-8 font-serif text-cream/10 text-8xl md:text-[10rem] leading-none select-none pointer-events-none uppercase">
                {exp.num}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="w-12 h-px bg-gold mb-4 transition-all duration-500 group-hover:w-24" />
                <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans mb-3">{exp.tag}</p>
                <h3 className={`font-serif text-cream leading-tight mb-4 uppercase tracking-[0.15em] ${
                  i === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
                }`}>
                  {exp.title}
                </h3>
                <p className="text-cream/70 text-sm md:text-base font-sans leading-relaxed max-w-lg transition-all duration-700 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tailored Section */}
      <section className="bg-[#f2ebe0] py-24 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-gold mb-4">Your Story, Your Pace</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-8 leading-tight uppercase tracking-wider">
            All experiences are <em className="italic text-gold lowercase">bespoke.</em>
          </h2>
          <p className="text-stone-600 font-sans text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            The experiences above are just the beginning. We specialize in tailoring every itinerary to your specific interests, whether you're a photography enthusiast, a birding expert, or a family looking for educational adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/plan-a-trip" className="btn-primary w-full sm:w-auto">
              Inquire Now
            </Link>
            <Link href="/destinations" className="text-forest text-[10px] uppercase tracking-[0.4em] font-sans font-bold hover:text-gold transition-colors">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-forest-dark/60" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-cream mb-8 uppercase tracking-[0.2em]">Ready to begin?</h2>
          <Link href="/plan-a-trip" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
