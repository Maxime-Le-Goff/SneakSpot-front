import { star } from "../assets/icons";

const PopularProductCard = ({ model, rating, img, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <div className="bg-card bg-center bg-cover rounded-xl">
            <img
                src={img}
                alt={model}
                className="h-[280px] w-[280px] rounded-xl"
            />
        </div>
            <div className="mt-8 flex justify-start gap-5">
                <img 
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">{model}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal font-palanquin">{`$${price}`}</p>
    </div>
  )
}

export default PopularProductCard