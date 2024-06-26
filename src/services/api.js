const BASE_URL = process.env.REACT_APP_BASEURL;  

export const getAllCoffeeShops = async () => {
    const response = await fetch(`${BASE_URL}coffeeShops`);
    if (!response.ok) {
        throw new Error('Failed to fetch coffee shops');
    }
    return response.json();
};

export const getCoffeeShopById = async (id) => {
    const response = await fetch(`${BASE_URL}coffeeShops/${id}`);
    if (!response.ok) {
        throw new Error('Coffee shop not found');
    }
    return response.json();
};

export const getAllProductsByCoffeeShop = async (coffeeShopId) => {
    const response = await fetch(`${BASE_URL}products/coffeeShop/${coffeeShopId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};
