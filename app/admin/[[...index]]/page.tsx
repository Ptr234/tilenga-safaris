import Studio from './Studio';

export const runtime = 'edge';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <Studio />;
}
