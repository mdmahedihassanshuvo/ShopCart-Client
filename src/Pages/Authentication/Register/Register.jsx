// import React from 'react';
// import { useForm } from "react-hook-form"
// import Lottie from "lottie-react";
// import { Helmet } from 'react-helmet-async';
// import groovyWalkAnimation from "../../../assets/login.json";
// import { Link } from 'react-router-dom';
// import google from '.././../../assets/images/google.png'

// const Register = () => {

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm()

//     const onSubmit = (data) => {
//         console.log(data)


//     }

//     console.log(watch("example")) // watch input value by passing the name of it

//     return (
//         <div>
//             <Helmet><title>ShopCart-Sign Up</title></Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className='flex justify-between items-center gap-5'>
//                     <Lottie animationData={groovyWalkAnimation} loop={true} />
//                     <div className="hero-content flex-col ">
//                         <div className="text-center lg:text-left">
//                             <h1 className="text-5xl font-bold">Sign Up now!</h1>
//                         </div>
//                         <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                             <div className="card-body">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Name</span>
//                                     </label>
//                                     <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
//                                     {errors.name?.type === "required" && (
//                                         <p className='text-red-600 text-sm' role="alert">Name is required</p>
//                                     )}
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
//                                     {errors.email?.type === "required" && (
//                                         <p className='text-red-600 text-sm' role="alert">email is required</p>
//                                     )}
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="password" placeholder="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} className="input input-bordered" />
//                                     {errors.password?.type === 'required' && <p className='text-red-600 text-sm' role="alert">Please input password</p>}
//                                     {errors.password?.type === 'minLength' && <p className='text-red-600 text-sm' role="alert">password must be 8 character</p>}
//                                     {errors.password?.type === 'pattern' && <p className='text-red-600 text-sm' role="alert">password must have one uppercase , one special, one digits, one lowercase character</p>}
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Photo</span>
//                                     </label>
//                                     <input type="text" placeholder="photo url" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control mt-6 space-y-3">
//                                     <button className="btn btn-primary">Sign Up</button>
//                                     {/* <button className="btn btn-primary"><img className='w-6' src={google} alt="" /> Sing Up With Google</button> */}
//                                 </div>
//                             </div>
//                         </form>
//                         <p>Already have an account please, <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;