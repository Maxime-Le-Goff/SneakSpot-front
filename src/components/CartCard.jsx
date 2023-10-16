const CartCard = ({ brand, color, img, model, price, rating }) => {
  return (
    <div className="border border-slate-200 flex flex-col lg:h-[350px] lg:flex-row">
        <div className="lg:w-[40%] h-[250px] lg:h-fit flex justify-center items-center bg-hero bg-cover bg-center">
            <img 
                src={img}
                className=" w-fit h-[350px]"
            />
        </div>
        <div className="flex flex-col gap-4 capitalize w-full">
            <div className="pt-5 pl-5 flex flex-col gap-2">
                <h2 className="font-montserrat text-black font-semibold text-2xl">{brand.name} {model}</h2>
                <h3 className="font-montserrat text-black font-semibold text-xl">{color}</h3>
            </div>
            <div className="flex mt-5 pl-5">
            <p><span className="font-semibold text-lg font-montserrat uppercase">Size :</span> 43</p>
            </div>
            <div className="flex pl-5">
            <p><span className="font-semibold text-lg font-montserrat uppercase">Quantity :</span> 1</p>
            </div>
            <div className="flex pl-5">
            <p><span className="font-semibold text-lg font-montserrat uppercase">Price :</span> {price}$</p>
            </div>
            <p className="mb-4 pl-5 font-montserrat">Free Shipping</p>
            <div className="border border-t-slate-200 h-full w-full flex items-center pl-5">
                <a className="text-sky-600 cursor-pointer">Delete</a>
            </div>
        </div>
    </div>
  )
}

export default CartCard