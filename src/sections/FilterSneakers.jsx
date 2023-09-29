import SneakerDescriptionCard from "../components/SneakerDescriptionCard"

const FilterSneakers = ({ allSneakers }) => {
  return (
    <section className="max-container max-sm:mt-12 pt-28">
        <h2 className="text-center text-4xl font-palanquin font-bold text-coral-red uppercase mb-10">Sneakers</h2>
        <div className="flex flex-wrap gap-10 justify-center">
            {
                allSneakers.map((sneaker, index) => (
                    <SneakerDescriptionCard 
                        key={index}
                        {...sneaker}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default FilterSneakers