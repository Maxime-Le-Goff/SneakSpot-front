import Auth from "./Auth"

const Dialog = ({ open, handleDialog, handleUser }) => {
  
  return (
    <dialog open={open} className="w-full h-screen md:h-fit md:w-[45%] z-40 fixed md:top-[4%] md:left-[30%] left-0 top-0">
    <div className={`${open ? "fixed top-0 left-0 -z-50 w-full h-screen bg-black bg-opacity-25": ""}`} />
    <Auth handleDialog={handleDialog} handleUser={handleUser}/>

    </dialog>
  )
}

export default Dialog