import React from 'react'
import About_Hero from '../Components_2/About_Hero'
import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components_2/Contactus'

export default function About6to10() {
    return (
        <div style={{ maxWidth: '1600px' }}>
            <NavScrollExample/>
            <About_Hero/>
            <CommunityAim/>
            <Whyjoin />
            <Whocanjoin />
            <Howtojoin />
            <Contactus />
        </div>
    )
}
