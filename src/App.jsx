import Home from "./routes/Home";
import Products from "./routes/Products";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './routes/Root';
import { BrandsPageLoader, NavDataLoader, SneakerPageLoader, heroDataLoader } from './api';
import Brands from "./routes/Brands";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} loader={NavDataLoader}>
                <Route index element={<Home />} loader={heroDataLoader}  />
                <Route path='sneakers' element={<Products />} loader={SneakerPageLoader} />
                <Route path='brands' element={<Brands />} loader={BrandsPageLoader} />
            </Route>
        )
    )
  return (
    <div className='app'>
        <RouterProvider  router={router} />
    </div>
  )
}
export default App;