import Breadcrumb from "@/components/Common/Breadcrumb";
import tyreBrands from "@/data/tyreBrands";
import Link from "next/link";

const TyreBrandsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tyre Brands"
        description="Browse all the tyre brands we stock and fit, with same-day delivery and fitting."
      />
      <section className="pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {tyreBrands.map((brand) => (
              <div key={brand.slug} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <Link
                  href={`/tyre-brands/${brand.slug}`}
                  className="mb-8 block rounded-lg bg-white p-6 shadow-one hover:shadow-two dark:bg-dark dark:shadow-three"
                >
                  <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                    {brand.title}
                  </h3>
                  <p className="text-base text-body-color">{brand.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TyreBrandsPage;
