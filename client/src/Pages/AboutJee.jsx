import React from 'react'
import NavScrollExample from '../Components_2/NavScrollExample'
import About_Hero from '../Components_2/About_Hero'
import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components/Contactus'
import Community_nav from '../Components/Community_nav'
import img from '../assets/About_jee.png'
export default function AboutJee() {
    return (
        <div style={{ maxWidth: '1600px' }}>
        <Community_nav link="/aboutjee"/>
        <About_Hero 
        heading1="About Writo Student community for  JEE Students"
        img={img}/>
        <CommunityAim/> 
        <Whyjoin /> 
        <Whocanjoin />
        <Howtojoin />
        <Contactus />
    </div>
    )
}
