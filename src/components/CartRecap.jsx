const CartRecap = () => {
  return (

    <div className="flex flex-col w-full lg:w-[30%] gap-5 text-lg">
        <div className=" border border-slate-200 px-4">
            <h2 className="mt-3 font-semibold font-montserrat text-2xl">Command Recap </h2>
            <div className="flex justify-between font-montserrat mt-5">
                <h4 className="font-semibold">Sub-Total :</h4>
                <p className="font-montserrat">175$</p>
            </div>
            <p>2 articles</p>
            <hr className="my-5" />
            <div className="flex justify-between">
                <h4 className="font-semibold">Expedition</h4>
                <p>TBD</p>
            </div>
            <p>Modify the Shipment</p>
            <hr className="my-5" />
            <div className="flex justify-between mb-5">
            <h4 className="font-semibold">Total estimé</h4>
                <p>175$</p>
            </div>
        </div>
        <div className="border border-slate-200 px-4">
            <p>En cliquant sur « paiement » ou sur un autre mode de paiement, j’accepte les Conditions d’utilisation ainsi que la Déclaration de confidentialité.</p>
            <button className="w-full bg-black text-white font-montserrat p-3 font-semibold">Paiement</button>
        </div>
    </div>
  )
}

export default CartRecap