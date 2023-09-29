import { useLoaderData } from "react-router-dom"
import FilterSneakers from "../sections/FilterSneakers"


const Products = () => {
  const data = useLoaderData();
  const sneakers = data.allSneakers;
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <FilterSneakers allSneakers={sneakers}/>
      </section>
    </main>
  )
}

export default Products