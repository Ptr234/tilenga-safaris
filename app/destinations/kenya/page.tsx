import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Masai Mara",
    detail: "Kenya's Crown Jewel Reserve",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=85",
  },
  {
    name: "Great Migration",
    detail: "1.5 Million Wildebeest Crossing",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=900&q=85",
  },
  {
    name: "Amboseli National Park",
    detail: "Elephants Against Kilimanjaro",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=85",
  },
  {
    name: "Lake Nakuru",
    detail: "Flamingo-Lined Soda Lake",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
  {
    name: "Samburu Reserve",
    detail: "Rare Northern Species",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=85",
  },
  {
    name: "Diani Beach",
    detail: "Indian Ocean Coastline",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85",
  },
];

const packages = [
  {
    name: "7-Day Kenya Prime Safari",
    duration: "7 days",
    price: "From $2,000 / person",
    description: "Covers Nairobi, Samburu National Reserve, Lake Nakuru, and Masai Mara with daily game drives — the classic Kenya experience.",
    activities: ["Nairobi city tour", "Samburu game drives", "Lake Nakuru flamingoes", "Masai Mara safari"],
  },
  {
    name: "7-Day Magical Kenya Tour",
    duration: "7 days",
    price: "From $2,000 / person",
    description: "Features Amboseli's elephant herds with Kilimanjaro backdrop, Lake Nakuru's flamingoes, and the legendary Masai Mara plains.",
    activities: ["Amboseli NP", "Lake Nakuru", "Masai Mara", "Maasai village visit"],
  },
  {
    name: "12-Day Kenya & Tanzania Safari",
    duration: "12 days",
    price: "From $3,000 / person (group of 4)",
    description: "The ultimate East Africa grand tour — from Ngorongoro Crater to Serengeti, crossing into Masai Mara and Amboseli across two iconic countries.",
    activities: ["Serengeti NP", "Ngorongoro Crater", "Masai Mara", "Amboseli NP"],
  },
];

export default function KenyaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1800&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/20 via-forest-dark/30 to-forest-dark/95" />
        <div className="relative z-10 px-6 md:px-16 pb-16 max-w-3xl">
          <FadeIn direction="up">
            <p className="section-label text-gold mb-3">East Africa</p>
          </FadeIn>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-3 leading-none">
            <SplitText text="Kenya" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">Iconic Maasai Mara</p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Best Time</span>Dec–Mar, Jun–Oct</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Currency</span>Kenyan Shilling</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Time Zone</span>GMT +3</div>
          <div><span className="block text-gold text-xs uppercase tracking-widest mb-1">Main Airport</span>Nairobi (NBO)</div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">The Quintessential African Safari</h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Kenya is a vibrant country in East Africa known for its stunning landscapes — ranging
              from the iconic savannahs of the Maasai Mara to the pristine beaches of the Indian Ocean,
              and home to the majestic Mount Kenya, the second-highest peak in Africa.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Masai Mara is home to one of nature&apos;s greatest spectacles: the annual Great
              Wildebeest Migration, when more than 1.5 million wildebeest, zebra, and gazelle
              cross from Tanzania into Kenya in search of fresh pasture.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              From Amboseli&apos;s elephant herds against the Kilimanjaro backdrop to Samburu&apos;s
              rare species and Lake Nakuru&apos;s flamingo flocks — Kenya delivers iconic safari moments
              at every turn.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&q=80" alt="Kenya wildlife" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="top" delay={0.12} className="overflow-hidden mt-6">
              <img src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&q=80" alt="Lion" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.06} className="overflow-hidden -mt-6">
              <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80" alt="Elephant" className="w-full h-52 object-cover" />
            </ImageReveal>
            <ImageReveal direction="bottom" delay={0.18} className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80" alt="Savannah" className="w-full h-52 object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Kenya Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText text="Landscapes That Define Safari" by="word" stagger={0.06} />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Tour Packages */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="section-label mb-3">Safari Packages</p>
            <h2 className="section-heading">Kenya Tour Packages</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </FadeIn>
          <StaggerGrid className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div className="bg-white border border-gold/10 p-8 hover:shadow-lg transition-shadow duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl text-forest">{pkg.name}</h3>
                      <p className="text-gold text-xs uppercase tracking-wider font-sans mt-1">{pkg.duration}</p>
                    </div>
                    <span className="bg-forest text-cream text-xs font-sans px-3 py-1 shrink-0 ml-4 text-center">{pkg.price}</span>
                  </div>
                  <p className="text-stone font-sans text-sm leading-relaxed mb-5">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.activities.map((act) => (
                      <span key={act} className="text-[10px] uppercase tracking-wider text-stone border border-stone/30 px-2 py-0.5 font-sans">{act}</span>
                    ))}
                  </div>
                  <Link href="/plan-a-trip" className="text-forest font-sans text-sm uppercase tracking-wider border-b border-gold hover:text-gold transition-colors">
                    Enquire →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">Ready to Explore Kenya?</h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            From the Great Migration to the Masai Mara — let us build your dream Kenya itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">Plan My Kenya Safari</Link>
        </FadeIn>
      </section>
    </>
  );
}
