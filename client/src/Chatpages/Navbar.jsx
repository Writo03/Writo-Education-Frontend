import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log('hello')

  // Check for the token in localStorage on component mount
  useEffect(() => {
    console.log('hello')
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      console.log('Token found:', token);  // Debugging log
      if (token) {
        setAuth(true);
        console.log('User is authenticated');
      } else {
        setAuth(false);
        console.log('User is not authenticated');
      }
    };

    checkAuth(); // Run the check on mount
  }, []); // Empty dependency array ensures this runs only on mount

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    console.log('User logged out');
    window.location.reload(); // Refresh the page
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  const handleSignin = () => {
    console.log('Navigating to Register');
    navigate('/register', {
      state: {
        previousUrl: location.pathname,
      }
    });
  };

  const handleLogin = () => {
    console.log('Navigating to Login');
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
            <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={img} alt="Logo" className="w-10 h-10" />
              <span className="ml-3 text-2xl font-bold">WritoTech</span>
            </Link>
            <button className="md:hidden flex items-center bg-[#1AB780] border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base ml-auto" onClick={toggleMenu}>
              <IoMenu className="text-white text-3xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden md:block'}`}>
            <Link to='/' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Writo</Link>
            <Link to='/mentorship' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Mentorship</Link>
            <Link to='/community' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Community</Link>
            <Link to='/careers' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Careers</Link>
            <Link to='/blogs' className="block py-2 px-4 text-2xl text-black hover:text-green-600">Blogs</Link>
          </nav>

          {/* Buttons */}
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