import React,{useState} from 'react'
import img from '../assets/logo.png'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (
    <header className="bg-white flex flex-wrap items-center top-0">
    <div className="flex-1 flex items-center justify-start">
      <img src={img} alt="" className='w-10 ml-4'/>
      <div className="relative ml-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="pl-8 pr-4 py-2 border rounded-full custom-width"
        />
        <svg 
          className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-4.35-4.35m2.65-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" 
          />
        </svg>
      </div>
    </div>
  
    {/* Menu toggle button for mobile */}
    <button
      className="block md:hidden cursor-pointer"
      onClick={toggleMenu}
    >
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  
    {/* Close button for mobile menu */}
    {isMenuOpen && (
      <button
        className="md:hidden absolute top-0 right-0 m-4"
        onClick={toggleMenu}
      >
        <svg className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59L5 6.41l5.59 5.59-5.59 5.59L6.41 19l5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path>
        </svg>
      </button>
    )}
  
    {/* Mobile menu */}
    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full`} id="menu">
      <nav className="ml-auto text-center">
        <ul className="text-base text-gray-700 pt-4">
          <li><a className="py-3 block" href="#">About Us</a></li>
          <li><a className="py-3 block" href="#">Treatments</a></li>
          <li><a className="py-3 block" href="#">Blog</a></li>
          <li><a className="py-3 block mb-2" href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  
    {/* Desktop menu */}
    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav className="ml-auto">
        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          <li><a className="md:p-4 py-3 px-0 block" href="#">About Us</a></li>
          <li><a className="md:p-4 py-3 px-0 block" href="#">Treatments</a></li>
          <li><a className="md:p-4 py-3 px-0 block" href="#">Blog</a></li>
          <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  )
}

export default Nav
