import React from 'react'
import { Link } from 'react-router-dom'

const TestLayoutCard = ({testTitle = "Mock test - 01", testDate = "12 June 2024", testTime = "10.00 am Onwards", testQuestions = 200, testDuration = "200 minutes", testSubjects = "Maths, Physics, Chemistry", id = "66bcbf02c6fc8d227f01d422"}) => {
  return (
    
    <div className="w-full md:w-[45%] lg:w-[30%] rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-2xl font-bold text-[#07744E] mb-2">{testTitle}</h2>
      <p className="text-black mb-1">Conducted from {testDate}</p>
      <p className="text-black mb-4">{testTime}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex ">
          <span className="font-semibold w-24">Questions</span>
          <span>: {testQuestions}</span>
        </div>
        <div className="flex ">
          <span className="font-semibold w-24">Time</span>
          <span>: {testDuration}</span>
        </div>
        <div className="flex ">
          <span className="font-semibold w-24">Subjects</span>
          <span>: {testSubjects}</span>
        </div>
      </div>
      
      <div className="flex justify-between">
      <Link to={`/test/${id}`}>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          GoTo Test
        </button>
        </Link>
        <Link to={"/jee-all-india-test-series"}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
          View Details
        </button>
        </Link>
      </div>
    </div>
  )
}

export default TestLayoutCard