import { socialMedia, footerLinks } from '../constants'
import { footerLogo } from '../assets/images'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 flex-wrap max-lg:flex-col items-start">
        <div className="flex flex-col items-start">
          <a
            href="/"
          >
            <img 
              src={footerLogo}
              width={150}
              height={150}
            />
          </a>
          <p className="text-base font-monsterrat mt-6 sm:max-w-sm text-white-400 leading-7">Get shoes ready for the new term at your nearest store</p>
          <div className="flex items-center gap-5 mt-8">
            { socialMedia.map((social) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={social.alt}>
                <img 
                  src={social.src}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {
              footerLinks.map((section, index) => (
                 <div
                  key={index}
                 >
                 <h4 className='text-white font-monsterrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                 <ul>
                  {section.links.map((link, index) => (
                    <li 
                      key={index}
                      className='mt-3 text-white font-monsterrat text-base leading-normal hover:text-slate-gray cursor-pointer'  
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                 </ul>
                 </div>
              ))
            }
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start itels-center gap-2 font-monsterrat cursor-pointer'>
          <img 
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className='font-monsterrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer