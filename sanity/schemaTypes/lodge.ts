import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const lodge = defineType({
  name: 'lodge',
  title: 'Lodge',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
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
        'The page URL for this lodge (e.g., /lodges/tilenga-safari-lodge). This site\'s lodge pages are hand-built, not auto-routed — this must match an existing page exactly or the link will 404.',
      validation: (Rule) =>
        Rule.required().regex(/^\/[a-z0-9/-]+$/, {
          name: 'internal path',
          invert: false,
        }).error('Must be an internal path starting with / (e.g. /lodges/tilenga-safari-lodge)'),
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'label', title: 'Label', type: 'string'}),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        }),
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'location', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled lodge',
        subtitle: subtitle || 'Lodge',
        media,
      }
    },
  },
})
