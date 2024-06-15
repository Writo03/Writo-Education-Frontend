import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Nav from './Components/Nav'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Menu />
      <Footer/>
    </div>
  )
}

export default App
