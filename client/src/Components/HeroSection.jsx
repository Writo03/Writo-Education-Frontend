import React from "react";
import HeroImage from "../assets/hero-image.png";

const HeroSection = ({ className }) => {
  return (
    <div
      className={
        className + "w-full hero-section custom-gradient relative z-10 h-full"
      }
    >
      {/* Ensure z-index is lower than Services */}
      <section className="hero">
        <div className="hero-text item1">
          <h1 className="text-green-900">
            <span>Thrive with our tailored mentorship</span>
          </h1>
          <p className="text-3xl">
            Unlock your potential with our interactive online classes, where
            learning knows no boundaries.
          </p>
          <button
            className="hover:bg-[#488B80]" /* className="border border-[#008000]" */
          >
            <span className="text-xl underline decoration-[#ffa726]">
              Book your individual classes now
            </span>
          </button>
        </div>
        <div className="hero-image relative flex items-center justify-center">
          <div className="image-wrapper rounded-full border-2 border-dashed border-green-800 p-2">
            <img
              src={HeroImage}
              alt="Students studying"
              className="rounded-full"
            />
          </div>
          <div className="student-count left-1/6 absolute bottom-0 -translate-x-1/2 translate-y-1/2 transform rounded bg-white px-8 py-2 shadow">
            <p>10k+</p>
            online students
          </div>
        </div>
      </section>
      {/* Add some space below the hero section */}
      {/* <div className="my-20"></div> */}
      <div className="py-4 md:mt-12 lg:mt-0">
        <section className="stats-box mx-auto w-11/12 rounded-lg border border-gray-300 bg-[rgba(26,183,157,0.74)] p-4 shadow-lg md:w-1/2">
          <div className="flex flex-wrap justify-around space-y-2 divide-x divide-gray-300 text-center md:space-x-0 md:space-y-0">
            <div className="mb-2 w-1/2 flex-1 px-2 md:w-auto md:px-4">
              <h3 className="text-lg font-bold md:text-xl">12000+</h3>
              <p className="text-sm text-gray-700 md:text-base">Students</p>
            </div>
            <div className="mb-2 w-1/2 flex-1 px-2 md:w-auto md:px-4">
              <h3 className="text-lg font-bold md:text-xl">30+</h3>
              <p className="text-sm text-gray-700 md:text-base">Classes</p>
            </div>
            <div className="mb-2 w-1/2 flex-1 px-2 md:w-auto md:px-4">
              <h3 className="text-lg font-bold md:text-xl">100+</h3>
              <p className="text-sm text-gray-700 md:text-base">Mentors</p>
            </div>
            <div className="mb-2 w-1/2 flex-1 px-2 md:w-auto md:px-4">
              <h3 className="text-lg font-bold md:text-xl">50+</h3>
              <p className="text-sm text-gray-700 md:text-base">Subjects</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
