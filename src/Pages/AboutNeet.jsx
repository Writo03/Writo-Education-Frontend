import React from 'react'
import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components_2/Contactus'
import About_Neet from '../Components_2/About_Neet'

export default function AboutNeet() {
    return (
        <div style={{ maxWidth: '1600px' }}>
            <NavScrollExample/>
            <About_Neet/>
            <CommunityAim/>
            <Whyjoin />
            <Whocanjoin />
            <Howtojoin />
            <Contactus />
        </div>
    )
}
