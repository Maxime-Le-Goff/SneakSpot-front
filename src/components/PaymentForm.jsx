import { useState } from "react"
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { createOrder, removeAllProductsFromCart } from "../api";
import { Link, useNavigate } from "react-router-dom";

const PaymentForm = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState('');
    const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);
    const [paymentDenied, setPaymentDenied] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url:`${window.location.origin}/completion`,
            },
            redirect: 'if_required',
        });

        if(error) {

            setMessage(error.message);
            setPaymentDenied(true);

        } else if(paymentIntent && paymentIntent.status === "succeeded") {

            setMessage('Payment completed, you will be redirected to the homepage.');
            setPaymentDenied(false);
            setPaymentSuccessfull(true);
            createOrder()
            .then(() => {
            removeAllProductsFromCart();
            })
            .catch((error) => {
            console.error("Error creating order:", error);
            });
            setTimeout(() => {
                navigate('/');
                setPaymentSuccessfull(false);
            }, 3000)

        } else {

            setMessage("Unexpected state");

        }
        setIsProcessing(false);
    }

  return (
    <form id="payment-form" className="flex flex-col " onSubmit={handleSubmit}>
        <h2 className="uppercase text-2xl text-center mb-16">Proceed to Checkout : {amount}$</h2>
        <h3 className="mb-10">This is a demo, you can test the payment using this card code: <br/> 4242 4242 4242 4242</h3>
    <PaymentElement />
        <button disabled={isProcessing} className="mt-10 bg-coral-red hover:bg-red-500 rounded-md px-5 py-2 text-white w-fit self-center">
            <span>
                {isProcessing ?'Processing' : 'Pay now'}
            </span>
        </button>
        <p className={`mt-10 text-lg text-white p-4 rounded-md text-center ${paymentSuccessfull ? 'bg-emerald-400' : '' } ${paymentDenied ? 'bg-red-400' : '' }`}>{message}</p>
        
        <Link to="/" className='mt-8 text-sky-600 hover:underline'>Return to Site</Link>
    </form>
  )
}

export default PaymentForm
