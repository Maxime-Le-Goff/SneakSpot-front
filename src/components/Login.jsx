import { Check, Eye, LockKeyhole, Mails } from "lucide-react"
import { useState } from "react"
import axios from "axios";
import { fetchUserProfile } from "../api";

const Login = ({ handleDialog, handleUser, setInvalidCredentials }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = async () => {

    const data = {
      email: email,
      password: password,
    };

    try {

      const response = await axios.post('http://localhost:8080/api/login_check', data);

      if (response.status === 200 ) {

        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', email);
        setEmail('');
        setPassword('');
        handleDialog();
        
        const userData = await fetchUserProfile(email, token);
        handleUser(true, userData);

      } else {
        console.log('Error:', response);
      }
    } catch (error) {
      const errorCode = error.response.status;
      if(errorCode === 401 || errorCode === 400 || errorCode === 404) {
        setInvalidCredentials(true);
        setTimeout(() => {
          setInvalidCredentials(false);
        }, 4000)
        
      }
    }
  };
  

  return (
    <>
        <div className="mt-16 flex flex-col gap-6 items-center">
            <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
              <Mails className="mx-7" />
              <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Email"  value={email} name="emailLogin" type='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md relative">
              <LockKeyhole className="mx-7" />
              <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Password" value={password} type={showPassword ? 'text':'password'} name="passwordLogIn" onChange={(e) => setPassword(e.target.value)} />
              <Eye className="cursor-pointer absolute right-5" onClick={() => setShowPassword(!showPassword)} />
            </div>
        </div>
        <div className="flex justify-around">
            <p className="mt-6 text-disabled text-sm">Lost Password ? <span className="text-coral-red cursor-pointer">Click Here</span></p>
          <div className="w-fit mt-2 cursor-pointer text-emerald-600 hover:bg-emerald-300 hover:text-white rounded-lg p-1">
            <p className="flex items-center gap-1" onClick={() => handleLogin()} >Confirm<Check size={35} /></p>
          </div>
        </div>
    </>
  )
}

export default Login