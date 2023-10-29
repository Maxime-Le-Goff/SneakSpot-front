import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import PaymentForm from '../components/PaymentForm';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51O2BX3HuQFGcv7pkj9Q3efE3nbtxyJ535CnV34od58eiyreRYXZPe3ajmKKmwmhu1hichkBVx5KT1OaVmfjYXDoV004UCG8szt')


const Payment = () => {

  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const amount = localStorage.getItem('amount');
      console.log('oui');

      try {
        const response = await axios.post('http://localhost:8080/api/create-payment-intent', amount, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const client = response.data.clientSecret;
        const price = response.data.amount;
        setAmount(price);
        setClientSecret(client);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <main className="relative">
          <div className='flex flex-col min-h-screen justify-center items-center bg-slate-50'>
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
              <PaymentForm amount={amount} />
            </Elements>
          )}
          <Link to="/" className='mt-16 font-semibold hover:text-coral-red'>Return Home</Link>

          </div>
    </main>
    
  );
};

export default Payment;