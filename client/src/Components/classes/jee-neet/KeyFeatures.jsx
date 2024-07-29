import React from 'react';
import { GoDotFill } from "react-icons/go";

const KeyFeatures = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl text-center mb-2 item5 text-[#ED7E0A]">------ Product Details -------</h2>
      <h3 className="text-2xl font-medium text-center item1 mb-8 text-[#488B80]">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Product description</h4>
          </div>
          <p className="mb-4 pl-6 pt-2">Comprehensive program meticulously crafted to equip students for the rigorous JEE & NEET examinations.</p>
          <p className="font-semibold mb-2 pl-6 text-[#ED7E0A] text-xl">Class schedule</p>
          <p className="mb-4 pl-6">5-8 Days a week<br />Online classes with break</p>
          <p className="font-semibold mb-2 pl-6">Subjects covered</p>
          <div className="pl-6 grid grid-cols-2 gap-2">
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Physics</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Mathematics</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Chemistry</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Biology</p></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Support</h4>
          </div>
          <div className="pl-5 pt-2">
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Engage in personalized 1:1 video sessions with tutors to cater to specific learning needs.</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Join our doubt clearing session, it not only addresses your queries but also gains insights into your peers' thought processes on various concepts and problems.</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Immediate Resolution to all your problems.</p></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Course structure</h4>
          </div>
          <div className="pl-5 pt-2">
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Covers extensive syllabus coverage from 6th to 12th standard.</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Classes include prep materials, homework, and notes for ongoing engagement and revision</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Learn from anywhere, connecting you with the best teachers.</p></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-[#1BB896] p-6 rounded-md">
            <h4 className="text-lg font-semibold text-white text-center">Testing and Revision</h4>
          </div>
          <div className="pl-5 pt-2">
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>We are providing All India test series for your benchmarking performance.</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Final months feature live revision classes and a key test series to ensure full readiness.</p></div>
            <div className="flex items-center"><GoDotFill className="mr-2 text-[#488B80]" style={{ fontSize: '10px' }} /><p>Predict your JEE/NEET Percentile and Expected JEE/NEET All India Rank from your Overall Percentile secured.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
