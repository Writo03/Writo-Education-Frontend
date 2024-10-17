import React, { useState, useEffect } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const TestimonialCard = ({ stestimonials, ptestimonials }) => {
  const [isstudent, setIsstudent] = useState("student");
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-6">
        <div className="flex items-center justify-center">
          <p className="item5 text-center text-2xl text-[#ED7E0A]">
            - - - - Our love - - -
          </p>
        </div>
        <div className="mb-4 mt-6 flex items-center justify-center">
          <p className="item1 mt-2 text-center text-4xl text-[#488B80]">
            Testimonials
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button
            className={`item2 mr-4 rounded-br-2xl rounded-tl-2xl px-4 py-2 text-2xl hover:text-black ${isstudent === "student" ? "bg-[#54C8B4]" : "bg-white text-black"}`}
            onClick={() => setIsstudent("student")}
          >
            Students
          </button>
          <button
            className={`item2 ml-4 rounded-br-2xl rounded-tl-2xl px-6 py-2 text-2xl hover:text-black ${isstudent === "parent" ? "bg-[#54C8B4]" : "bg-white text-black"}`}
            onClick={() => setIsstudent("parent")}
          >
            Parents
          </button>
        </div>
        {isstudent === "student" ? (
          <TestimonialCardHelper testimonials={stestimonials} />
        ) : (
          <TestimonialCardHelper testimonials={ptestimonials} />
        )}
      </div>
    </section>
  );
};

export function TestimonialCardHelper({ testimonials }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const testimonialsPerPage = isSmallScreen ? 1 : 3;
  const [startIndex, setStartIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(null);

  const visibleTestimonials = testimonials?.slice(
    startIndex,
    startIndex + testimonialsPerPage,
  );

  const handlePrev = () => {
    clearInterval(sliderInterval);
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - testimonialsPerPage
        : prevIndex - 1,
    );
    setActiveDot((prevDot) =>
      prevDot === 0 ? testimonialsPerPage - 1 : prevDot - 1,
    );
    startSlider();
  };

  const handleNext = () => {
    clearInterval(sliderInterval);
    setStartIndex((prevIndex) =>
      prevIndex === testimonials?.length - testimonialsPerPage
        ? 0
        : Math.min(testimonials?.length - testimonialsPerPage, prevIndex + 1),
    );
    setActiveDot((prevDot) =>
      prevDot === testimonialsPerPage - 1 ? 0 : prevDot + 1,
    );
    startSlider();
  };

  const startSlider = () => {
    clearInterval(sliderInterval);
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === testimonials?.length - testimonialsPerPage
          ? 0
          : Math.min(testimonials?.length - testimonialsPerPage, prevIndex + 1),
      );
      setActiveDot((prevDot) =>
        prevDot === testimonialsPerPage - 1 ? 0 : prevDot + 1,
      );
    }, 10000);
    setSliderInterval(interval);
  };

  useEffect(() => {
    startSlider();
    return () => clearInterval(sliderInterval);
  }, [isSmallScreen]);

  return (
    <>
      <div className="-m-4 mt-4 flex flex-wrap">
        {visibleTestimonials?.map((testimonial, index) => (
          <div key={index} className="mb-6 p-4 lg:mb-0 lg:w-1/3">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center"
                src={testimonial.image}
              />
              <h2 className="title-font item4 text-sm font-semibold tracking-wider text-gray-900">
                {testimonial.name}
              </h2>
              <div className="mt-2 flex justify-center">
                {[...Array(testimonial.stars)].map((_, index) => (
                  <IoMdStar key={index} className="text-2xl text-[#FFE249]" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, index) => (
                  <IoMdStarOutline
                    key={index}
                    className="text-2xl text-[#E4E4E4]"
                  />
                ))}
              </div>
              <p className="leading-relaxed">{testimonial.text}</p>
              <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-[#54C8B4]"></span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="mr-4 rounded-l px-4 py-2 text-2xl font-semibold text-gray-800 hover:text-[#54C8B4]"
        >
          <FaArrowLeft />
        </button>
        {[...Array(testimonialsPerPage)].map((_, index) => (
          <FaCircle
            key={index}
            className={`text-xs ${index === activeDot ? "mr-4 text-[#54C8B4]" : "text-[#D9D9D9]"} mx-2 cursor-pointer`}
            onClick={() => setStartIndex(index * testimonialsPerPage)}
          />
        ))}
        <button
          onClick={handleNext}
          className="ml-4 rounded-r px-4 py-2 text-2xl font-semibold text-gray-800 hover:text-[#54C8B4]"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default TestimonialCard;
