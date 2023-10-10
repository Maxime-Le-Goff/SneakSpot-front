import { useState } from "react";
import { prices } from "../constants";

const FilterItem = ({ title, isOpen, onClick, data }) => {
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
          <div className={`border border-slate-300  bg-white-400 absolute w-[100%] h-[150px] top-[100%] left-[0%] border-t-transparent flex justify-around z-20`}>
              {
                data.map((d) => (
                  <div key={d.id} className="flex items-center gap-2">
                    <input type="checkbox" name={d.name} />
                    <label htmlFor={d.name}>{d.name} </label>
                  </div>
                ))
              }
          </div>
        )}
        </>
        
    );
  };

export default FilterItem