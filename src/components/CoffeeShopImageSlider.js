import React, {useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getCoffeeShopById } from '../services/api';

function CoffeeShopImageSlider({coffeeShopId}) {
  const [coffeeShop, setCoffeeShop] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchCoffeShopById = async () => {
      try {
          const data = await getCoffeeShopById(coffeeShopId);
          setCoffeeShop(data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching coffee shops:', error.message);
          // Handle error state or display error message
      }
  };

  fetchCoffeShopById();
  },[])
  return (
    <Carousel showThumbs={false}
    showIndicators={true}
    showArrows={false}
    showStatus={false}
    infiniteLoop={true}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      
       return (
         <span
           className='ml-4 relative bottom-12'
           onClick={onClickHandler}
           onKeyDown={onClickHandler}
           value={index}
           key={index}
           role="button"
           tabIndex={0}
           aria-label={`${label} ${index + 1}`}
         >
           <i className={`fi fi-ss-bullet ${isSelected?'text-gray':'text-white'}`}></i>
         </span>
       );
     }}
    >
   {coffeeShop && coffeeShop?.sliderImages.map((URL, index) => (
     <div className="slide">
       <img className='h-[50vh] object-cover'  src={URL} key={index} />
     </div>
   ))}
 </Carousel>
  )
}

export default CoffeeShopImageSlider