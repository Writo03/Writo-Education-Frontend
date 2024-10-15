import React, { useEffect, useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/rito-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


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
    navigate('/')
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

  const handleTestSeries=()=>{
    if(auth) navigate('/test_series')
    else{
      navigate('/register')
    }
  }

  return (
    <>
      <header className={`text-gray-600 body-font relative w-full border-b-2`}>
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="font-medium text-gray-900 flex items-center justify-center md:ml-6">
              <img
                src={img}
                alt="Logo"
                className="md:w-[8vw] md:h-[2vw] w-[12vw] h-[4vw]"
              />
            </Link>
            <button
              className={`md:hidden h-8 ${isOpen ? 'bg-gray-200' : 'bg-[#488B80]'} border-0 py-1 px-4 focus:outline-none rounded text-base transition-all ease-in duration-100`}
              onClick={() => setIsOpen(true)}
            >
              <IoMenu className="text-white text-xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className='md:flex md:items-center md:w-auto w-full'>
            
          <nav
            className={`md:flex md:items-center flex-col md:flex-row fixed md:static md:top-auto right-0 top-0 md:right-auto bg-[#f5f5f5] z-20 transition-all duration-300 ease-in-out w-2/3 md:w-auto h-screen md:h-auto overflow-y-auto md:overflow-visible pr-4 md:pr-0 pl-1 md:pl-0 ${
              isOpen
                ? "translate-x-0"
                : "translate-x-full md:translate-x-0"
            }`}
          >
            <div className='md:hidden'>
            <IoClose onClick={() => setIsOpen(false)} className='text-2xl text-black mt-2 h-6 w-6 ml-1'/>
            </div>
            <button
              onClick={handleTestSeries}
              className="block text-start py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80"
            >
              Test Series
            </button>
            <Link
              to="/mentorship"
              className="block py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80]"
            >
              Mentorship
            </Link>
            <Link
              to="/community"
              className="block py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80]"
            >
              Community
            </Link>
            <Link
              to="/careers"
              className="block py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80]"
            >
              Careers
            </Link>
            <Link
              to="/blogs"
              className="block py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80]"
            >
              Blogs
            </Link>
            <Link
              to="/sgp"
              className="block py-2 px-2 lg:px-2 text-lg lg:text-2xl text-black hover:text-[#488B80]"
            >
              SGP
            </Link>
            {!auth && (
              <div className="md:hidden flex flex-col mt-4">
                <button
                  onClick={handleSignin}
                  className="bg-[#488B80] border-0 py-3 px-6 mb-2 focus:outline-none hover:bg-gray-200 rounded text-base hover:text-black text-white"
                >
                  Sign up
                </button>
                <button
                  onClick={handleLogin}
                  className="border border-[#488B80] py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base"
                >
                  Login
                </button>
              </div>
            )}
            {auth && (
              <div className="md:hidden flex flex-col mt-4">
                <button
                  className="bg-[#488B80] border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded text-base hover:text-black text-white"
                  onClick={() => setShowLogoutModal(true)}
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
          </div>

          {/* Buttons */}
          {!auth && (
            <div className="hidden md:flex items-center">
              <button
                onClick={handleSignin}
                className="bg-[#488B80] border-0 py-2 lg:py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base hover:text-black text-white"
              >
                Sign up
              </button>
              <button
                onClick={handleLogin}
                className="border border-[#488B80] py-2 lg:py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Login
              </button>
            </div>
          )}
          {auth && (
            <div className="hidden md:flex items-center">
              <button
                className="bg-[#488B80] border-0 py-3 px-6 mr-3 focus:outline-none hover:bg-gray-200 rounded text-base hover:text-black text-white"
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          )}
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
