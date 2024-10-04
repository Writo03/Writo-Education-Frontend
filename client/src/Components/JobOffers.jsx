/* eslint-disable react/prop-types */
import { useState } from "react";

const JobCard = ({ title, location, description, features }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4 flex-1 max-w-sm sm:w-full">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-500">{location}</p>
    <p className="text-gray-600 mt-2">{description}</p>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {features.slice(0, 4).map((feature, index) => (
        <div key={index} className="flex items-center">
          <span className="text-teal-500 mr-2">✔</span>
          {feature}
        </div>
      ))}
    </div>
  
    <button className="mt-6 px-4 py-2 bg-[#2B8B8A] w-full text-white rounded-lg shadow hover:bg-teal-600 transition">
      Apply Now
    </button>
  </div>
  
);

const JobOffers = () => {
  const initialJobData = [
    {
      title: "Junior Web Developer",
      location: "Bangalore",
      description:
        "Join our fast-growing team to build and maintain dynamic websites. Work with HTML, CSS, and JavaScript.",
      features: ["HTML & CSS", "JavaScript", "ReactJS", "API Integration"],
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description:
        "Design intuitive and engaging user interfaces for mobile and web applications.",
      features: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      title: "Content Writer",
      location: "Mumbai",
      description:
        "Craft compelling content for blogs, websites, and marketing campaigns.",
      features: ["SEO Writing", "Copywriting", "Research", "Editing"],
    },
  ];

  const moreJobData = [
    {
      title: "Full Stack Developer",
      location: "Delhi",
      description:
        "Develop full-scale web applications with backend integration.",
      features: ["Node.js", "ReactJS", "MongoDB", "Express"],
    },
    {
      title: "Backend Engineer",
      location: "Chennai",
      description:
        "Develop robust server-side logic for scalable web applications.",
      features: ["Node.js", "Express.js", "Database Management", "API Design"],
    },
    {
      title: "Digital Marketing Specialist",
      location: "Pune",
      description:
        "Manage digital marketing campaigns across multiple platforms.",
      features: ["SEO", "Google Ads", "Social Media Marketing", "Analytics"],
    },
  ];

  const [jobData, setJobData] = useState(initialJobData);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setJobData([...jobData, ...moreJobData]);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setJobData(initialJobData);
  };

  return (
    <>
    <div className="flex flex-col items-center">
  <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 ">
    {jobData.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
 
</div>
<div className="flex justify-end mt-4">
{!showMore ? (
  <button
    className="text-teal-500 hover:underline"
    onClick={handleShowMore}
  >
    See More
  </button>
) : (
  <button
    className="text-teal-500 hover:underline"
    onClick={handleShowLess}
  >
    Show Less
  </button>
)}
</div>
</>

  );
};



export default JobOffers;