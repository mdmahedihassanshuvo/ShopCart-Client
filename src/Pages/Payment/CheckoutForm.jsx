import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ product }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cartError, setCartError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { name, details, _id, price } = product;
    // console.log(typeof _id);

    useEffect(() => {
        if (price < 0) {
            return;
        }
        axios.post('https://shopcart-server-three.vercel.app/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCartError(error.message);
        } else {
            setCartError('');
            // console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setCartError(confirmError);
        }

        // console.log('paymentIntent', paymentIntent);

        setProcessing(false);

        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
            const payment = {
                email: user?.email,
                data: new Date(),
                status: 'order pending',
                transactionId,
                name: name,
                price,
                cartItemId: _id
            }
            axios.post('https://shopcart-server-three.vercel.app/payment', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payment successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    }
                })
        }

    }

    return (
        <div>
            <form className='lg:w-1/2 mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    className='lg:mb-5 border border-slate-500 p-4'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-[#003c2a] text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cartError && <p className='text-red-600 text-center lg:mt-5'>{cartError}</p>}
            {transactionId && <p className='text-green-600 text-center lg:mt-5'>Payment Successful, Transaction ID: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;