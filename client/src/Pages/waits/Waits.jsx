/* eslint-disable no-unused-vars */
import booktop from "../../assets/book_top.png"
import Writo from "../../assets/Clip path group.png"
import violet_exam from "../../assets/violet exam.png"
import Bgimage from "../../assets/image 18.png"
import { TfiCup } from "react-icons/tfi"
import { LuShieldCheck } from "react-icons/lu"
import { GiBookmarklet } from "react-icons/gi"
import { RxCountdownTimer } from "react-icons/rx"
import { CiSearch } from "react-icons/ci"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState, useEffect } from "react"
import Contactus from "../../Components/Contactus"
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import curvedline from "../../assets/Vector 515.png"
import waitsHeroImg from "../../assets/waits-hero-pic.png" 

function Waits() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      
      <div className="flex flex-col items-center justify-center bg-[#D8F3EE]   mb-8">
        {/* Navbar */}

      {/* <nav className="bg-[#a5cac5] w-full space-x-12">
      <div className="container mx-auto flex justify-around items-center p-4">
        <div className="flex items-center">
          <img src={Writo} alt="Logo" className="h-12 w-12" />
          <span className="ml-2 text-lg font-bold text-black">Writo Education</span>
        </div>
        <div className="hidden md:flex items-center ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or Start a conversation"
              className="px-4 py-2 w-80 bg-[#EFF4F4] rounded-full border border-gray-300"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
              <CiSearch className="w-5 h-5" />
            </span>
          </div>
          <a href="#" className="text-black font-medium">Community</a>
          <a href="#" className="text-black font-medium">Mentors</a>
          <a href="#" className="text-black font-medium">Programs</a>
          <button className="bg-[#5C8D8D] text-white px-4 py-2 rounded-lg">Join now</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-black h-6 w-6" /> : <FaBars className="text-black h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#E2F5F2] p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search or Start a conversation"
              className="px-4 py-2 w-full bg-white rounded-full border border-gray-300"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
              <CiSearch className="w-5 h-5" />
            </span>
          </div>
          <a href="#" className="block text-black px-4 py-2">Community</a>
          <a href="#" className="block text-black px-4 py-2">Mentors</a>
          <a href="#" className="block text-black px-4 py-2">Programs</a>
          <button className="w-full bg-[#5C8D8D] text-white px-4 py-2 rounded-lg mt-2">Join now</button>
        </div>
      )}
    </nav>
     */}
        {/*Header */}
   
        <div className="flex justify-between lg:justify-evenly items-center flex-col md:flex-row gap-5 relative md:pb-10 pt-4 lg:w-4/5 mx-auto">
          <div className="flex flex-col items-center lg:items-start justify-evenly gap-5 lg:gap-8">
            <h1 className="text-xl lg:text-2xl text-[#0A7F56] font-bold">Writo All India Test Series (WAITS)</h1>
            <div className="flex flex-col items-center justify-center w-11/12 ">
              <h3 className="text-lg lg:text-xl font-bold text-center text-[#1BB896] lg:leading-9">Empower your future, excel in your exams.</h3>
              <img src={curvedline} alt="curvedLine" className="w-36 lg:w-60 text-center"/>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#0A7F56]">True-to-life exam simulation</h1>
              <p className="text-[#488B80]">Practice our Test series</p>
            </div>
            <div className="lg:w-full lg:text-center">

            <button className="bg-[#488B80] text-white px-6 lg:px-12 py-2 rounded-full ">Enroll now</button>
            </div>
          </div>
          <div className="relative my-10">
            <div className="border-[#474747] border-2 rotate-[130deg] h-44 w-44 lg:h-[260px] lg:w-[260px] absolute z-10 right-[7px] top-[-18px] lg:top-0 lg:right-7 rounded-2xl">
            <div className="bg-[#FD980C] h-40 w-40 lg:h-[240px] lg:w-[240px] absolute z-10 lg:right-[9px] right-[6px] 
            lg:top-[7px] top-[6px] rounded-2xl">
            </div>
            </div>
              <div>
                <img src={waitsHeroImg} alt="" className="h-48 w-48 lg:w-80 lg:h-80 relative z-30" />
              </div>
          </div>
          <div className="h-20 w-11/12 lg:w-1/2 mx-auto absolute bg-[#1AB79D] -bottom-10 flex items-center justify-center text-white rounded-lg">
          Hurry up! Offer on WAITS ends soon
          </div>
          </div>

        <div className="bg-white flex flex-col  justify-center items-center ">
          {/* Test section */}
          <div className="flex flex-row gap-x-4 justify-center items-center  mt-20">
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">
              Why we?
            </h2>
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-center text-[#488BB0] mb-3">
            Our Test Series
          </h2>

          {/* Test Series Cards */}
          <div className="flex flex-col lg:w-3/4  md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2 flex flex-row items-center bg-blue-200 md:rounded-lg shadow-md relative overflow-hidden">
              <img
                src={Bgimage}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="flex flex-col flex-grow p-4 gap-y-4 relative z-10">
                <h3 className="text-xl font-bold whitespace-nowrap text-[#488B80]">
                  NEET Exam
                </h3>
                <div className="text-[#0a4768]  font-medium">
                  <p>For 11 th</p>
                  <p>For 12 th and</p>
                  <p>For 12 th plus</p>
                </div>

                <Link
                  to="/neet-price"
                  className="relative inline-block mt-auto text-black  group"
                >
                  <span className="relative z-10 group-hover:px-2 group-hover:text-white transition-colors duration-500">
                    View <span className="ml-3">→</span>
                  </span>
                  <span className="absolute left-0 top-0 h-full bg-blue-400 transform -translate-x-full transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:w-24 group-hover:px-4 group-hover:rounded-lg"></span>
                </Link>
              </div>
              <div>
                <img
                  src={booktop}
                  alt="book top img"
                  className="relative h-44 w-44"
                />
              </div>
            </div>
            {/*another one */}

            <div className="w-full md:w-1/2 flex flex-row items-center bg-purple-200 md:rounded-lg shadow-md relative overflow-hidden">
              <img
                src={Bgimage}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="flex flex-col flex-grow p-4 gap-y-4 relative z-10">
                <h3 className="text-xl font-bold whitespace-nowrap text-[#488B80]">
                  JEE(Main + Adv)
                </h3>
                <div className="text-[#0a4768]  font-medium">
                  <p>For 11 th</p>
                  <p>For 12 th and</p>
                  <p>For 12 th plus</p>
                </div>

                <Link
                  to="/jee-price"
                  className="relative inline-block mt-auto text-black  group"
                >
                  <span className="relative z-10 group-hover:px-3 group-hover:rounded-lg group-hover:text-white transition-colors duration-500">
                    View <span className="ml">→</span>{" "}
                  </span>
                  <span className="absolute left-0 top-0 h-full bg-purple-400 transform -translate-x-full transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:w-24 group-hover:px-4 group-hover:rounded-lg"></span>
                </Link>
              </div>
              <div>
                <img
                  src={violet_exam}
                  alt="book top img"
                  className="relative h-44 w-44"
                />
              </div>
            </div>
          </div>

          {/* Advantages  Headingd*/}
          <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
            <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">
              Advantage
            </h2>
            <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          </div>
          <h3 className="text-lg  md:text-2xl text-[#488B80] font-bold text-center mb-3">
            Special about Online Test
          </h3>

          {/* Advantage Details */}
          <div className="flex flex-col lg:w-3/4 md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/5 flex flex-col items-center">
              <TfiCup className="text-black h-6 w-6" />
              <h4 className="text-lg text-[#1D5F6B] font-bold">Ranks</h4>
              <p className="text-center">
                All India ranks for benchmarking performance
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
            <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>

            <div className="w-full md:w-1/5 flex flex-col items-center">
              <LuShieldCheck className="text-black h-6 w-6" />
              <h4 className="text-lg font-bold text-[#1D5F6B]">Solutions</h4>
              <p className="text-center">
                Provides detailed solution and performance analysis
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
            <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>

            <div className="w-full md:w-1/5 flex flex-col items-center">
              <GiBookmarklet className="text-black h-6 w-6" />
              <h4 className="text-lg font-bold text-[#1D5F6B]">Practice</h4>
              <p className="text-center">
                5000+ practice questions to improve your score
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-36 border-opacity-50 border-l-2 border-dashed border-black"></div>
            <div className="block md:hidden w-36 h-0.5 border-opacity-50 border-t-2 border-dashed border-black"></div>

            <div className="w-full md:w-1/5 flex flex-col items-center">
              <RxCountdownTimer className="text-black h-6 w-6" />
              <h4 className="text-lg font-bold text-[#1D5F6B]">
                Previous Year
              </h4>
              <p className="text-center">
                Discuss and practice previous year paper
              </p>
            </div>
          </div>

          <div className="flex flex-row md:gap-x-4 sm:gap-x-2 justify-center items-center mt-8">
            <p className="text-3xl text-[#ED7E0A] ">- - - -</p>
            <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center mx-2">
              More Advantages
            </h2>
            <p className="text-3xl text-[#ED7E0A] ">- - - -</p>
          </div>
          <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16">
            <h3 className="text-green-800 text-xl md:text-2xl font-bold mb-3">
              Added Advantages on Writo
            </h3>
            <div className="flex lg:w-3/4 flex-col md:flex-row justify-center items-center  space-y-8 md:space-y-0 md:space-x-8">
              {/* Gain Section */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
                <div className="text-5xl text-black font-bold mb-2">1</div>
                <div className="text-lg font-semibold text-purple-600 mb-2">
                  Gain
                </div>
                <p className="text-md text-gray-700">
                  Pick the subjects or topics you want to practice from 5000+
                  questions.
                </p>
              </div>

              {/* Earn Section */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
                <div className="text-5xl text-black font-bold mb-2">2</div>
                <div className="text-lg font-semibold text-purple-600 mb-2">
                  Earn
                </div>
                <p className="text-md text-gray-700">
                  Online practice problems for all topics and test paper
                  available for reattempt and practices.
                </p>
              </div>

              {/* Learn Section */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/3">
                <div className="text-5xl text-black font-bold mb-2">3</div>
                <div className="text-lg font-semibold text-purple-600 mb-2">
                  Learn
                </div>
                <p className="text-md text-gray-700">
                  To track and analyze your mistakes, and take steps to correct
                  them for better future performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  )
}

export default Waits
