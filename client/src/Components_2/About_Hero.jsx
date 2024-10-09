import React from 'react'

import './About_Hero.css'

export default function About_Hero(props) {
  return (
    <div>
      <div className="outerabouthero">
        <div className="innerabouthero">
            <div className="secc1 ">
                <h1 className="aboutheading my-4 text-center">{props.heading1}</h1>
                <p className="aboutcommunity1">Writo student community is a unique initiative by writo Education designed to foster students knowledge through collaborative learning and resource sharing.</p>
            </div>
            <div className="secc2">
            <img src={props.img} className="aboutheroimage" alt="..." />
            <p className="aboutcommunity2">Join interactive study groups and participate in workshops tailored to 6th to 10th students . Learn collaboratively with peers, tackling complex problems and enhancing your understanding through group discussions.
            Engage in peer-to-peer learning sessions where students can teach and learn from one another.</p>
            </div> 
        </div>
      </div>
    </div>
  )
}
