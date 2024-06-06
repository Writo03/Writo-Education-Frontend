// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ name, text, rating }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-2 text-center">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/100" alt={name} />
        <h2 className="text-gray-800 text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-600 mt-1">{text}</p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.32 4.07a1 1 0 00.95.69h4.287c.969 0 1.371 1.24.588 1.81l-3.472 2.52a1 1 0 00-.364 1.118l1.32 4.07c.3.921-.755 1.688-1.54 1.118l-3.472-2.52a1 1 0 00-1.176 0l-3.472 2.52c-.784.57-1.84-.197-1.54-1.118l1.32-4.07a1 1 0 00-.364-1.118L2.95 9.497c-.784-.57-.381-1.81.588-1.81h4.287a1 1 0 00.95-.69l1.32-4.07z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
