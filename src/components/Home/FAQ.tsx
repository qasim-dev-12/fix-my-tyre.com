import SectionTitle from "../Common/SectionTitle";
import FAQAccordion from "../Common/FAQAccordion";

const faqs = [
  { q: "How fast can you fix a flat tyre?", a: "Our technicians arrive within 20-30 minutes and repair or replace the tyre on-site in under 20 minutes." },
  { q: "Can I order a new tyre online for same-day fitting?", a: "Yes — book online and we will deliver and fit it same day across Dubai." },
  { q: "How much does tyre repair cost?", a: "Services start from AED 79 — we confirm exact pricing before starting work." },
  { q: "Are your tyres genuine and do they come with warranty?", a: "Yes — all tyres come with full manufacturer warranty." },
  { q: "Is there a charge for on-site inspection?", a: "No call-out fee. Inspection is free if you proceed with a repair or replacement." },
  { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
  { q: "What payment methods do you accept?", a: "Pay by card or pay by link, no cash needed." },
  { q: "Can every puncture be repaired, or do I need a new tyre?", a: "Our technicians inspect the damage first and give honest advice — repair when safe, replacement when necessary." },
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Common Questions About Tyre Repair Services in Dubai"
          paragraph=""
          center
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
