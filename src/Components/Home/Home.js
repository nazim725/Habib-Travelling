import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Hotels></Hotels>
            <About></About>
            
            
        </div>
    );
};

export default Home;