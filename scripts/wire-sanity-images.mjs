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

  // 1. Add imports (after the last existing import from @/lib/)
  if (!content.includes("useItineraryImages")) {
    content = content.replace(
      `import { urlForImage } from "@/lib/sanity.image";`,
      `import { urlForImage } from "@/lib/sanity.image";\nimport useItineraryImages from "@/lib/useItineraryImages";`
    );
  }

  // 2. Add hook call after useDestinationGallery
  if (!content.includes("useItineraryImages(")) {
    content = content.replace(
      `useDestinationGallery("${name}");`,
      `useDestinationGallery("${name}");\n  const itineraryImages = useItineraryImages("${name}");`
    );
  }

  // 3. Replace the Image src in the package card.
  //    Current pattern: src={pkg.image}
  //    New: src={itineraryImages[pkg.name] ? urlForImage(itineraryImages[pkg.name]!, LANDSCAPE_4_3).url() : pkg.image}
  content = content.replace(
    /src=\{pkg\.image\}/g,
    `src={itineraryImages[pkg.name] ? urlForImage(itineraryImages[pkg.name]!, LANDSCAPE_4_3).url() : pkg.image}`
  );

  writeFileSync(filePath, content);
  console.log(`Updated: ${dir}`);
}

console.log("\nDone.");
