import { useLoaderData } from "react-router-dom"
import { FilterSneakers } from "../sections"
import { ProductsDisplay } from "../sections";


const Products = () => {
  const data = useLoaderData();
  const sneakers = data.allSneakers;
  const brands = data.brands;
  const categories = data.categories;
  
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <FilterSneakers brands={brands} types={categories} />
      </section>
      <section className="padding-x">
        <ProductsDisplay allSneakers={sneakers} />
      </section>
      
    </main>
  )
}

export default Products