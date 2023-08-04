import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useCart from '../../Hook/useCart';

const Cart = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [products, refetch] = useCart();

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['products', user?.email],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/addCart?email=${user?.email}`)
    //         console.log(res.data);
    //         return res.data;
    //     }
    // })

    console.log(products);

    const handleDetails = (productId) => {
        console.log(productId);
        navigate(`/details/${productId}`)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/addCart/${id}`)
            .then(res => {
                console.log(res.data)
                refetch();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='lg:my-10' style={{ minHeight: '100vh' }}>
            <h1 className='text-3xl text-[#003c2a] font-semibold lg:mb-16'>Here your choice !</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="headphone" />
                                                </div>
                                            </div>
                                            {/* <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div> */}
                                        </div>
                                    </td>
                                    <td className='font-medium'>
                                        {product.name}
                                    </td>
                                    <td className='font-medium'>${product.price}</td>
                                    <th>
                                        <p className="">{product.ratings}</p>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDetails(product._id)} className="btn bg-[#003c2a] text-white hover:text-black hover:border hover:border-black btn-sm">details</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(product._id)} className="btn bg-[#003c2a] text-white hover:text-black hover:border hover:border-black btn-sm">Delete</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;