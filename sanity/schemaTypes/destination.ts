import {type Rule} from 'sanity'

export const destination = {
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'href',
      title: 'HREF',
      type: 'string',
    },
    {
      name: 'num',
      title: 'Number Display',
      type: 'string',
      description: 'Display number (e.g., 01)',
    },
    {
      name: 'bestTime',
      title: 'Best Time to Visit',
      type: 'string',
    },
    {
      name: 'hotspots',
      title: 'Hotspots',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
}
