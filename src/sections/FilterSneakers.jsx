import { useState, useMemo } from 'react';
import FilterItem from '../components/FilterItem';
import { filters, prices } from '../constants';

const FilterSneakers = ({ brands, types }) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const[data, setData] = useState();

  const toggleMenu = (e,index) => {
    const value = (e.target.textContent).split(' ')[0];
    
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
      />
    )),
    [selectedMenuIndex, data, toggleMenu]
  );

  return (
    <section className="max-container max-sm:mt-12 pt-28">
        <div className="mt-10">
        <h2 className="text-center text-4xl font-palanquin font-bold text-coral-red uppercase mb-10">Sneakers</h2>
    </div>
        <div className="mt-20 flex flex-1 gap-10 justify-center relative">
          {menuItems}
        </div>
    </section>
  );
};

export default FilterSneakers;