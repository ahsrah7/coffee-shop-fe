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

export const checkout = async (data) => {
    const response = await fetch(`${BASE_URL}orders/checkout`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
      });
    if (!response.ok) {
        throw new Error('Failed to order checkout');
    }
    return response.json();
};

export const paymentVerify = async (data)=>{
    const response = await fetch(`${BASE_URL}orders/payment-verify`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
      });
    if (!response.ok) {
        throw new Error('Failed to verify order');
    }
}
