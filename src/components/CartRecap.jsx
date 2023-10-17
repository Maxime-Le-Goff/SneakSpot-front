const CartRecap = ({ totalPrice, nbrArticles }) => {
  return (

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
                <h4 className="font-semibold">shipping</h4>
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
            <button className="w-full bg-coral-red text-white p-3 font-semibold my-5 hover:bg-red-500">Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartRecap