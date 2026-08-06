import Link from "next/link";
import FAQAccordion from "@/components/Common/FAQAccordion";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import AreasCovered from "@/components/Home/AreasCovered";
import Image from "next/image";
import { BrandImage, Section, SplitContent, PrimaryButton, DotList } from "@/components/Services/ServiceSections";
import tyreBrands from "@/data/tyreBrands";
import { notFound } from "next/navigation";

const PHONE = "+971543170355";
const WHATSAPP = "https://wa.me/971543170355";

export function generateStaticParams() {
  return tyreBrands.map((brand) => ({ slug: brand.slug }));
}

const TyreBrandPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const brand = tyreBrands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {brand.intro ? `Reliable ${brand.title} Replacement in Dubai` : brand.title}
                </h1>
                {(brand.intro ?? brand.description).split("\n\n").map((para) => (
                  <p key={para} className="mb-4 text-base font-medium leading-relaxed text-body-color">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full px-4 md:w-5/12">
              {brand.image ? (
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-one">
                  <Image src={brand.image} alt={`${brand.title} fitted by an 800 Speedy technician in Dubai`} fill className="object-cover" />
                </div>
              ) : (
                <BrandImage base="about-image" alt={brand.title} />
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-primary/5 p-4">
            <p className="text-base font-medium text-body-color">
              Get answers to all your questions from our team of experts
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="custom-btn call-btn wobble-btn"
              >
                <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-btn whatsapp-btn wobble-btn"
              >
                <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {brand.stats && (
        <Section className="pt-10 md:pt-16 pb-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {brand.stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-primary/5 px-4 py-6 text-center dark:bg-white/5">
                <p className="mb-1 text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-body-color">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Service highlights */}
      {brand.serviceHighlights && (
        <Section title={brand.serviceHighlights.title} paragraph={brand.serviceHighlights.intro}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.serviceHighlights.items.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-6 text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <h3 className="mb-2 text-base font-bold text-black dark:text-white">{item.title}</h3>
                <p className="text-sm text-body-color">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Get started / order process */}
      {brand.getStarted && (
        <Section title={brand.getStarted.title} paragraph={brand.getStarted.intro} mb="50px">
          <div className="relative flex flex-wrap justify-center gap-10">
            {brand.getStarted.steps.map((s, index) => (
              <div key={s.title} className="relative w-full text-center sm:w-[calc(33.333%-1.7rem)]">
                <span className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-gray-light bg-primary text-lg font-bold text-white dark:border-bg-color-dark">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{s.title}</h3>
                <p className="text-sm text-body-color">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Why choose us */}
      {brand.whyChooseUs && (
        <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark">
          <SplitContent
            imageBase="about-image-2"
            imageSrc={brand.image}
            imageAlt={brand.whyChooseUsTitle ?? "Why Choose 800 Speedy"}
            badge={
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg lg:left-0 lg:translate-x-0">
                10+ Years Experience
              </span>
            }
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {brand.whyChooseUsTitle ?? "Why Choose 800 Speedy?"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">{brand.whyChooseUsIntro}</p>
            <ul className="mb-6 space-y-3 border-l-2 border-primary/20 pl-5">
              {brand.whyChooseUs.map((item) => (
                <li key={item} className="relative text-base text-body-color">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-base font-medium text-body-color">{brand.whyChooseUsClosing}</p>
            <PrimaryButton href={`tel:${PHONE}`}>Call Now</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Signs tyre needs replacement */}
      {brand.signs && (
        <Section title={brand.signs.title} paragraph={brand.signs.intro}>
          <DotList items={brand.signs.list} />
        </Section>
      )}

      {/* All brands — flip cards */}
      <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark" title="All Tyre Brands We Offer" paragraph="Hover a brand to see what it's known for.">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tyreBrands.map((b) => (
              <div key={b.slug} className="h-44 [perspective:1000px]">
                <Link
                  href={`/tyre-brands/${b.slug}`}
                  className="group relative block h-full w-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white p-4 text-center shadow-one [backface-visibility:hidden] dark:bg-dark dark:shadow-three">
                    <h3 className="text-base font-bold text-black dark:text-white">{b.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm leading-relaxed">{b.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Section>

      {brand.showAreas && <AreasCovered />}

      {/* Testimonials */}
      {brand.testimonials && (
        <Section title="Customer Reviews">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {brand.testimonials.map((t) => (
              <div key={t.name} className="rounded-lg bg-white p-6 shadow-one dark:bg-dark dark:shadow-three">
                <p className="mb-4 text-sm text-yellow-500">★★★★★</p>
                <p className="mb-4 text-base text-body-color">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {t.name} <span className="font-normal text-body-color">— {t.area}</span>
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {brand.faqs && (
        <Section className="py-10 md:py-20 lg:py-28" title="Frequently Asked Questions">
          <FAQAccordion faqs={brand.faqs} />
        </Section>
      )}

      <EmergencyCTA />
    </>
  );
};

export default TyreBrandPage;
