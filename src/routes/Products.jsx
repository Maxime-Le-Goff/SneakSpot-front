import { useLoaderData, useOutletContext } from "react-router-dom"
import { FilterSneakers } from "../sections"
import { ProductsDisplay } from "../sections";
import { useEffect, useState } from "react";

const Products = () => {
  const data = useLoaderData();
  const setOpenDialog = useOutletContext();
  const sneakers = data.allSneakers;
  const brands = data.brands;
  const categories = data.categories;
  const [filteredData, setFilteredData] = useState([]);
  const [showAllSneakers, setShowAllSneakers] = useState(true);
  const [selectedBrandFilters, setSelectedBrandFilters] = useState([]);
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);
  

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
          const sneakerPrice = sneaker.price;
          const priceFilterPassed = 
            selectedPriceFilters.length === 0 ||
            selectedPriceFilters.some((priceRange) => {
              const int1 = parseInt(priceRange.split(',')[0]);
              const int2 = parseInt(priceRange.split(',')[1]);
              if (sneakerPrice >= int1 && sneakerPrice <= int2) {
                return true;
              } else {
                return false;
              }
            })
          return brandFilterPassed && categoryFilterPassed && priceFilterPassed;
        });
        setFilteredData(filteredArray);
      }
    }
  }, [sneakers, selectedBrandFilters, selectedCategoryFilters, showAllSneakers, selectedPriceFilters]);

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
  } else if(filterType === 'prices' && filterName !== undefined) {
      // Check if the filter is already selected
      if (selectedPriceFilters.includes(filterName)) {
        // Filter is already selected, so remove it
        setSelectedPriceFilters(selectedPriceFilters.filter((filter) => filter !== filterName));
      } else {
        // Filter is not selected, so add it
        setSelectedPriceFilters([...selectedPriceFilters, filterName]);
        setShowAllSneakers(false);
      }
  }
  };
  
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r">
        <FilterSneakers brands={brands} types={categories} handleFilterChange={handleFilterChange} selectedCategoryFilters={selectedCategoryFilters} selectedBrandFilters={selectedBrandFilters} selectedPriceFilters={selectedPriceFilters} />
      </section>
      <section className="padding-x padding-b">
        <ProductsDisplay allSneakers={filteredData} setOpenDialog={setOpenDialog} />
      </section>
    </main>
  )
}

export default Products