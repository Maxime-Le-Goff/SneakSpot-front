import { useLoaderData } from "react-router-dom"
import CartCard from "../components/CartCard"
import CartRecap from "../components/CartRecap";
import { useEffect, useState } from "react";

const Cart = () => {

    const products = useLoaderData().products;
    const [totalPrice, setTotalPrice] = useState(0);
    const [nbrArticles, setNbrArticles] = useState(0);
    useEffect(() => {
        const newTotalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
        setTotalPrice(newTotalPrice);
        const newNbrArticles = products.reduce((accumulator, product) => accumulator + 1 , 0);
        setNbrArticles(newNbrArticles);
    }, [products]);
    

  return (
    <main className="relative">
        <section className="padding-x">
            <div className="max-container pt-12 lg:pt-24">
                <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[45px] max-sm:leading-[70px] font-bold ">Your
                <span className="text-coral-red inline-mt-3"> Cart</span>
                </h1>
                <div className="flex justify-between flex-col sm:flex-row sm:items-center mt-6 mb-14">
                    <p className="font-monsterrat text-slate-gray text-lg leading-8">Review and manage your items before proceeding to checkout</p>
                </div>
            </div>
        </section>
        <section className="padding-x padding-b">
            <section className=" max-container max-sm:mt-12 flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col w-full lg:w-[65%] gap-10">
                {
                    products.map((product) => (
                        <CartCard 
                            key={product.id}
                            brand={product.brands}
                            {...product}
                        />
                    ))
                }
                </div>
                    <CartRecap totalPrice={totalPrice} nbrArticles={nbrArticles} />
            </section>
        </section>
    </main>
  )
}

export default Cart