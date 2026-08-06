import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import FAQAccordion from "@/components/Common/FAQAccordion";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import AreasCovered from "@/components/Home/AreasCovered";
import { BrandImage, Section, SplitContent, PrimaryButton, DotList, CheckGrid, BorderList, CostFactorIcon } from "@/components/Services/ServiceSections";
import services from "@/data/services";
import { notFound } from "next/navigation";

const PHONE = "+971543170355";
const WHATSAPP = "https://wa.me/971543170355";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {service.title}
                </h1>
                {service.intro.split("\n\n").map((para) => (
                  <p key={para} className="mb-4 text-base font-medium leading-relaxed text-body-color">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full px-4 md:w-5/12">
              {service.heroImage ? (
                <div className="relative mx-auto overflow-hidden rounded-2xl ring-1 ring-stroke-dark shadow-[0_12px_40px_rgba(52,235,229,0.12)] h-[420px]">
                  <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 rounded-2xl ring-inset ring-1 ring-primary/20 pointer-events-none" />
                </div>
              ) : (
                <BrandImage base="about-image" alt={service.title} />
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

      {/* Lead intro */}
      {service.introSection && (
        <Section title={service.introSection.title} paragraph={service.introSection.paragraph} />
      )}

      {/* Get Started / Work Process timeline */}
      {service.getStarted && (
        <Section title={service.getStarted.title ?? "Get Started in 3 Easy Steps"} paragraph={service.getStarted.intro} mb="50px">
          <div className="relative flex flex-wrap justify-center gap-10">
            {service.getStarted.steps.map((s, index) => (
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

      {/* Why essential / What's included / How it works */}
      <Section className="pt-10 md:pt-16">
        {service.whyEssential && (
          <div className="mb-16 rounded-lg bg-gray-light p-8 dark:bg-bg-color-dark">
            <SectionTitle title={service.whyEssential.title} paragraph={service.whyEssential.intro} center mb="30px" />
            {!!service.whyEssential.causes?.length && <DotList items={service.whyEssential.causes} />}
            {service.whyEssential.closing && (
              <p className="mx-auto max-w-[700px] text-center text-base font-medium text-body-color">
                {service.whyEssential.closing}
              </p>
            )}
          </div>
        )}

        <div className="mb-16">
          <SectionTitle title="What's Included" paragraph="" mb="40px" center />
          <BorderList items={service.features} />
        </div>

        <div>
          <SectionTitle title="How It Works" paragraph="" mb="40px" center />
          <div className="relative flex flex-wrap justify-center gap-6">
            {service.steps.map((step, index) => (
              <div
                key={step}
                className="group relative flex w-full flex-col items-center rounded-lg bg-primary/5 p-6 text-center text-base text-body-color transition-all duration-300 hover:-translate-y-2 hover:bg-primary/10 dark:bg-white/5 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service type photo cards */}
      {service.serviceHighlights && (
        <Section title={service.serviceHighlights.title} paragraph={service.serviceHighlights.intro}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.serviceHighlights.items.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg bg-white text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <div className="relative h-40 w-full bg-primary/5">
                  <Image src="/images/about/about-image.png" alt={item.title} fill className="object-cover dark:hidden" />
                  <Image src="/images/about/about-image.png" alt={item.title} fill className="hidden object-cover dark:block" />
                </div>
                <div className="p-6">
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CostFactorIcon name={item.icon} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{item.title}</h3>
                  <p className="text-sm text-body-color">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Vehicle types covered */}
      {service.vehicleTypes && (
        <Section title={service.vehicleTypes.title} paragraph={service.vehicleTypes.intro}>
          <CheckGrid items={service.vehicleTypes.list} />
        </Section>
      )}

      {/* Why choose us */}
      {service.whyChooseUs && (
        <Section>
          <SplitContent
            imageSrc="/tyres/why-choose.png"
            imageAlt="Why Choose 800 Speedy"
            badge={
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg lg:left-0 lg:translate-x-0">
                11+ Years Experience
              </span>
            }
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.whyChooseUsTitle ?? "Why Choose 800 Speedy?"}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">{service.whyChooseUsIntro}</p>
            <ul className="mb-6 space-y-3 border-l-2 border-primary/20 pl-5">
              {service.whyChooseUs.map((item) => (
                <li key={item} className="relative text-base text-body-color">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-base font-medium text-body-color">{service.whyChooseUsClosing}</p>
            <PrimaryButton href={`tel:${PHONE}`}>Call Now</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Who needs it / is it safe */}
      {service.whoNeedsIt && (
        <section className="relative overflow-hidden bg-gray-dark py-10 md:py-16">
          <Image src="/images/about/about-image-2-dark.svg" alt={service.whoNeedsIt.title} fill className="object-cover opacity-10" />
          <div className="container relative">
            <SectionTitle title={service.whoNeedsIt.title} paragraph={service.whoNeedsIt.intro} center />
            {!!service.whoNeedsIt.list?.length && <CheckGrid items={service.whoNeedsIt.list} light />}
            {service.whoNeedsIt.safetyNote && (
              <p className="mx-auto max-w-[700px] text-center text-base font-medium text-white/80">
                {service.whoNeedsIt.safetyNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Beyond jumpstart */}
      {service.beyondJumpstart && (
        <Section title={service.beyondJumpstart.title} paragraph={service.beyondJumpstart.intro} mb="40px">
          <BorderList items={service.beyondJumpstart.services} />
          {service.beyondJumpstart.closing && (
            <p className="mx-auto mt-6 max-w-[700px] text-center text-base font-medium text-body-color">
              {service.beyondJumpstart.closing}
            </p>
          )}
        </Section>
      )}

      {/* Why partner */}
      {service.whyPartner && (
        <Section>
          <SplitContent imageSrc="/images/about/jump-start-2.png" imageAlt={service.whyPartner.title}>
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.whyPartner.title}
            </h2>
            {service.whyPartner.intro.split("\n\n").map((para) => (
              <p key={para} className="mb-4 text-base leading-relaxed text-body-color">
                {para}
              </p>
            ))}
            {!!service.whyPartner.points?.length && <CheckGrid items={service.whyPartner.points} />}
            {service.whyPartner.closing && (
              <p className="mb-6 text-base font-medium text-body-color">{service.whyPartner.closing}</p>
            )}
            <PrimaryButton href={`tel:${PHONE}`}>Call Now</PrimaryButton>
          </SplitContent>
        </Section>
      )}

      {/* Other services — flip cards */}
      <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark" title="Our Other Services" paragraph="Hover a service to see what it covers.">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 8)
            .map((s) => (
              <div key={s.slug} className="h-44 [perspective:1000px]">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full w-full [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white p-4 text-center shadow-one [backface-visibility:hidden] dark:bg-dark dark:shadow-three">
                    <h3 className="text-base font-bold text-black dark:text-white">{s.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-primary p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </Section>

      {/* What affects the price */}
      {service.costFactorsDetailed ? (
        <Section
          className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark"
          title={service.costFactorsTitle ?? "What Affects the Price?"}
          paragraph={service.costFactorsParagraph ?? "Pricing isn't one-size-fits-all. A few key factors influence what you'll pay:"}
          mb="40px"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.costFactorsDetailed.map((factor) => (
              <div
                key={factor.title}
                className="overflow-hidden rounded-lg bg-white text-center shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
              >
                <div className="p-6">
                  <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <CostFactorIcon name={factor.icon} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{factor.title}</h3>
                  <p className="text-sm text-body-color">{factor.description}</p>
                </div>
                <div className="relative h-40 w-full bg-primary/5">
                  <Image src={factor.image ?? "/images/about/about-image.svg"} alt={`${factor.title} - technician at work`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        service.costFactors && (
          <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark">
            <SplitContent imageSrc="/tyres/price-effect.png" imageAlt="What Affects the Price">
              <SectionTitle title="What Affects the Price" paragraph="Pricing isn't one-size-fits-all. A few key factors influence what you'll pay." mb="30px" />
              <div className="space-y-3">
                {service.costFactors.map((factor, index) => (
                  <div
                    key={factor}
                    className="flex items-center gap-4 rounded-lg bg-white px-5 py-4 text-base text-body-color shadow-one transition-colors duration-300 hover:bg-primary/5 dark:bg-dark dark:shadow-three"
                  >
                    <span className="text-lg font-bold text-primary/40">{String(index + 1).padStart(2, "0")}</span>
                    {factor}
                  </div>
                ))}
              </div>
            </SplitContent>
          </Section>
        )
      )}

      {/* Pricing intro band */}
      {service.pricingIntro && (
        <Section>
          <SplitContent imageSrc="/tyres/price-effect-2.png" imageAlt={service.pricingIntro.title} imageSide="right">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">
              {service.pricingIntro.title}
            </h2>
            {service.pricingIntro.paragraphs.map((para) => (
              <p key={para} className="mb-4 text-base leading-relaxed text-body-color">
                {para}
              </p>
            ))}
          </SplitContent>
        </Section>
      )}

      {/* Pricing table */}
      {service.pricing && (
        <Section title={service.pricingTitle ?? "Pricing Guide"} mb="40px">
          <div className="overflow-hidden rounded-lg bg-white shadow-one dark:bg-dark dark:shadow-three">
            {service.pricing.map((row) => (
              <div key={row.item} className="flex items-center justify-between border-b border-body-color/10 px-6 py-4 last:border-0">
                <span className="text-base text-body-color">{row.item}</span>
                <span className="text-base font-semibold text-black dark:text-white">{row.price}</span>
              </div>
            ))}
          </div>
          {service.pricingNote && (
            <p className="mt-6 text-center text-base font-medium text-body-color">{service.pricingNote}</p>
          )}
        </Section>
      )}

      {/* Testimonials */}
      {service.testimonials && (
        <Section className="bg-gray-light py-10 md:py-16 dark:bg-bg-color-dark" title="Customer Reviews">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {service.testimonials.map((t) => (
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

      {service.showBrands && <BrandsShowcase />}
      {service.showAreas && <AreasCovered />}

      <Section className="py-10 md:py-20 lg:py-28" title="Frequently Asked Questions">
        <FAQAccordion faqs={service.faqs} />
      </Section>

      <EmergencyCTA />
    </>
  );
};

export default ServicePage;
