# Plan — Battery Zone homepage + header rebuild

Source: 20 reference screenshots (batteryzoneuae.com) reviewed, content extracted below. Goal: rebuild homepage section-by-section using template's existing component patterns (cards, SectionTitle, dark/light classes, container/grid spacing), new components only where no template equivalent exists. Remove template-only filler (About/Pages menu, Sign In/Sign Up, Pricing/Video sections not used).

## Header (`src/components/Header/menuData.tsx`, `index.tsx`)
- Menu: Home, Services (dropdown), Battery Brands (dropdown), Areas, Warranty, Blog, Contact. No Car Brands, no About, no Pages.
- Services dropdown: Car Battery Replacement, Battery Diagnostics & Jumpstart, Emergency Fuel Delivery, Flat Tyre Replacement, Flat Tyre Repair, Tyre Replacement, Tyre Repair, Roadside Assistance, Car Towing & Recovery, Alternator & Dynamo Repair, Car Recovery Dubai.
- Battery Brands dropdown + `src/data/batteryBrands.ts`: Amaron, Bosch, Varta, Dynex, Max Gold, Max Part (replace old 6).
- Replace Sign In/Sign Up buttons with WhatsApp button (green) + Call Now button (blue), `wa.me` / `tel:` links.

## New pages
- `/areas` — area list page (reuse Breadcrumb + grid, like battery-brands index).
- `/warranty` — warranty info page (Breadcrumb + content).
- Add `tyre-replacement`, `tyre-repair` entries to `src/data/services.ts` (so `/services/[slug]` covers them).

## Homepage (`src/app/page.tsx`) — section order, each its own component under `src/components/Home/`
1. **Hero** — rewrite existing Hero: "New Car Battery Replacement Dubai | Amaron, Varta & Bosch Installation", trust badges (Free Delivery, 500+ Reviews, 24/7 Support, 15+ Years), Call Now/WhatsApp CTAs.
2. **StatsBar** (new) — 100K+ Happy Clients, 15+ Years Experience, 30-45 Min Avg Response, 500+ Monthly Services.
3. **TrustIntro** (new, About-pattern) — "Most Trusted Experts for Emergency New Car Battery Replacement in Dubai" + paragraph + Discover More link.
4. **WhyChooseUs** (reuse Features/SingleFeature pattern, new data) — 30-Minute Emergency Response, Certified Technicians, Transparent No-Surprise Pricing, Complete Dubai Coverage.
5. **ServicesGrid** (new) — 8 service cards linking to `/services/[slug]`.
6. **BrandsShowcase** (new) — text-badge strip of the 6 battery brands + short warranty note (no external logo images needed).
7. **HowItWorks** (new) — 4 steps: Call or Book Online, Drop Your Location, Diagnose & Install, Drive Away.
8. **VehicleTypes** (About-pattern) — bullet list of supported vehicle types.
9. **BatteryLifeTips** (About-pattern) — 5 tips to extend battery life.
10. **WarningSigns** (About-pattern) — 5 signs you need a new battery.
11. **AreasCovered** (new) — grid of Dubai areas + link to `/areas`.
12. **Testimonials** — keep component, replace data with 3 Dubai reviews.
13. **FAQ** (new, simple accordion) — ~8 Q&A from screenshots.
14. **EmergencyCTA** (new banner) — "Need Emergency Car Battery Replacement in Dubai?" + Call/WhatsApp buttons.
15. **Footer** — update columns: Battery Zone UAE (about/links), Our Services (service links), Newsletter (reuse existing NewsLatterBox pattern).

Drop from homepage: Video, Pricing, Blog grid (keep Blog as its own page via header link only), AboutSectionOne/Two (replaced by TrustIntro/VehicleTypes/etc using same visual pattern).

## Execution order
1. menuData + data files (services, batteryBrands) + Header CTA buttons.
2. `/areas`, `/warranty` pages.
3. New homepage components (one file each, minimal decorative SVG, consistent Tailwind classes).
4. Wire `src/app/page.tsx`.
5. Quick curl/visual check on dev server.
