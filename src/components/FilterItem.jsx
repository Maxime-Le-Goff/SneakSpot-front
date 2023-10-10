import { useState } from "react";

const FilterItem = ({ title, isOpen, onClick, data, handleFilterChange }) => {

  const [checkboxStates, setCheckboxStates] = useState({});
  
  const handleCheckboxChange = (name) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }
    ));
  };
  
    return (
      <>
        <div 
          className={`w-1/3 h-[70px] border border-slate-300 flex justify-between items-center cursor-pointer ${isOpen ? "bg-coral-red font-semibold" : ""}`}
          onClick={onClick}    
        >
          <p className="px-5 capitalize font-palanquin text-lg">{title}</p>
          <span className="px-5 text-xl">{isOpen ? ' ↑' : ' ↓' }</span>
          
        </div>
        {isOpen && (
          <div className={`border-2 text-disabled border-t-transparent bg-white absolute w-[100%] h-[150px] top-[100%] left-[0%] flex justify-around z-20`}>
              {
                data.map((d) => (
                  <div key={d.id} className="flex items-center" >
                    <div  className="flex items-center gap-2 hover:text-coral-red cursor-pointer" onClick={(e) => {
                      handleFilterChange(e.target.name, title)
                      }}>
                      <input type="checkbox" name={d.name} className="cursor-pointer" id={d.name} checked={checkboxStates[d.name] || false} onChange={() => handleCheckboxChange(d.name)} />
                      <label htmlFor={d.name} className="cursor-pointer" onChange={() => handleCheckboxChange(d.name)}>{d.name}</label>
                    </div>
                  </div>
                ))
              }
          </div>
        )}
        

        </>
        
    );
  };

export default FilterItem