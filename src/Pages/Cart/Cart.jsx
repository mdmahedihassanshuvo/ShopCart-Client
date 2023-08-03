import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Cart = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addCart?email=${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    console.log(products);

    return (
        <div className='' style={{ minHeight: '100vh' }}>
            this is cart
        </div>
    );
};

export default Cart;