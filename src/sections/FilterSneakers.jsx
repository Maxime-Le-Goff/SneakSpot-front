import { useState, useMemo } from 'react';
import FilterItem from '../components/FilterItem';
import { filters } from '../constants';

const FilterSneakers = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setSelectedMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const menuItems = useMemo(() =>
    filters.map((filter, index) => (
      <FilterItem
        key={index}
        title={filter.title}
        isOpen={index === selectedMenuIndex}
        onClick={() => toggleMenu(index)}
      />
    )),
    [selectedMenuIndex]
  );

  return (
    <section className="max-container max-sm:mt-12 pt-28">
        <div className="mt-10">
        <h2 className="text-center text-4xl font-palanquin font-bold text-coral-red uppercase mb-10">Sneakers</h2>
    </div>
        <div className="mt-20 flex flex-1 gap-10 justify-center">{menuItems}</div>
    </section>
  );
};

export default FilterSneakers;