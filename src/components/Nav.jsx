import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Nav = ({ brands }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='py-8 absolute z-10 w-full padding-x'>
      <nav className='flex justify-between items-center max-conatiner'>
        <a href="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray'
              to="/"
              >
              Home
            </Link>
          </li>
          <li onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray relative'
              to="brands"
            >
              Brands
            </Link>
            {isMenuOpen && (
              <div className='bg-coral-red absolute w-screen block'>
                <ul>
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
          <li>
            <Link 
              className='fonts-montserrat leading-normal text-lg text-slate-gray'
              to="sneakers"
              >
              Sneakers
            </Link>
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