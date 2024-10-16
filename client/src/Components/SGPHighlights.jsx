import React from 'react';
import image1 from '../assets/sgp - 1.png'
import image2 from '../assets/sgp - 2.png'
import image3 from '../assets/sgp - 3.png'
import image4 from '../assets/sgp - 4.png'
// Card Component
const HighlightCard = ({ imageSrc, title, description }) => {
  return (
    <div className="  bg-[#54c8b531] flex justify-center items-center flex-row p-1 lg:w-[500px] rounded-lg shadow-md ">
      <img src={imageSrc} alt={title} className="h-40 lg:block hidden  m-1 mx-auto" />
      <div className="flex flex-col  items-start">
        <div className="lg:hidden flex flex-row items-center gap-2">
        <img src={imageSrc} alt={title} className="h-10   m-1 mx-auto" />
        <h3 className="text-xl text-[#488B80] font-bold mt-4">{title}</h3>
        </div>
        <h3 className="text-xl text-[#488B80] lg:block hidden font-bold mt-4">{title}</h3>
        <span className="mt-2 text-gray-700 ">{description}</span>
      </div>
    </div>
  );
};

// Parent Component
const Highlights = () => {
  const highlightsData = [
    {
      imageSrc: image1, // Replace with actual image path
      title: 'Doubt Clearing Sessions',
      description: 'Tailored to individual student needs, our experienced mentors from  IITs and NITs will guide students through challenging subjects, ensuring clarity and confidence.'
    },
    {
      imageSrc: image2, // Replace with actual image path
      title: 'Personality Development',
      description: 'With a focus on leadership qualities, communication skills, and emotional  intelligence, our program aims to shape well-rounded individuals prepared for future challenges'
    },
    {
      imageSrc: image3, // Replace with actual image path
      title: 'Personalized Mentorship',
      description: 'Our mentors will focus not only on academic performance but also on personal  growth, offering one-on-one guidance to help students develop critical thinking, problem-solving, and time'
    },
    {
      imageSrc: image4, // Replace with actual image path
      title: 'Recorded Video Lessons',
      description: 'High-quality recorded lectures for Board Exams, JEE/NEET, and Olympiad courses  ensure comprehensive learning anytime, anywhere'
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gird-cols-1 gap-5 lg:gap-10">
      {highlightsData.map((item, index) => (
        <HighlightCard
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Highlights;
