import React from 'react';
import img from '../assets/image.png';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img src={img} alt="Logo" className="w-10 h-10" />
          <span className="ml-3 text-2xl font-bold item1">WritoTech</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-10">
          <a to='/' className="hover:text-green-600 item2 text-2xl text-black">Writo</a>
          <a to='/mentorship' className="hover:text-green-600 item2 text-2xl text-black">Mentorship</a>
          <a to='/community' className="hover:text-green-600 item2 text-2xl text-black">Community</a>
          <a to='/careers' className="hover:text-green-600 item2 text-2xl text-black">Careers</a>
          <a to='/blogs' className="hover:text-green-600 item2 text-2xl text-black">Blogs</a>
        </nav>
        <div className="ml-auto">
        <button className="inline-flex items-center bg-[#1AB780]  border-0 py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           Sign up
            
          </button>
          <button className="inline-flex items-center border border-[#1AB780] py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
  Login
</button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
