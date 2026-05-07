"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxSection from "@/components/motion/ParallaxSection";
import SplitText from "@/components/motion/SplitText";
import MagneticButton from "@/components/motion/MagneticButton";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const sections = [
  {
    id: "first-time",
    label: "For First Time Safari Visits",
    dividerImage: `${base}/Newstock/tourist.jpg`,
    dividerCaption:
      "A tranquil scene with a guest relaxing by a fire pit, surrounded by safari chairs in front of the warmly lit main lodge. The ambiance reflects timeless elegance — lanterns, polished wood, and open canvas — evoking the golden era of safaris.",
    questions: [
      {
        q: "When is the best time to visit the Maasai Mara?",
        a: "The Maasai Mara is spectacular year-round, but the prime season runs July to October when the Great Migration — over 1.5 million wildebeest and zebra — crosses the Mara River. For fewer crowds and lush green scenery, November through April offers exceptional game viewing and birdwatching at more accessible rates.",
      },
      {
        q: "What unique experiences can I expect from different seasons?",
        a: "July–October: The dramatic river crossings of the Great Migration, dense predator activity, and dry golden savannah. November–March: 'Green season' brings dramatic skies, newborn animals, and a quieter, more intimate safari. April–June: The long rains transform the Mara into a vivid emerald landscape — ideal for photographers and budget-conscious travellers seeking solitude.",
      },
      {
        q: "Do I need a visa?",
        a: "Most nationalities require a visa to enter Kenya. We recommend applying for an eVisa online at evisa.go.ke before travel — the process takes 2–3 business days. East African citizens enjoy visa-free access, and many other nationalities qualify for visas on arrival. Our concierge team can guide you through the exact requirements for your nationality.",
      },
      {
        q: "Are vaccinations required for travel to Kenya?",
        a: "Yellow Fever vaccination is required if arriving from a Yellow Fever endemic country. We strongly recommend consulting a travel medicine specialist 6–8 weeks before departure. Malaria prophylaxis, hepatitis A & B, typhoid, and tetanus boosters are also commonly advised. Our team will share a health checklist specific to your travel dates and itinerary.",
      },
      {
        q: "Do I need to tip?",
        a: "Tipping is warmly appreciated but entirely personal. As a guide, USD $20–$30 per day for your lead guide, USD $10–$15 for camp staff, and USD $5–$10 for housekeeping is customary. We'll provide a tipping guide in your pre-departure information pack.",
      },
      {
        q: "How should I prepare and what should I pack?",
        a: "Neutral earth tones (khaki, olive, tan) are ideal — avoid bright colours that disturb wildlife. Essentials include: lightweight long-sleeve shirts and trousers for early morning game drives, a fleece or light down jacket for cool mornings, sunscreen (SPF 50+), insect repellent, binoculars, and a quality camera with a zoom lens. We send all confirmed guests a detailed packing guide tailored to season and destination.",
      },
      {
        q: "Are Safaris Expensive?",
        a: "A quality safari is an investment in an experience that will last a lifetime. Costs vary widely — from mid-range tented camps starting around USD $300–$500 per person per night, to ultra-luxury private camps exceeding USD $1,500 per night. Our rates are all-inclusive covering accommodation, meals, game drives, and activities. We offer options across all budgets and tailor itineraries to deliver extraordinary value at every level.",
      },
    ],
  },
  {
    id: "choosing",
    label: "Choosing the Right Safari",
    dividerImage: `${base}/Newstock/elephantcars.jpg`,
    dividerCaption:
      "A tender interaction between a Tilenga guide and wildlife — perfectly conveying the camp's deep ethos of respect, empathy, and coexistence with the natural world.",
    questions: [
      {
        q: "How do I choose which company to go on safari with?",
        a: "Look for operators with certified naturalist guides, transparent all-inclusive pricing, strong conservation ethics, and genuine community partnerships. Verify memberships with ATTA (Africa Travel & Tourism Association) or KATO (Kenya Association of Tour Operators). We recommend reading guest reviews on TripAdvisor and Safari Bookings, and speaking directly with a specialist rather than booking through a generic platform.",
      },
      {
        q: "What's the difference between a lodge and a tented camp?",
        a: "A lodge is a permanent structure — think stone, timber, and glass — offering hotel-style comfort with fixed walls and en-suite facilities. A tented camp uses luxury canvas tents on raised platforms, often with private decks and en-suite bathrooms, offering a more immersive 'bush feel' while maintaining exceptional comfort. Both deliver outstanding experiences; the choice often comes down to how close to the wild you want to feel.",
      },
      {
        q: "Why Choose Tilenga Safaris?",
        a: "Tilenga Safaris combines 20+ years of East African expertise with an authentic, personalised approach. We are owner-operated, meaning every booking receives direct attention from our senior team. Our guides are among the most knowledgeable in the region, our lodges sit in prime wildlife zones, and our conservation partnerships ensure your journey gives back. We don't sell generic tours — we craft legacy experiences.",
      },
      {
        q: "Does Tilenga Safaris have any specials?",
        a: "Yes — we regularly offer early-booking discounts, green-season rates, and honeymoon/anniversary packages. We also run family-specific programmes and group discounts for parties of 8 or more. Check our current offers page or speak with a concierge for the latest deals.",
      },
      {
        q: "Can I book Tilenga Safaris directly?",
        a: "Absolutely. Booking directly with us means you work with our in-house specialists from the first inquiry to the day you depart. There are no agent commissions inflating your cost, and you benefit from our full concierge service. Contact us via our enquiry form, WhatsApp, or email — we respond within 24 hours.",
      },
    ],
  },
  {
    id: "staying",
    label: "Staying With Us",
    dividerImage: `${base}/photos/tilengasafarilodge/breakfast.png`,
    dividerCaption:
      "A warm breakfast spread on the lodge veranda — a glimpse into the personalised hospitality that defines the Tilenga experience. The setting is intimate yet sophisticated, showcasing the human touch behind each guest stay.",
    questions: [
      {
        q: "How does Tilenga Safaris compare with other properties in East Africa?",
        a: "Our lodges sit in ecologically rich, uncrowded corridors — not the heavily touristed centres. You'll find a higher guide-to-guest ratio, genuinely personalised attention, and access to off-road and walking experiences that larger operations cannot offer. We consistently receive recognition for authentic luxury and exceptional wildlife encounters.",
      },
      {
        q: "How many days should I plan to stay?",
        a: "We recommend a minimum of 3 nights at any single lodge to allow time to settle into the rhythm of the bush and give wildlife a chance to reveal itself. For a complete East African journey — combining two ecosystems and a cultural experience — 7–10 nights is ideal. Our concierge team will advise the optimal duration for your specific itinerary.",
      },
      {
        q: "What's the daily schedule?",
        a: "A typical day begins with an early wake-up at 5:30–6:00 am for the dawn game drive (the most rewarding time for wildlife). You'll return for a full breakfast, followed by leisure time — spa, pool, guided walks, or cultural visits. An afternoon drive departs around 4:00 pm, returning at dusk for sundowners in the bush. Evenings feature communal dining under the stars. All timings are flexible to suit your preferences.",
      },
      {
        q: "Will I have Wi-Fi?",
        a: "Our lodges offer Wi-Fi in the main areas. By design, connectivity in the rooms is intentionally gentle — we encourage guests to unplug and be fully present. If you have work requirements, our team can arrange dedicated connectivity. Emergency communication is always available.",
      },
      {
        q: "Is there a swimming pool?",
        a: "Yes — our Tilenga Safari Lodge features a stunning infinity-edge pool overlooking the wilderness. Kikorongo Safari Lodge has a plunge pool set within lush gardens. Both offer an extraordinary way to cool down between game drives while the bush unfolds before you.",
      },
      {
        q: "Is there a Spa?",
        a: "We offer in-tent spa treatments — massages, facials, and bush-inspired therapies performed by trained therapists. The experience of a deep-tissue massage with the sounds of the bush outside is unforgettable. Bookings are taken on arrival; we recommend reserving early during peak season.",
      },
      {
        q: "What kind of food is served?",
        a: "Our kitchen serves a fusion of East African and international cuisine — farm-to-table where possible, with ingredients sourced locally. Expect hearty bush breakfasts, elegant multi-course dinners, and bush picnic lunches on longer drives. Signature dishes use local spices, fresh lake fish, and seasonal produce from nearby community gardens.",
      },
      {
        q: "Do you cater for specific dietary requirements?",
        a: "Yes — fully. Whether you are vegan, vegetarian, coeliac, or have specific allergies, our kitchen accommodates all requirements with advance notice. Please inform us of any dietary needs at the time of booking and we will ensure every meal is prepared with care.",
      },
      {
        q: "Is laundry available?",
        a: "Complimentary laundry is included for all guests staying 2 nights or more. Items collected by 8:00 am are typically returned by evening. We use eco-conscious detergents and sun-dry where weather permits.",
      },
      {
        q: "What other activities are available apart from wildlife drives?",
        a: "Our activity menu includes: guided bush walks, cultural visits to neighbouring Maasai and Batwa communities, hot air ballooning (seasonal), fly camping under the stars, birding walks with specialist guides, photography workshops, sundowner excursions, and children's junior ranger programmes.",
      },
      {
        q: "What are the emergency contacts?",
        a: "All guests receive an emergency contact card upon arrival listing direct mobile numbers for your camp manager, our Nairobi operations office, and regional emergency services. We also have a camp radio system and maintain medical evacuation protocols with reputable air ambulance providers.",
      },
    ],
  },
  {
    id: "about",
    label: "About Tilenga Safaris",
    dividerImage: `${base}/photos/kikorongo_outside.jpg`,
    dividerCaption:
      "A peaceful morning at Kikorongo Safari Lodge — the rustic architecture blending naturally with the surrounding landscape, framing a moment of stillness before the day's adventure begins.",
    questions: [
      {
        q: "How can I check availability to book a stay?",
        a: "You can submit an enquiry directly via our website contact form, email us at destinations@tilengasafaris.com, or WhatsApp our concierge team. We'll confirm availability within 24 hours and hold your preferred dates while we build your itinerary.",
      },
      {
        q: "What does the rate include?",
        a: "Our rates are fully all-inclusive: accommodation, all meals (breakfast, lunch, dinner), game drives, guided bush walks, laundry, select beverages (house wines, spirits, soft drinks, and local beers), and all park fees. International flights, visa fees, travel insurance, and personal expenses are not included.",
      },
      {
        q: "What time is check-in and check-out?",
        a: "Standard check-in is 14:00 and check-out is 11:00. Early check-in and late check-out can often be accommodated based on availability — please request this at booking. Guests arriving on early morning flights can usually join the afternoon game drive directly from arrival.",
      },
      {
        q: "What languages are spoken at Tilenga Safaris?",
        a: "English and Swahili are spoken across all our properties. Our senior guides also speak Luganda, and we can arrange itineraries with specialist guides in French, Italian, or German with advance notice.",
      },
      {
        q: "Can we book private dining or something special for a birthday or anniversary?",
        a: "Absolutely — and we love the opportunity. We regularly arrange private bush dinners lit by lantern, in-tent rose-petal turndowns, champagne sundowners at private viewpoints, and bespoke celebration setups. Tell us your occasion at booking and our team will design something unforgettable.",
      },
      {
        q: "Is Tilenga Safaris accessible for people with disabilities?",
        a: "We have accessible tent configurations with wider doorways, roll-in showers, and dedicated accessible vehicles. Please contact us directly to discuss your specific requirements — we will always be candid about what we can and cannot accommodate, and will do everything possible to make your experience seamless.",
      },
      {
        q: "Is Tilenga Safaris family friendly? What activities are there for children?",
        a: "We welcome families warmly. Children's activities include junior ranger programmes, guided nature trails, wildlife tracking, cultural craft sessions, and dedicated child-friendly wildlife drives. All game drives are adapted for younger guests — our guides are exceptional at engaging children's curiosity and wonder.",
      },
      {
        q: "What age is considered a child? And how much does it cost for children?",
        a: "Children aged 5–12 are charged at 50% of the adult rate. Under-5s stay free when sharing with parents. Children 13 and above are charged at full adult rates. Some activities (hot air balloon, walking safaris) have minimum age requirements — our team will advise on a case-by-case basis.",
      },
    ],
  },
  {
    id: "involved",
    label: "Get Involved",
    dividerImage: `${base}/Newstock/touristsmovinginforest.jpg`,
    dividerCaption:
      "Guests walking with community rangers through the forest — a living example of how safari travel, when done right, becomes a force for conservation and human connection.",
    questions: [
      {
        q: "How can I help get involved in conservation and community projects?",
        a: "Every stay directly funds our community and conservation partnerships. Beyond that, guests can opt into dedicated conservation game drives where a portion goes to anti-poaching units, participate in community school visits, contribute to our tree-planting programme, or make a direct donation to our foundation. We also facilitate volunteer experiences for longer stays.",
      },
      {
        q: "How do you approach cultural engagement?",
        a: "We believe cultural encounters should be mutual, dignified, and beneficial. All our community partnerships are built on fair-exchange models — communities set the terms of engagement, receive direct revenue, and decide what is and isn't shared with guests. We do not facilitate staged or exploitative cultural experiences. Our guides, many of whom are community members themselves, serve as genuine bridges.",
      },
    ],
  },
];

