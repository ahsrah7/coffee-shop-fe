import React from 'react'

// focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg

function CoffeeShopCard({name,coverImage,distance,ratings,reviews}) {
  return (
    <div className='font-Raleway p-4 hover:shadow-lg transform transition hover:-translate-y-1'>
      <div className='absolute bg-gray border-2 border-white  rounded-full align-middle p-2 pb-0 -top-1 -right-1 hover:border-deepLagoanBlue'>
        <i className="fi fi-br-heart text-deepLagoanBlue text-xl"></i>
        </div>
      <div><img className='rounded-3xl h-96 w-full' loading="lazy" src={coverImage} alt={name} /></div>
      <div className='font-semibold text-deepLagoanBlue pt-1 pl-2'>{name}</div>
      <div className='flex flex-row flex-wrap pl-2'>
        <div className='flex flex-row'>
          <div><i className="fi fi-sr-star text-gold"></i></div>
          <div>{ratings}</div>
        </div>
        <div className='text-gray ml-2'>{' '}{`${reviews} reviews`}</div>
      </div>
      <div className='text-deepLagoanBlue pl-2'>{`${distance} miles`}</div>
    </div>
  )
}

export default CoffeeShopCard