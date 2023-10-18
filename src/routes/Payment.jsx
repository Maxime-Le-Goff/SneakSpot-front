import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import PaymentForm from '../components/PaymentForm';

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
      console.log(response);
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
      <div className="max-container pt-12 lg:pt-24"/>
      <section className='padding-x padding-b'>
          <div className='flex flex-col min-h-screen justify-center items-center bg-slate-50 pb-14'>
            <PaymentForm handleSubmit={handleSubmit} />
          </div>
        </section>
    </main>
    
  );
};

export default Payment;