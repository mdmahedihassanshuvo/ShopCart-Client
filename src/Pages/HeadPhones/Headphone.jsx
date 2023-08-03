import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Headphone = () => {

    const { loading, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: displayHeadphones = [], refetch } = useQuery({
        queryKey: ['displayHeadphones'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/display')
            console.log(res.data)
            return res.data
        }
    })
    console.log(displayHeadphones)

    const handleAddCart = () => {
        if(!user){
            navigate('/login');
        }
    }

    return (
        <div className='lg:my-10'>
            <h1 className='text-3xl font-semibold lg:mb-16'>Headphones for you !</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    displayHeadphones.map((headphone) => (
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                            <div className="card-body">
                                <div className=''>
                                    <h2 className="card-title">${headphone.name}</h2>
                                    <p className="text-lg font-medium">price: ${headphone.price}</p>
                                </div>
                                <p>{headphone.details}</p>
                                <div className="card-actions justify-start">
                                    <button onClick={handleAddCart} className="btn bg-white border border-black hover:bg-[#003c2a] hover:text-white transition-colors">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Headphone;