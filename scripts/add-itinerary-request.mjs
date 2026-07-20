import { readFileSync, writeFileSync } from "fs";

const destinations = {
  botswana: "Botswana",
  kenya: "Kenya",
  namibia: "Namibia",
  rwanda: "Rwanda",
  "south-africa": "South Africa",
  tanzania: "Tanzania",
  uganda: "Uganda",
};

for (const [dir, name] of Object.entries(destinations)) {
  const filePath = `app/destinations/${dir}/page.tsx`;
  let content = readFileSync(filePath, "utf8");

  // 1. Add import for ItineraryRequestPopup (after PackageEnquiryPopup import)
  content = content.replace(
    `import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";`,
    `import PackageEnquiryPopup from "@/components/PackageEnquiryPopup";\nimport ItineraryRequestPopup from "@/components/ItineraryRequestPopup";`
  );

  // 2. Add state for popup (after isEnquiryOpen state)
  content = content.replace(
    `const [activePackage, setActivePackage] = useState("");`,
    `const [activePackage, setActivePackage] = useState("");\n  const [isItineraryRequestOpen, setIsItineraryRequestOpen] = useState(false);`
  );

  // 3. Replace the Link with a button — handle both "Request Custom Itinerary" and "Request More Itineraries"
  const linkPattern = /<Link\s*\n\s*href="\/plan-a-trip"\s*\n\s*className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"\s*\n\s*>\s*\n\s*Request (?:Custom Itinerary|More Itineraries) &rarr;\s*\n\s*<\/Link>/;

  content = content.replace(
    linkPattern,
    `<button\n              onClick={() => setIsItineraryRequestOpen(true)}\n              className="text-gold uppercase tracking-widest text-xs font-bold hover:text-forest transition-colors"\n            >\n              Request Custom Itinerary &rarr;\n            </button>`
  );

  // 4. Add ItineraryRequestPopup component before closing </>
  content = content.replace(
    /(\s*<PackageEnquiryPopup[\s\S]*?\/>\s*\n)(\s*<\/>)/,
    `$1\n      <ItineraryRequestPopup\n        isOpen={isItineraryRequestOpen}\n        onClose={() => setIsItineraryRequestOpen(false)}\n        destination="${name}"\n      />\n$2`
  );

  writeFileSync(filePath, content);
  console.log(`Updated: ${dir} (${name})`);
}

console.log("\nDone.");
