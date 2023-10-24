import { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import PaymentForm from '../components/PaymentForm';

const Payment = () => {

  const stripePromise = loadStripe('pk_test_51O2BX3HuQFGcv7pkj9Q3efE3nbtxyJ535CnV34od58eiyreRYXZPe3ajmKKmwmhu1hichkBVx5KT1OaVmfjYXDoV004UCG8szt')
  const [amount, setAmount] = useState(1000); // Amount in cents
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      const response = axios.post('http://localhost:8080/api/create-payment-intent', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(res => {
        const data  =  res.data.clientSecret;

        setClientSecret(data);
      })
      
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }, [])

  return (

    <main className="relative">
      <div className="max-container pt-12 lg:pt-24"/>
      <section className='padding-x padding-b'>
          <div className='flex flex-col min-h-screen justify-center items-center bg-slate-50 pb-14'>
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
              <PaymentForm />
            </Elements>
          )}
          
          </div>
        </section>
    </main>
    
  );
};

export default Payment;