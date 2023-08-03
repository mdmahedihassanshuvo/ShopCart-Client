import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const productId = useParams();
    const { id } = productId
    // console.log(id);
    const { data: product = [], refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/addCart/${id}`)
            console.log(res.data);
            return res.data;
        }
    })

    const { details, image, name, price, ratings } = product;
    console.log(product);

    return (
        <div className='' style={{ minHeight: '100vh' }}>
            <div className="hero min-h-screen rounded bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-4'>
                        <div className='space-y-4'>
                            <h1 className="text-5xl  font-bold">{name}</h1>
                            <p className="">{details}</p>
                            <p>{ratings}</p>
                            <p className='text-lg font-medium'>price: ${price}</p>
                        </div>
                        <div>
                            <button className="btn bg-[#003c2a] text-white hover:text-black hover:border hover:border-black">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;