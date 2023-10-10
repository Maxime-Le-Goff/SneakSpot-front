import { useState, useMemo } from 'react';
import FilterItem from '../components/FilterItem';
import { filters, prices } from '../constants';

const FilterSneakers = ({ brands, types, handleFilterChange, selectedCategoryFilters, selectedBrandFilters }) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const[data, setData] = useState();
  const allFilters = selectedBrandFilters.concat(selectedCategoryFilters);

  const toggleMenu = (e,index) => {
    const value = (e.target.textContent).split(' ')[0];
    console.log(allFilters);

    
    if(value === "brands") {
      setData(brands);
    } 
    else if(value === 'types') {
      setData(types)
    } 
    else {
      setData(prices)
    }

    setSelectedMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const menuItems = useMemo(() =>
    filters.map((filter, index) => (
      <FilterItem
        key={index}
        title={filter.title}
        isOpen={index === selectedMenuIndex}
        onClick={(e) => toggleMenu(e,index)}
        data={data}
        handleFilterChange={handleFilterChange}
        selectedBrandFilters={selectedBrandFilters}
        selectedCategoryFilters={selectedCategoryFilters}
      />
    )),
    [selectedMenuIndex, data, toggleMenu, handleFilterChange, selectedBrandFilters, selectedCategoryFilters]
  );

  return (
    <section className="max-container max-sm:mt-12 pt-28">
        <div className="mt-10">
        <h2 className="text-center text-4xl font-palanquin font-bold text-coral-red uppercase mb-10">Sneakers</h2>
    </div>
        <div className="mt-20 flex flex-1 gap-10 justify-center relative">
          {menuItems}
        </div>
        <div className='flex gap-10 padding-x'>
        {
          allFilters.map((filter, index) => (
            <div key={index} className='mt-5 rounded-xl px-10 py-3 bg-pale-blue text-slate-gray max-w-max justify-center items-center flex font-montserrat'>
              <p>{filter}</p>
            </div>
          ))
        }
        </div>
        
    </section>
  );
};

export default FilterSneakers;