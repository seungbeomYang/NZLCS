import type { PortableTextBlock } from "@portabletext/react";
import type { Image } from "sanity";

export type SanityImage = Image & {
  alt?: string;
};

export type CategoryOption = {
  title: string;
};

export type PostCard = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[] | null;
  date: string;
  author: string | null;
  readTime: string | null;
  coverImage: SanityImage | null;
};

export type Post = PostCard & {
  body: PortableTextBlock[] | null;
};

export type Spec = { label: string; value: string };

export type MorePhoto = {
  label: string;
  image: SanityImage | null;
};

export type ProjectCard = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  year: number;
  location: string;
  summary: string;
  beforeImage: SanityImage | null;
  afterImage: SanityImage | null;
};

export type Project = ProjectCard & {
  body: PortableTextBlock[] | null;
  specs: Spec[] | null;
  morePhotos: MorePhoto[] | null;
};
