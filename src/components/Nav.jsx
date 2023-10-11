import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Nav = ({ brands, sneakers }) => {
  return (
    <header className='py-8 absolute z-10 w-full padding-x'>
      <nav className='flex justify-between items-center max-container'>
        <Link to="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              to="/"
              >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray relative hover:text-coral-red'
              to="brands"
            >
              Brands
            </Link>
          </li>
          
          <li className="relative">
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              to="sneakers"
              >
              Sneakers
            </Link>
          </li>
            <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              to="#"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          <img 
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className='hidden max-lg:block'
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav