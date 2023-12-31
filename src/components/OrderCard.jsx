const OrderCard = ({ date, quantity, total_price,  products, img }) => {

    const dateString = date;
    const newDate = new Date(dateString);

    const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    };

const humanReadableDate = newDate.toLocaleString('en-US', options);

  return (

    <div className="md:w-full  flex flex-col items-center shadow-lg font-montserrat h-fit">
        <div className="w-full flex justify-between items-center border border-slate-50 p-3 shadow-sm">
            <p className="font-semibold">{humanReadableDate}</p>
            <p className="flex self-end text-slate-gray">{quantity} Articles</p>
        </div>
        <div className="flex flex-col items-center gap-5 w-full p-5">
            {
                products.map((product) => (
                    <div key={product.id} className="w-full flex justify-between">
                            <p className="w-[18%] text-coral-red sm:text-xl">{product.brand.name} {product.model}</p>
                            <p className="hidden sm:block text-slate-gray sm sm:text-lg"> X 1</p>
                            <p className="text-slate-gray sm:text-lg">Price : {product.price}$</p>
                        </div>
                ))
            }
            
        </div>
        <div className="h-[50px] border-t border-t-slate-200 w-full flex items-center px-5 justify-between">
                <p>Status: <span className="text-orange-500 sm:pl-3 font-semibold">Processing</span></p>
                <p className="font-semibold">Total : {total_price}$</p>
            </div>
    </div>
  )
}

export default OrderCard