// Categories are managed in Sanity Studio (see sanity/schemas/category.ts).
// The literal-union types of the previous hardcoded lists are gone — `category`
// is now whatever string the Studio editor typed. The "All" sentinel below is
// the only filter value that isn't a category title.

export const ALL_FILTER = "All" as const;

export type Filter = string; // either ALL_FILTER or a category title
