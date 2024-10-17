import React, { useState } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { BsBookmarkStarFill } from "react-icons/bs";
import { SlUserFollowing } from "react-icons/sl";
import { FaMagic, FaChevronLeft, FaAngleRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

// Sample data (array of objects representing team members)
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card1,
    type: "Featured",
  },
  {
    id: 2,
    name: "John",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card2,
    type: "Followed",
  },
  {
    id: 3,
    name: "John Smith",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card3,
    type: "Personalized",
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card1,
    type: "Featured",
  },
  {
    id: 5,
    name: "John",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card2,
    type: "Followed",
  },
  {
    id: 6,
    name: "John Smith",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card3,
    type: "Personalized",
  },
  {
    id: 7,
    name: "Jane Doe",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card1,
    type: "Featured",
  },
  {
    id: 8,
    name: "John",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card2,
    type: "Followed",
  },
  {
    id: 9,
    name: "John Smith",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card3,
    type: "Personalized",
  },
  {
    id: 10,
    name: "Jane Doe",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card1,
    type: "Featured",
  },
  {
    id: 11,
    name: "John",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card2,
    type: "Followed",
  },
  {
    id: 12,
    name: "John Smith",
    role: "At a school in Godhra, students whose parents had paid money were reportedly asked to..",
    imageUrl: card3,
    type: "Personalized",
  },
  // Add more team members as needed
];

const Herocards_men = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemsPerPage = 9; // Number of team members per page (3x3 grid)
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("All"); // State for filter type

  // Calculate total pages based on filtered members
  const filteredMembers =
    filterType === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.type === filterType);

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  // Function to generate an array of page numbers with ellipses
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page numbers to display

    // Case 1: Less than or equal to maxPagesToShow pages in total
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Case 2: More than maxPagesToShow pages in total
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 2) {
        endPage = maxPagesToShow;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get the team members for the current page
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  // Function to handle pagination navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Function to handle filter type change
  const handleFilterChange = (type) => {
    if (type === filterType) {
      setFilterType("All"); // Reset to 'All' if the same filter is clicked again
    } else {
      setFilterType(type);
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="item1 mt-4 flex flex-col">
      {/* Filter buttons */}
      <div className="mx-4 mb-8 mt-4 flex items-center justify-start md:mx-8">
        {["Featured", "Followed", "Personalized"].map((filter, idx) => (
          <button
            key={idx}
            className={`border-black-25 mx-2 rounded-xl border px-3 py-1 ${
              filterType === filter
                ? "bg-[#488B80] text-white"
                : "bg-transparent text-gray-800 hover:bg-[#E4F6F9]"
            }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter === "Featured" && (
              <BsBookmarkStarFill
                className={`${filterType === filter ? "text-white" : "text-[#488B80]"} mr-2 inline-block`}
              />
            )}
            {filter === "Followed" && (
              <SlUserFollowing
                className={`${filterType === filter ? "text-white" : "text-[#488B80]"} mr-2 inline-block`}
              />
            )}
            {filter === "Personalized" && (
              <FaMagic
                className={`${filterType === filter ? "text-white" : "text-[#488B80]"} mr-2 inline-block`}
              />
            )}
            {filter}
          </button>
        ))}
      </div>

      {/* <div className="mainImg">
        <img src="" alt="" />
      </div> */}

      {/* Team members grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {currentMembers.map((member, index) => (
          <div
            key={index}
            id={member.id}
            onClick={() =>
              navigate("/blogs/" + member.id, {
                state: {
                  previousUrl: location.pathname,
                  id: member.id,
                  name: member.name,
                  role: member.role,
                  imageUrl: member.imageUrl,
                },
              })
            }
          >
            <img
              alt={member.name}
              className="h-72 w-80 rounded-lg object-contain"
              src={member.imageUrl}
            />
            <div className="flex w-80 flex-col items-start justify-start">
              <h2 className="line-clamp-1 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                {member.name}
              </h2>
              <h3 className={`line-clamp-2 text-[#488B80]`}>{member.role}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="mb-7 mt-4 flex w-full justify-center">
          <button
            className={`mx-2 rounded-md px-3 py-1 ${
              currentPage === 1
                ? "cursor-not-allowed bg-gray-300"
                : "bg-[#488B80] text-white hover:bg-[#488B80]"
            }`}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          {/* Render page numbers */}
          {generatePageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              className={`mx-2 rounded-md px-3 py-1 ${
                pageNumber === currentPage
                  ? "bg-[#488B80] text-white"
                  : "bg-transparent text-gray-800 hover:bg-[#488B80] hover:text-white"
              }`}
              onClick={() => {
                if (typeof pageNumber === "number") {
                  goToPage(pageNumber);
                }
              }}
            >
              {pageNumber === "..." ? "..." : pageNumber}
            </button>
          ))}

          <button
            className={`mx-2 rounded-md px-3 py-1 ${
              currentPage === totalPages
                ? "cursor-not-allowed bg-gray-300"
                : "bg-[#488B80] text-white hover:bg-[#488B80]"
            }`}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Herocards_men;
