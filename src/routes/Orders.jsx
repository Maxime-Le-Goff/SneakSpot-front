import { useLoaderData } from "react-router-dom"
import OrderCard from "../components/OrderCard";
import { useEffect, useState } from "react";
import { getOrders } from "../api";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const response = getOrders()
    .then(res => {
      setOrders(res);
    })
  }, []);

  return (

    <main className="relative">
      <section className="padding-x">
            <div className="max-container pt-12 lg:pt-24">
                <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[45px] max-sm:leading-[70px] font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap z-10">Your</span>
                <span className="text-coral-red inline-mt-3"> Orders</span>
                </h1>
                <p className="font-monsterrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">History Of Your Orders</p>
            </div>
      </section>
      <section className="padding-x padding-b">
        <section className="max-container max-sm:mt-12">
            <div className="flex flex-1 flex-col md:flex-row flex-wrap gap-10 justify-between">

                {
                    orders.map((order) => (
                        <OrderCard 
                            key={order.id}
                            products = {order.product}
                            {...order}
                        />
                    ))
                    }
            </div>
        </section>
      </section>
    </main>
  )
}

export default Orders