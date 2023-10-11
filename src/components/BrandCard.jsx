import { Link } from "react-router-dom"

const BrandCard = ({ name, logo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <Link
            to="#"
        >
            <img 
                src={logo}
                className="w-[250px] h-[250px] rounded-xl "
            />
            <p className="mt-1 font-palanquin text-3xl text-center font-bold hover:text-coral-red">{name}</p>
        </Link>
    </div>
  )
}

export default BrandCard