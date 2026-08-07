# Mobile Responsiveness & Animation Plan

Scope: Homepage + all `/services/[slug]` pages. Fixes applied to shared components cascade to every page automatically.

## Issues found (from screenshots)
1. "11+ Years Experience" badge on Why-Choose-Us image: not centered, too large on mobile, text wraps to 2 lines.
2. No gap between image and text block when they stack on mobile (SplitContent component) — image butts straight into heading.
3. Hamburger menu: X icon doesn't reliably close (z-index conflict with dropdown), no click-outside-to-close.
4. No entrance animation on text — homepage hero and service page hero feel static on mobile.
5. Mobile sticky WhatsApp/Call bar — already fixed in prior pass (safe-area padding, centered, sized).

## Fixes
1. `ServiceSections.tsx` badge usage in `page.tsx`: smaller padding/font on mobile, `whitespace-nowrap`, keep centered via `left-1/2 -translate-x-1/2`. One shared usage → fixes every service page's Why-Choose-Us section at once.
2. `SplitContent` component (`ServiceSections.tsx`): add `mb-8 lg:mb-0` to the image wrapper so mobile stacking gets breathing room. Used by Why-Choose-Us, Best-Solution, cost-factors, and pricing-intro sections on every service page.
3. `Header/index.tsx`: raise toggler button `z-index` above the dropdown nav, add click-outside listener to close the mobile menu.
4. Add a `fade-in-up` CSS animation (mobile-only, `prefers-reduced-motion` respected) in `index.css`; apply to Hero heading/paragraph (`components/Hero/index.tsx`) and service page hero heading/paragraph (`page.tsx`).

## Not in scope this pass
Full manual audit of every homepage section's spacing (StatsBar, TrustIntro, ServicesGrid, BrandsShowcase, HowItWorks, AreasCovered, FAQ, EmergencyCTA) — no browser/screenshot tool available to verify each visually. Shared-component fixes above address the specific bugs shown in screenshots. Send a screenshot of any section still off after this and it'll get a targeted fix.
