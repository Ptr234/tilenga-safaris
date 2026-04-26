import Link from "next/link";
import HotspotGallery from "@/components/HotspotGallery";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import ImageReveal from "@/components/motion/ImageReveal";
import SplitText from "@/components/motion/SplitText";

const hotspots = [
  {
    name: "Serengeti",
    detail: "Endless Plains, Endless Wildlife",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=900&q=85",
  },
  {
    name: "Ngorongoro Crater",
    detail: "UNESCO World Heritage — Africa's Eden",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=85",
  },
  {
    name: "Zanzibar",
    detail: "Spice Island & Indian Ocean Beaches",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=85",
  },
  {
    name: "Mount Kilimanjaro",
    detail: "Africa's Rooftop at 5,895m",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=85",
  },
  {
    name: "Tarangire National Park",
    detail: "Baobab Giants & Elephant Herds",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=900&q=85",
  },
  {
    name: "Hot Air Balloon Safari",
    detail: "Dawn Float Over the Serengeti",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&q=85",
  },
];

const packages = [
  {
    name: "Zanzibar Beach Holiday",
    tagline: "Indian Ocean beach escape",
    duration: "5 Nights / 6 Days",
    price: "From $1,200",
    minPax: "Min. 2 participants",
    description:
      "Stone Town tour, Prison Island, Safari Blue, snorkeling at Mnemba, and turtle swimming at Nungwi — the perfect Indian Ocean escape with coastal luxury.",
    activities: [
      "Stone Town tour",
      "Prison Island",
      "Safari Blue",
      "Mnemba snorkeling",
      "Turtle swimming",
    ],
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=85",
  },
  {
    name: "Zanzibar Spice Island Escape",
    tagline: "Spice island and sunset bliss",
    duration: "6 Nights / 7 Days",
    price: "From $1,200",
    minPax: "Min. 2 participants",
    description:
      "Enjoy Stone Town, a Spice Tour, Jozani Forest with red colobus monkeys, and a dolphin swim — then relax on white-sand beaches as the sun sets over the Indian Ocean.",
    activities: [
      "Stone Town",
      "Prison Island",
      "Spice Tour",
      "Jozani Forest",
      "Dolphin swimming",
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&q=85",
  },
  {
    name: "12-Day Kenya & Tanzania Safari",
    tagline: "Legendary migration safari",
    duration: "12 Days",
    price: "From $3,000 / person",
    minPax: "Min. 4 participants",
    description:
      "A seamless East Africa journey from the Serengeti and Ngorongoro to Kenya’s Masai Mara and Amboseli, designed for epic wildlife viewing and unforgettable landscapes.",
    activities: [
      "Serengeti NP",
      "Ngorongoro Crater",
      "Lake Nakuru",
      "Masai Mara",
      "Amboseli NP",
    ],
    image: "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=700&q=85",
  },
];

export default function TanzaniaPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain-overlay relative h-[80vh] min-h-[500px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1800&q=80)",
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
            <SplitText text="Tanzania" by="char" stagger={0.04} delay={0.2} />
          </h1>
          <FadeIn direction="up" delay={0.5}>
            <p className="font-serif italic text-2xl text-gold">
              Serengeti &amp; Zanzibar
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-forest py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cream/70 text-sm font-sans">
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Best Time
            </span>
            Dec–Mar, Jun–Oct
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Currency
            </span>
            Tanzanian Shilling
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Time Zone
            </span>
            GMT +3
          </div>
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest mb-1">
              Airports
            </span>
            Arusha (JRO) / Dar (DAR)
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-label mb-3">Destination Overview</p>
            <h2 className="section-heading mb-6">
              Africa&apos;s Most Diverse Safari Land
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-stone font-sans leading-relaxed mb-4">
              Tanzania is a multicultural country in East Africa whose diverse
              landscape spans from the majestic snow-capped Mount Kilimanjaro to
              the vast plains of the Serengeti — home to the world-renowned
              Great Migration — and the crystal-clear waters of the Zanzibar
              Archipelago.
            </p>
            <p className="text-stone font-sans leading-relaxed mb-4">
              The Ngorongoro Crater, a UNESCO World Heritage Site, shelters the
              highest density of wildlife in Africa within its ancient volcanic
              walls. Over 1.5 million wildebeest make their annual crossing in
              one of nature&apos;s greatest spectacles.
            </p>
            <p className="text-stone font-sans leading-relaxed">
              After your safari, unwind on Zanzibar&apos;s pristine white
              beaches — ancient Stone Town, spice tours, snorkeling with whale
              sharks, and the warm azure waters of the Indian Ocean.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-2">
            <ImageReveal direction="top" delay={0} className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&q=80"
                alt="Mount Kilimanjaro"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="top"
              delay={0.12}
              className="overflow-hidden mt-6"
            >
              <img
                src="https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=500&q=80"
                alt="Zanzibar beach"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.06}
              className="overflow-hidden -mt-6"
            >
              <img
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80"
                alt="Ngorongoro Crater"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
            <ImageReveal
              direction="bottom"
              delay={0.18}
              className="overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&q=80"
                alt="Serengeti wildlife"
                className="w-full h-52 object-cover"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Hotspot Pictorial Gallery */}
      <section className="bg-forest-dark py-20">
        <FadeIn direction="up" className="px-6 md:px-16 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold/50" />
            <p className="section-label text-gold">Tanzania Hot Spots</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            <SplitText
              text="Wonder at Every Horizon"
              by="word"
              stagger={0.06}
            />
          </h2>
        </FadeIn>
        <HotspotGallery hotspots={hotspots} />
      </section>

      {/* Tour Packages */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-gold/20">
            <div>
              <p className="section-label mb-3">Safari Packages</p>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
                Tanzania Tour Packages
              </h2>
            </div>
            <Link href="/plan-a-trip" className="btn-primary shrink-0 self-start md:self-end">
              Get a Custom Quote
            </Link>
          </FadeIn>
          <StaggerGrid className="package-grid">
            {packages.map((pkg, i) => (
              <StaggerItem key={pkg.name}>
                <div className="package-card group">
                  <img src={pkg.image} alt={pkg.name} className="package-card-img" />
                  <div className="package-card-overlay" />
                  <span className="package-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="package-card-duration">{pkg.duration}</span>

                  <div className="package-card-body">
                    <p className="package-card-tagline">{pkg.tagline}</p>
                    <h3 className="package-card-title">{pkg.name}</h3>
                    <div className="package-card-rule" />

                    <div className="package-card-description-wrap">
                      <div><p className="package-description">{pkg.description}</p></div>
                    </div>

                    <div className="package-features">
                      {pkg.activities.map((act) => (
                        <span key={act} className="package-feature-pill">
                          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {act}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-cream/10">
                      <div>
                        <span className="font-serif italic text-gold text-sm">{pkg.price}</span>
                        {pkg.minPax && <p className="text-cream/40 text-[9px] font-sans mt-0.5">{pkg.minPax}</p>}
                      </div>
                      <Link href="/plan-a-trip" className="package-cta">
                        Enquire
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 md:px-16 text-center">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Ready to Explore Tanzania?
          </h2>
          <p className="text-cream/60 font-sans max-w-lg mx-auto mb-10">
            Serengeti game drives by day, Zanzibar sunsets by evening. Let us
            build your perfect Tanzania itinerary.
          </p>
          <Link href="/plan-a-trip" className="btn-outline">
            Plan My Tanzania Safari
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
