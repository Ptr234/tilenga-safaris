import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({scheme: ['http', 'https']}).error('Enter a valid URL starting with http:// or https://'),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'link', media: 'logo'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled partner',
        subtitle: subtitle || 'Partner',
        media,
      }
    },
  },
})
