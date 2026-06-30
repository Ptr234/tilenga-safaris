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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from the name. Used in the page URL.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      description: 'Internal link path (e.g., /destinations/murchison-falls)',
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
      title: 'Hotspots',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
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
