import { useState } from "react"
import { chip, visa } from "../assets/images"
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { createOrder, removeAllProductsFromCart } from "../api";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState('');
    const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);
    const [paymentDenied, setPaymentDenied] = useState('');

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
    <form id="payment-form" className="w-[50%] shadow-lg bg-white p-20 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="font-semibold text-2xl text-center mb-16">Proceed to Checkout : {amount}$</h2>
    <PaymentElement />
        <button disabled={isProcessing} className="mt-10 bg-coral-red hover:bg-red-500 rounded-md px-5 py-2 text-white">
            <span>
                {isProcessing ?'Processing' : 'Pay now'}
            </span>
        </button>
        <p className={`mt-10 text-lg text-white p-4 rounded-md text-center ${paymentSuccessfull ? 'bg-emerald-400' : '' } ${paymentDenied ? 'bg-red-400' : '' }`}>{message}</p>
    </form>
  )
}

export default PaymentForm
