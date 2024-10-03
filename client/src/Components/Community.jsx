/* eslint-disable react/jsx-pascal-case */
import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Community_nav from './Community_nav'
import Community_hero from './Community_hero' 
import Why_community from './Why_community'
import Connect from './Connect'
import Member from './Member'
import Community_contact from './Community_contact'
import Community_footer from './Community_footer'
const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
    <div className=' bg-[#E6F1F1]'> 
      <Navbar className='z-10'/>
      <Community_nav className='z-1'/>
      <Community_hero className='z-1'/>
    </div>
    <div className='bg-white'>
      <Why_community/>
      <Connect/>
      <Member/>
      <Community_contact/>
      <Community_footer/>
    </div>
   </>
  )
}

export default Community

{/* <div>
<div className=' bg-[#E6F1F1]'> 
  <Navbar className='z-10'/>
  <Community_nav className='z-1'/>
  <Community_hero className='z-1'/>
 
</div>
<div className='bg-white'>
<Why_community/>
<Connect/>
<Member/>
<Community_contact/>
<Community_footer/>
</div>
</div> */}