import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Guest Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Overall Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Trip Tag',
      type: 'string',
      description: 'Optional short label, e.g. "Gorilla Trekking" or "Uganda Circuit".',
    }),
    defineField({
      name: 'consentToPublish',
      title: 'Guest Consented to Publish',
      type: 'boolean',
      initialValue: false,
      readOnly: true,
    }),
    defineField({
      name: 'published',
      title: 'Published on Website',
      description: 'Uncheck to hide this review from the site without deleting it.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      readOnly: true,
      initialValue: 'feedback-form',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'quote', rating: 'rating', published: 'published'},
    prepare({title, subtitle, rating, published}) {
      return {
        title: `${title} ${'★'.repeat(rating || 0)}`,
        subtitle: `${published ? 'Published' : 'Hidden'} — ${subtitle}`,
        media: StarIcon,
      }
    },
  },
})
