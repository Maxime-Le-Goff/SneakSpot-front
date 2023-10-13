import { Outlet, useLoaderData } from "react-router-dom"
import { Footer, Nav } from "../components"
import { useState } from "react";
import Dialog from '../components/Dialog';

const Root = () => {
    const data = useLoaderData();
    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    const brands = data.brands;
    const sneakers = data.sneakers;
    
    return (
        <>
            <Nav brands={brands} sneakers={sneakers} dialog={handleDialog} />
            <Dialog open={openDialog} handleDialog={handleDialog} />
            <Outlet />
            <section className="bg-black padding-x padding-t pb-8">
            <Footer />
            </section>
        </>
    )
}

export default Root
