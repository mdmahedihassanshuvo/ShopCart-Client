import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner from '../../../../assets/images/banner.jpg'
import banner1 from '../../../../assets/images/banner-1.jpg'
import banner2 from '../../../../assets/images/banner-3.jpg'
import banner3 from '../../../../assets/images/banner-4.jpg'

const Banner = () => {
    return (
        <div className='lg:mb-10'>
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            >
                <div>
                    <img className='opacity-75 rounded' src={banner2} />
                    <div className='absolute top-1/3 left-52 space-y-4'>
                        <h1 className='text-[#003d2a] text-5xl font-semibold'>Grab Upto 50% Off On <br /> Selected Headphone</h1>
                        <div className='text-left'>
                            <button className='btn bg-[#003d2a] border-0 text-white hover:bg-accent text-left'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='opacity-75 rounded' src={banner3} />
                    <div className='absolute top-1/3 left-52 space-y-4'>
                        <h1 className='text-[#003d2a] text-5xl font-semibold'>Grab Upto 50% Off On <br /> Selected Headphone</h1>
                        <div className='text-left'>
                            <button className='btn bg-[#003d2a] border-0 text-white hover:bg-accent text-left'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;