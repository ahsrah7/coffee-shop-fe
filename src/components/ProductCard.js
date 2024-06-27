import React from 'react'
import { checkout } from '../services/api'

function ProductCard({image,name,price,description}) {

  const checkoutHandler = async ({name,amount})=>{
    const order = await checkout({name,amount});
    console.log(order);
    var options = {
      "key": process.env.REACT_APP_RAZORPAY_KEY, 
      "amount": order.amount, 
      "currency": "INR",
      "name": "Coffee shop",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id,
       
      "callback_url":`${process.env.REACT_APP_BASEURL}orders/payment-verify`,
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open()
    
  }
  return (
    <div className='w-11/12 my-4 md:w-5/12 md:mt-4' >      
    <div className='flex flex-row p-4 shadow-md shadow-black relative'>
    <div className='group absolute border-2 border-deepLagoanBlue  rounded-full align-middle px-2 py-1 -top-1 -right-1 hover:cursor-pointer hover:bg-deepLagoanBlue ' onClick={()=>checkoutHandler({name,amount:price})}>
        <i className="fi fi-sr-plus text-deepLagoanBlue text-sm group-hover:text-white"></i>
        </div>
        <div className='pr-4'><img src={image} width={120} className='rounded-2xl' /></div>
        <div className='flex flex-col'>
            <div className='font-semibold '>{name}</div>
            <div className='text-sm text-deepLagoanBlue'>{description}</div>
            <div> &#36; {price}</div>
            
        </div>
    </div>
</div>
  )
}

export default ProductCard