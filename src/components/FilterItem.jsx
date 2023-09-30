import { useState } from "react";

const FilterItem = ({ title, isOpen, onClick }) => {
    return (
      <div 
        className="w-1/5 h-[70px] border border-slate-300 flex justify-between items-center cursor-pointer"
        onClick={onClick}    
      >
        <p className="px-5 capitalize font-palanquin text-lg">{title}</p>
        <span className="px-5 text-xl">{isOpen ? 'd' : '↓' }</span>
      </div>
    );
  };

export default FilterItem