import React from "react";
import { useParams, Link } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams() ; // Get job ID from URL
  // const id="1";
  // Dummy job data
  const jobData = [
    {
      id: "1",
      title: "Faculty Trainee Program - Chemistry",
      location: "Bangalore",
      description: "Train to become a world-class educator in Chemistry, teaching JEE/NEET aspirants. This program prepares you with in-depth knowledge of advanced concepts, lesson planning, and modern teaching techniques, enabling you to mentor the next generation of competitive exam candidates.",      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Deliver high-quality lectures", "Design assessments", "Mentoring students"],
      requirements: ["Master's in Chemistry", "Excellent communication", "Problem-solving skills"],
    },
    {
      id: "2",
      title: "Faculty Trainee Program - Mathematics",
      location: "Bangalore",
      description: "Become a Math faculty trainee, focusing on preparing students for competitive exams.",
      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Prepare lessons", "Conduct interactive sessions", "Evaluate student progress"],
      requirements: ["Master's in Mathematics", "Good problem-solving skills", "Passion for teaching"],
    },
    {
      id: "3",
      title: "Faculty Trainee Program - Physics",
      location: "Bangalore",
      description: "Trainee for Physics faculty role, aimed at coaching JEE/NEET students.",
      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Develop teaching plans", "Engage with students", "Assess learning outcomes"],
      requirements: ["Master's in Physics", "Ability to explain complex concepts", "Mentorship skills"],
    },
  ];

  // Find the job details based on the ID
  const job = jobData.find((job) => job.id === id);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center  mb-6">
        <Link to="/careers" className="text-blue-500 hover:underline">
          ← Back to Careers
        </Link>
      </div>
        <h1 className="text-3xl text-center item1 text-[#184948] font-bold">{job.title}</h1>
        <div className="  p-4 bg-white rounded-lg shadow-lg lg:mx-28 my-6 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Job Description</h2>
            <p className="text-gray-600 mt-2">{job.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Responsibilities</h2>
            <ul className=" list-inside text-gray-600">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Requirements</h2>
            <ul className=" list-inside text-gray-600">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Job Highlights</h2>
          <ul className="text-gray-700">
            <li className="mb-2">
              <span className="font-semibold">Location:</span> {job.location}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Salary:</span> {job.salary}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Experience:</span> {job.experience}
            </li>
            <li className="mb-2">
              <span className="font-semibold">Job Type:</span> {job.type}
            </li>
          </ul>
          </div>
          </div> 
        </div>
     

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-[#2B8B8A] hover:bg-teal-600 text-white font-bold rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
 