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
      description: "Train to become a world-class educator in Chemistry, teaching JEE/NEET aspirants. This program prepares you with in-depth knowledge of advanced concepts, lesson planning, and modern teaching techniques, enabling you to mentor the next generation of competitive exam candidates.",
      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Deliver high-quality lectures", "Design assessments", "Mentor students"],
      requirements: ["Master's in Chemistry", "Excellent communication skills", "Problem-solving abilities"]
    },
    {
      id: "2",
      title: "Faculty Trainee Program - Mathematics",
      location: "Bangalore",
      description: "Become a Math faculty trainee, focusing on preparing students for competitive exams. This program equips you with modern teaching methods and advanced subject knowledge, ensuring you can guide students in cracking exams like JEE and NEET.",
      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Prepare lessons", "Conduct interactive sessions", "Evaluate student progress"],
      requirements: ["Master's in Mathematics", "Strong problem-solving skills", "Passion for teaching"]
    },
    {
      id: "3",
      title: "Faculty Trainee Program - Physics",
      location: "Bangalore",
      description: "Join as a Physics faculty trainee and work on delivering high-quality education to JEE/NEET students. This role helps build teaching capabilities in advanced Physics topics while preparing students for the competitive exam landscape.",
      salary: "₹50,000 - ₹80,000 per month",
      experience: "0-2 years",
      type: "Full-Time",
      responsibilities: ["Develop teaching plans", "Engage with students", "Assess learning outcomes"],
      requirements: ["Master's in Physics", "Ability to explain complex concepts", "Mentorship skills"]
    },
    {
      id: "4",
      title: "Full Stack Developer",
      location: "Delhi",
      description: "Develop full-scale web applications with backend integration. This role involves both front-end and back-end development, requiring proficiency in the MERN stack and other web technologies.",
      salary: "₹70,000 - ₹1,00,000 per month",
      experience: "2-4 years",
      type: "Full-Time",
      responsibilities: ["Develop and maintain web applications", "Collaborate with cross-functional teams", "Write clean and efficient code"],
      requirements: ["Experience in Node.js, ReactJS, MongoDB, Express", "Strong problem-solving skills", "Knowledge of API integration"]
    },
    {
      id: "5",
      title: "Backend Engineer",
      location: "Chennai",
      description: "Develop robust server-side logic for scalable web applications. This position focuses on building efficient backends, managing databases, and integrating with front-end technologies.",
      salary: "₹60,000 - ₹90,000 per month",
      experience: "3-5 years",
      type: "Full-Time",
      responsibilities: ["Design and implement backend services", "Ensure application performance", "Manage databases and APIs"],
      requirements: ["Proficiency in Node.js, Express.js", "Database management", "API design skills"]
    },
    {
      id: "6",
      title: "Digital Marketing Specialist",
      location: "Pune",
      description: "Manage digital marketing campaigns across multiple platforms to enhance brand visibility and drive conversions. This role involves optimizing strategies for SEO, SEM, and social media marketing.",
      salary: "₹40,000 - ₹70,000 per month",
      experience: "2-4 years",
      type: "Full-Time",
      responsibilities: ["Plan and execute digital marketing campaigns", "Analyze marketing data", "Manage SEO and SEM efforts"],
      requirements: ["Experience in SEO, Google Ads, Social Media Marketing", "Strong analytics background", "Creative thinking"]
    }
  ]
  
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
 