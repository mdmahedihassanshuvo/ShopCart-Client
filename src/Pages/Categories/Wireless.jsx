import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Wireless = () => {

    const { data: wirelessHeadphones = [], refetch } = useQuery({
        queryKey: ['wirelessHeadphones'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/wireless')
            console.log(res.data)
            return res.data
        }
    })
    console.log(wirelessHeadphones)

    const [showAllHeadphones, setShowAllHeadphones] = useState(false);

    const handleHeadphones = () => {
        setShowAllHeadphones((prev) => !prev);

        if (!showAllHeadphones) {
            refetch();
        }
    };

    return (
        <div className='lg:my-10'>
            <Helmet><title>ShopCart-Wired-Headphone</title></Helmet>
            <h1 className='text-3xl font-semibold text-[#003c2a] lg:mb-16'>Wireless-Headphone for you !</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    showAllHeadphones
                        ? wirelessHeadphones.map((headphone) => (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                                <div className="card-body">
                                    <div className=''>
                                        <h2 className="card-title">${headphone.name}</h2>
                                        <p className="text-lg font-medium">price: ${headphone.price}</p>
                                    </div>
                                    <p>{headphone.details}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn bg-white border border-black hover:bg-[#003c2a] hover:text-white transition-colors">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        : wirelessHeadphones.slice(0, 6).map((headphone) => (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                                <div className="card-body">
                                    <div className=''>
                                        <h2 className="card-title">${headphone.name}</h2>
                                        <p className="text-lg font-medium">price: ${headphone.price}</p>
                                    </div>
                                    <p>{headphone.details}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn bg-white border border-black hover:bg-[#003c2a] hover:text-white transition-colors">Add to Cart</button>
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

export default Wireless;