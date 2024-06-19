import React from 'react'
import Navbar from './Navbar'
import Community_nav from './Community_nav'
import Community_hero from './Community_hero' 
import Why_community from './Why_community'
import Connect from './Connect'
import Member from './Member'
const Community = () => {
  return (
    <div>
      <div className=' bg-[#E6F1F1]'>
        <Navbar />
        <Community_nav />
        <Community_hero />
       
      </div>
      <div className='bg-white'>
      <Why_community/>
      <Connect/>
      <Member/>
      </div>
    </div>
  )
}

export default Community
