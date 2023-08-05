import React, { useEffect } from 'react';
import people1 from '../../../../assets/images/player-1.png'
import people2 from '../../../../assets/images/player-3.png'
import people3 from '../../../../assets/images/player-5.png'
import 'aos/dist/aos.css'; // Import the AOS CSS file
import AOS from 'aos';

const Testimonial = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='lg:mb-20' data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className='lg:mx-20'>
                <p className='text-[#003c2a] text-3xl text-center font-semibold lg:mb-2'>Testimonial</p>
                <p className='text-2xl text-center lg:mb-12'>What Our Customer Says</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mx-20 mx-5 mb-4 lg:mb-10'>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full w-16 ' src={people1} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full w-16' src={people2} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 rounded-lg shadow-xl'>
                    <div className='space-y-2'>
                        <p className='text-start mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-start items-center gap-5 mx-auto mb-3'>
                        <img className='border-2 border-cyan-400 rounded-full w-16' src={people3} alt="" />
                        <div>
                            <p className='font-semibold'>Winson Herry</p>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;