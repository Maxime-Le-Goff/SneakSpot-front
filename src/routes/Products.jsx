import { useLoaderData } from "react-router-dom"
import { FilterSneakers } from "../sections"
import { ProductsDisplay } from "../sections";
import { useEffect, useState } from "react";


const Products = () => {
  const data = useLoaderData();
  const sneakers = data.allSneakers;
  const brands = data.brands;
  const categories = data.categories;
  const [filteredData, setFilteredData] = useState([]);
  const [showAllSneakers, setShowAllSneakers] = useState(true);
  const [selectedBrandFilters, setSelectedBrandFilters] = useState([]);
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);
  

  useEffect(() => {
    if (sneakers) {
      if (showAllSneakers) {
        setFilteredData(sneakers);
      } else {
        const filteredArray = sneakers.filter((sneaker) => {
          const brandFilterPassed =
            selectedBrandFilters.length === 0 ||
            selectedBrandFilters.includes(sneaker.brand.name);
            const categories = sneaker.category;
            const categoryFilterPassed =
            selectedCategoryFilters.length === 0 ||
            selectedCategoryFilters.includes(categories[0].name);
          return brandFilterPassed && categoryFilterPassed;
        });
        setFilteredData(filteredArray);
      }
    }
  }, [sneakers, selectedBrandFilters, selectedCategoryFilters, showAllSneakers]);

  const handleFilterChange = (filterName, filterType) => {
    if (filterType === "brands" && filterName !== undefined) {
    // Check if the filter is already selected
    if (selectedBrandFilters.includes(filterName)) {
      // Filter is already selected, so remove it
      setSelectedBrandFilters(selectedBrandFilters.filter((filter) => filter !== filterName));
    } else {
      // Filter is not selected, so add it
      setSelectedBrandFilters([...selectedBrandFilters, filterName]);
      setShowAllSneakers(false);
    }
  } else if(filterType === "types" && filterName !== undefined) {
    if (selectedCategoryFilters.includes(filterName)) {
      // Filter is already selected, so remove it
      setSelectedCategoryFilters(selectedCategoryFilters.filter((filter) => filter !== filterName));
    } else {
      // Filter is not selected, so add it
      setSelectedCategoryFilters([...selectedCategoryFilters, filterName]);
      setShowAllSneakers(false);
    }
  }
  };
  
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r">
        <FilterSneakers brands={brands} types={categories} handleFilterChange={handleFilterChange} selectedCategoryFilters={selectedCategoryFilters} selectedBrandFilters={selectedBrandFilters} />
      </section>
      <section className="padding-x padding-b">
        <ProductsDisplay allSneakers={filteredData} />
      </section>
      
    </main>
  )
}

export default Products