import React from 'react'
import course1Image from '../assets/webinar.png'; // Import your images
import { FaArrowRight } from "react-icons/fa";
import img1 from '../assets/que.png'
import img2 from '../assets/cou.png'
import img3 from '../assets/prev.png'
import img4 from '../assets/you.png'
const Events = () => {
  return (
    <div className="z-1 flex items-center justify-center">
      <div className="w-full max-w-screen-lg rounded-lg bg-[#FAFAFA] p-6 shadow-lg mb-6">
        <h2 className="mb-8 mt-6 text-3xl">Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex rounded-lg border border-gray-200 bg-white p-6">
            <img
              src={course1Image}
              alt="Course 1"
              className="mr-4 rounded-lg"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-semibold">Webinars</h3>
              <p className="mb-4 text-gray-700">
                Interactive sessions where participants can view live
                presentations, engage with the speaker in real-time.
              </p>
              <div className="ml-auto self-end">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex rounded-lg border border-gray-200 bg-white p-6">
            <img
              src={img1}
              alt="Course 2"
              className="mr-4 rounded-lg"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-semibold">
                Previous Year Question
              </h3>
              <p className="mb-4 text-gray-700">
                Analyzing and reviewing past exam papers to help students
                prepare for upcoming tests.
              </p>
              <div className="ml-auto self-end">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex rounded-lg border border-gray-200 bg-white p-6">
            <img
              src={img2}
              alt="Course 3"
              className="mr-4 rounded-lg"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-semibold">Counselling</h3>
              <p className="mb-4 text-gray-700">
                Offers personalized guidance to help students choose the right
                courses for their academic and career goals.
              </p>
              <div className="ml-auto self-end">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex rounded-lg border border-gray-200 bg-white p-6">
            <img
              src={img3}
              alt="Course 4"
              className="mr-4 rounded-lg"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-semibold">
                Previous year question Doubts
              </h3>
              <p className="mb-4 text-gray-700">
                Provide students with the opportunity to ask questions and get
                clarifications on topics they find challenging.
              </p>
              <div className="ml-auto self-end">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex rounded-lg border border-gray-200 bg-white p-6">
            <img
              src={img4}
              alt="Course 5"
              className="mr-4 rounded-lg"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-semibold">
                Youtube live Classes
              </h3>
              <p className="mb-4 text-gray-700">
                Recordings of the live classes are often available for later
                viewing, providing flexible learning opportunities.
              </p>
              <div className="ml-auto self-end">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex space-x-4">
          <button className="bg-[#488B80] text-white py-2 px-4 rounded">Enroll Now</button>
          <button className="border-2 border-[#488B80] py-2 px-4 rounded text-[#488B80] hover:bg-[#488B80] hover:text-white transition-colors duration-300">Book your Free Demo</button>

        </div> */}
      </div>
    </div>
  );
}

export default Events
