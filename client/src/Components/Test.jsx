import React from "react";
import image from "../assets/test.png";

const Test = () => {
  return (
    <div className="w-full">
      <section
        className="relative px-4 py-12 text-white"
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
        <div className="container relative z-10 mx-auto flex items-center justify-center">
          <div className="flex w-full flex-col items-center lg:w-1/2">
            <h1 className="mb-1 text-3xl font-bold text-[#85E8C5] md:mb-2 lg:mb-4">
              All India test
            </h1>
            <h2 className="mb-1 text-2xl text-[#85E8C5] md:mb-2 lg:mb-4">
              Boost your Exam preparation
            </h2>
            <p className="mb-1 px-8 text-center text-white md:px-24 lg:mb-2">
              Enhance your exam preparation with the All India Test Series.
              Achieve your academic goals and secure top ranks!
            </p>
            <a href="/jee-test-series" className="mt-4">
              <button className="rounded bg-[#488B80] px-4 py-2 font-semibold text-white hover:bg-[#e5e7eb] hover:text-black">
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
