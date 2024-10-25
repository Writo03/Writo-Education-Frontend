import React from "react";
import course1Image from "../assets/course1.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/ser1.png";
import img2 from "../assets/ser2.png";
import img3 from "../assets/ser3.png";
import img4 from "../assets/ser4.png";
import img5 from "../assets/ser5.png";
const Services = () => {
  return (
    <div className="z-1 services-component flex items-center justify-center">
      <div className="w-full max-w-screen-lg rounded-lg bg-[#FAFAFA] p-6 shadow-lg mb-6">
        <h2 className="mb-8 mt-6 text-3xl">Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Link to="/jee-neet">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={course1Image}
                alt="Course 1"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">
                  JEE and NEET Course
                </h3>
                <p className="mb-4 text-gray-700">
                  Mentors from Prestigious IIT/NIT background. One year access
                  to expert mentors.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/mentorship">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={img1}
                alt="Course 2"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">
                  Mentorship Program
                </h3>
                <p className="mb-4 text-gray-700">
                  Discover a personalized mentorship program designed to guide
                  you towards your goals with expert support.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/doubtsection">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={img2}
                alt="Course 3"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">Doubt session</h3>
                <p className="mb-4 text-gray-700">
                  Now you can solve all your doubts, even sitting at home with
                  our expert mentors.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/careers">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={img3}
                alt="Course 4"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">
                  Career counselling
                </h3>
                <p className="mb-4 text-gray-700">
                  Book a free trial session to see how the mentor can help you.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/community/about">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={img4}
                alt="Course 5"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">
                  Foundational Courses from 6th to 10th
                </h3>
                <p className="mb-4 text-gray-700">
                  We are there for you to cover all syllabus from 6th standard
                  to 12th standard.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/waits">
            <div className="flex rounded-lg border border-gray-200 bg-white p-6">
              <img
                src={course1Image}
                alt="Course 6"
                className="mr-4 rounded-lg"
                style={{ maxWidth: "120px", height: "auto" }}
              />
              <div className="flex flex-col">
                <h3 className="mb-2 text-xl font-semibold">
                  All India Test series
                </h3>
                <p className="mb-4 text-gray-700">
                  To score more try our all India test series and improve
                  yourselves.
                </p>
                <div className="ml-auto self-end">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* 
        <div className="mt-8 flex space-x-4">
          <button className="rounded bg-[#488B80] px-4 py-2 text-white">
            Enroll Now
          </button>
          <button className="rounded border-2 border-[#488B80] px-4 py-2 text-[#488B80] transition-colors duration-300 hover:bg-[#488B80] hover:text-white">
            Book your Free Demo
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
