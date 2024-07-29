import React from 'react';
import { GoDotFill } from "react-icons/go";

const KeyFeatures = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Product Details</h2>
      <h3 className="text-xl font-semibold text-center mb-8">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Product description</h4>
          </div>
          <p className="mb-4 pl-6 pt-2">Comprehensive program meticulously crafted to equip students for the rigorous JEE & NEET examinations.</p>
          <p className="font-semibold mb-2 pl-6 text-[#ED7E0A] text-xl">Class schedule</p>
          <p className="mb-4 pl-6">5-8 Days a week<br />Online classes with break</p>
          <p className="font-semibold mb-2 pl-6">Subjects covered</p>
          <ul className="pl-6 custom-bullets grid grid-cols-2 gap-2">
            <li className="flex items-center"><p>Physics</p></li>
            <li className="flex items-center"><p>Mathematics</p></li>
            <li className="flex items-center"><p>Chemistry</p></li>
            <li className="flex items-center"><p>Biology</p></li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Support</h4>
          </div>
          <ul className="pl-5 custom-bullets">
            <li>Engage in personalized 1:1 video sessions with tutors to cater to specific learning needs.</li>
            <li>Join our doubt clearing session, it not only addresses your queries but also gains insights into your peers' thought processes on various concepts and problems.</li>
            <li>Immediate Resolution to all your problems.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Course structure</h4>
          </div>
          <ul className="pl-5 custom-bullets">
            <li>Covers extensive syllabus coverage from 6th to 12th standard.</li>
            <li>Classes include prep materials, homework, and notes for ongoing engagement and revision</li>
            <li>Learn from anywhere, connecting you with the best teachers.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Testing and Revision</h4>
          </div>
          <ul className="pl-5 custom-bullets">
            <li>We are providing All India test series for your benchmarking performance.</li>
            <li>Final months feature live revision classes and a key test series to ensure full readiness.</li>
            <li>Predict your JEE/NEET Percentile and Expected JEE/NEET All India Rank from your Overall Percentile secured.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
