import { Outlet, useLoaderData } from "react-router-dom"
import { Footer, Nav } from "../components"



const Root = () => {
    const data = useLoaderData();
    const brands = data.brands;
    const sneakers = data.sneakers;
    
    return (
        <>
            <Nav brands={brands} sneakers={sneakers}/>
            <Outlet />
            <section className="bg-black padding-x padding-t pb-8">
            <Footer />
            </section>
        </>
    )
}

export default Root
