import { type Rule } from "sanity";

export const itinerary = {
  name: "itinerary",
  title: "Itinerary",
  type: "document",
  fields: [
    {
      name: "packageName",
      title: "Package Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
