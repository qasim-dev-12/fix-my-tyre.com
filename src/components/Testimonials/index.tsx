import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Adeel",
    designation: "Sheikh Zayed Road, Dubai",
    content:
      "800 Speedy saved me in the middle of the night. Technician arrived in 30 minutes, fixed my flat tyre, professional and quick. Highly recommended!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Fatima",
    designation: "JLT, Dubai",
    content:
      "I booked a puncture repair online, and they fixed my tyre within 30 minutes. Very professional service team. Highly recommended!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rashid",
    designation: "Sports City, Dubai",
    content:
      "Had a flat tyre late at night. 800 Speedy were the only service that got back to me on the half-hour weekend. Genuinely impressed.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Dubai Customers Say"
          paragraph="Trusted by 100,000+ satisfied automobile owners across the UAE."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, i) => (
            <div
              key={testimonial.id}
              style={{ animationDelay: `${i * 150}ms` }}
              className="animate-[fadeInUp_0.5s_ease_both] opacity-0"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
