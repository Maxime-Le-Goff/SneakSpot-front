import { X } from "lucide-react"
import SignUp from "./SignUp"

const Dialog = ({ open, handleDialog }) => {
  
  return (
    <dialog open={open} className="w-full h-screen md:h-fit md:w-[45%] z-40 fixed md:top-[10%] md:left-[30%] left-0 top-0">
    <div className={`${open ? "fixed top-0 left-0 -z-50 w-full h-screen bg-black bg-opacity-25": ""}`}/>
    <SignUp handleDialog={handleDialog}/>
      {/* 
        <div className=" w-full h-[25%] flex items-center justify-between bg-pale-blue px-8">
          <h2 className="font-montserrat font-semibold text-xl">Log In</h2>
          <X className="cursor-pointer" onClick={() => handleDialog()}/>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>

          <div className="bg-coral-red w-full h-full ">
            <input type="text" id="username" className="h-8 w-full py-2 px-4 border-none bg-white text-disabled transition " />
            <label htmlFor="username" className="absolute top-4 left-2 text-coral-red transition">Username</label>
          </div>
          <div className="bg-coral-red w-full h-full ">
            <input type="text" id="username" className="h-8 w-full py-2 px-4 border-none bg-white text-disabled transition " />
            <label htmlFor="username" className="absolute top-4 left-2 transition focus">Password</label>
          </div>
        </form>

        <button>Close</button> */}
    </dialog>
  )
}

export default Dialog