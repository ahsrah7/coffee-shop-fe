import React, { useEffect, useState } from 'react';
import { getAllCoffeeShops } from '../services/api';
import CoffeeShopCard from './CoffeeShopCard';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import ShimmerUI from './ShimmerUI';

const CoffeeShopList = () => {
    const [coffeeShops, setCoffeeShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText,setSearchText] = useState("");
    useEffect(() => {
        const fetchCoffeeShops = async () => {
            try {
                const data = await getAllCoffeeShops();
                setCoffeeShops(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching coffee shops:', error.message);
                // Handle error state or display error message
            }
        };

        fetchCoffeeShops();
    }, []);

    if (loading) {
        return <ShimmerUI />;
    }

    return (
        <div>
            <Filter />
            <h2 className='font-Raleway font-semibold text-deepLagoanBlue text-lg p-4'>Featured coffee shops</h2>
            <div className='flex flex-wrap '>
                {coffeeShops.map(coffeeShop => (
                   <Link to={`/coffeeShop/${coffeeShop._id}`} className='w-6/12'> <CoffeeShopCard {...coffeeShop} key={coffeeShop._id} /></Link>
                ))}
            </div>
        </div>
    );
};

export default CoffeeShopList;
