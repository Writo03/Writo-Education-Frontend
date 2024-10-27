import React from 'react'
import './GetMore.css'
import { Link } from 'react-router-dom'

export default function GetMore() {
  return (
    <div>
      <div className="outergetmore my-5">
      <Link to="/chat-home" style={{ textDecoration: 'none' }}>
      <button type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" >Learn Live</button>
      </Link>
      <Link to="/chat-home" style={{ textDecoration: 'none' }}>
      <button type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" >Book a demo section</button>
      </Link>
      </div>
    </div>
  )
}
