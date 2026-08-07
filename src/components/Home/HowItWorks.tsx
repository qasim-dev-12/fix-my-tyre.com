import SectionTitle from "../Common/SectionTitle";

const icons = [
  <path key="call" d="M9 3h6v3H9V3zm1 4h4v9h-4V7zm2 10.5a1 1 0 100 2 1 1 0 000-2z" />,
  <path key="pin" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  <path key="wrench" d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" />,
  <path key="car" d="M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM3 16l1.5-6c.3-1.2 1.4-2 2.6-2h9.8c1.2 0 2.3.8 2.6 2L21 16v3H3v-3z" />,
];

const steps = [
  { title: "Call or Book Online", text: "Tell us your location and vehicle details." },
  { title: "Drop Your Location", text: "Share your live location, nearest technician is dispatched." },
  { title: "Diagnose & Fit", text: "We inspect first, then fit or repair your tyre." },
  { title: "Drive Away", text: "Ready to go, with full warranty documentation." },
];

const HowItWorks = () => {
  return (
    <section id="how-we-work" className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="From Call to Road-Ready in 4 Easy Steps"
          paragraph="No stress, no waiting around — here's how quickly we get you moving again."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 150}ms` }}
              className="relative animate-[fadeInUp_0.6s_ease_forwards] rounded-2xl border border-stroke-dark bg-dark/60 p-6 text-center opacity-0"
            >
              {i < steps.length - 1 && (
                <>
                  <span className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 animate-[arrowMove_1.2s_ease-in-out_infinite] text-2xl text-primary lg:block">
                    →
                  </span>
                  <span className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 animate-[arrowMoveDown_1.2s_ease-in-out_infinite] text-2xl text-primary sm:hidden">
                    ↓
                  </span>
                </>
              )}
              <span className="icon-float mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{icons[i]}</svg>
              </span>
              <span className="mb-2 block text-xs font-semibold text-primary">Step {i + 1}</span>
              <h3 className="mb-1 text-base font-bold text-white">{s.title}</h3>
              <p className="text-sm text-body-color-dark">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
