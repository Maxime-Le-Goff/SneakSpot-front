import { headerLogo, sneakSpot } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
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
            <a className='fonts-montserrat leading-normal text-lg text-slate-gray'>
              Home
            </a>
          </li>
          <li>
            <a className='fonts-montserrat leading-normal text-lg text-slate-gray'>
              About Us
            </a>
          </li>
          <li>
            <a className='fonts-montserrat leading-normal text-lg text-slate-gray'>
              Products
            </a>
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