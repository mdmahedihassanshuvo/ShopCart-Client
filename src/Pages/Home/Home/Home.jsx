import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Banner/Banner';
import Headphone from '../../HeadPhones/Headphone';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ShopCart-Home</title>
            </Helmet>
            <Banner/>
            <Headphone/>
        </div>
    );
};

export default Home;