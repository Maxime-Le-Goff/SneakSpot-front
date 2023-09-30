import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { ShoeCard } from "../components";
import { useState } from "react";

const Hero = ({ shoes, bigImg }) => {
  const [showBigImg, setShowBigImg] = useState(bigImg);

  return (
    <section 
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3">Sneakers</span>
        </h1>
        <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Sneakers arrivals, quality comfort and innovation for your active life</p>
        <Button 
          label="Shop Now"
          iconURL={arrowRight}

        />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          <div>
          <p className="text-4xl font-palanquin font-bold">1K+</p>
          <p className="leading-7 font-montserrat text-slate-gray">Brands</p>
          </div>

          <div>
          <p className="text-4xl font-palanquin font-bold">500</p>
          <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
          </div>

          <div>
          <p className="text-4xl font-palanquin font-bold">250k+</p>
          <p className="leading-7 font-montserrat text-slate-gray">Customers</p>
          </div>
          
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={showBigImg}
          alt="shoe collection"
          className="object-contain relative w-[610px] h-[500px]"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]">
          {
            shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard 
                  imgURL={shoe}
                  changeBigShoeImg={(shoe) => {
                    setShowBigImg(shoe)
                  }}
                  bigShoeImg={showBigImg}
                />
              </div>
            ))
          }
  </div>
      </div>
    </section>
  )
}

export default Hero