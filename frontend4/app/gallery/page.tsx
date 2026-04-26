import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import GalleryList from "./GalleryList";
import { sanityFetch } from "../../sanity/lib/fetch";
import {
  allProjectsQuery,
  projectCategoriesQuery,
} from "../../sanity/lib/queries";
import type {
  CategoryOption,
  ProjectCard,
} from "../../sanity/lib/types";

export const metadata: Metadata = {
  title: "Project Gallery — NZLCS",
  description:
    "Real before-and-after results from laser cleaning projects across New Zealand. Browse by service type or scroll through our recent project work.",
};

export const revalidate = 60;

export default async function GalleryPage() {
  const [projects, categories] = await Promise.all([
    sanityFetch<ProjectCard[]>({
      query: allProjectsQuery,
      tags: ["project"],
    }),
    sanityFetch<CategoryOption[]>({
      query: projectCategoriesQuery,
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
            Project Gallery
          </p>
          <h1 className="font-sans text-5xl font-bold leading-[1.05] md:text-6xl">
            Before &amp; After — Results Speak for Themselves.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
            Real results from real jobs across New Zealand. Browse by service
            type or scroll through our recent project work.
          </p>
        </div>
      </section>

      <GalleryList projects={projects} categories={categories} />

      {/* BOTTOM CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 py-24 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Have a similar project?
          </p>
          <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">
            Send us a photo of the job.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
            We&apos;ll assess the surface, scope the work, and respond within
            two business days. No obligation — just a straight answer.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand hover:bg-brand-light"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
