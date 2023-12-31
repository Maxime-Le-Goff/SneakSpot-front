import { SneakerCard } from "../components"

const PopularProducts = ({ popularProducts, setOpenDialog }) => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
    <div className="flex flex-col justify-start gap-5" >
      <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top quality products</p>
    </div>
    <div className="mt-16 place-content-center grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
      {
        popularProducts.map((product, index) => (
            <SneakerCard 
              key={index}
              {...product}
              setOpenDialog={setOpenDialog}
            />
        )
        )
      }
    </div>
    </section>
  )
}

export default PopularProducts