/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Community_nav from './Community_nav'
import Navbar from './Navbar'
import Community_neet_hero from './Community_neet_hero'
import Why_community from './Why_community'
import Connect from './Connect'
import Neet_members from './Neet_members'
import Neet_conatct from './Neet_conatct'
import Community_contact from './Community_contact'
import Community_footer from './Community_footer'
const Community_neet = () => {
  return (
    <>
    <div className=' bg-[#E6F1F1]'>
    
      <Community_nav/>
      <Community_neet_hero/>
    </div>
    <div className='bg-white'>
      <Why_community/>
      <Connect/>
      <Neet_members/>
      {/* <Neet_conatct/> */}
      <Community_contact />
    </div>
    </>

  )
}

export default Community_neet
{/* <div>
<div className=' bg-[#E6F1F1]'>
 <Navbar/>
 <Community_nav/>
 <Community_neet_hero/>
</div>
<Why_community/>
<Connect />
<Neet_members/>
<Neet_conatct/>
<Community_footer/>
</div> */}