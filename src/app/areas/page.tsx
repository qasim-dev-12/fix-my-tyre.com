import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import areas from "@/data/areas";
import { slugify } from "@/lib/areaSlug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover | 800 Speedy",
  description: "Mobile tyre repair and replacement services across Dubai.",
};

const AREA_PHOTOS = 8;

const AreasPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Areas We Cover"
        description="Our mobile tyre repair vans are strategically positioned across Dubai for the fastest possible response — residential communities, highways, or your office."
      />
      <section className="pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {areas.map((area, index) => (
              <div key={area} className="mb-6 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Link
                  href={`/areas/${slugify(area)}`}
                  className="block overflow-hidden rounded-lg bg-white shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark dark:shadow-three"
                >
                  <div className="relative h-36 w-full">
                    <Image
                      src={`/images/areas/dubai-${(index % AREA_PHOTOS) + 1}.jpg`}
                      alt={`800 Speedy tyre service in ${area}, Dubai`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="px-4 py-3 text-center text-base font-medium text-black dark:text-white">
                    {area}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AreasPage;
