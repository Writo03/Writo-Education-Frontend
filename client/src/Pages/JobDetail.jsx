import React from "react";
import { useParams, Link } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();

  const jobData = [
    {
      "id": "1",
      "title": "Writo Faculty Trainee Program (Chemistry)",
      "location": "Remote",
      "description": "Designed to train Chemistry educators to guide students for competitive exams through structured mentorship and real-world teaching experience.",
      "whyApply": [
        "Innovative Teaching Methods",
        "Interactive Learning",
        "Real-World Experience",
        "Growth Opportunities",
        "Impactful Mentoring"
      ],
      "overview": [
        "6-month program",
        "Hands-on teaching",
        "Weekly review sessions"
      ],
      "whatYouGet": [
        "Study Materials",
        "Webinars",
        "Ongoing Assessments"
      ],
      "requirements": [
        "Degree in Chemistry",
        "Good communication skills",
        "Passion for teaching"
      ],
      "applySteps": [
        "Submit Resume",
        "Complete Assessment",
        "Join the Program"
      ],
      "salary": "Unpaid",
      "experience": "0-1 years",
      "type": "Full-Time"
    },
    
    {
  "id": "2",
  "title": "Writo Faculty Trainee Program (Mathematics)",
  "location": "Remote",
  "description": "An intensive Faculty Training Program for aspiring Mathematics educators, designed to mentor and prepare them for undergraduate entrance exams.",
  "whyApply": [
    "Comprehensive Curriculum",
    "Structured Mentoring",
    "Skills Development",
    "Career Path",
    "Student Impact"
  ],
  "overview": [
    "6-month intensive training",
    "Weekly evaluations",
    "3 learning levels: Beginner, Intermediate, Advanced"
  ],
  "whatYouGet": [
    "Course Materials",
    "Interactive Webinars",
    "Regular Quizzes"
  ],
  "requirements": [
    "Bachelor's in Mathematics",
    "Ability to teach complex problems",
    "Strong analytical skills"
  ],
  "applySteps": [
    "Submit Application",
    "Complete Evaluation",
    "Begin Training"
  ],
  "salary": "Unpaid",
  "experience": "0-2 years",
  "type": "Full-Time"
  },

    {
      id: "3",
      title: "Writo Faculty Trainee Program (Physics)",
      location: "Remote",
      description:
        "Writo Education Private Limited is launching an intensive Faculty Training Program (FTP) aimed at grooming passionate educators for a rewarding career in teaching and mentoring students for undergraduate entrance exams.",
      whyApply: [
        "Professional Development",
        "Extensive Training",
        "Real-World Teaching Skills",
        "Career Growth",
        "Impact on students",
      ],
      overview: [
        "6-month rigorous training",
        "Regular study materials",
        "Weekly tests",
        "3 learning stages: Beginner, Intermediate, Pro",
      ],
      whatYouGet: [
        "Access to study materials",
        "Workshops & Webinars",
        "Regular assessment tests",
      ],
      requirements: [
        "Strong foundation in Physics concepts",
        "Ability to explain complex concepts",
        "Bachelor’s degree (minimum) in Physics",
      ],
      applySteps: [
        "Click on Apply",
        "Take the Assessment Test",
        "Start Your Training",
      ],
      salary: "Unpaid",
      experience: "0-2 years",
      type: "Full-Time",
    },
    {
      "id": "4",
      "title": "Full Stack Developer Intern",
      "location": "Remote",
      "description": "Join Writo Education's tech team as a Full Stack Developer Intern, contributing to the development of dynamic educational platforms. You will work on both frontend and backend projects, gaining hands-on experience with cutting-edge technologies.",
      "whyApply": [
        "Work on real-world projects",
        "Mentorship from senior developers",
        "Hands-on coding experience",
        "Career growth in full stack development"
      ],
      "overview": [
        "3-month internship",
        "Exposure to full stack technologies",
        "Agile development methodology"
      ],
      "whatYouGet": [
        "Access to development tools",
        "Professional mentoring",
        "Code review sessions"
      ],
      "requirements": [
        "Experience with JavaScript, React, Node.js",
        "Basic understanding of databases (MongoDB, MySQL)",
        "Passion for coding and learning"
      ],
      "applySteps": [
        "Submit your resume",
        "Complete a coding challenge",
        "Interview with the tech team"
      ],
      "salary": "Unpaid",
      "experience": "0-1 years",
      "type": "Internship"
    }
    

  ];

  const job = jobData.find((job) => job.id === id);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto flex items-center justify-center flex-col p-6">
      <div className="flex w-full lg:flex-row flex-col justify-between lg:items-center items-start mb-6">
        <Link to="/careers" className="text-blue-500 lg:mb-0 mb-4 hover:underline">
          ← Back to Careers
        </Link>
      <h1 className="text-3xl  text-center text-[#184948] font-bold">
        {job.title}
      </h1>
      <div></div>
      </div>

      <div className="p-4 bg-white  rounded-lg lg:max-w-[60%] shadow-lg lg:mx-28 my-6 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Job Description */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                Job Description
              </h2>
              <p className="text-gray-600 mt-2">{job.description}</p>
            </div>

            {/* Why You Should Apply */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                Why You Should Apply
              </h2>
              <ul className="list-inside text-gray-600">
                {job.whyApply.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Program Overview */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                Program Overview
              </h2>
              <ul className="list-inside text-gray-600">
                {job.overview.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* What You’ll Get */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                What You’ll Get
              </h2>
              <ul className="list-inside text-gray-600">
                {job.whatYouGet.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                Requirements
              </h2>
              <ul className="list-inside text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Steps to Apply */}
            <div className="mb-6">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">
                How to Apply
              </h2>
              <ul className="list-inside text-gray-600">
                {job.applySteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Highlights */}
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
                <span className="font-semibold">Experience:</span>{" "}
                {job.experience}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Job Type:</span> {job.type}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/jobform"
          className="px-6 py-2 bg-[#2B8B8A] hover:bg-teal-600 text-white font-bold rounded"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetail;
