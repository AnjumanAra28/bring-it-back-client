import React from 'react';
import Carousel from '../components/Carousel';
import LatestItems from '../pages/LatestItems';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <LatestItems></LatestItems>
        </div>
    );
};

export default Home;