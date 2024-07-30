import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/writo-main.png';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(`https://writo-education-frontend.onrender.com/id`)
      .then(result => {
        if (result.data.valid) {
          setAuth(true);
          console.log(result.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log('result');
    axios.get(`https://writo-education-frontend.onrender.com/remove-id`)
      .then(result => {
        console.log(result);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  const handleSignin = () => {
    console.log(location.pathname);
    navigate('/register', {
      state: {
        previousUrl: location.pathname,
      }
    });
  };

  const handleLogin = () => {
    console.log(location.pathname);
    navigate('/email', {
      state: {
        previousUrl: location.pathname,
      }
    });
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
              <img src={img} alt="Logo" className="w-20 h-15" />
              
            </Link>
            <button className="md:hidden flex items-center bg-[#1AB780] border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base ml-auto" onClick={toggleMenu}>
              <IoMenu className="text-white text-3xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden md:block'} w-full md:w-auto`}>
            <div className="flex flex-col md:flex-row md:ml-auto w-full md:w-auto">
              <Link to='/' className="flex items-center justify-between py-2 px-4 text-2xl text-black hover:text-green-600 border-b md:border-0">
                Writo
                <SlArrowRight className="md:hidden ml-2 text-sm" />
              </Link>
              <Link to='/mentorship' className="flex items-center justify-between py-2 px-4 text-2xl text-black hover:text-green-600 border-b md:border-0">
                Mentorship
                <SlArrowRight className="md:hidden ml-2 text-sm" />
              </Link>
              <Link to='/community' className="flex items-center justify-between py-2 px-4 text-2xl text-black hover:text-green-600 border-b md:border-0">
                Community
                <SlArrowRight className="md:hidden ml-2 text-sm" />
              </Link>
              <Link to='/careers' className="flex items-center justify-between py-2 px-4 text-2xl text-black hover:text-green-600 border-b md:border-0">
                Careers
                <SlArrowRight className="md:hidden ml-2 text-sm" />
              </Link>
              <Link to='/blogs' className="flex items-center justify-between py-2 px-4 text-2xl text-black hover:text-green-600 border-b md:border-0">
                Blogs
                <SlArrowRight className="md:hidden ml-2 text-sm" />
              </Link>
            </div>
            
            {/* Buttons */}
            {
              !auth &&
              <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full mt-4`}>
                <div className="flex justify-between">
                  <button onClick={handleSignin} className="bg-[#1AB780] border-0 py-3 px-6 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base w-1/2">Sign up</button>
                  <button onClick={handleLogin} className="border border-[#1AB780] py-3 px-6 ml-2 focus:outline-none hover:bg-gray-200 rounded text-base w-1/2">Login</button>
                </div>
              </div>
            }
            {
              auth &&
              <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full mt-4`}>
                <button className="bg-[#1AB780] border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base border-t w-full" onClick={() => setShowLogoutModal(true)}>Logout</button>
              </div>
            }
          </nav>

          {/* Buttons for desktop view */}
          {
            !auth &&
            <div className="hidden md:flex items-center">
              <button onClick={handleSignin} className="bg-[#1AB780] border-0 py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base">Sign up</button>
              <button onClick={handleLogin} className="border border-[#1AB780] py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base">Login</button>
            </div>
          }
          {
            auth &&
            <div className="hidden md:flex items-center">
              <button className="bg-[#1AB780] border-0 py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={() => setShowLogoutModal(true)}>Logout</button>
            </div>
          }
        </div>
      </header>

      {showLogoutModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-medium mb-2">Confirm Logout</h3>
            <p className="text-gray-700">Are you sure you want to logout?</p>
            <div className="flex justify-between mt-4">
              <button className="btn btn-outline" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
