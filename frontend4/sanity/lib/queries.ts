import { defineQuery } from "next-sanity";

const POST_CARD_FIELDS = /* groq */ `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  "category": category->title,
  tags,
  date,
  author,
  readTime,
  coverImage
`;

const PROJECT_CARD_FIELDS = /* groq */ `
  _id,
  "slug": slug.current,
  title,
  "category": category->title,
  year,
  location,
  summary,
  beforeImage,
  afterImage
`;

export const allPostsQuery = defineQuery(`
  *[_type == "post"] | order(date desc) {
    ${POST_CARD_FIELDS}
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)][].slug.current
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ${POST_CARD_FIELDS},
    body
  }
`);

export const relatedPostsQuery = defineQuery(`
  *[_type == "post" && slug.current != $slug] | order(date desc) [0...$limit] {
    ${POST_CARD_FIELDS}
  }
`);

export const allProjectsQuery = defineQuery(`
  *[_type == "project"] | order(year desc) {
    ${PROJECT_CARD_FIELDS}
  }
`);

export const projectSlugsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)][].slug.current
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    ${PROJECT_CARD_FIELDS},
    body,
    specs[] { label, value },
    morePhotos[] { label, image }
  }
`);

export const relatedProjectsQuery = defineQuery(`
  *[_type == "project" && slug.current != $slug] | order(year desc) [0...$limit] {
    ${PROJECT_CARD_FIELDS}
  }
`);

// Filter-bar source: only categories tagged for the relevant surface, in
// custom order (then alphabetical) so the Studio order field is respected.
export const postCategoriesQuery = defineQuery(`
  *[_type == "category" && "post" in appliesTo]
  | order(coalesce(order, 9999) asc, title asc)
  { title }
`);

export const projectCategoriesQuery = defineQuery(`
  *[_type == "category" && "project" in appliesTo]
  | order(coalesce(order, 9999) asc, title asc)
  { title }
`);
