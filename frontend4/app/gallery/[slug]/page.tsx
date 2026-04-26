import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import PortableText from "../../components/PortableText";
import { SimpleProjectCard } from "../GalleryList";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/fetch";
import {
  projectBySlugQuery,
  projectSlugsQuery,
  relatedProjectsQuery,
} from "../../../sanity/lib/queries";
import type { Project, ProjectCard } from "../../../sanity/lib/types";
import { urlFor } from "../../../sanity/lib/image";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(projectSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/gallery/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await sanityFetch<Project | null>({
    query: projectBySlugQuery,
    params: { slug },
    tags: [`project:${slug}`],
  });
  if (!project) return { title: "Project not found — NZLCS" };
  return {
    title: `${project.title} — NZLCS`,
    description: project.summary,
  };
}

export default async function ProjectPage(
  props: PageProps<"/gallery/[slug]">,
) {
  const { slug } = await props.params;

  const [project, related] = await Promise.all([
    sanityFetch<Project | null>({
      query: projectBySlugQuery,
      params: { slug },
      tags: [`project:${slug}`, "project"],
    }),
    sanityFetch<ProjectCard[]>({
      query: relatedProjectsQuery,
      params: { slug, limit: 3 },
      tags: ["project"],
    }),
  ]);

  if (!project) notFound();

  const beforeUrl = project.beforeImage
    ? urlFor(project.beforeImage).width(1600).fit("max").auto("format").url()
    : undefined;
  const afterUrl = project.afterImage
    ? urlFor(project.afterImage).width(1600).fit("max").auto("format").url()
    : undefined;

  const hasBody = !!project.body && project.body.length > 0;
  const hasSpecs = !!project.specs && project.specs.length > 0;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <Header />
      <ScrollToTop />

      {/* HERO */}
      <section>
        <div className="mx-auto max-w-[1280px] px-8 pt-40 pb-12">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="bg-brand px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-on-brand">
              {project.category}
            </span>
            <span className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
              {project.year}
            </span>
            <span className="border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
              {project.location}
            </span>
          </div>

          <h1 className="max-w-4xl font-sans text-4xl font-bold leading-[1.1] md:text-6xl">
            {project.title}
          </h1>

          <Link
            href="/gallery"
            className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand hover:text-brand-dark"
          >
            ← Back to gallery
          </Link>
        </div>
      </section>

      {/* BEFORE / AFTER COMPARISON */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-8 pt-12 pb-16">
          <div className="mb-6 flex items-baseline justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Before / After
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              Drag ⇄ to compare
            </p>
          </div>
          <BeforeAfterSlider before={beforeUrl} after={afterUrl} />
        </div>
      </section>

      {/* ABOUT + SPECS */}
      {(hasBody || hasSpecs) && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1280px] px-8 py-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_minmax(0,420px)] md:gap-16">
              <div className="border-l-2 border-brand pl-6 md:pl-8">
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                  About This Project
                </p>
                <div className="space-y-6">
                  {hasBody ? (
                    <PortableText value={project.body} variant="large" />
                  ) : (
                    <p className="text-[17px] leading-8 text-muted">
                      {project.summary}
                    </p>
                  )}
                </div>
              </div>

              {hasSpecs && project.specs ? (
                <aside className="border border-border bg-surface p-8">
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                    Project Specs
                  </p>
                  <dl className="divide-y divide-border [&_>div]:py-4 first:[&_>div]:pt-0 last:[&_>div]:pb-0">
                    {project.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-baseline justify-between gap-6"
                      >
                        <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                          {s.label}
                        </dt>
                        <dd className="text-right text-[13px] text-foreground/85">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* MORE PHOTOS */}
      {project.morePhotos && project.morePhotos.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-16">
            <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              More Photos
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {project.morePhotos.map((photo) => {
                const photoUrl = photo.image
                  ? urlFor(photo.image).width(800).fit("max").auto("format").url()
                  : null;
                return (
                  <div
                    key={photo.label}
                    className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface"
                  >
                    {photoUrl ? (
                      <Image
                        src={photoUrl}
                        alt={photo.image?.alt ?? photo.label}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-3 border border-dashed border-border" />
                    )}
                    <span className="absolute bottom-4 left-4 bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground">
                      {photo.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-12">
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                  Related Work
                </p>
                <h2 className="font-sans text-3xl font-bold leading-tight md:text-4xl">
                  Similar projects.
                </h2>
              </div>
              <Link
                href="/gallery"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand hover:text-brand-dark"
              >
                ← Back to Gallery
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-[1280px] px-8 pb-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {related.map((r) => (
                <SimpleProjectCard key={r.slug} project={r} />
              ))}
            </div>
          </div>
        </section>
      )}

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
