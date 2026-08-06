type BulletSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  bullets: string[];
  reverse?: boolean;
};

const BulletSection = ({ eyebrow, title, intro, bullets, reverse }: BulletSectionProps) => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className={`-mx-4 flex flex-wrap items-center gap-y-10 ${reverse ? "flex-row-reverse" : ""}`}>
          {/* Left: heading */}
          <div className="relative w-full px-4 lg:w-2/5">
            <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>
            {intro && (
              <p className="text-base leading-relaxed text-body-color-dark">{intro}</p>
            )}
            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Right: animated timeline */}
          <div className="w-full px-4 lg:w-3/5">
            <p className="mb-6 text-sm leading-relaxed text-body-color-dark">
              Our technicians see the same issues again and again on Dubai roads.
              Follow these points to stay safe and avoid an unexpected breakdown:
            </p>
            <ul className="relative">
              <div className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-0.5 bg-primary/20" />
              {bullets.map((bullet, i) => (
                <li
                  key={bullet}
                  style={{ animationDelay: `${i * 150}ms` }}
                  className="relative flex animate-[fadeInUp_0.5s_ease_forwards] items-start gap-4 py-3 opacity-0"
                >
                  <span
                    style={{ animationDelay: `${i * 150}ms` }}
                    className="relative z-10 mt-1 flex h-5 w-5 shrink-0 animate-[borderPulse_2.5s_ease-in-out_infinite] items-center justify-center rounded-full border-2 border-primary bg-black"
                  />
                  <p className="text-sm font-medium leading-relaxed text-body-color-dark">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletSection;
