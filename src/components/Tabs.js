import React from 'react'

function Tabs({category,handleTab}) {
  return (
    <div className='flex justify-evenly py-2 pt-4 rounded-t-3xl bg-lighterGray'>
    <div className={`flex flex-col justify-center ${category.toLowerCase() =='coffee'? 'text-deepLagoanBlue':''}`} onClick={()=>handleTab("coffee")} >
        <div className='text-center hover:cursor-pointer'><i className={`fi fi-rr-mug-hot text-3xl `}></i></div>
        <div>Coffee</div>
    </div>
    <div className={`flex flex-col ${category.toLowerCase() == 'drinks'?'text-deepLagoanBlue':''}`} onClick={()=>handleTab("drinks")}>
    <div className='text-center hover:cursor-pointer'><i class={`fi fi-rr-drink-alt  text-3xl `}></i></div>
        <div>Drinks</div>
    </div>
    <div className={`flex flex-col ${category.toLowerCase() == 'food'?'text-deepLagoanBlue':''}`} onClick={()=>handleTab("food")}>
    <div className='text-center hover:cursor-pointer'><i class={`fi fi-rr-croissant  text-3xl `} ></i></div>
        <div>Food</div>
    </div>
</div>
  )
}

export default Tabs