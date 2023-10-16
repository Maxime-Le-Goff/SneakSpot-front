import Home from "./routes/Home";
import Products from "./routes/Products";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './routes/Root';
import { BrandsPageLoader, SneakerPageLoader, fetchUserCart, heroDataLoader } from './api';
import Brands from "./routes/Brands";
import Cart from "./routes/Cart";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} >
                <Route index element={<Home />} loader={heroDataLoader}  />
                <Route path='sneakers' element={<Products />} loader={SneakerPageLoader} />
                <Route path='brands' element={<Brands />} loader={BrandsPageLoader} />
                <Route path='cart' element={<Cart />} loader={fetchUserCart} />
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