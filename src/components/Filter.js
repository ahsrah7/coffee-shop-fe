import React from 'react'

function Filter(props) {
  return (
    <div className='flex flex-row align-middle pl-2 '>
    <div className='pl-2 relative'>
    <i className="fi fi-rr-search absolute top-4 left-6 text-xl text-gray hover:text-deepLagoanBlue"></i>
    <input className='p-4 pl-10 bg-lighterGray rounded-lg focus:outline-none focus:ring focus:border-deepLagoanBlue' placeholder='Search' value={props.searchText} onChange={props.handleChange} /></div>
    <i class="fi fi-rr-settings-sliders text-lg text-white bg-deepLagoanBlue p-4 pb-3 rounded-2xl ml-2 border-2 hover:text-deepLagoanBlue hover:bg-white hover:border-deepLagoanBlue hover:border-2 hover:cursor-pointer"></i>
    </div>
  )
}

export default Filter;
