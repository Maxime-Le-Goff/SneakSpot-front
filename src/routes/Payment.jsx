import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState(1000); // Amount in cents
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const response = await axios.post('http://localhost:8080/api/create-payment-intent', {
        amount: amount,
      });
      const { clientSecret } = await response.data;

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (error) {
        console.error(error);
      } else {
        console.log('Payment successful:', paymentIntent);
      }
    } else {
      console.error(error.message);
    }
  };

  return (

    <main className="relative">
        <section className="padding-x">
            <div className="max-container pt-12 lg:pt-24">
                <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[45px] max-sm:leading-[70px] font-bold ">Your
                <span className="text-coral-red inline-mt-3"> Cart</span>
                </h1>
                <div className="flex justify-between flex-col sm:flex-row sm:items-center mt-6 mb-14">
                    <p className="font-monsterrat text-slate-gray text-lg leading-8">Pay your Sneakers</p>
                </div>
            </div>
        </section>
        <section className='padding-x padding-b'>
            <form onSubmit={handleSubmit}>
                <CardElement className='border border-slate-200 p-5 rounded-md text-slate-gray'/>
                <button type="submit">Pay</button>
            </form>
        </section>
    </main>
    
  );
};

export default Payment;