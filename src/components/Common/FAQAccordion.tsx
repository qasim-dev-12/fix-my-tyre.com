"use client";
import { useState } from "react";

const FAQAccordion = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[800px] space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.q}
          className="rounded-lg bg-white shadow-one transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-dark dark:shadow-three"
        >
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-black dark:text-white"
          >
            {faq.q}
            <span
              className={`ml-4 text-primary transition-transform duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
            >
              {open === index ? "−" : "+"}
            </span>
          </button>
          {open === index && (
            <p className="animate-[fadeInUp_0.3s_ease_both] px-6 pb-4 text-base text-body-color">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
