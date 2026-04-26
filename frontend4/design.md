# NZLCS frontend4 — Design System

Source of truth for visual consistency across all pages. Reflects the actual tokens and patterns used in `app/page.tsx` (Home) and `app/globals.css`. When adding a new page, match these — don't invent new values.

---

## Colors (CSS variables → Tailwind tokens)

Defined in `app/globals.css` under `:root` (Preset A — Dark Mode). Use the Tailwind class form, never raw hex.

| Token | Hex | Tailwind class | Usage |
|---|---|---|---|
| `--background` | `#141311` | `bg-background` | Page background |
| `--surface` | `#1E1D1A` | `bg-surface` | Cards, inputs, raised surfaces |
| `--foreground` | `#EDEBE7` | `text-foreground` | Primary text |
| `--muted` | `#9B9690` | `text-muted` | Body / secondary text |
| `--border` | `#3A3733` | `border-border` | All dividers and outlines |
| `--brand` | `#D4834A` | `bg-brand` / `text-brand` | Primary CTA, accent labels, stat numbers |
| `--brand-light` | `#E8A672` | `bg-brand-light` | Brand hover state |
| `--brand-dark` | `#a85f28` | `text-brand-dark` | Brand link hover (on text) |
| `--accent` | `#7FA882` | `bg-accent` / `text-accent` | Secondary CTA (e.g. file upload) |
| `--on-brand` | `#141311` | `text-on-brand` | Text on brand background |

**Rule:** No hardcoded hex anywhere except inside `:root` presets. Swapping the preset block in `globals.css` must restyle the entire site.

---

## Typography

- **Font:** Josefin Sans (loaded in `app/layout.tsx`), via `font-sans`.
- **Weights used:** 400, 500 (body default), 700 (headings, bold labels).

### Scale

| Role | Classes |
|---|---|
| H1 (hero) | `text-5xl md:text-6xl font-bold leading-[1.05]` |
| H2 (section) | `text-4xl md:text-5xl font-bold leading-tight` |
| H3 (card title) | `text-2xl font-bold` |
| Stat numbers | `text-4xl md:text-5xl font-bold text-brand` |
| Body | `text-[15px] leading-7 text-muted` (intros) / `text-[14px] leading-7 text-muted` (cards) |
| Footer / fine | `text-[12px] leading-6 text-muted` or `text-[13px]` |
| **Eyebrow label** | `text-[11px] font-bold uppercase tracking-[0.22em] text-brand` |
| Form label | `text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70` |
| Button text | `text-[11px] font-bold uppercase tracking-[0.2em]` |

**Tracking convention:**
- `0.22em` — eyebrow labels above section H2s
- `0.20em` — buttons, footer column titles
- `0.18em` — form labels, stat sublabels

---

## Layout

- **Container:** `mx-auto max-w-[1280px] px-8` — applied to every content row. No other max-widths.
- **Section vertical rhythm:** `pt-24 pb-12` for section heads, `py-12` (cards), `py-24` (large blocks like contact, footer).
- **Section dividers:** `border-t border-border` between sections; `border-y border-border` wrapping a horizontal card row (connected pattern only — see below).

### Two card-grid patterns

The site uses **two distinct grid patterns** depending on context. Don't mix them on the same page.

1. **Connected grid** — used on the **Home page** for short feature cards inside a marketing section. Cards share borders, no gap between cells.
   - Wrap the grid in `border-y border-border`.
   - Cells are `px-8 py-12`.
   - Vertical dividers: `md:border-r border-border` on every cell except the last.
   - Horizontal dividers (mobile stack): `border-t md:border-t-0` from the second cell onward.
   - Inner image placeholder: `aspect-[4/3] rounded-sm border border-border bg-surface` (solid border).
   - Reference: `app/page.tsx` Services Preview + Why NZLCS sections.

