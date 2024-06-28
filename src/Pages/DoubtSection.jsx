import React from 'react'
import Hero2 from '../Components_2/Hero2'
import NavScrollExample from '../Components_2/NavScrollExample'
import Contactus from '../Components_2/Contactus'
import Journey from '../Components_2/Journey'
import Reviews2 from '../Components_2/Reviews2'
// import Mentors from '../Components_2/Mentors'




export default function DoubtSection() {
  return (
    <div style={{maxWidth:'1600px'}}>
        <NavScrollExample/>
       <Hero2/>

   <h2 className="highlights my-5 text-center " >...... Student Journey ......</h2>
   <Journey/> 
<div className="mentorshead gradientheading">
        <h1 className='text-centered'>Join Millions Of Students using Writo</h1> 
         {/* <p> Faculty at writo</p>  */}
      </div>
   <Reviews2/>
   {/* <Mentors/> */}
   <Contactus/>
   </div>

  )
}
