# Plan — Jumpstart service page content & sections

Source: 25 screenshots of the reference site's `/car-jumpstart/` page reviewed (content paraphrased into our own wording, not copied verbatim). Goal: bring the jumpstart page up to the same depth as the reference, reusing existing template components first, adding small new pieces only where needed, keeping our card/section visual style throughout.

## Content gathered (paraphrased)
- Why a jumpstart matters: dead battery causes (lights left on, long idle periods, extreme heat, faulty alternator, corroded terminals).
- Why-choose-us list: 24/7 emergency service, trained technicians, fast arrival, accurate diagnostics, affordable pricing, support beyond jumpstarts.
- Cost factors: location/zone (extra travel = extra cost), time of day (night/weekend/holiday surcharge), vehicle type (4x4/luxury needs special equipment), add-on diagnostics (alternator/electrical checks).
- Pricing tiers: budget jumpstart vs. emergency/off-peak jumpstart.
- Step process (5 steps): arrival & assessment, safety setup, jumpstart, system check, customer guidance.
- Brands supported: reuse our own 6 battery brands (Amaron, Bosch, Varta, Dynex, Max Gold, Max Part) — do not reuse the reference site's different brand list.
- Areas served: reuse our existing `/areas` data.
- Customer quotes: 3 short paraphrased testimonials by area.
- FAQs (5): response time, process safety, what if car still won't start, membership requirement, night/holiday availability — already present in our data, kept.

## Implementation
1. Extend `Service` type in `src/data/services.ts` with optional fields: `whyChooseUs?: string[]`, `costFactors?: string[]`, `testimonials?: { name: string; area: string; quote: string }[]`, `showBrands?: boolean`, `showAreas?: boolean`.
2. Fill these fields only for `battery-diagnostics-jumpstart` (other services keep current shape; optional fields just won't render for them).
3. Update `src/app/services/[slug]/page.tsx`:
   - Render "Why Choose Us" bullets (only if `whyChooseUs` present) using the same bullet-list style as the existing features column.
   - Render "What Affects the Price" as a 2x2 card grid (only if `costFactors` present).
   - Reuse existing `BrandsShowcase` component as-is when `showBrands` is true (it's self-contained, imports our brand data already).
   - Reuse existing `AreasCovered` component as-is when `showAreas` is true (self-contained, imports our areas data already).
   - Render a small testimonials card row (only if `testimonials` present), styled like the homepage testimonial cards (stars + quote + name/area), no new shared component needed for a single use site.
   - Existing pricing table, FAQ accordion, and EmergencyCTA stay as-is.
4. Verify `/services/battery-diagnostics-jumpstart` renders all new sections, no compile errors, other service pages unaffected (optional fields absent → sections simply don't render).
