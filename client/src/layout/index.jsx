import React from 'react'
import logo from '../assets/logo.png'
import Navbar from '../Components/Layout/Navbar'
import Community_footer from '../Components/Layout/Footer'

const AuthLayouts = ({children}) => {
  return (
    <>
      <Navbar />

        { children }
        <Community_footer />
    </>
  )
}

export default AuthLayouts
