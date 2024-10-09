import React from 'react'
import Community_nav from '../../Components/Community_nav'
import Community_hero from '../../Components/Community_hero' 
import Why_community from '../../Components/Why_community'
import Connect from '../../Components/Connect'
import Member from '../../Components/Member'
import Community_contact from '../../Components/Community_contact'
import Community_footer from '../../Components/Community_footer'
import CommunityCards from '../../Components/CommunityCards'
import HeroImage from '../../assets/communityjee.png'

const JeeCommunityPage = () => {
  return (
    <>
    <div className=' bg-[#E6F1F1]'> 
      
      <Community_nav className='z-1' />
      <Community_hero 
      className='z-1'
      heading1="Writo Student Community for JEE students"
       heading2="Shaping Students Future"
       heading3="Dynamic resourceful for JEE Students "
       link="/aboutjee"
       heroimg={HeroImage}/>
    </div>
    <div className='bg-white'>
      {/* <CommunityCards /> */}
      <Why_community/>
      <Connect course="JEE"/>
      <Member/>
      <Community_contact/>
      
    </div>
   </>
  )
}

export default JeeCommunityPage
