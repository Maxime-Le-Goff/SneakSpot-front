import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CartRecap = ({ allProducts }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [nbrArticles, setNbrArticles] = useState(0);
    const [emptyCart, setEmptyCart] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {

        if(totalPrice === 0 ) {

            setEmptyCart(true);

        } else {

            navigate('/payments');
            localStorage.setItem('amount', totalPrice);
        }
    }
    
    useEffect(() => {

        const newTotalPrice = allProducts.reduce((accumulator, product) => accumulator + product.price, 0);
        setTotalPrice(newTotalPrice);

        const newNbrArticles = allProducts.reduce((accumulator, product) => accumulator + 1 , 0);
        setNbrArticles(newNbrArticles);

    },[allProducts])
    
  return (

    <>
    {emptyCart && (
            <p className="font-montserrat text-red-500 text-lg absolute">Your Cart is empty</p>
        )}
    <div className="flex flex-col w-full lg:w-[30%] gap-5 text-base sm:text-lg font-montserrat">
        <div className=" border border-slate-200 px-5">
            <h2 className="mt-5 font-semibold text-lg sm:text-2xl">Order Summary</h2>
            <div className="flex justify-between mt-6">
                <h4 className="font-semibold">Subtotal :</h4>
                <p className="text-sm sm:text-base">{totalPrice}.00$</p>
            </div>
            <p className="text-slate-gray font-palanquin">{nbrArticles} articles</p>
            <hr className="my-5" />
            <div className="flex justify-between">
                <h4 className="font-semibold">Shipping</h4>
                <p className="text-sm sm:text-base">TBD</p>
            </div>
            <p className="text-slate-gray font-palanquin">Modify the Shipment</p>
            <hr className="my-5"/>
            <div className="flex justify-between mb-5">
            <h4 className="font-semibold">Estimated Total</h4>
            <p className="text-sm sm:text-base">{totalPrice}.00$</p>
            </div>
        </div>
        <div className="border border-slate-200 px-5">
            <p className="text-xs text-slate-gray leading-5 mt-5">By clicking on «Proceed to Checkout», I accept the Terms of Use and the Privacy Statement.</p>
            <Link
                onClick={handleClick}
            >
            <button 
                className="w-full bg-coral-red text-white p-3 font-semibold my-5 hover:bg-red-500"
            >
                Proceed to Checkout
            </button>
            </Link>
        </div>
        

    </div>
    </>
  )
}

export default CartRecap