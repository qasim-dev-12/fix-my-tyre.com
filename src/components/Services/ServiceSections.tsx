import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

/** Light/dark image pair. `base` is the filename without "-dark.svg"/".svg", e.g. "about-image" or "about-image-2". */
export const BrandImage = ({ base, alt }: { base: string; alt: string }) => (
  <>
    <Image src={`/images/about/${base}.svg`} alt={alt} width={500} height={400} className="mx-auto dark:hidden" />
    <Image src={`/images/about/${base}-dark.svg`} alt={alt} width={500} height={400} className="mx-auto hidden dark:block" />
  </>
);

/** Standard `<section><div className="container">` shell with an optional centered SectionTitle. */
export const Section = ({
  className = "py-10 md:py-16",
  title,
  paragraph,
  center = true,
  mb,
  children,
}: {
  className?: string;
  title?: string;
  paragraph?: string;
  center?: boolean;
  mb?: string;
  children?: React.ReactNode;
}) => (
  <section className={className}>
    <div className="container">
      {title && <SectionTitle title={title} paragraph={paragraph ?? ""} center={center} mb={mb} />}
      {children}
    </div>
  </section>
);

/** Image (5/12) + content (7/12) split, used by every "image beside text" section for visual symmetry. */
export const SplitContent = ({
  imageBase,
  imageSrc,
  imageAlt,
  imageSide = "left",
  badge,
  children,
}: {
  imageBase?: string;
  imageSrc?: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  badge?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="-mx-4 flex flex-wrap items-center">
    <div className={`w-full px-4 lg:w-5/12 ${imageSide === "right" ? "lg:order-2" : ""}`}>
      <div className="relative">
        {imageSrc ? (
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-one">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        ) : (
          <BrandImage base={imageBase!} alt={imageAlt} />
        )}
        {badge}
      </div>
    </div>
    <div className="w-full px-4 lg:w-7/12">{children}</div>
  </div>
);

export const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-4">
    <a
      href={href}
      className="custom-btn call-btn wobble-btn"
    >
      <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      {children}
    </a>
    <a
      href="https://wa.me/971543170355"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-btn whatsapp-btn wobble-btn"
    >
      <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp Us
    </a>
  </div>
);

/** Simple dot-bullet list, one column, centered (e.g. causes / reasons). */
export const DotList = ({ items }: { items: string[] }) => (
  <ul className="mx-auto mb-6 max-w-[700px] space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3 text-base text-body-color">
        <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
        {item}
      </li>
    ))}
  </ul>
);

/** Checkmark-circle list in a responsive grid (e.g. guarantees / who-it's-for). */
export const CheckGrid = ({ items, light }: { items: string[]; light?: boolean }) => (
  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item}
        className={
          light
            ? "flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-base text-white"
            : "flex items-center gap-3 rounded-lg bg-primary/5 px-4 py-3 text-base font-medium text-body-color transition-colors duration-300 hover:bg-primary/10"
        }
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
        {item}
      </div>
    ))}
  </div>
);

export const costFactorIcons: Record<string, string> = {
  location: "M12 21s7-7.58 7-12A7 7 0 0 0 5 9c0 4.42 7 12 7 12Z M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  clock: "M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  car: "M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z M5 13h14",
  battery: "M7 7h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z M10 4h4v3h-4z M9 12h6",
  building: "M4 21V7l8-4 8 4v14 M9 21v-4h6v4 M9 11h.01 M15 11h.01 M9 15h.01 M15 15h.01",
  wrench: "M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z",
  fuel: "M3 22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16 M3 22h10 M15 8h2l3 3v7a2 2 0 0 1-2 2h0 M15 6V4h2",
  truck: "M3 17V7a1 1 0 0 1 1-1h9v11 M13 10h4l3 3v4h-2 M3 17h2 M9 17a2 2 0 1 0 4 0 M17 17a2 2 0 1 0 4 0",
};

export const CostFactorIcon = ({ name }: { name: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-primary">
    <path d={costFactorIcons[name]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Left-accent-border card list (e.g. included features / additional services). */
export const BorderList = ({ items }: { items: string[] }) => (
  <div className="mx-auto max-w-[700px] space-y-3">
    {items.map((item) => (
      <div
        key={item}
        className="flex items-start gap-3 rounded-lg border-l-4 border-primary bg-white p-4 text-base text-body-color shadow-one transition-all duration-300 hover:translate-x-1 hover:shadow-md dark:bg-dark dark:shadow-three"
      >
        <span className="mt-1 text-primary">✓</span>
        {item}
      </div>
    ))}
  </div>
);
