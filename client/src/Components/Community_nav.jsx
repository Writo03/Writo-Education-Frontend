import React, { useState } from 'react';
import { Link, NavLink, useNavigate,useLocation } from 'react-router-dom';

const Community_nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
console.log(props)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate()
  const location = useLocation();

  // Extracting the base path (e.g., /communityjee or /communityneet)
  const basePath = location.pathname.split('/')[1];

  return (
    <nav className=" w-full bg-[#2b8b8915]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-12">
        {/* Main navigation links */}
        <button  onClick={()=>{
          navigate("/community")
        }}  className="text-[#1AB780] item1 font-semibold md:hidden">
          Community
        </button >
        <div className="hidden md:flex items-center space-x-10">
          <button  onClick={()=>{
          navigate("/community")
          }} className="text-[#1AB780] text-2xl font-semibold item1">
            Community
          </button>
          {/* <NavLink  to={`/${basePath}/about`} className="text-gray-900 hover:bg-gray-200">
          About
          </NavLink> */}
          <button className="text-gray-900 hover:bg-gray-200" onClick={() => {
              if (basePath === "communityneet" || basePath === "communityjee" || basePath === "community") {
                  navigate(`/${basePath}/about`);
              }else{
                // navigate(-1)
                navigate(`/community/about`);
              }
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
        <div className="flex flex-col  justify-start space-y-4 p-4 border-y-2 ">
        <button className="text-gray-900 flex justify-start " onClick={() => {
              if (basePath === "communityneet" || basePath === "communityjee" || basePath === "community") {
                  navigate(`/${basePath}/about`);
              }else{
                // navigate(-1)
                navigate(`/community/about`);
              }
          }}>
            About
          </button>
          <Link to="/faq" className="text-gray-900">
            FAQ
          </Link>
          <Link to="/communityguidelines" className="text-gray-900">
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
