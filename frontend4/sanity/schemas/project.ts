import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Gallery Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        filter: '"project" in appliesTo',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      type: "number",
      validation: (r) => r.required().min(2000).max(2100),
    }),
    defineField({
      name: "location",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(320),
    }),
    defineField({
      name: "beforeImage",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "afterImage",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "body",
      title: "About this project",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    validation: (r) =>
                      r.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "specs",
      title: "Project specs",
      type: "array",
      of: [
        {
          type: "object",
          name: "spec",
          fields: [
            { name: "label", type: "string", validation: (r) => r.required() },
            { name: "value", type: "string", validation: (r) => r.required() },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "morePhotos",
      title: "More photos",
      type: "array",
      of: [
        {
          type: "object",
          name: "morePhoto",
          fields: [
            { name: "label", type: "string", validation: (r) => r.required() },
            {
              name: "image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string" }],
            },
          ],
          preview: { select: { title: "label", media: "image" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category.title", media: "beforeImage" },
  },
  orderings: [
    {
      title: "Year, newest first",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
