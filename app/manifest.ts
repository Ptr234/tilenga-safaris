import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  
  return {
    name: 'Tilenga Safaris',
    short_name: 'Tilenga',
    description: 'Tilenga Safaris crafts personalized adventures across Uganda, Kenya, Tanzania, Rwanda and beyond.',
    start_url: `${base}/`,
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: `${base}/icon.svg`,
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