2. **Boxed list grid** — used on the **Blog list, Gallery list, and Blog detail's "Related articles"** for browsing many entries. Each card is its own outlined box with a gap between cards.
   - Grid wrapper: `grid grid-cols-1 gap-6 md:grid-cols-3` (no `border-y`, no inter-cell border classes).
   - Card outer: `border border-border bg-background` with `hover:border-foreground/40 transition-colors`. Use `flex flex-col` so footer CTA can pin to bottom via `flex-1` on the body paragraph.
   - Inner image area: `aspect-[4/3] border-b border-border bg-surface`, with a **dashed inner placeholder** at `inset-3` (`absolute inset-3 grid place-items-center border border-dashed border-border`) showing an `Image` eyebrow label. The Gallery variant replaces the dashed placeholder with the split-tone Before/After preview.
   - Card body: `px-6 py-6` containing a metadata eyebrow row, H3 title (`group-hover:text-brand`), a body excerpt with `flex-1`, and a bottom CTA link styled as `text-[11px] font-bold uppercase tracking-[0.2em] text-foreground underline underline-offset-4 group-hover:text-brand` (e.g. `Read article →`).
   - Reference: `app/blog/BlogList.tsx`, `app/gallery/GalleryList.tsx`.

3. **Simplified editorial cards** — used on the **Gallery detail "Similar projects"** and **Blog detail "Related Articles"** sections, where the page already carries a lot of structural weight and the related cards should feel quieter.
   - No outer box, no border, no fill — the card is just three stacked elements (image area, eyebrow row, title).
   - Image area keeps the standard `aspect-[4/3]` so it doesn't tower over the columns, but uses a **full** `border border-border` (since there's no outer card to anchor the frame). Gallery variant: split-tone Before/After preview with the label as a small chip in the top-left (`absolute left-3 top-3 bg-background/80 px-2.5 py-1.5 ...`) instead of centered. Blog variant: dashed inner placeholder with `Image` label, same as the boxed variant.
   - Below the image: `mt-5` to a single eyebrow row (`CATEGORY · LOCATION` for gallery, `CATEGORY · READ TIME` for blog) and an H3 title. No excerpt, no `Read article →` CTA — the whole card is a `<Link>`, and the title flips to brand on hover.
   - Grid: `grid grid-cols-1 gap-10 md:grid-cols-3` (wider gap than the boxed variant since there are no card edges to anchor the rhythm).
   - References: `SimpleProjectCard` / `BeforeAfterPreviewTall` in `app/gallery/GalleryList.tsx`; `SimpleBlogCard` / `BlogImagePlaceholderStandalone` in `app/blog/BlogList.tsx`.

---

## Radius & shadows

- **Borders, not shadows.** No `shadow-*` utilities anywhere on the site. Depth comes from `border border-border` on `bg-surface`.
- **Radius is essentially flat:**
  - `rounded-sm` only — for image/card placeholders and brand logo tiles.
  - `rounded-full` only for the small brand dot inside placeholder cards.
  - **No** `rounded-md`, `rounded-lg`, `rounded-xl`. Forms, buttons, sections, and main cards have **square corners**.

---

## Components / patterns

### Section header block
```
<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">{LABEL}</p>
<h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl">{Heading}</h2>
<p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">{Subheading}</p>
```

### Card (inside a bordered grid)
- Outer cell: `px-8 py-12` plus the divider classes above.
- Image/placeholder: `mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface`.
- Title: `font-sans text-2xl font-bold`.
- Body: `mt-3 text-[14px] leading-7 text-muted`.
- Optional link: `mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand hover:text-brand-dark`.

### Primary CTA button
```
className="bg-brand px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-on-brand hover:bg-brand-light"
```

### Secondary / outlined CTA (used for file upload)
```
className="flex w-full items-center justify-center gap-3 border border-accent bg-accent/10 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-background"
```

### Inline link CTA (hero, after-card)
- Underline on the bottom border, not `underline`. Pattern: `border-b border-white pb-1` (over imagery) or `text-brand hover:text-brand-dark` (on background).

