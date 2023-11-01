import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, User2 } from 'lucide-react';
import Dropdown from './Dropdown';

const Nav = ({ dialog, isUser, handleUser }) => {

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    // Add a click event listener to the entire document
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  return (
    <header className='py-8 absolute z-10 w-full padding-x'>
      <nav className='max-container flex'>
      <div>
          <img 
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className='hidden max-lg:block z-50 text-white relative'
            onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
          />
        </div>
      {isHamburgerClicked && (
          <div className='burger-nav'>
          <ul className='flex flex-1 justify-between items-center flex-col font-semibold text-black uppercase font-montserrat text-8xl'>
          <li className=''>
            <Link 
              className='fonts-montserrat leading-normal text-lg  hover:text-coral-red'
              to="/"
              onClick={() => setIsHamburgerClicked(false)}
              >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link 
              className='fonts-montserrat leading-normal text-lg  relative hover:text-coral-red'
              to="brands"
              onClick={() => setIsHamburgerClicked(false)}
            >
              Brands
            </Link>
          </li>
          
          <li className="relative">
            <Link 
              className='fonts-montserrat leading-normal text-lg  hover:text-coral-red'
              to="sneakers"
              onClick={() => setIsHamburgerClicked(false)}
              >
              Sneakers
            </Link>
          </li>
          { !isUser && (<div className='flex gap-5'>
          <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg hover:text-coral-red'
              to="#"
              onClick={() => dialog()}
            >
              Sign In / Sign Up
            </Link>
          </li>
        </div>)}
        </ul>
          </div>
        )}
        <Link to="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className='ml-5 xl:mr-96 lg:mr-40'
          />
        </Link>
        <ul className='flex flex-1 justify-between items-center max-lg:hidden'>
        <div className='flex gap-28'>
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
        </div>
        { !isUser && (<div className='flex gap-5'>
          <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              to="#"
              onClick={() => dialog()}
            >
              Sign In / Sign Up
            </Link>
          </li>
        </div>)}       
        </ul>
        <ul className='absolute right-[10%]'>
        { isUser && (
            <li className='flex gap-5'>
              <User2 
                className='text-slate-gray hover:text-coral-red cursor-pointer' 
                onClick={() => setDropdown(!dropdown)}
                ref={dropdownRef}
              />
              {dropdown && (
                <Dropdown handleUser={handleUser} />
              )}
              <Link to="cart">
                <ShoppingCart 
                  className='text-slate-gray cursor-pointer hover:text-coral-red' 
                />
              </Link>
            </li>
          )}
        </ul>
      </nav>
      
    </header>
    
  )
}

export default Nav