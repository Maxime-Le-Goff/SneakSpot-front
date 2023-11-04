import axios from "axios";
import { Check, Eye, LockKeyhole, Mails, MapPin, User2 } from "lucide-react"
import { useState } from "react";

const SignUp = ({ handleDialog, setExistingUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [userCreated, setUserCreated] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [adressError, setAdressError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    // Check for at least 6 characters, one uppercase letter, and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {

    setNameError('');
    setEmailError('');
    setPasswordError('');
    setAdressError('');

    const data = {
      name:name,
      email: email,
      password: password,
      adress:adress
    };

    let hasErrors = false;

     if (!name) {
      setNameError('Name is required');
      hasErrors = true;
    }
    
    if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      hasErrors = true;
    }
    if (!adress) {
      setAdressError('Adress is required');
      hasErrors = true;
    }
    if (!isStrongPassword(password)) {
      setPasswordError('Password needs at least 6 characters, 1 digit and 1 uppercase');
      hasErrors = true;
    }
    
    if (hasErrors) {
      return;
    }

    try {
      const response = await axios.post('/signup', data);
  
      if (response.data.success) {
        setUserCreated(true)
        setAdress('');
        setEmail('');
        setPassword('');
        setName('');
        setTimeout(() => {
          setUserCreated(false);
          handleDialog();
        }, 2000)

      } else {
        console.log('Error:', response);
      }
    } catch (error) {
      const errorCode = error.response.status;
      if(errorCode === 409) {
        setExistingUser(true);
        setTimeout(() => {
          setExistingUser(false);
        }, 2000)
        
      }
    }
  };

  return (
    <div className="mt-5 flex flex-col gap-6 items-center">
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md relative">
            <User2 className="mx-7" />
            <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Name" type="text" value={name} onChange={(e) => {setName(e.target.value); setNameError('')}} />
            {nameError && <p className="text-red-600 absolute top-[100%]">{nameError}</p>}
        </div>

        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md relative">
          <Mails className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Email" value={email} name="emailSignUp" type='email' onChange={(e) => {setEmail(e.target.value); if(isValidEmail(e.target.value)){setEmailError('')}}} />
          {emailError && <p className="text-red-600 absolute top-[100%]">{emailError}</p>}
        </div>

        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md relative">
          <MapPin className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Adress" type="text" value={adress} onChange={(e) => {setAdress(e.target.value); setAdressError('')}} />
          {adressError && <p className="text-red-600 absolute top-[100%]">{adressError}</p>}
        </div>

        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md relative">
          <LockKeyhole className="mx-7" />
          <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Password" value={password} type={showPassword ?'text':'password'} name="passwordSignUp" onChange={(e) => {setPassword(e.target.value); if(isStrongPassword(e.target.value)){setPasswordError('')}}} />
          {passwordError && <p className="text-red-600 absolute top-[100%]">{passwordError}</p>}
          <Eye className="cursor-pointer absolute right-5" onClick={() => setShowPassword(!showPassword)} />
        </div>

        {userCreated && (
          <p className="text-white bg-emerald-400 rounded-lg p-5">User registered successfully
          </p>
        )}
        <div className="mt-5 w-fit cursor-pointer text-emerald-600 hover:bg-emerald-300 hover:text-white rounded-lg">
          <p className="flex justify-center items-center p-1 gap-1" onClick={() => handleSignUp()}>Confirm<Check size={35} /></p>
        </div>
    </div>
  )
}

export default SignUp