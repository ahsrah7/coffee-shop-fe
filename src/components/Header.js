import React from 'react'
import { profilePic } from '../constants'
function Header() {
  return (
    <div className='flex justify-end p-4' ><img loading='lazy' src={profilePic} width={80} className='rounded-full' /></div>
  )
}

export default Header