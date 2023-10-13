import { useState } from 'react';
import Login from './Login';
import LogOut from './LogOut';

const Auth = ({ handleDialog, handleUser}) => {
    const [action, setAction] = useState('Log In');

  return (
    <div className="flex flex-col bg-white pb-7 h-screen md:h-fit ">
        {action === 'Log In' && (
            <Login handleDialog={handleDialog} handleUser={handleUser} />
        )}
        <div className="flex gap-7 mt-5 justify-center">
          <p 
            className={`flex justify-center items-center flex-wrap w-[150px] h-14 text-white ${action === 'Sign Up' ?'bg-coral-red' : 'bg-disabled'} rounded-full text-lg font-semibold cursor-pointer`}
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </p>
          <p 
            className={`flex justify-center items-center flex-wrap w-[150px] h-14 text-white ${action === 'Log In' ?'bg-coral-red' : 'bg-disabled'} rounded-full text-lg font-semibold cursor-pointer`}
            onClick={() => setAction('Log In')}
          >
            Log In
          </p>
        </div>
    </div>
  )
}

export default Auth