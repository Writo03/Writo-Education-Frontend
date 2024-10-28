import React from "react";
import sampleImage from "../assets/doubt.png";
import { Link } from "react-router-dom";
import img1 from "../assets/img.png";
import isMobile from "../helpers/isMobile";

const Data = [
  {
    id: 1,
    heading: "Unlock Your Potential",
    heading2: "With Expert Guidance",
    subHeading: "Unlock Your Potential With Expert Guidance !",
    description:
      "Tailored advice and support from experienced mentors.Join Our Mentorship Program Today! Transform your aspirations into achievements with our dedicated mentors.",
    button: "Try our mentorship program",
    buttonLink: "/mentorship",
    image: img1,
    imgPos: "l",
  },
  {
    id: 2,
    heading: "Having doubts",
    heading2: "Clear your doubts",
    subHeading: "Are you struggling with doubts while preparing for JEE/NEET ?",
    description:
      "Look no further! Writo Education offers a unique live doubt session program designed to address all your queries in real-time. Our platform connects you with experienced faculties from renowned institutions like IITs and NITs, ensuring personalized guidance and support tailored to your needs.",
    button: "Try our doubt clearing session",
    buttonLink: "/doubtcourses",
    image: sampleImage,
    imgPos: "r",
  },
];

const ExpertGuidance_And_Doubt = () => {
  return (
    <>
      {Data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-white px-4 py-4 mt-8"
        >
          <h2 className="item5 mb-2 text-2xl text-[#ED7E0A]">
            - - - - {item.heading} -- - - -
          </h2>
          <h1 className="coursetitle item2 mb-6 text-2xl text-green-700">
            {item.heading2}
          </h1>
          <div className="flex w-full flex-col items-center lg:w-4/5 lg:flex-row">
            {item.imgPos === "l" && !isMobile() && (
              <div className="flex w-full justify-center lg:ml-10 lg:w-1/4">
                <img
                  src={item.image}
                  alt="Doubt clearing"
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
            {isMobile() && (
              <div className="flex w-full justify-center lg:ml-10 lg:w-1/4">
                <img
                  src={item.image}
                  alt="Doubt clearing"
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
            <div className="mb-6 flex w-full flex-col items-center lg:mb-0 lg:w-2/3">
              <h2 className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-center text-2xl font-bold">
                {item.subHeading}
              </h2>
              <p className="item2 mb-4 text-center text-lg text-gray-800">
                {item.description}
              </p>
              <Link to={item.buttonLink}>
                <button className="item2 rounded-md bg-[#488B80] px-6 py-3 font-semibold text-white hover:bg-[#e5e7eb] hover:text-black focus:outline-none capitalize">
                  {item.button}
                </button>
              </Link>
            </div>
            {item.imgPos === "r" && !isMobile() && (
              <div className="flex w-full justify-center lg:ml-10 lg:w-1/4">
                <img
                  src={item.image}
                  alt="Doubt clearing"
                  className="rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExpertGuidance_And_Doubt;
