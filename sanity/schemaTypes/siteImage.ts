import { type Rule } from "sanity";

export const siteImage = {
  name: "siteImage",
  title: "Site Image",
  type: "document",
  fields: [
    {
      name: "key",
      title: "Key",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
