const vehicles = [
  { icon: "🚗", label: "Sedans, SUVs & Crossovers" },
  { icon: "🏎️", label: "Luxury Brands (BMW, Mercedes & more)" },
  { icon: "🚚", label: "Pickups & Commercial Vans" },
  { icon: "🏍️", label: "Motorcycles & Scooters" },
  { icon: "🚛", label: "Fleet & Commercial Vehicles" },
  { icon: "🔋", label: "Hybrid & Electric Vehicles" },
];

const VehicleTypes = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            We Service It All
          </span>
          <h2 className="mb-10 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Whatever You Drive, We&apos;ve Got Tyres For It
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:justify-center md:gap-4">
          {vehicles.map((v, i) => (
            <span
              key={v.label}
              style={{ animationDelay: `${i * 100}ms` }}
              className="animate-[fadeInUp_0.5s_ease_both] flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-3 text-xs font-medium text-white opacity-0 sm:w-auto sm:gap-3 sm:px-5 sm:text-sm md:text-base"
            >
              <span className="text-xl leading-none">{v.icon}</span>
              <span className="leading-snug">{v.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;
