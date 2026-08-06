const stats = [
  {
    value: "100K+",
    label: "Happy Clients",
    icon: <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8 M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z M8.5 13.5 6 22l6-3.5 6 3.5-2.5-8.5" />,
  },
  {
    value: "20-30 Min",
    label: "Avg. Response",
    icon: <path d="M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    value: "500+",
    label: "Monthly Services",
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z" />,
  },
];

const StatsBar = () => {
  return (
    <section className="bg-gray-light py-10 dark:bg-bg-color-dark">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          Trusted by Drivers Across Dubai
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-primary hover:shadow-[0_8px_30px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both] dark:bg-dark dark:ring-stroke-dark sm:p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20 sm:h-12 sm:w-12">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary sm:h-6 sm:w-6">
                  {stat.icon}
                </svg>
              </span>
              <h3 className="text-lg font-bold text-primary sm:text-3xl md:text-4xl">
                {stat.value}
              </h3>
              <p className="text-xs font-medium text-body-color sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
