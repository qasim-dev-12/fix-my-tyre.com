import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import services from "@/data/services";

const overrides: Record<string, { icon: string; title: string; blurb: string }> = {
  "tyre-replacement": { icon: "🔄", title: "Full Tyre Replacement, On-Site in 30-45 Minutes", blurb: "Choose from a wide range of brands and sizes, fitted right at your location." },
  "tyre-repair": { icon: "🔧", title: "Puncture & Tyre Repair, On-Site in 30-45 Minutes", blurb: "Professional repairs that get you safely back on the road, no full replacement needed." },
  "buy-new-tyre": { icon: "🛞", title: "Order New Tyres, Delivered & Fitted in 20-30 Minutes", blurb: "Shop brand-new tyres online, delivered and fitted at your door from AED 79." },
  "air-fill": { icon: "💨", title: "Tyre Air Top-Up, On-Site in 20-30 Minutes", blurb: "Accurate pressure checks and quick top-ups wherever you are, from AED 79." },
  "spare-tyre-change": { icon: "🚗", title: "Spare Tyre Fitting, On-Site in 20-30 Minutes", blurb: "Get your spare fitted fast and get moving again, from AED 79." },
  "fix-puncture-tyre": { icon: "🩹", title: "Puncture Fix, On-Site in 20-30 Minutes", blurb: "Quick, reliable puncture repairs to avoid a full tyre swap, from AED 79." },
};

const featured = services.filter((s) => overrides[s.slug]);

const ServicesGrid = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Every Tyre Service, One Call Away in Dubai"
          paragraph="800 Speedy runs fully stocked mobile vans across the city, ready to reach you in 20-30 minutes for anything your tyres need."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const o = overrides[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{ animationDelay: `${i * 100}ms` }}
                className="animate-[fadeInUp_0.5s_ease_both] flex flex-col overflow-hidden rounded-2xl bg-dark opacity-0 sm:flex-row"
              >
                <span className="flex items-center justify-center bg-primary/10 py-5 text-3xl sm:w-20 sm:shrink-0 sm:py-0">
                  <span className="inline-block animate-[float_3s_ease-in-out_infinite]">{o.icon}</span>
                </span>
                <div className="flex-1 p-5">
                  <h3 className="mb-2 text-lg font-bold text-white">{o.title}</h3>
                  <p className="mb-3 text-sm text-body-color-dark">{o.blurb}</p>
                  <span className="text-sm font-semibold text-primary">Learn More →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
