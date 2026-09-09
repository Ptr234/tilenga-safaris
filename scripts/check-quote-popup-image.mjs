import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "tm51vlpn",
  dataset: "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  perspective: "raw",
});

const docs = await client.fetch(
  `*[_type == "siteImage" && key == "quotePopupSidePanel"]{_id, _rev, _createdAt, _updatedAt, key, "assetRef": image.asset._ref}`,
);
console.log(JSON.stringify(docs, null, 2));
