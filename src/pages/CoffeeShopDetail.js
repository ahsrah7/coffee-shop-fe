import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs';
import CoffeeShopImageSlider from '../components/CoffeeShopImageSlider';

const CoffeeShopDetail = () => {
    const { coffeeShopId } = useParams();
    const navigate = useNavigate();
    const [category,setCategory] = useState("coffee")
    const handleTab = (category)=>{
        setCategory(category)
    }

    return (
        <div className='max-w-screen-lg mx-auto '>
         <button onClick={()=>navigate(-1)} className='bg-white rounded-lg z-50 absolute  px-2 m-2 pb-0'><i class="fi fi-rs-angle-small-left text-3xl text-deepLagoanBlue hover:text-gray"></i></button>
        <CoffeeShopImageSlider coffeeShopId={coffeeShopId} />
         <div className='relative -top-12'>
            <Tabs category={category} handleTab={handleTab} />
            <ProductList coffeeShopId={coffeeShopId} category={category} />
        </div>
        </div>
    );
};

export default CoffeeShopDetail;
