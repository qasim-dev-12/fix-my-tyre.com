import SectionTitle from "../Common/SectionTitle";

const items = [
  {
    title: "30-Minute Emergency Response",
    paragraph:
      "Don't get stranded. Our technicians arrive within 30-45 minutes anywhere in Dubai.",
  },
  {
    title: "Certified Technicians, Fully Equipped",
    paragraph:
      "Trained for every vehicle type. Diagnose batteries accurately and fit them correctly.",
  },
  {
    title: "Transparent, No-Surprise Pricing",
    paragraph:
      "No call-out fee. The price you see is the price you pay, with no hidden charges.",
  },
  {
    title: "Complete Dubai Coverage",
    paragraph:
      "From Al Quoz to Palm Jumeirah, our mobile units cover every neighborhood and highway.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Why Choose Us" paragraph="" center />
        <div className="mx-auto max-w-3xl divide-y divide-stroke-dark">
          {items.map((item, i) => (
            <div key={item.title} className="flex gap-6 py-6">
              <span className="text-3xl font-extrabold text-primary/30 sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-base text-body-color-dark">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
