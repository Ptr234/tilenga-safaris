import {defineArrayMember, defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export const destination = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'href',
      title: 'Internal Link (HREF)',
      type: 'string',
      description:
        'The page URL for this destination (e.g., /destinations/uganda). This site\'s destination pages are hand-built per country, not auto-routed — this must match an existing page exactly or the link will 404.',
      validation: (Rule) =>
        Rule.required().regex(/^\/[a-z0-9/-]+$/, {
          name: 'internal path',
          invert: false,
        }).error('Must be an internal path starting with / (e.g. /destinations/uganda)'),
    }),
    defineField({
      name: 'num',
      title: 'Number Display',
      type: 'string',
      description: 'Display number (e.g., 01)',
    }),
    defineField({
      name: 'bestTime',
      title: 'Best Time to Visit',
      type: 'string',
    }),
    defineField({
      name: 'hotspots',
      title: 'Hotspot Gallery',
      description:
        'The scrolling photo gallery of key attractions shown on this destination\'s detail page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'hotspot',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'detail',
              title: 'Detail',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'detail', media: 'image'},
          },
        }),
      ],
    }),
    defineField({
      name: 'overviewGallery',
      title: 'Overview Gallery',
      description:
        'Up to 4 images shown in the "Destination Overview" photo grid on this destination\'s detail page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'tag', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled destination',
        subtitle: subtitle || 'Destination',
        media,
      }
    },
  },
})
