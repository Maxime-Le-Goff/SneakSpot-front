import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { X } from 'lucide-react';

const Auth = ({ handleDialog, handleUser}) => {
    const [action, setAction] = useState('Log In');
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [existingUser, setExistingUser] = useState(false);


  return (
    <div className="flex flex-col bg-white pb-7 h-screen md:h-fit ">
      <div className=" flex flex-col items-center gap-5 w-full mt-7 ">
        { !invalidCredentials && !existingUser && (
          <p className="text-coral-red text-4xl font-semibold">{action}
          </p>
        )}
        { invalidCredentials && (
          <p className="text-white bg-red-400 rounded-lg p-5">Invalid Credentials, Please try Again
          </p>
        )}
        { existingUser && (
          <p className="text-white bg-red-400 rounded-lg p-5">This Email is Already Used
          </p>
        )}
        <X 
          size={40}
          className="absolute text-coral-red right-[8%] top-9 cursor-pointer"
          onClick={() => handleDialog()}
          />
        <div className="w-16 h-1 bg-coral-red rounded-lg"></div>
      </div>
    
        {action === 'Log In' && (
            <Login handleDialog={handleDialog} handleUser={handleUser} setInvalidCredentials={setInvalidCredentials} />
        )}
        {action === 'Sign Up' && (
            <SignUp handleDialog={handleDialog} handleUser={handleUser} setExistingUser={setExistingUser} />
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