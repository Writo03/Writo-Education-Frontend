import React from 'react'
import Community_nav from '../../Components/Community_nav'
import Community_hero from '../../Components/Community_hero' 
import Why_community from '../../Components/Why_community'
import Connect from '../../Components/Connect'
import Member from '../../Components/Member'
import Community_contact from '../../Components/Community_contact'
import Community_footer from '../../Components/Community_footer'
import CommunityCards from '../../Components/CommunityCards'
import HeroImage from '../../assets/com.png'
const CommunityPage = () => {
  return (
    <>
    <div className=' bg-[#E6F1F1]'> 
      
      <Community_nav className='z-1' />
      <Community_hero 
      className='z-1'
      heading1="Writo Student Community for 6th - 10th students"
       heading2="Like Minded Indiviuals"
       heading3="shared interest,acadamic field,carrer goal "
       
       heroimg={HeroImage}
       />
    </div>
    <div className='bg-white'>
      <CommunityCards />
      <Why_community/>
      <Connect course="6-10 Class"/>
      <Member/>
      <Community_contact/>
      
    </div>
   </>
  )
}

export default CommunityPage
