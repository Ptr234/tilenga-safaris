import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentPdfIcon} from '@sanity/icons'

export const itinerary = defineType({
  name: 'itinerary',
  title: 'Itinerary',
  type: 'document',
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(140),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated from the title. Used in the page URL.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true
          const {document, getClient} = context
          const client = getClient({apiVersion: '2023-05-03'})
          const id = document?._id.replace(/^drafts\./, '')
          const isUnique = await client.fetch(
            `!defined(*[_type == "itinerary" && !(_id in [$draft, $published]) && slug.current == $slug][0]._id)`,
            {draft: `drafts.${id}`, published: id, slug: slug.current},
          )
          return isUnique || 'This slug is already used by another itinerary — page routing takes the first match and the other becomes unreachable.'
        }),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'destinations',
      title: 'Destinations',
      description: 'Every destination this itinerary covers — a cross-border trip should list all of them, so it appears on each destination page.',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'destination'}]})],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "12 Days"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Free-text price display, e.g. "From $2,800 (2+ pax)" or "Contact for pricing".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From (USD)',
      type: 'number',
      description: 'Optional numeric anchor used for structured data (Offer price). Leave blank if there is no fixed starting price.',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'days',
      title: 'Day-by-Day Itinerary',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'day',
          fields: [
            defineField({
              name: 'dayLabel',
              title: 'Day Label',
              type: 'string',
              description: 'e.g. "Day 1" or "Days 1–3"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'dayLabel', subtitle: 'title'},
          },
        }),
      ],
    }),
    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'relatedItineraries',
      title: 'Related Itineraries',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'itinerary'}]})],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides the page <title>. Falls back to Title if left blank.',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Overrides the meta description. Falls back to Summary if left blank.',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'file',
      title: 'Itinerary PDF',
      type: 'file',
      description: 'Optional downloadable itinerary document.',
      options: {accept: 'application/pdf'},
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'duration', media: 'heroImage'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled itinerary',
        subtitle: subtitle || 'Itinerary',
        media: media || DocumentPdfIcon,
      }
    },
  },
})
