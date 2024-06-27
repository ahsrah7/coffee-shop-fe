import React from 'react'

function ShimmerUI() {
  const cards = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='mt-10'>
    {cards.map((card)=>(<div key={card}>
      <div className='h-28 p-8 rounded-xl w-full bg-lighterGray mb-2'></div>
      <div className='h-2 w-full pt-1 pl-2 bg-lighterGray mb-2'></div>
      <div className='h-2 w-full pl-2 bg-lighterGray mb-2'>
      </div>
      <div className='h-2 w-full bg-lighterGray mb-2'></div></div>))
      
    }
    </div>
  )
}

export default ShimmerUI