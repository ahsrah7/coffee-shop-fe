import React from 'react'

function NavigationMenu() {
  return (
    <div className='sticky bottom-0 z-50  flex justify-evenly bg-white p-4 pt-10'>
      <div className='hover:bg-deepLagoanBlue px-8 py-3 rounded-full transform ease-in-out transition hover:-translate-y-4 hover:text-white hover:cursor-pointer duration-300'><i className="fi fi-br-home  text-xl"></i></div>
      <div className='hover:bg-deepLagoanBlue px-8 py-3 rounded-full transform ease-in-out transition hover:-translate-y-4 hover:text-white hover:cursor-pointer duration-300'><i className="fi fi-br-heart  text-xl"></i></div>
      <div className='hover:bg-deepLagoanBlue px-8 py-3 rounded-full transform ease-in-out transition hover:-translate-y-4 hover:text-white hover:cursor-pointer duration-300'><i className="fi fi-br-bookmark text-xl"></i></div>
      <div className='hover:bg-deepLagoanBlue px-8 py-3 rounded-full transform ease-in-out transition hover:-translate-y-4 hover:text-white hover:cursor-pointer duration-300'><i className="fi fi-rr-user text-xl"></i></div>
    </div>
  )
}

export default NavigationMenu