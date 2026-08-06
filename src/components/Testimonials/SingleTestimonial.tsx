import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span
        key={index}
        style={{ animationDelay: `${index * 150}ms` }}
        className="star-twinkle text-yellow"
      >
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="h-full rounded-2xl border border-stroke-dark p-6">
      <div className="mb-4 flex items-center gap-1">{ratingIcons}</div>
      <p className="mb-6 text-base leading-relaxed text-body-color-dark">
        “{content}”
      </p>
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image src={image} alt={name} fill />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{name}</h3>
          <p className="text-xs text-body-color-dark">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
