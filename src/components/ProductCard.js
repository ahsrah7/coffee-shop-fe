import React from 'react'

function ProductCard({image,name,price,description}) {
  return (
    <div className='w-11/12 my-4 md:w-5/12 md:mt-4' >      
    <div className='flex flex-row p-4 shadow-md shadow-black relative'>
    <div className='absolute border-2 border-deepLagoanBlue  rounded-full align-middle px-2 py-1 -top-1 -right-1 hover:cursor-pointer hover:bg-deepLagoanBlue '>
        <i className="fi fi-sr-plus text-deepLagoanBlue text-sm hover:text-white"></i>
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