import React, { useState } from "react";

import HeroSection from "./Components/HeroSection";

import About from "./Components/About";
import TestimonialCard from "./Components/TestominalCard";
import simage from "./assets/image copy.png";
import pimage from "./assets/dp_img.png";

import Contactus from "./Components/Contactus";

import ExpertGuidance_And_Doubt from "./Components/ExpertGuidance_And_Doubt";
import Courses from "./Components/Courses";
// import ExpertGuidance from "./Components/ExpertGuidance";
import Courses1 from "./Components/Courses1";
import Courses2 from "./Components/Courses2";
import Navbar2 from "./Components/Navbar2";

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const stestimonialsData = [
    {
      name: "Henry Letham",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: simage,
      stars: 4,
    },
    {
      name: "Holden Caulfield",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: simage,
      stars: 3,
    },
    {
      name: "Alper Kamu",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: simage,
      stars: 5,
    },
    {
      name: "Henry Letham",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: simage,
      stars: 2,
    },
  ];
  const ptestimonialsData = [
    {
      name: "Henry Letham",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: pimage,
      stars: 4,
    },
    {
      name: "Holden Caulfield",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: pimage,
      stars: 3,
    },
    {
      name: "Alper Kamu",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: pimage,
      stars: 5,
    },
  ];
  return (
    <div>
      <Navbar2 />
      <div className="bg4 w-full overflow-hidden">
        <HeroSection dropdownOpen={dropdownOpen} />
      </div>
      <Courses />
      <About />
      <Courses1 />
      <Courses2 />
      {/* <MentorCard mentors={mentors} /> */} {/* Still in progress */}
      {/* <ExpertGuidance /> */}
      <ExpertGuidance_And_Doubt />
      <TestimonialCard
        stestimonials={stestimonialsData}
        ptestimonials={ptestimonialsData}
      />
      <Contactus />
    </div>
  );
};

export default Home;
