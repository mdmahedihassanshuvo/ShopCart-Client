import React from 'react';
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/login.json";
import { Link } from 'react-router-dom';
import google from '.././../../assets/images/google.png'

const Login = () => {
    return (
        <div>
            <Helmet><title>ShopCart-Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className='flex justify-between items-center gap-5'>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 space-y-3">
                                    <button className="btn btn-primary">Login</button>
                                    <button className="btn btn-primary"><img className='w-6' src={google} alt="" /> Login With Google</button>
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