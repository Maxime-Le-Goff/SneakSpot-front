import Home from "./routes/Home";
import Products from "./routes/Products";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './routes/Root';
import { BrandsPageLoader, SneakerPageLoader, fetchUserCart, heroDataLoader } from './api';
import Brands from "./routes/Brands";
import Cart from "./routes/Cart";
import Payment from "./routes/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51O2BX3HuQFGcv7pkj9Q3efE3nbtxyJ535CnV34od58eiyreRYXZPe3ajmKKmwmhu1hichkBVx5KT1OaVmfjYXDoV004UCG8szt')

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} >
                <Route index element={<Home />} loader={heroDataLoader}  />
                <Route path='sneakers' element={<Products />} loader={SneakerPageLoader} />
                <Route path='brands' element={<Brands />} loader={BrandsPageLoader} />
                <Route path='cart' element={<Cart />} loader={fetchUserCart} />
                <Route path='payments' element={<Elements stripe={stripePromise}><Payment /></Elements>} />
            </Route>
        )
    )
  return (
    <div className='app'>
        <RouterProvider router={router} />
    </div>
  )
}
export default App;