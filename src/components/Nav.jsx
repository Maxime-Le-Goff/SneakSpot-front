import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Nav = ({ brands, sneakers }) => {
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const [isSneakersMenuOpen, setisSneakersMenuOpen] = useState(false);

  const toggleBrandMenu = () => {
    setIsBrandMenuOpen(!isBrandMenuOpen);
  }

  const toggleSneakersMenu = () => {
    setisSneakersMenuOpen(!isSneakersMenuOpen);
  }

  return (
    <header className='py-8 absolute z-10 w-full padding-x'>
      <nav className='flex justify-between items-center max-conatiner'>
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
              className='fonts-montserrat leading-normal text-lg text-slate-gray'
              to="/"
              >
              Home
            </Link>
          </li>
          <li className="relative" onMouseEnter={toggleBrandMenu} onMouseLeave={toggleBrandMenu}>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray relative'
              to="brands"
            >
              Brands
            </Link>
            {isBrandMenuOpen && (
              <div className='nav-hover'>
                <ul className='my-6 flex items-center'>
                  {
                    brands.map((brand, index) => (
                      <Dropdown 
                        key={index}
                        {...brand}
                      />
                    ))
                  }
                </ul>
              </div>
            )}
          </li>
          
          <li className="relative" onMouseEnter={toggleSneakersMenu} onMouseLeave={toggleSneakersMenu} >
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray'
              to="sneakers"
              >
              Sneakers
            </Link>
            {isSneakersMenuOpen && (
              <div className='nav-hover'>
                <ul className='my-6 flex items-center'>
                  {
                    sneakers.map((sneaker, index) => (
                      <Dropdown 
                        key={index}
                        {...sneaker}
                      />
                    ))
                  }
                </ul>
              </div>
            )}
          </li>
            <li>
            <a className='fonts-montserrat leading-normal text-lg text-slate-gray'>
              Contact Us
            </a>
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