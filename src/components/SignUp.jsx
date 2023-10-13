import { LockKeyhole, Mails, User2, X } from "lucide-react"
import { useState } from "react"

const SignUp = ({ handleDialog }) => {

  const [action, setAction] = useState('Log In');

  return (
    <div className="flex flex-col bg-white pb-7">
        <div className=" flex flex-col items-center gap-5 w-full mt-7 ">
            <p className="text-coral-red text-4xl font-semibold">{action}</p>
            <X 
              size={40}
              className="absolute text-coral-red right-[8%] top-10 cursor-pointer"
              onClick={() => handleDialog()}
              />
            <div className="w-16 h-1 bg-coral-red rounded-lg"></div>
        </div>
        <div className="mt-16 flex flex-col gap-6 items-center">
            <div className="flex items-center w-[80%] h-20 bg-pale-blue rounded-md">
                <Mails className="mx-7" />
                <input className="h-12 w-[100%] bg-transparent border-none outline-none text-gray-300 text-lg" placeholder="Email"  type='email' />
            </div>
            {action === 'Sign Up' && (<div className="flex items-center w-[80%] h-20 bg-pale-blue rounded-md">
              <User2 className="mx-7" />
              <input className="h-12 w-[100%] bg-transparent border-none outline-none text-gray-300 text-lg" placeholder="Name" type="text" />
            </div>)}
            <div className="flex items-center w-[80%] h-20 bg-pale-blue rounded-md">
              <LockKeyhole className="mx-7" />
              <input className="h-12 w-[100%] bg-transparent border-none outline-none text-gray-300 text-lg" placeholder="Password" type="password" />
            </div>
        </div>
        <p className="pl-16 mt-6 text-disabled text-sm">Lost Password ? <span className="text-coral-red cursor-pointer">Click Here</span></p>
        <div className="flex gap-7 my-14 justify-center">
          <p 
            className={`flex justify-center items-center w-[25%] h-14 text-white ${action === 'Sign Up' ?'bg-coral-red' : 'bg-disabled'} rounded-full text-lg 
            font-semibold cursor-pointer`}
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </p>
          <p 
            className={`flex justify-center items-center w-[25%] h-14 text-white ${action === 'Log In' ?'bg-coral-red' : 'bg-disabled'} rounded-full text-lg font-semibold cursor-pointer`}
            onClick={() => setAction('Log In')}
          >
            Log In
          </p>
        </div>
        {/* <LockKeyhole />
        <User2 />
        <Mails /> */}
    </div>
  )
}

export default SignUp