import React from "react";
import image from "../assets/test.png";

const Test = () => {
  return (
    <div>
      <section
        className="text-white py-12 px-4 relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(34, 34, 34,0.86)" }}
        ></div>
        <div className="container mx-auto flex justify-center items-center relative z-10">
          <div className="flex flex-col items-center lg:w-1/2 w-full">
            <h1 className="text-3xl font-bold lg:mb-4 md:mb-2 mb-1 text-[#85E8C5]">
              All India test
            </h1>
            <h2 className="text-2xl text-[#85E8C5] lg:mb-4 md:mb-2 mb-1">
              Boost your Exam preparation
            </h2>
            <p className="lg:mb-2 mb-1 text-white px-8 md:px-24 text-center">
              Enhance your exam preparation with the All India Test Series.
              Achieve your academic goals and secure top ranks!
            </p>
            <a href="/jee-test-series" className="mt-4">
              <button className="bg-[#488B80] text-white font-semibold py-2 px-4 rounded hover:bg-[#e5e7eb] hover:text-black">
                Join Today
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
