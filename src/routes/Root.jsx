import { Outlet } from "react-router-dom"
import { Footer, Nav } from "../components"
import { useEffect, useState } from "react";
import Dialog from '../components/Dialog';

const Root = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [user, setUser] = useState({})

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    const handleUser = (choice, user = null) => {
        if(user === null){
            setIsUser(choice);
            setUser({
                id:null,
                email:'',
                adress:'',
                roles:'',
                name:'',
            })
        } else {
            setIsUser(choice);
            setUser({
            id: user.id,
            email: user.email,
            name: user.name,
            roles: [user.roles],
            adress: user.adress,
        })
        }
        
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    },[])
   
    
    return (
        <>
            <Nav dialog={handleDialog} isUser={isUser} handleUser={handleUser} />
            <Dialog open={openDialog} handleDialog={handleDialog} handleUser={handleUser} />
            <Outlet context={setOpenDialog}/>
            <section className="bg-black padding-x padding-t pb-8">
            <Footer />
            </section>
        </>
    )
}

export default Root
