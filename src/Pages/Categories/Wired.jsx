import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Rating from 'react-rating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Wired = () => {

    const { loading, user } = useContext(AuthContext);

    const { data: wiredHeadphones = [], refetch } = useQuery({
        queryKey: ['wiredHeadphones'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/wired')
            console.log(res.data)
            return res.data
        }
    })
    console.log(wiredHeadphones)

    const [showAllHeadphones, setShowAllHeadphones] = useState(false);

    const handleHeadphones = () => {
        setShowAllHeadphones((prev) => !prev);

        if (!showAllHeadphones) {
            refetch();
        }
    };

    const handleAddCart = async (headphone) => {
        if (!user) {
            navigate('/login');
            return;
        }

        const { details, _id, price, name, ratings, image } = headphone;
        const cartItem = {
            email: user?.email,
            details,
            _id,
            price,
            name,
            ratings,
            image,
        };

        try {
            const response = await axios.post('http://localhost:5000/addCart', cartItem);
            console.log(response.data);
            // You can add a success notification here if needed
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className='lg:my-10'>
            <Helmet><title>ShopCart-Wired-Headphone</title></Helmet>
            <h1 className='text-3xl font-semibold text-[#003c2a] lg:mb-16'>Wired-Headphone for you !</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    showAllHeadphones
                        ? wiredHeadphones.map((headphone) => (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                                <div className="card-body">
                                    <div className=''>
                                        <h2 className="card-title">${headphone.name}</h2>
                                        <p className="text-lg font-medium">price: ${headphone.price}</p>
                                        <p className="text-sm font-medium">{headphone.ratings}
                                            <Rating
                                                placeholderRating={headphone.ratings}
                                                emptySymbol={<FaStarHalfAlt className='text-red-600' />}
                                                placeholderSymbol={<FaStar className='text-red-600' />}
                                                fullSymbol={<FaStar className='text-red-600' />}
                                            />
                                        </p>
                                    </div>
                                    <p>{headphone.details}</p>
                                    <div className="card-actions justify-start">
                                        <button onClick={() => handleAddCart(headphone)} className="btn bg-white border border-black hover:bg-[#003c2a] hover:text-white transition-colors">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        : wiredHeadphones.slice(0, 6).map((headphone) => (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                                <div className="card-body">
                                    <div className=''>
                                        <h2 className="card-title">${headphone.name}</h2>
                                        <p className="text-lg font-medium">price: ${headphone.price}</p>
                                        <p className="text-sm font-medium">{headphone.ratings}
                                            <Rating
                                                placeholderRating={headphone.ratings}
                                                emptySymbol={<FaStarHalfAlt className='text-red-600' />}
                                                placeholderSymbol={<FaStar className='text-red-600' />}
                                                fullSymbol={<FaStar className='text-red-600' />}
                                            />
                                        </p>
                                    </div>
                                    <p>{headphone.details}</p>
                                    <div className="card-actions justify-start">
                                        <button onClick={() => handleAddCart(headphone)} className="btn bg-white border border-black hover:bg-[#003c2a] hover:text-white transition-colors">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
            <div className='text-center lg:my-5'>
                <button onClick={handleHeadphones} className='btn bg-[#003c2a] text-white hover:bg-white hover:text-black border hover:border-black'>
                    {showAllHeadphones ? 'Show Less' : 'See All'}
                </button>
            </div>
        </div>
    );
};

export default Wired;