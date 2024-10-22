import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/rito-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    setShowLogoutModal(false);
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
      <header className={`body-font relative w-full border-b-2 text-gray-600`}>
        <div className="mx-auto flex flex-col flex-wrap justify-between p-5 md:flex-row md:items-center">
          {/* Logo and Title */}
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link
              to="/"
              className="flex items-center justify-center font-medium text-gray-900 md:ml-6"
            >
              <img
                src={img}
                alt="Logo"
                className="h-[4vw] w-[12vw] md:h-[2vw] md:w-[8vw]"
              />
            </Link>
            <button
              className={`h-8 md:hidden ${isOpen ? "bg-gray-200" : "bg-[#488B80]"} rounded border-0 px-4 py-1 text-base transition-all duration-100 ease-in focus:outline-none`}
              onClick={() => setIsOpen(true)}
            >
              <IoMenu className="text-xl text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:flex md:w-auto md:items-center">
            <nav
              className={`fixed right-0 top-0 z-20 h-screen w-2/3 flex-col overflow-y-auto bg-[#f5f5f5] pl-1 pr-4 transition-all duration-300 ease-in-out md:static md:right-auto md:top-auto md:flex md:h-auto md:w-auto md:flex-row md:items-center md:overflow-visible md:pl-0 md:pr-0 ${
                isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
              }`}
            >
              <div className="md:hidden">
                <IoClose
                  onClick={() => setIsOpen(false)}
                  className="ml-1 mt-2 h-6 w-6 text-2xl text-black"
                />
              </div>
              <button
                onClick={handleTestSeries}
                className="hover:text-[#488B80 block px-2 py-2 text-start text-lg text-black lg:px-2 lg:text-2xl"
              >
                Test Series
              </button>
              <Link
                to="/mentorship"
                className="block px-2 py-2 text-lg text-black hover:text-[#488B80] lg:px-2 lg:text-2xl"
              >
                Mentorship
              </Link>
              <Link
                to="/community"
                className="block px-2 py-2 text-lg text-black hover:text-[#488B80] lg:px-2 lg:text-2xl"
              >
                Community
              </Link>
              <Dropdown />
              {/* <Link
                to="/careers"
                className="block px-2 py-2 text-lg text-black hover:text-[#488B80] lg:px-2 lg:text-2xl"
              >
                Careers
              </Link>
              <Link
                to="/blogs"
                className="block px-2 py-2 text-lg text-black hover:text-[#488B80] lg:px-2 lg:text-2xl"
              >
                Blogs
              </Link>
              <Link
                to="/sgp"
                className="block px-2 py-2 text-lg text-black hover:text-[#488B80] lg:px-2 lg:text-2xl"
              >
                SGP
              </Link> */}
              {!auth && (
                <div className="mt-4 flex flex-col md:hidden">
                  <button
                    onClick={handleSignin}
                    className="mb-2 rounded border-0 bg-[#488B80] px-6 py-3 text-base text-white hover:bg-gray-200 hover:text-black focus:outline-none"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={handleLogin}
                    className="rounded border border-[#488B80] px-6 py-3 text-base hover:bg-gray-200 focus:outline-none"
                  >
                    Login
                  </button>
                </div>
              )}
              {auth && (
                <div className="mt-4 flex flex-col md:hidden">
                  <button
                    className="rounded border-0 bg-[#488B80] px-6 py-3 text-base text-white hover:bg-gray-200 hover:text-black focus:outline-none"
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
            <div className="hidden items-center md:flex">
              <button
                onClick={handleSignin}
                className="mr-3 rounded border-0 bg-[#488B80] px-6 py-2 text-base text-white hover:bg-gray-200 hover:text-black focus:outline-none lg:py-3"
              >
                Sign up
              </button>
              <button
                onClick={handleLogin}
                className="mr-3 rounded border border-[#488B80] px-6 py-2 text-base hover:bg-gray-200 focus:outline-none lg:py-3"
              >
                Login
              </button>
            </div>
          )}
          {auth && (
            <div className="hidden items-center md:flex">
              <button
                className="mr-3 rounded border-0 bg-[#488B80] px-6 py-3 text-base text-white hover:bg-gray-200 hover:text-black focus:outline-none"
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

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="flex items-center space-x-2 rounded-md bg-[#E5E7EB] py-1 text-lg text-black hover:bg-[#488B80] hover:text-white focus:outline-none px-4 lg:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Menu</span>
        <svg
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1 px-2">
            {["Careers", "Blogs", "SGP"].map((item, idx) => (
              <Link
                to={"/" + item.toLowerCase()}
                className="block py-2 text-lg text-black hover:text-[#488B80] lg:px-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
