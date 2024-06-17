import React, { useState } from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
// Sample data (array of objects representing team members)
const teamMembers = [
    {
        name: 'Jane Doe',
        role: 'Software Engineer',
        imageUrl: card1 // Remove the semicolon here
      },
  {
    name: 'John',
    role: 'UI Developer',
    imageUrl: card2
  },
  {
    name: 'John Smith',
    role: 'UI Developer',
    imageUrl: card3
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    imageUrl: card1
  },
  {
    name: 'John',
    role: 'UI Developer',
    imageUrl: card2
  },
  {
    name: 'John Smith',
    role: 'UI Developer',
    imageUrl: card3
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    imageUrl: card1
  },
  {
    name: 'John',
    role: 'UI Developer',
    imageUrl: card2
  },
  {
    name: 'John Smith',
    role: 'UI Developer',
    imageUrl: card3
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    imageUrl: card1
  },
  {
    name: 'John',
    role: 'UI Developer',
    imageUrl: card2
  },
  {
    name: 'John Smith',
    role: 'UI Developer',
    imageUrl: card3
  },
  
  // Add more team members as needed
];

const Herocards = () => {
  const itemsPerPage = 9; // Number of team members per page (3x3 grid)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get the team members for the current page
  const currentMembers = teamMembers.slice(startIndex, endIndex);

  // Function to handle pagination navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {currentMembers.map((member, index) => (
        <div key={index} className="p-4 lg:w-1/3 md:w-1/3 w-full">
          <div className="h-full flex flex-col items-center">
            <div className="mb-4">
              <img
                alt={member.name}
                className="rounded-lg object-cover object-center"
                style={{ width: '300px', height: '300px' }}
                src={member.imageUrl}
              />
            </div>
            <div className="w-full ml-1 text-left px-16"> {/* Adjust padding as needed */}
              <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
              <h3 className="text-[#0082AB] mb-3">{member.role}</h3>
              <span className="inline-flex">
                {/* Social icons can be added here */}
              </span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="w-full flex justify-center mt-4">
          <button
            className={`mx-2 px-3 py-1 rounded-md ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`mx-2 px-3 py-1 rounded-md ${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Herocards;
