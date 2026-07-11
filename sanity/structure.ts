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
 * Site Images are one flat document type but carry a `category` field
 * (homepage, about, destinations, lodges, navigation, meta). Group them
 * into sub-folders here so editors can find e.g. "Destinations" images
 * without scrolling through every site image.
 */
const siteImageCategories: {title: string; category: string}[] = [
  {title: 'Homepage', category: 'homepage'},
  {title: 'About', category: 'about'},
  {title: 'Destination Overview & Hero Images', category: 'destinations'},
  {title: 'Destination Hotspots', category: 'hotspots'},
  {title: 'Lodges', category: 'lodges'},
  {title: 'Navigation', category: 'navigation'},
  {title: 'Meta', category: 'meta'},
]

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
              S.listItem()
                .title('Site Images')
                .icon(ImagesIcon)
                .child(
                  S.list()
                    .title('Site Images')
                    .items([
                      ...siteImageCategories.map(({title, category}) =>
                        S.listItem()
                          .title(title)
                          .child(
                            S.documentTypeList('siteImage')
                              .title(title)
                              .filter('_type == "siteImage" && category == $category')
                              .params({category}),
                          ),
                      ),
                      S.divider(),
                      S.documentTypeListItem('siteImage').title('All Site Images'),
                    ]),
                ),
              S.documentTypeListItem('partner').title('Partners').icon(UsersIcon),
            ]),
        ),
    ])
