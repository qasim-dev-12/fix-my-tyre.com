# CLAUDE.md
# Token Usage Rules

## IMPORTANT

- Minimize token usage at all times.
- Never scan the entire project unless explicitly requested.
- Read only files mentioned in the prompt.
- If additional files are needed, ask first.
- Make the smallest possible change.
- Reuse existing components and styles.
- Do not refactor unrelated code.
- Do not explain code unless requested.
- Output only modified files when making changes.
- Work one section/component at a time.
- Prefer editing existing files over creating new files.
- Before reading files, state which files are required and why.
- Stop searching once enough context is found.

## Large Content Tasks

- Do not analyze all screenshots at once.
- Review only the screenshots required for the current section.
- Build pages section-by-section instead of all at once.
- Ask for the next section after completing the current one.


This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run dev      # start dev server (Next.js + Turbopack) at localhost:3000
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint
```

No test runner is configured in this repo.

Node >=20 is required (see `engines` in package.json). If the system Node is older, run with a newer Node binary instead of editing `package.json`.

## Architecture

This started as the free "Startup" Next.js template (Next.js 16, App Router, Tailwind CSS v4, TypeScript) and is being repurposed into "Battery Store" — a UAE car-battery/roadside-assistance business site. It's a marketing/content site, not an app with a backend — no database, auth, or API routes.

- `src/app/*` — route pages (App Router). Each route is a thin page that composes section components. Shared chrome (`Header`, `Footer`, `ScrollToTop`) is mounted once in `src/app/layout.tsx`, with theming via `next-themes` in `src/app/providers.tsx` (dark mode is the default).
- `src/app/services/[slug]/page.tsx` and `src/app/battery-brands/[slug]/page.tsx` — dynamic routes driven by `src/data/services.ts` / `src/data/batteryBrands.ts` rather than one static file per item. Next.js 16 requires `params` to be awaited (`const { slug } = await params`) — destructuring it synchronously silently 404s.
- `src/data/*.ts` — static content: `services.ts` (each service has `intro`, `features[]`, `steps[]`, `faqs[]`, optional `pricing[]`), `batteryBrands.ts`, `areas.ts`. Edit these, not the page components, when only content changes.
- `src/components/Home/*` — homepage-only sections (StatsBar, TrustIntro, WhyChooseUs, ServicesGrid, BrandsShowcase, HowItWorks, the reusable `BulletSection` used for vehicle types/battery-life tips/warning signs, AreasCovered, FAQ, EmergencyCTA), composed in `src/app/page.tsx`.
- `src/components/Common/FAQAccordion.tsx` — shared accordion used by both the homepage FAQ and every service detail page; don't duplicate FAQ markup elsewhere.
- `src/components/<Section>/index.tsx` (Hero, Testimonials, Footer, etc.) — original template components, edited in place rather than replaced; some still pair with a sibling `*Data.tsx` file.
- `src/components/Header/` — nav bar. `menuData.tsx` defines the menu as a `Menu[]` tree (`src/types/menu.ts`); items with a `submenu` array render as dropdowns. `index.tsx` handles dropdown/mobile-menu state and sticky-header scroll. The responsive breakpoint for collapsing to the mobile hamburger is `xl` (not the template's default `lg`) because this site's menu has more top-level items plus two CTA buttons (WhatsApp/Call Now) than `lg`'s 1024px width can fit without overlap.
- `src/styles/index.css` — global Tailwind CSS v4 entry point.
- Path alias `@/*` maps to `src/*`.

A `plan.md` at the repo root documents the homepage rebuild plan section-by-section — check it before re-deriving structure for similar content tasks.
