import axios from "axios";
import { Check, LockKeyhole, Mails, MapPin, User2 } from "lucide-react"
import { useState } from "react";

const SignUp = ({ handleDialog, setExistingUser, handleUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [userCreated, setUserCreated] = useState(false);

  const handleSignUp = async () => {
    const data = {
      name:name,
      email: email,
      password: password,
      adress:adress
    };
    try {
      const response = await axios.post('http://localhost:8080/api/signup', data);
  
      if (response.data.success) {
        setUserCreated(true)
        setAdress('');
        setEmail('');
        setPassword('');
        setName('');
        handleUser(true);
        setTimeout(() => {
          setUserCreated(false);
          handleDialog();
        }, 3000)

      } else {
        console.log('Error:', response);
      }
    } catch (error) {
      const errorCode = error.response.status;
      if(errorCode === 409) {
        setExistingUser(true);
        setTimeout(() => {
          setExistingUser(false);
        }, 4000)
        
      }
    }
  };

  return (
    <div className="mt-16 flex flex-col gap-6 items-center">
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
            <User2 className="mx-7" />
            <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
          <Mails className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Email" value={email} name="emailSignUp" type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
          <MapPin className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Adress" type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
        </div>
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
          <LockKeyhole className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Password" value={password} type="password" name="passwordSignUp" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {userCreated && (
          <p className="text-white bg-emerald-400 rounded-lg p-5">User registered successfully
          </p>
        )}
        <div className="w-fit mt-2 cursor-pointer text-emerald-600 hover:bg-emerald-300 hover:text-white rounded-lg p-1">
          <Check size={35} onClick={() => handleSignUp()} />
        </div>
    </div>
  )
}

export default SignUp