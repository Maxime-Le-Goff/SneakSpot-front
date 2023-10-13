import { Outlet, useLoaderData } from "react-router-dom"
import { Footer, Nav } from "../components"
import { useState } from "react";
import Dialog from '../components/Dialog';

const Root = () => {
    const data = useLoaderData();
    const [openDialog, setOpenDialog] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    const handleUser = (choice) => {
        setIsUser(choice);
    }

    const brands = data.brands;
    const sneakers = data.sneakers;
    
    return (
        <>
            <Nav brands={brands} sneakers={sneakers} dialog={handleDialog} user={isUser} />
            <Dialog open={openDialog} handleDialog={handleDialog} handleUser={handleUser} />
            <Outlet />
            <section className="bg-black padding-x padding-t pb-8">
            <Footer />
            </section>
        </>
    )
}

export default Root
