import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tm51vlpn';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

// Server-only secret — never prefix with NEXT_PUBLIC_. When present, reads
// bypass the CDN so freshly published Studio edits show up immediately
// instead of waiting out the CDN cache.
const token = process.env.SANITY_API_WRITE_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: token ? false : process.env.NODE_ENV === 'production',
  token,
});
