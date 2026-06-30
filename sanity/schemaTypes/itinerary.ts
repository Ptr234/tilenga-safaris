import {defineField, defineType} from 'sanity'
import {DocumentPdfIcon} from '@sanity/icons'

export const itinerary = defineType({
  name: 'itinerary',
  title: 'Itinerary',
  type: 'document',
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: 'packageName',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(140),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Upload the itinerary document (e.g., a PDF).',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'packageName', subtitle: 'category'},
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled itinerary',
        subtitle: subtitle || 'Itinerary',
        media: DocumentPdfIcon,
      }
    },
  },
})
