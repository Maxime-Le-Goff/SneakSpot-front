import { useState, useMemo } from 'react';
import FilterItem from '../components/FilterItem';
import { filters, prices } from '../constants';

const FilterSneakers = ({ brands, types, handleFilterChange, selectedCategoryFilters, selectedBrandFilters, selectedPriceFilters }) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const[data, setData] = useState();
  const allFilters = selectedBrandFilters.concat(selectedCategoryFilters).concat(selectedPriceFilters);

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
      />
    )),
    [selectedMenuIndex, data, toggleMenu, handleFilterChange]
  );

  return (
    <section className="max-container pt-24">
        <div className="max-xl:padding-x">
          <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[45px] max-sm:leading-[70px] font-bold ">
          <span className="">Explore the Best Selection of</span>
          <span className="text-coral-red inline-mt-3"> Sneakers</span>
          </h1>
          <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Step into Style with the Latest Footwear</p>
        </div>
        <div className="mt-10 max-xl:padding-x flex flex-1 gap-10 justify-center flex-col sm:flex-row relative">
          {menuItems}
        </div>
        <div className='flex gap-x-10 gap-y-3 padding-x flex-wrap justify-center items-center'>
        {
          allFilters.map((filter, index) => (
            <div key={index} className='mt-5 rounded-xl px-5 py-3 bg-pale-blue text-slate-gray max-w-max justify-center items-center flex font-montserrat'>
              <p>{filter}</p>
            </div>
          ))
        }
        </div>
        
    </section>
  );
};

export default FilterSneakers;