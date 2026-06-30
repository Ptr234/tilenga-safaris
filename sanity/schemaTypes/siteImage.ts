import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const siteImage = defineType({
  name: 'siteImage',
  title: 'Site Image',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'Unique identifier the website uses to load this image (e.g., hero-home).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describes the image for screen readers and SEO.',
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
    select: {title: 'title', key: 'key', subtitle: 'category', media: 'image'},
    prepare({title, key, subtitle, media}) {
      return {
        title: title || key || 'Untitled site image',
        subtitle: subtitle || 'Site Image',
        media,
      }
    },
  },
})
