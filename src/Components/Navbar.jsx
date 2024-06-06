import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/image.png';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white mt-1">
            <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <img className="w-16 cursor-pointer" src={img} alt="Writo Education Logo" />
                    <span className="font-semibold hidden md:block text-xl item1">Writo Education</span>
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="nav-item text-xl" href="#">Writo</a>
                        </li>
                        <li 
                            className="relative dropdown flex items-center gap-1"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <a className="nav-item text-xl cursor-pointer flex items-center ">Foundation <IoIosArrowDown /></a>
                            {dropdownOpen && (
                                <ul 
                                    className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg w-48 dropdown-menu"
                                >
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Why writo</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Courses</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Doubt classes</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Features</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Plans</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="#">Mentorship</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="#">Community</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="#">Careers</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="#">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    <button className="border border-[#04362B] border-double rounded-lg text-white bg-[#04362B] px-3 md:px-5 py-1 md:py-2 hover:bg-white hover:text-[#04362B]">Log in</button>
                    <button className="border border-[#04362B] border-double rounded-lg text-[#04362B] px-3 md:px-5 py-1 md:py-2 hover:bg-[#04362B] hover:text-white">Sign in</button>
                    {menuOpen ? (
                        <FaTimes onClick={toggleMenu} className="text-2xl md:text-3xl cursor-pointer md:hidden" />
                    ) : (
                        <FaBars onClick={toggleMenu} className="text-2xl md:text-3xl cursor-pointer md:hidden" />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
