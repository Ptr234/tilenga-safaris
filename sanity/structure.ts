import type {StructureResolver} from 'sanity/structure'
import {
  CogIcon,
  DocumentPdfIcon,
  EarthGlobeIcon,
  HomeIcon,
  ImagesIcon,
  StarIcon,
  UsersIcon,
} from '@sanity/icons'

/**
 * Professional, grouped desk layout.
 * Editorial content sits at the top; site-wide settings are tucked
 * into their own folder so the sidebar stays clean.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('lodge').title('Lodges').icon(HomeIcon),
      S.documentTypeListItem('destination').title('Destinations').icon(EarthGlobeIcon),
      S.documentTypeListItem('experience').title('Experiences').icon(StarIcon),
      S.documentTypeListItem('itinerary').title('Itineraries').icon(DocumentPdfIcon),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.documentTypeListItem('siteImage').title('Site Images').icon(ImagesIcon),
              S.documentTypeListItem('partner').title('Partners').icon(UsersIcon),
            ]),
        ),
    ])
