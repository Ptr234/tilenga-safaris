import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
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
  ],
  preview: {
    select: {title: 'title', media: 'image'},
    prepare({title, media}) {
      return {
        title: title || 'Untitled experience',
        subtitle: 'Experience',
        media,
      }
    },
  },
})