// ─── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border-b border-stone-200 transition-colors duration-300 ${open ? "border-gold/40" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-8 py-7 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span className="text-gold font-serif italic text-base shrink-0 mt-0.5 opacity-60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-serif text-xl md:text-2xl leading-snug tracking-tight transition-colors duration-300 ${
              open ? "text-forest" : "text-stone-700 group-hover:text-forest"
            }`}
          >
            {q}
          </span>
        </div>
        <span
          className={`shrink-0 mt-1 text-gold transition-transform duration-500 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        <p className="body-text text-stone-500 leading-relaxed pl-10 max-w-3xl">{a}</p>
      </div>
    </div>
  );
}

// ─── Section Divider ───────────────────────────────────────────────────────────

function SectionDivider({ image, caption }: { image: string; caption: string }) {
  return (
    <div className="relative my-24 md:my-40 overflow-hidden">
      <ImageReveal direction="bottom">
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
            <p className="text-cream/70 font-sans text-xs md:text-sm leading-relaxed max-w-2xl italic tracking-wide">
              {caption}
            </p>
          </div>
        </div>
      </ImageReveal>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <main className="bg-cream min-h-screen grain-overlay">

      {/* 01. Cinematic Hero */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/safari.jpg`}
          className="h-full w-full"
          overlayClassName="bg-black/50"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">
                Everything You Need to Know
              </span>
            </FadeIn>

            <h1 className="flex flex-col items-center">
              <SplitText
                text="FREQUENTLY"
                className="font-serif text-5xl md:text-8xl lg:text-[8rem] text-cream leading-none uppercase tracking-[-0.02em]"
                delay={0.2}
              />
              <span className="flex items-center gap-6 mt-2">
                <div className="w-12 md:w-24 h-px bg-gold/50" />
                <SplitText
                  text="asked questions"
                  className="font-serif italic text-4xl md:text-6xl lg:text-[5.5rem] text-gold leading-none lowercase tracking-normal"
                  delay={0.6}
                />
                <div className="w-12 md:w-24 h-px bg-gold/50" />
              </span>
            </h1>

            <FadeIn direction="up" delay={1.2} className="mt-14 max-w-xl mx-auto">
              <p className="text-cream/70 font-sans text-sm md:text-base leading-relaxed tracking-wide">
                Planning your first safari or returning for another chapter — these answers are here
                to make your journey seamless from the very first question.
              </p>
            </FadeIn>
          </div>
        </ParallaxSection>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-cream/40 text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* 02. Intro Pull-Quote */}
      <section className="py-24 md:py-36 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-12" />
            <blockquote className="font-serif text-3xl md:text-5xl text-forest leading-[1.2] tracking-tight">
              "A great safari begins long before you board your flight —
              it begins with the{" "}
              <em className="text-gold italic">right questions.</em>"
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gold/40" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-400">
                Tilenga Safaris
              </span>
              <div className="w-12 h-px bg-gold/40" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 03. FAQ Sections */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {sections.map((section, sIdx) => (
            <div key={section.id} id={section.id}>

              {/* Section Header */}
              <FadeIn direction="up">
                <div className="flex items-center gap-8 mb-14 mt-8">
                  <div className="flex flex-col gap-3">
                    <span className="section-label">{String(sIdx + 1).padStart(2, "0")}</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-forest uppercase tracking-tight leading-[1.0]">
                      {section.label}
                    </h2>
                    <div className="w-20 h-px bg-gold mt-2" />
                  </div>
                </div>
              </FadeIn>

              {/* Accordion */}
              <FadeIn direction="up" delay={0.1}>
                <div className="border-t border-stone-200">
                  {section.questions.map((item, i) => (
                    <AccordionItem key={i} q={item.q} a={item.a} index={i} />
                  ))}
                </div>
              </FadeIn>

              {/* Section Divider Image (between sections) */}
              {sIdx < sections.length - 1 && (
                <SectionDivider
                  image={sections[sIdx + 1].dividerImage}
                  caption={sections[sIdx + 1].dividerCaption}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 04. Explore More — Three Cards */}
      <section className="py-32 md:py-48 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up" className="text-center mb-20">
            <span className="section-label">Continue Exploring</span>
            <h2 className="font-serif text-5xl md:text-7xl text-forest uppercase tracking-tight leading-[0.95] mt-4">
              Explore More <br />
              <em className="text-gold italic lowercase">at Tilenga Safaris</em>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Tilenga Safari Lodge",
                href: "/lodges/tilenga-safari-lodge",
                image: `${base}/photos/tilengasafarilodge/entrance.png`,
                tag: "Where to Stay",
              },
              {
                label: "Travel Concierge",
                href: "/plan-a-trip",
                image: `${base}/Newstock/tourist.jpg`,
                tag: "Plan Your Trip",
              },
              {
                label: "Kikorongo Safari Lodge",
                href: "/lodges/kikorongo-safari-lodge",
                image: `${base}/photos/kikorongo_outside.jpg`,
                tag: "Where to Stay",
              },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="group block">
                <ImageReveal direction="bottom">
                  <div className="relative aspect-[3/4] overflow-hidden film-frame shadow-lg">
                    <img
                      src={card.image}
                      alt={card.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">
                        {card.tag}
                      </span>
                      <h3 className="font-serif text-2xl text-cream uppercase tracking-wide leading-tight">
                        {card.label}
                      </h3>
                    </div>
                  </div>
                </ImageReveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Still Have Questions CTA */}
      <section className="py-32 md:py-48 px-6 text-center bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40 mx-auto mb-12" />
            <span className="section-label mb-6">We're Here</span>
            <h2 className="font-serif text-5xl md:text-7xl text-forest uppercase tracking-tight leading-[0.95] mb-12">
              Still Have <br />
              <em className="text-gold italic lowercase">a question?</em>
            </h2>
            <p className="body-text text-stone-500 max-w-xl mx-auto mb-16 leading-relaxed">
              Our team of East Africa specialists is available seven days a week. No automated
              replies — a real person will respond to your enquiry within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton>
                <Link href="/plan-a-trip" className="btn-primary px-14 py-5">
                  Talk to a Specialist
                </Link>
              </MagneticButton>
              <a
                href="mailto:destinations@tilengasafaris.com"
                className="group flex items-center gap-4 text-stone-400 hover:text-gold transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
                  destinations@tilengasafaris.com
                </span>
                <div className="relative w-10 h-px bg-current overflow-hidden">
                  <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 06. Closing Hero */}
      <section className="h-[70vh] relative overflow-hidden">
        <ParallaxSection
          imageUrl={`${base}/Newstock/greatbeastmigration.jpg`}
          className="h-full"
          overlayClassName="bg-black/40"
        >
          <div className="h-full flex flex-col items-center justify-center text-center px-6">
            <FadeIn direction="up">
              <h2 className="font-serif text-5xl md:text-7xl text-cream uppercase tracking-[-0.02em] leading-none mb-10">
                Your Journey <br />
                <em className="text-gold italic lowercase">awaits.</em>
              </h2>
              <MagneticButton>
                <Link
                  href="/plan-a-trip"
                  className="btn-ghost px-16 py-5 text-base"
                >
                  Begin Planning
                </Link>
              </MagneticButton>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>
    </main>
  );
}
