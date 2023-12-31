import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import AOS from 'aos';

const NewProduct = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { loading, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: displayHeadphones = [], refetch } = useQuery({
        queryKey: ['displayHeadphones'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('https://shopcart-server-three.vercel.app/display')
            console.log(res.data)
            return res.data
        }
    })
    console.log(displayHeadphones)

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
            const response = await axios.post('https://shopcart-server-three.vercel.app/addCart', cartItem);
            console.log(response.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${name} Add to Cart successfully`,
                showConfirmButton: false,
                timer: 1500
            })
            // You can add a success notification here if needed
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className='lg:my-10' data-aos="fade-down-left">
            <h1 className='text-2xl lg:text-3xl text-[#003c2a] font-semibold mb-5 lg:mb-16 text-center'>Headphones for you !</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    displayHeadphones.map((headphone) => (
                        <div key={headphone._id} className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='lg:h-[257px] lg:w-[384px]' src={headphone.image} alt="headphone" /></figure>
                            <div className="card-body">
                                <div className=''>
                                    <h2 className="card-title">{headphone.name}</h2>
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
        </div>
    );
};

export default NewProduct;