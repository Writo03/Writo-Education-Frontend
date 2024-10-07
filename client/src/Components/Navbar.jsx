import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check for the token in localStorage on component mount
  useEffect(() => {
    console.log("hello");
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      console.log("Token found:", token); // Debugging log
      if (token) {
        setAuth(true);
        console.log("User is authenticated");
      } else {
        setAuth(false);
        console.log("User is not authenticated");
      }
    };

    checkAuth(); // Run the check on mount
  }, []); // Empty dependency array ensures this runs only on mount

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    console.log("User logged out");
    navigate("/");
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  const handleSignin = () => {
    console.log("Navigating to Register");
    navigate("/register", {
      state: {
        previousUrl: location.pathname,
      },
    });
  };

  const handleLogin = () => {
    console.log("Navigating to Login");
    navigate("/email", {
      state: {
        previousUrl: location.pathname,
      },
    });
  };

  const handleTestSeries = () => {
    if (auth) navigate("/test_series");
    else {
      navigate("/register");
    }
  };

  return (
    <>
      <header className="body-font text-gray-600">
        <div className="container mx-auto md:gap-2 flex flex-col flex-wrap items-center justify-between p-5 lg:flex-row">
          {/* Logo and Title */}
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link
              to="/"
              className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
            >
              <img src={img} alt="Logo" className="h-12 w-12" />
              <span className="ml-3 text-2xl font-bold">WritoTech</span>
            </Link>
            <button
              className="ml-auto flex items-center rounded border-0 bg-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none md:hidden"
              onClick={toggleMenu}
            >
              <IoMenu className="text-3xl text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`md:flex md:items-center ${isOpen ? "block" : "hidden md:block"}`}
          >
            <button
              onClick={handleTestSeries}
              className="block px-4 py-2 text-2xl text-black hover:text-green-600"
            >
              Test Series
            </button>
            <Link
              to="/mentorship"
              className="block px-4 py-2 text-2xl text-black hover:text-green-600"
            >
              Mentorship
            </Link>
            <Link
              to="/community"
              className="block px-4 py-2 text-2xl text-black hover:text-green-600"
            >
              Community
            </Link>
            <Link
              to="/careers"
              className="block px-4 py-2 text-2xl text-black hover:text-green-600"
            >
              Careers
            </Link>
            <Link
              to="/blogs"
              className="block px-4 py-2 text-2xl text-black hover:text-green-600"
            >
              Blogs
            </Link>
            {!auth && (
              <div className="mt-4 flex flex-col md:hidden">
                <button
                  onClick={handleSignin}
                  className="mb-2 rounded border-0 bg-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
                >
                  Sign up
                </button>
                <button
                  onClick={handleLogin}
                  className="rounded border border-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
                >
                  Login
                </button>
              </div>
            )}
            {auth && (
              <div className="mt-4 flex flex-col md:hidden">
                <button
                  className="rounded border-0 bg-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
                  onClick={() => setShowLogoutModal(true)}
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          {/* Buttons */}
          {!auth && (
            <div className="hidden items-center md:flex">
              <button
                onClick={handleSignin}
                className="mr-3 rounded border-0 bg-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
              >
                Sign up
              </button>
              <button
                onClick={handleLogin}
                className="mr-3 rounded border border-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
              >
                Login
              </button>
            </div>
          )}
          {auth && (
            <div className="hidden items-center md:flex">
              <button
                className="mr-3 rounded border-0 bg-[#1AB780] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {showLogoutModal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="rounded-md bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-medium">Confirm Logout</h3>
            <p className="text-gray-700">Are you sure you want to logout?</p>
            <div className="mt-4 flex justify-between">
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
