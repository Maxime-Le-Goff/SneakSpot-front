import { deleteProductFromCart, fetchUserCart } from "../api"

const CartCard = ({ id, brand, img, model, price, allProducts, setProducts }) => {

    const handleProductDeleteFromCart = async() => {
        const success = await deleteProductFromCart(id);
        if (success) {
            // Update the local cart state after a successful removal
            const updatedCart = allProducts.filter((product) => product.id !== id);
            setProducts(updatedCart);
          }
        };
    
  return (
    <div className="border border-slate-200 flex flex-col lg:h-[250px] lg:flex-row shadow-md">
        <div className="lg:w-[40%] h-[225px] lg:h-fit flex justify-center items-center bg-hero bg-cover bg-center">
            <img 
                src={img}
                className=" w-fit h-[250px]"
            />
        </div>
        <div className="flex flex-col gap-4 capitalize w-full">
            <div className="pt-5 flex items-center justify-between px-5 text-base">
                <h2 className="font-montserrat text-coral-red font-semibold sm:text-2xl">{brand.name} {model}</h2>
                <h3 className="font-montserrat text-slate-gray font-semibold sm:text-xl">{price}.00$</h3>
            </div>
            <div className="flex mt-5 pl-5 text-sm">
            <p className="sm:text-lg text-slate-gray font-semibold font-montserrat uppercase"><span>Size :</span> 43</p>
            </div>
            <div className="flex pl-5 text-sm">
            <p className="sm:text-lg text-slate-gray font-semibold font-montserrat uppercase"><span>Quantity :</span> 1</p>
            </div>
            <div className="flex justify-between px-5">
                <p className="mb-4 font-montserra text-sm text-slate-gray sm:text-base">Home Delivery</p>
                <p className="text-emerald-400 font-semibold sm:text-lg">FREE</p>
            </div>
            <div className="border border-t-slate-200 h-full w-full flex items-center pl-5 py-3 lg:py-0">
                <a 
                    className="text-sky-600 cursor-pointer hover:underline"
                    onClick={() => handleProductDeleteFromCart()}
                >
                    Delete
                </a>
                    
            </div>
        </div>
    </div>
  )
}

export default CartCard