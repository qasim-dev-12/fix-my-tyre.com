# Battery Brand Page Design Reference

Source screenshot: batteryzoneuae.com Delkor brand page. Same pattern as `plan-jumpstart.md` — one shared
`src/app/battery-brands/[slug]/page.tsx`, content driven by `src/data/batteryBrands.ts`. Section renders only
if its data field is present. Reuses `src/components/Services/ServiceSections.tsx` building blocks.

## Sections (in order)

1. **Hero** — title + intro paragraphs + Call/WhatsApp buttons + `BrandImage`.
2. **Stats bar** — `stats: {value,label}[]` (e.g. "10+ Years Experience").
3. **Service highlights** — `serviceHighlights` (same shape as services: icon cards).
4. **Why Choose Us** — `whyChooseUsTitle/Intro/whyChooseUs[]/whyChooseUsClosing`, `SplitContent`.
5. **Signs battery needs replacement** — `signs: {title, intro?, list}` → `DotList`.
6. **Other brands** — always rendered, flip cards, pulled from `batteryBrands.ts` automatically.
7. **Areas Covered** — toggle `showAreas`.
8. **Testimonials** — `testimonials: {name,area,quote}[]`.
9. **FAQ** — `faqs: {q,a}[]`.
10. **EmergencyCTA** — global, always rendered.

## Images

No real product photos available (can't fetch/download from Pinterest). Uses the same `BrandImage` SVG
placeholders as service pages — swap files in `public/images/about/*.svg` with real battery photos later,
no code changes needed.
