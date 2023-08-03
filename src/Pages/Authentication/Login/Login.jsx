import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import groovyWalkAnimation from "../../../assets/login.json";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '.././../../assets/images/google.png'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signUpUser, signUpWithGoogle } = useContext(AuthContext)

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signUpUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                reset();
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`
                })
            });

    }

    const handleGoogle = () => {
        event.preventDefault();
        signUpWithGoogle()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`
                })
            })
    }

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className='rounded'>
            <Helmet><title>ShopCart-Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200 rounded">
                <div className='flex justify-between items-center gap-5'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email?.type === "required" && (
                                        <p className='text-red-600 text-sm' role="alert">email is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                                    {errors.password?.type === "required" && (
                                        <p className='text-red-600 text-sm' role="alert">password is required</p>
                                    )}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 space-y-3">
                                    <button className="btn btn-primary">Login</button>
                                    <button onClick={handleGoogle} className="btn btn-primary"><img className='w-6' src={google} alt="" /> Login With Google</button>
                                </div>
                            </div>
                        </form>
                        <p>Don't have any account please, <Link to='/register' className='text-blue-600 underline'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;