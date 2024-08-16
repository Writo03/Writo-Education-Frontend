import React, { useState } from 'react';

const MentorSection = () => {
  // Mock data for mentors grouped by categories and subjects
  const mentorsByCategory = [
    {
      category: 'Technology',
      subjects: ['Web Development', 'Mobile App Development', 'Data Science'],
      mentors: [
        { id: 1, name: 'John Doe', subject: 'Web Development' },
        { id: 2, name: 'Jane Smith', subject: 'Mobile App Development' },
        { id: 3, name: 'Alex Johnson', subject: 'Data Science' },
        // Add more mentors as needed
      ]
    },
    {
      category: 'Business',
      subjects: ['Entrepreneurship', 'Marketing', 'Finance'],
      mentors: [
        { id: 4, name: 'Emma Brown', subject: 'Entrepreneurship' },
        { id: 5, name: 'Michael Wilson', subject: 'Marketing' },
        { id: 6, name: 'Sophia Lee', subject: 'Finance' },
        // Add more mentors as needed
      ]
    },
    // Add more categories as needed
  ];

  // State to track selected subject for filtering
  const [selectedSubject, setSelectedSubject] = useState('');

  // Function to handle subject selection
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="container mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Find Your Mentor</h2>
      {/* Filter buttons here are removed */}

      {/* Mentor cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-6">
        {/* Render mentors based on selected subject */}
        {mentorsByCategory.map(category => (
          category.mentors.map(mentor => (
            selectedSubject === '' || category.subjects.includes(selectedSubject) ? (
              <div key={mentor.id} className="bg-white p-8 shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-4">{mentor.name}</h3>
                <p className="text-gray-700">{mentor.subject}</p>
              </div>
            ) : null
          ))
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
