import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Completion = () => {

    const navigate= useNavigate();

    useEffect(() => {

        setTimeout(() => {
            navigate('/');
        }, 4000)

    }, [navigate]);
    
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
        <p className="text-emerald-500 font-semibold text-2xl">Payment Successful</p>
        <p className="font-palanquin">Your about to be redirected</p>
        <p className="font-palanquin font-semibold">If you are not redirected in the next seconds you can always click <Link to="/" className="text-sky-600 underline">here</Link></p>
    </div>
  )
}

export default Completion