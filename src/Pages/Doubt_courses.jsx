import React from 'react'
import Hero3 from '../Components_2/Hero3'
import NavScrollExample from '../Components_2/NavScrollExample'
import ConnectCoaches from '../Components_2/ConnectCoaches'
import Contactus from '../Components_2/Contactus'
import Navvv from '../Components/Navv'
import Navbar from '../Components/Navbar'

export default function Doubt_courses() {
  return (
    <div>
          {/* <NavScrollExample/> */}
          <Navbar/>
          <Navvv/>
          <Hero3/>
          <h2 className="highlights my-5 text-center " >...... Get Connect to your Coaches ......</h2>
          <ConnectCoaches/>
          <Contactus />
    </div>
  )
}
