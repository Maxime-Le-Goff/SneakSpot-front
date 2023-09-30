import { useLoaderData } from "react-router-dom"
import { FilterSneakers } from "../sections"
import { ProductsDisplay } from "../sections";


const Products = () => {
  const data = useLoaderData();
  const sneakers = data.allSneakers;
  
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <FilterSneakers />
      </section>
      <section className="padding-x">
        <ProductsDisplay allSneakers={sneakers} />
      </section>
      
    </main>
  )
}

export default Products