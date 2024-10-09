import React from 'react'
import NavScrollExample from '../Components_2/NavScrollExample'
import About_Hero from '../Components_2/About_Hero'
import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components/Contactus'
import img from '../assets/aboutheroimg.png'
import Navbar from '../Components/Navbar'
import Community_nav from '../Components/Community_nav'

export default function About6to10() {
    return (
        <div style={{ maxWidth: '1600px' }}>
            <Community_nav />
            <About_Hero 
            heading1="About Writo Student Community for 6th to 12th standard students"
            img={img}/>
            <CommunityAim/> 
            <Whyjoin /> 
            <Whocanjoin />
            <Howtojoin />
            <Contactus />
        </div>
    )
}
