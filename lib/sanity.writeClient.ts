import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./sanity.client";

// Server-only client with write access. Never import this from client
// components -- the token must not reach the browser bundle.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
