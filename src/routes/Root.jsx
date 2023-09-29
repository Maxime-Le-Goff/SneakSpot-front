import { Outlet, useLoaderData } from "react-router-dom"
import { Nav } from "../components"



const Root = () => {
    const data = useLoaderData();
    const brands = data.brands;
    const sneakers = data.sneakers;
    
    return (
        <>
            <Nav brands={brands} sneakers={sneakers}/>
            <Outlet />
        </>
    )
}

export default Root
