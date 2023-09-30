import { SneakerCard } from "../components"

const ProductsDisplay = ({ allSneakers }) => {
  return (
    <section className="max-container max-sm:mt-12">
        <div className="mt-16 place-content-center grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {
                allSneakers.map((sneaker, index) => (
                    <SneakerCard
                        key={index}
                        {...sneaker}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ProductsDisplay