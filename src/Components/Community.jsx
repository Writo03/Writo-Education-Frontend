import React from 'react'
import Navbar from './Navbar'
import Community_nav from './Community_nav'
import Community_hero from './Community_hero' 
const Community = () => {
  return (
    <div>
      <div className=' bg-[#E6F1F1]'>
        <Navbar />
        <Community_nav />
        <Community_hero />
      </div>
    </div>
  )
}

export default Community
