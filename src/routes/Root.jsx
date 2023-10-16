import { Outlet } from "react-router-dom"
import { Footer, Nav } from "../components"
import { useState } from "react";
import Dialog from '../components/Dialog';

const Root = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [user, setUser] = useState({})

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    const handleUser = (choice) => {
        setIsUser(choice);
    }
    
    return (
        <>
            <Nav dialog={handleDialog} isUser={isUser} user={user} />
            <Dialog open={openDialog} handleDialog={handleDialog} handleUser={handleUser} />
            <Outlet />
            <section className="bg-black padding-x padding-t pb-8">
            <Footer />
            </section>
        </>
    )
}

export default Root
