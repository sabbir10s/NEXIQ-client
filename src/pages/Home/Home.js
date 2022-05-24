import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner/Banner';
import Download from './Download/Download';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summary />
            <Products />
            <Reviews />
            <Download />
            <Footer />
        </div>
    );
};

export default Home;