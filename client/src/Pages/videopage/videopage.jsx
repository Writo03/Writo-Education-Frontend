import  { useState,useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import ReactPlayer from "react-player";

import Video from "../../assets/video.mp4";

const VideoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState({
    webDevelopment: false,
    teamStructure: false,
    clientSide: false,
    serverSide: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <div className="flex flex-col md:flex-row h-screen  bg-gray-900">
      <div className="flex-1 flex items-center justify-center ">
        <ReactPlayer
          url={Video}
          controls
          playing="true"
          volume={true}
          width="100%"
          height="100%"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="w-full md:w-1/3 bg-gray-900 text-white p-4 overflow-y-auto">
        <div className="bg-gray-900 flex flex-col w-full">
          <div className="bg-gray-900 text-white py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-gray-700 text-white py-2 px-4 rounded">
              Exit Course
            </button>
          </div>
          <div className="text-xl font-bold bg-gray-900 text-white mt-2">
            Physics Intro: Executive Briefing
          </div>
          <div className="bg-gray-900 text-white text-sm font-medium mt-2 ">
            by Brice Wilson
          </div>
        </div>
        <div className="space-y-4  ">
          <div className="w-full flex flex-col mt-8">
            <div className=" text-white rounded-md w-full">
              <div className="border-b border-gray-700 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer text-lg"
                  onClick={() => toggleSection("webDevelopment")}
                >
                  <span className="flex flex-col">
                    <p>Introduction to Physics?</p>
                    <p>8mins</p>
                  </span>
                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-400 ${
                    isOpen.webDevelopment ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex justify-between">
                      <span>What is Physics? (3 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Importance of Physics in Daily Life (3 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span> Basic Units and Measurements (2 mins)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b border-gray-700 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer text-lg"
                  onClick={() => toggleSection("teamStructure")}
                >
                  <span className="flex flex-col">
                    <p> Force and Motion </p>
                    <p>10mins</p>
                  </span>
                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-400 ${
                    isOpen.teamStructure ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex justify-between">
                      <span>Types of Forces (4 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Newton's Laws of Motion (4 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Speed, Velocity, and Acceleration (2 mins)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b border-gray-700 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer text-lg"
                  onClick={() => toggleSection("clientSide")}
                >
                  <span className="flex flex-col">
                    <p>Energy and Work</p>
                    <p>9mins</p>
                  </span>
                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-400 ${
                    isOpen.clientSide ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex justify-between">
                      <span>Forms of Energy(4 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Work and Energy Relationship (3 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Law of Conservation of Energy (3 mins)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b border-gray-700 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer text-lg"
                  onClick={() => toggleSection("serverSide")}
                >
                  <span className="flex flex-col">
                    <p>Light and Shadows</p>
                    <p>8mins</p>
                  </span>
                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-height duration-400 ${
                    isOpen.serverSide ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex justify-between">
                      <span>Sources of Light (3 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Formation of Shadows (3 mins)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Reflection and Refraction of Light (2 mins)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;