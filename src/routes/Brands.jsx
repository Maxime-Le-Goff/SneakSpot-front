import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";

const Brands = () => {
    const data = useLoaderData();

  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r">
            <div className="max-container max-sm:mt-12 pt-28">
                <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
                <span className="xl:bg-white xl:whitespace-nowrelative z-10">Explore the Best Selection of</span>
                <span className="text-coral-red inline-blmt-3"> Brands</span>
                </h1>
                <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Find the Best Brands Available</p>
            </div>
      </section>
      <section className="padding-x padding-b">
        <section className="max-container max-sm:mt-12">
            <div className="flex flex-1 flex-wrap gap-10">

                {
                    data.map((brand) => (
                        <BrandCard 
                            key={brand.id}
                            {...brand}
                        />
                    ))
                    }
            </div>
        </section>
      </section>
    </main>
  )
}

export default Brands;