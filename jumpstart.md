# Service Page Design Reference

Source: `src/app/services/[slug]/page.tsx` (built for `battery-diagnostics-jumpstart`).
Shared building blocks: `src/components/Services/ServiceSections.tsx` (`Section`, `SplitContent`, `BrandImage`, `PrimaryButton`, `DotList`, `CheckGrid`, `BorderList`).

Every service page is the SAME component (`page.tsx`) rendering different content per service, driven entirely by `src/data/services.ts`. To build a new service's page: **don't touch `page.tsx` or `ServiceSections.tsx`** — just add the matching fields to that service's entry in `services.ts`. Section visibility is automatic: a section only renders if its data field is present (`{service.whyEssential && <Section>...}`), so omit a field to skip a section.

When given a screenshot/content for a new service, map it to one of the sections below and add the corresponding field(s) to `Service` type + the service's data object.

All section titles are data-driven (no service-specific text is hardcoded in `page.tsx` anymore) — every field below includes its own `title` unless noted.

## Section catalog (in page order)

1. **Hero** — always rendered, no toggle field. Title (`service.title`) + intro paragraphs (`service.intro`, split on `\n\n`) on the left, `BrandImage` on the right. Call Now / WhatsApp Us buttons. Below both columns: a full-width WhatsApp banner ("Get answers to all your questions...").

2. **Lead intro** — field `introSection: { title, paragraph }`. Plain centered heading + paragraph, no image/list. Use for a short "what is this service" lead-in right after the hero.

3. **Get Started / Work Process timeline** — field `getStarted: { title?, intro, steps: {title,text}[] }`. Numbered circles in a centered flex-wrap row (any step count; trailing row auto-centers, ~3 per row). Title defaults to "Get Started in 3 Easy Steps" if omitted.

4. **Why Essential + What's Included + How It Works** — one `<Section className="pt-16">` containing three blocks:
   - `whyEssential: { title, intro, causes?: string[], closing? }` (optional, gray card, `DotList` — causes/closing render only if present).
   - `features: string[]` (required) → `BorderList` (left-accent-border cards).
   - `steps: string[]` (required) → centered tinted numbered cards, ~3 per row (trailing row auto-centers).

5. **Service highlight photo cards** — field `serviceHighlights: { title, intro?, items: {icon,title,description}[] }`. 2-col cards, icon badge + placeholder photo strip. Reuses the same `costFactorIcons` map (add new icon keys there if needed — current set: `location, clock, car, battery, building, wrench, fuel, truck`).

6. **Vehicle/use-case checklist** — field `vehicleTypes: { title, intro, list: string[] }`. Plain white-bg `CheckGrid`.

7. **Why Choose Us** — field `whyChooseUsTitle` (defaults to "Why Choose Battery Zone?") + `whyChooseUs: string[]` + `whyChooseUsIntro`/`whyChooseUsClosing`. Uses `SplitContent` (image badge "11+ Years Experience" + vertical-line bullet list + `PrimaryButton`).

8. **Who Needs It / Safety / "Why X is common"** — field `whoNeedsIt: { title, intro, list?: string[], safetyNote? }`. Dark full-bleed section with a faint background image, white `CheckGrid` (list/safetyNote optional — omit for a plain-paragraph dark banner).

9. **Beyond [Service]** — field `beyondJumpstart: { title, intro, services: string[], closing? }`. `BorderList` again, centered intro/closing.

10. **Why [Brand] Is Your Partner / Who Are We** — field `whyPartner: { title, intro, points?: string[], closing? }`. `SplitContent` (image left, no badge) + optional `CheckGrid` + `PrimaryButton`. Omit `points`/`closing` for a plain bio-style paragraph block.

11. **Our Other Services** — always rendered, no data field. Flip cards (3D `rotateY`) for every other service, pulled from `services.ts` automatically.

12. **Car Batteries We Offer** — always rendered, no data field. Cards from `batteryBrands.ts` with a "Read More" link to `/battery-brands/[slug]`.

13. **What Affects the Price** — two variants, mutually exclusive:
    - `costFactorsDetailed: { icon, title, description }[]` + `costFactorsTitle?`/`costFactorsParagraph?` → icon-badge cards with a placeholder photo strip under each.
    - `costFactors: string[]` (plain strings) → falls back to `SplitContent` numbered list. Use the detailed version for new pages.

14. **Pricing intro band** — field `pricingIntro: { title, paragraphs: string[] }` (optional — section is skipped if absent). `SplitContent` with `imageSide="right"`.

15. **Pricing table** — field `pricing: { item, price }[]`, optional `pricingTitle?` (defaults "Pricing Guide") and `pricingNote?` (closing line under the table).

16. **Testimonials** — field `testimonials: { name, area, quote }[]`.

17. **Brands Showcase / Areas Covered** — toggles `showBrands` / `showAreas` (booleans), reuse homepage components.

18. **FAQ** — field `faqs: { q, a }[]` (required).

19. **EmergencyCTA** — always rendered, global component.

## Conventions to keep things symmetric

- Every image+text section uses `SplitContent` → fixed `5/12` image / `7/12` content split. Don't hand-roll a different ratio.
- Image pairs always go through `BrandImage base="about-image" | "about-image-2"` (light/dark handled for you). Swap to real photos by replacing the files at `public/images/about/*.svg` — no code changes needed.
- Section spacing is `py-16` by default (`Section` component); pass `className` only to change background color or override spacing.
- Card-style lists pick ONE of: `DotList` (single col, dot bullet), `CheckGrid` (2-col, check bullet), `BorderList` (single col, left-accent card) — pick based on item count/length, don't invent a 4th pattern unless the screenshot clearly calls for it.
