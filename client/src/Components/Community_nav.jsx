import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Community_nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
console.log(props)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate()

  return (
    <nav className=" w-full bg-[#2b8b8915]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-12">
        {/* Main navigation links */}
        <Link  to="" className="text-[#1AB780] item1 font-semibold md:hidden">
          Community
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link  to="" className="text-[#1AB780] text-2xl font-semibold item1">
            Community
          </Link>
          <button  className="text-gray-900 hover:bg-gray-200 " onClick={()=>{
            navigate("about")
          }}>
            About
          </button>
          <Link to="/faq" className="text-gray-900 hover:bg-gray-200">
            FAQ
          </Link>
          <Link to="/communityguidelines" className="text-gray-900 hover:bg-gray-200">
            Community Guidelines
          </Link>
        </div>
        {/* Buttons section */}
        <div className="flex items-center space-x-10">
          <button className="hidden md:block px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="hidden md:block px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
          <button className="md:hidden block text-gray-900" onClick={toggleMenu}>
            {/* Hamburger menu icon or label */}
            Menu
          </button>
        </div>
      </div>
      {/* Responsive menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col  space-y-4 p-4 border-y-2 ">
          <Link to="/about6to10" className="text-gray-900">
            About
          </Link>
          <Link to="/faq" className="text-gray-900">
            FAQ
          </Link>
          <Link to="/" className="text-gray-900">
            Community Guidelines
          </Link>
          <button className="px-16 py-1 border border-gray-400 font-semibold rounded-lg hover:border-black">
            Search class
          </button>
          <button className="px-4 py-2 bg-[#488B80] text-white rounded">
            View plans
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Community_nav;
