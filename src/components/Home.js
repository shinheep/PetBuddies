import React from 'react';
import ControlledCarousel from './Carousel';

const Home = () => {
    
    return (
        <div className='homePage'>

            <ControlledCarousel />

            <div className="homeText"><i class="fas fa-paw paw"></i> Adopt one of your own today!</div>

        </div>
    );
};

export default Home;