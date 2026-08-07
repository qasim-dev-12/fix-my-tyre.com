import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import tyreBrands from "@/data/tyreBrands";

const BrandsShowcase = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Genuine Tyres, Fitted Wherever You Are in Dubai"
          paragraph="Fix My Tyre is a mobile tyre shop that brings certified, authentic tyres from the world's top brands straight to you. Every tyre we fit comes backed by a full manufacturer warranty and expert doorstep installation."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tyreBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/tyre-brands/${brand.slug}`}
              className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white"
            >
              {brand.image ? (
                <Image src={brand.image} alt={brand.title} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-16 w-16 text-dark" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a1 1 0 110 2 1 1 0 010-2zm0 12a1 1 0 110-2 1 1 0 010 2zm-6-6a1 1 0 112 0 1 1 0 01-2 0zm12 0a1 1 0 112 0 1 1 0 01-2 0zM7.76 7.76a1 1 0 111.42 1.42 1 1 0 01-1.42-1.42zm7.06 7.06a1 1 0 111.42 1.42 1 1 0 01-1.42-1.42zm0-7.06a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM7.76 16.24a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-4 pt-10">
                <span className="block text-lg font-bold text-white">
                  {brand.title.replace(" Tyres", "").replace(" Tires", "")}
                </span>
                <span className="text-sm text-primary">View Models →</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-body-color">
          All tyres provided by Fix My Tyre come with full manufacturer
          warranty and free doorstep fitting.{" "}
          <Link href="/warranty" className="text-primary">
            Terms and conditions apply.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default BrandsShowcase;
