import React from 'react';
import CoffeeShopList from '../components/CoffeeShopList';
import NavigationMenu from '../components/NavigationMenu';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header />
            <h1 className='font-Raleway font-semibold text-deepLagoanBlue text-2xl p-4'>Find a coffee shop
anywhere</h1>
            <CoffeeShopList />
            <NavigationMenu />
        </div>
    );
};

export default Home;
