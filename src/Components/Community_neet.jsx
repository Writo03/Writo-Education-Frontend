import React from 'react'
import Community_nav from './Community_nav'
import Navbar from './Navbar'
import Community_neet_hero from './Community_neet_hero'

const Community_neet = () => {
  return (
   <div>
     <div className=' bg-[#E6F1F1]'>
    <Navbar/>
     <Community_nav/>
    </div>
    <Community_neet_hero/>
   </div>
  )
}

export default Community_neet
