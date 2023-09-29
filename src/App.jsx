import Home from "./routes/Home";
import Products from "./routes/Products";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './routes/Root';
import { NavDataLoader, heroDataLoader } from './Api';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} loader={NavDataLoader}>
                <Route index element={<Home />} loader={heroDataLoader}  />
                <Route path='sneakers' element={<Products />} />
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