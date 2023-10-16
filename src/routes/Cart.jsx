import { useLoaderData } from "react-router-dom"
import CartCard from "../components/CartCard"
import CartRecap from "../components/CartRecap";

const Cart = () => {

    const products = useLoaderData().products;
    console.log(products);

  return (
    <main className="relative">
        <section className="padding-x">
            <div className="max-container pt-24">
                <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[45px] max-sm:leading-[70px] font-bold ">Your
                <span className="text-coral-red inline-mt-3"> Cart</span>
                </h1>
                <div className="flex justify-between items-center mt-6 mb-14">
                    <p className="font-monsterrat text-slate-gray text-lg leading-8">Review and manage your items before proceeding to checkout</p>
                    <p className="font-semibold font-montserrat">Price: 125$</p>
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
                    <CartRecap />
            </section>
        </section>
    </main>
  )
}

export default Cart