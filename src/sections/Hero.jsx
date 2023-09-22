import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images';
import { useEffect, useState } from "react"
import axios from "axios"
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/`)
      .then(res => {
        const productsArray = JSON.parse(res.data.products);
        console.log(productsArray);
        if (Array.isArray(productsArray)) {
          setShoes(productsArray);
        } else {
          console.error("Invalid data format:", productsArray);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
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
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div>
    {
      shoes.map((shoe, index) => (
        <div key={index}>
          <ShoeCard 
            imgURL={shoe}
            changeBigShoeImg={() => {}}
            bigShoeImg=""
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