import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import BlogList from "./BlogList";
import { sanityFetch } from "../../sanity/lib/fetch";
import {
  allPostsQuery,
  postCategoriesQuery,
} from "../../sanity/lib/queries";
import type { CategoryOption, PostCard } from "../../sanity/lib/types";

export const metadata: Metadata = {
  title: "Blog & Resources — NZLCS",
  description:
    "Technical articles, project case studies, and practical advice from New Zealand's laser cleaning specialists.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    sanityFetch<PostCard[]>({
      query: allPostsQuery,
      tags: ["post"],
    }),
    sanityFetch<CategoryOption[]>({
      query: postCategoriesQuery,
      tags: ["category"],
    }),
  ]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* HERO */}
      <section>
        <div className="mx-auto max-w-[1280px] px-8 pt-40 pb-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Blog &amp; Resources
          </p>
          <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-6xl">
            Insights, Updates &amp; Industry Know-How
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
            Technical articles, project case studies, and practical advice from
            New Zealand&apos;s laser cleaning specialists.
          </p>
        </div>
      </section>

      <BlogList posts={posts} categories={categories} />

      {/* BOTTOM CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Ready To Start?
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Get a free quote.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Tell us about your site, your surfaces, and your timeline. We&apos;ll
            come back with a clear scope, a fixed price, and a date.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand hover:bg-brand-light"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
