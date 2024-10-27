import React, { useEffect } from "react";
import Hero2 from "../Components_2/Hero2";
import image from "../assets/image copy.png";
import Contactus from "../Components_2/Contactus";
import Journey from "../Components_2/Journey";
import Reviews2 from "../Components_2/Reviews2";
import right from '../assets/right.png'
import TestimonialCard from "../Components_2/TestominalCard";
// import Mentors from '../Components_2/Mentors'
import Navvv from "../Components_2/Navvv";
import StudentReviewCards from "../Components_2/Studentreviewcards";
import FacultyShowcase from "../Components_2/FacultyShowcase";
import SubjectNav from "../Components_2/SubjectNav";

export default function DoubtSection() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  // const testimonialsData = [
  //   {
  //     name: "Henry Letham",
  //     text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  //     image: image,
  //     stars: 4,
  //   },
  //   {
  //     name: "Holden Caulfield",
  //     text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  //     image: image,
  //     stars: 3,
  //   },
  //   {
  //     name: "Alper Kamu",
  //     text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  //     image: image,
  //     stars: 5,
  //   },
  //   {
  //     name: "Henry Letham",
  //     text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
  //     image: image,
  //     stars: 2,
  //   },
  // ];

  return (
    <div className="bg-white">
      {/* <Navvv /> */}
      <Hero2 />
      <SubjectNav />
      <h2 className="text-5xl text-[#ED7E0A] item5  mt-5 text-center ">
        Student Journey 
      </h2>
      <img className="m-auto mt-[-70px]" src={right} alt="" />
      <Journey />
      <StudentReviewCards />
      <FacultyShowcase />
      {/* <Reviews2 /> */}
      {/* <TestimonialCard testimonials={testimonialsData} /> */}
      <Contactus />
    </div>
  );
}