### Filter tabs (text + subtle active fill)
- Used by the Blog and Gallery list pages.
- Inactive: plain text — no visible border, no fill — `border-transparent text-muted hover:text-foreground`. (A transparent border keeps the chip the same size in both states so layout doesn't jump.)
- Active: subtle low-contrast fill **plus a thin outline** — `border-border bg-surface text-foreground`. Square corners (no rounding) to match the rest of the design system. The outline anchors the active label as a discrete pill; the fill is just enough lift without adopting a fully-buttoned appearance.
- Common: `border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors`. Brand typography (uppercase + tracking + bold) is preserved; only the chrome is softened.
- Brand orange is intentionally **not** used here — it's reserved for eyebrows and primary CTAs.
- Row layout: wrap the row in `border-y border-border` so two thin horizontal lines bracket the filter strip. Inner container `mx-auto max-w-[1280px] px-8 py-5`. Items in `flex flex-wrap items-center gap-2`.
- The grid below the filter row should **not** add another `border-t` — the chip row's bottom border already separates it.
- Implementation: `app/components/FilterChip.tsx`.

### Form input
```
className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
```
- Square corners, no rounding.
- Required marker: `<span className="text-brand">*</span>` next to the label.

### Hero pattern
- Full-bleed media (video or image) with `absolute inset-0 h-full w-full object-cover`.
- Gradient overlay: `bg-gradient-to-b from-black/60 via-black/45 to-black/85`.
- Copy block: `absolute inset-x-0 bottom-0` → max-width container → `max-w-xl text-white` block at bottom-left, padded `pb-20`.

### Stats strip
- Wrapped in `border-y border-border`.
- Grid: `grid-cols-2 md:grid-cols-4` with `text-center`.
- Number: `font-sans text-4xl md:text-5xl font-bold text-brand`.
- Label: eyebrow style (`tracking-[0.18em] text-muted`).

### Specs side card
- Used on the Gallery detail page next to the "About this project" body — `md:grid-cols-[1fr_minmax(0,420px)]` two-column where the card pins to the right.
- Container: `border border-border bg-surface p-8`. Square corners. Eyebrow label at top.
- Rows are a `<dl>` with `divide-y divide-border` and per-row `py-4` (with `first:pt-0 last:pb-0`).
- Each row: `<dt>` left in eyebrow style (`text-[11px] font-bold uppercase tracking-[0.22em] text-muted`); `<dd>` right-aligned, `text-[14px] font-bold text-foreground`.
- The accompanying body block uses `border-l-2 border-brand pl-6 md:pl-8` (a thin brand bar on the left edge of the body) — the side card is the right-side counterweight.

### Image strip with label chip
- 3-up grid (`grid-cols-1 md:grid-cols-3 gap-6`).
- Each tile: `relative aspect-[4/3] border border-border bg-surface`. Optional `backgroundImage` inline style when a real photo arrives; otherwise the surface color shows through.
- Inset dashed frame: an absolutely-positioned `inset-3 border border-dashed border-border` block (purely decorative — communicates "image placeholder" while real photography is pending).
- Label chip: `absolute bottom-4 left-4 bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground`. The translucent background keeps the chip readable over either the surface tone or a future photo.

### Footer
- `border-t border-border` top divider, 4-column grid, `gap-10`.
- Bottom legal bar uses `bg-brand text-on-brand` with `tracking-[0.2em]`.

---

## Imagery

- **Aspect ratio for service/feature cards:** `aspect-[4/3]`.
- **Photo containers:** always wrapped in `border border-border` with `bg-surface` fallback.
- **Map embed:** wrap in `border border-border`, apply `filter: grayscale(0.6) contrast(1.1)` so it sits in the dark palette.
- **Logos:** rendered with `next/image`, `object-contain`, max sizing via `max-h-full max-w-full` on a fixed-height tile (`h-24`).

---

## Page structure checklist

When building a new page, the spine should be:

1. `<Header />` (always first child)
2. `<ScrollToTop />`
3. **Page hero** — either full-bleed media (Home) or a smaller header block using the section-header pattern.
4. Content sections separated by `border-t border-border`.
5. **Bottom CTA** — eyebrow + H2 + body + primary CTA, full-width.
6. **Footer** — same as Home.

The Header, ScrollToTop, and Footer are shared visual furniture — they must be visually identical across pages.

---

## Don't

- Don't introduce `shadow-*`, `rounded-md`/`lg`/`xl`, or new font families.
- Don't add new max-widths — everything centers in `max-w-[1280px] px-8`.
- Don't use raw hex; reach for the token. If a needed shade doesn't exist, add it to `globals.css` once and reuse.
- Don't add background images to text sections — the dark palette + brand-color eyebrow does the lifting.
- Don't capitalize headings via CSS (`uppercase`) except for eyebrow / button / form-label micro-text.
