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
    <section className="max-container max-sm:mt-12 pt-28">
        <div className="mt-10">
          <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrelative z-10">Explore the Best Selection of</span>
          <span className="text-coral-red inline-blmt-3"> Sneakers</span>
          </h1>
          <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Step into Style with the Latest Footwear</p>
        </div>
        <div className="mt-10 flex flex-1 gap-10 justify-center relative">
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