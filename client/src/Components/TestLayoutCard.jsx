import React from "react";
import { Link } from "react-router-dom";

const TestLayoutCard = ({
  testTitle = "Mock test - 01",
  testDate = "12 June 2024",
  testTime = "10.00 am Onwards",
  testQuestions = 200,
  testDuration = "200 minutes",
  testSubjects = "Maths, Physics, Chemistry",
  id = "66bcbf02c6fc8d227f01d422",
}) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white p-6 shadow-lg md:w-[45%] lg:w-[30%]">
      <h2 className="mb-2 text-2xl font-bold text-[#07744E]">{testTitle}</h2>
      <p className="mb-1 text-black">Conducted from {testDate}</p>
      <p className="mb-4 text-black">{testTime}</p>

      <div className="mb-6 space-y-2">
        <div className="flex">
          <span className="w-24 font-semibold">Questions</span>
          <span>: {testQuestions}</span>
        </div>
        <div className="flex">
          <span className="w-24 font-semibold">Time</span>
          <span>: {testDuration}</span>
        </div>
        <div className="flex">
          <span className="w-24 font-semibold">Subjects</span>
          <span>: {testSubjects}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to={`/jee-all-india-test-series`}>
          <button className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-700">
            GoTo Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestLayoutCard;
