import React from 'react';
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="flex flex-col items-center"> {/* Adjusted flex layout */}
      <div className="bg-gray-200 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <FaUserCircle className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">Personal Information</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-white p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <MdSubscriptions className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">My Subscription</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-gray-300 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <SiCodementor className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">My Mentor's</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-white p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <AiOutlineDollarCircle className="text-[#FFC700] text-2xl mr-4" />
          <span className="font-bold">Refer and Earn</span>
        </div>
        <FaAngleDown />
      </div>
      <div className="bg-gray-300 p-4 rounded flex items-center justify-between w-full">
        <div className="flex items-center">
          <IoSettings className="text-blue-500 text-2xl mr-4" />
          <span className="font-bold">Settings</span>
        </div>
        <FaAngleDown className='text-[#080505]'/>
      </div>
    </div>
  );
};

export default Menu;
