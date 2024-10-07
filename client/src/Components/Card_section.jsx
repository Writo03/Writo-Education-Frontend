
import React from 'react';
import Cards from './Cards';

import { FaChalkboardTeacher, FaLaptopCode, FaPalette, FaLanguage } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa6";
import { GiAtom } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";

const mentorshipFields = [
  { title: '6-12 Classes', description: 'Strengthen foundational concepts in subjects like Math, Science, and English for middle and high school students.', icon: <FaGraduationCap className="h-16 w-16 text-white"/> },
  { title: 'JEE', description: 'Comprehensive mentorship for JEE aspirants with expert guidance in Physics, Chemistry, and Mathematics', icon: <GiAtom className="h-16 w-16 text-white"/> },
  { title: 'NEET', description: 'Get expert coaching for NEET with detailed lessons in Biology, Physics, and Chemistry.', icon: <LuStethoscope className="h-16 w-16 text-white"/> },
  { title: 'Programming', description: 'Master programming languages like Python, Java, and more with mentorship from industry experts.', icon: <FaLaptopCode className="h-16 w-16 text-white" /> },
  { title: 'Art & Design', description: 'Creative mentorship in drawing, graphic design, and digital arts for budding designers and artists.', icon: <FaPalette className="h-16 w-16 text-white" /> },
  { title: 'Languages', description: 'Learn new languages such as English, Spanish, or French with personalized language mentors.', icon: <FaLanguage className="h-16 w-16 text-white" /> },
];

const Cards_section = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Mentorship Fields</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {mentorshipFields.map((field, index) => (
            <Cards key={index} title={field.title} description={field.description} icon={field.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards_section;
