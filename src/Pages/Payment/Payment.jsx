import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {

    const { id } = useParams();
    // console.log(id);
    const { data: product = [], refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addCart/${id}`)
            console.log(res.data);
            return res.data;
        }
    })

    // console.log(product);

    return (
        <div className='lg:my-10' style={{ minHeight: '100vh' }}>
            <h1 className='text-3xl text-[#003c2a] font-semibold lg:mb-16'>Please provide your Bank details !</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm product={product}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;