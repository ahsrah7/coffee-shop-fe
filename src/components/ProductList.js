import React, { useEffect, useState } from 'react';
import { getAllProductsByCoffeeShop } from '../services/api';
import ProductCard from './ProductCard';
import ShimmerUI from './ShimmerUI';

const ProductList = ({ coffeeShopId,category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryProducts,setCategoryProducts] = useState()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProductsByCoffeeShop(coffeeShopId);
                setProducts(data);
                setCategoryProducts(data.filter(product=>product.category.toLowerCase()==category))
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error.message);
                // Handle error state or display error message
            }
        };

        fetchProducts();
    }, [coffeeShopId]);

    useEffect(()=>{
        setCategoryProducts(products.filter(product=>product.category.toLowerCase()==category))
    },[category])

    if (loading) {
        return <ShimmerUI />;
    }

    return (
        <div>
            <div className='flex flex-wrap justify-between'>
                {categoryProducts.map(product => (
                   <ProductCard key={product._id} image={product.image} name={product.name} price={product.price} description={product.description} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
