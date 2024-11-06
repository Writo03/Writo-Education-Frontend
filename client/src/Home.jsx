import React, { useState } from "react";

import HeroSection from "./Components/HeroSection";

import About from "./Components/About";
import TestimonialCard from "./Components/TestominalCard";
// import simage from "./assets/image copy.png";
// import pimage from "./assets/dp_img.png";
import parent1m from "./assets/parents/parent-m-1.webp";
import parent2m from "./assets/parents/parent-m-2.webp";
import parent3w from "./assets/parents/parent-w-2.jpg";

import student1m from "./assets/students/student-m-1.jpg";
import student2m from "./assets/students/student-m-2.jpg";
import student3m from "./assets/students/student-m-3.jpg";
import student1w from "./assets/students/student-w-3.jpg";

import Contactus from "./Components/Contactus";

import ExpertGuidance_And_Doubt from "./Components/ExpertGuidance_And_Doubt";
import Courses from "./Components/Courses";
// import ExpertGuidance from "./Components/ExpertGuidance";
import Courses1 from "./Components/Courses1";
import Courses2 from "./Components/Courses2";
import Navbar2 from "./Components/Navbar2";
import HeroSlider from "./Components/HeroSlider";

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const stestimonialsData = [
    {
      name: "Raghu",
      text: "The courses offered by Writo Education are structured in a way that makes learning engaging and efficient. The interactive format and real-world examples helped me grasp complex concepts quickly.",
      image: student1m,
      stars: 4,
    },
    {
      name: "Nihal",
      text: "Writo Education provides hands-on projects that reinforced my understanding and built my confidence. The mentorship is excellent, with knowledgeable instructors who are always ready to help.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEnu1jeNW1LNsZQsJpRknENrmvhW8yq3Y1g&s",
      stars: 3,
    },
    {
      name: "Aswith",
      text: "The curriculum is thorough yet easy to follow, offering clear explanations and practical applications. The courses helped bridge the gap between theory and practice.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ47HILWuUgVTqOxL-lJ0Jdvo9tpUNIP5X5Q&s",
      stars: 5,
    },
    {
      name: "Divya",
      text: "The lessons are informative, and the instructors do a great job of explaining complex topics step-by-step. I felt confident after completing my course and ready to apply what I learned.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVrIew4wGdw5mK6gL--VNgWtcavnDjErVzg&s",
      stars: 4,
    },
  ];
  const ptestimonialsData = [
    {
      name: "Anna M",
      text: "My son, Raghu, found Writo Education’s courses engaging and easy to follow. It’s great to see him so motivated to learn!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozOHi0SWGUaxoM4-384hDIFsIHcb7Hs5xHA&s",
      stars: 4,
    },
    {
      name: "Priya K",
      text: "Writo Education provides comprehensive and well-structured content that helped my daughter gain confidence in her studies.",
      image: parent3w,
      stars: 3,
    },
    {
      name: "Alper Kamu",
      text: "Writo Education equipped my child with practical skills that aren’t just theoretical but truly useful in real-life scenarios.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2Lg0FtWb3vxtgyb-JAaEYRe0rZ0e6aARzA&s",
      stars: 5,
    },
  ];

  return (
    <div>
<<<<<<< HEAD
      <Navbar2 />
      <div className="h-[20vh] w-full md:h-[30vh] lg:h-[40vh]">
=======
      <div className="h-[25vh] w-full md:h-[32.5vh] lg:h-[40vh]">
>>>>>>> 1b949f62d629c24a38e9fac4717f759ed7309782
        <HeroSlider
          items={Array.from({ length: 9 }).map(
            (_, i) => `https://picsum.photos/1920/1080?random=${i}`,
          )}
        />
      </div>
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
