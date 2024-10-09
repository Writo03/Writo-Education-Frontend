import React from 'react'

import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components/Contactus'
import Community_nav from '../Components/Community_nav'
import About_Hero from '../Components_2/About_Hero'
import img from '../assets/About_neet.png'
export default function AboutNeet() {
    return (
        <div style={{ maxWidth: '1600px' }}>
        <Community_nav link="/aboutneet"/>
        <About_Hero 
        heading1="About Writo Student community for  NEET Students"
        img={img}/>
        <CommunityAim/> 
        <Whyjoin /> 
        <Whocanjoin />
        <Howtojoin />
        <Contactus />
    </div>
    )
}
