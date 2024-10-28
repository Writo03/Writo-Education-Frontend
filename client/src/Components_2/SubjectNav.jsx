import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Calculator, Atom, FlaskConical  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubjectNav = ({ onSubjectChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const navigate = useNavigate()
  const subjects = [
    { name: 'All', icon: Grid, color: 'text-yellow-500' },
    { name: 'Maths', icon: Calculator, color: 'text-yellow-500' },
    { name: 'Physics', icon: Atom, color: 'text-yellow-500' },
    { name: 'Chemistry', icon: FlaskConical, color: 'text-yellow-500' }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const itemsToShow = 4;
  const maxScroll = Math.max(0, subjects.length - itemsToShow);

//   const handleScroll = (direction) => {
//     if (direction === 'left') {
//       setScrollPosition(Math.max(0, scrollPosition - 1));
//     } else {
//       setScrollPosition(Math.min(maxScroll, scrollPosition + 1));
//     }
//   };

  const handleSubjectClick = (subject) => {
    navigate('/doubtcourses')

    setSelectedSubject(subject);

    if (onSubjectChange) {
      onSubjectChange(subject);
    }
  };

  return (
    <div className="flex  items-center justify-center lg:gap-48 bg-[#F3F3F3] p-4 ">
      {/* <button 
        onClick={() => handleScroll('left')}
        className={`text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors ${
          scrollPosition === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={scrollPosition === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button> */}

      <div className="flex items-center justify-center lg:gap-48 flex-wrap">
        {subjects.slice(scrollPosition, scrollPosition + itemsToShow).map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            onClick={() => handleSubjectClick(name)}
            className={`flex items-center space-x-2 px-3 py-2 
            }`}
          >
            <Icon 
              className={`lg:w-10  lg:h-10 ${color}`} 
            />
            <span 
              className={`font-normal lg:text-2xl item2  ${
                selectedSubject === name ? 'text-[#434343]' : 'text-[#434343]'
              }`}
            >
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* <button 
        onClick={() => handleScroll('right')}
        className={`text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors ${
          scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={scrollPosition >= maxScroll}
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}
    </div>
  );
};

export default SubjectNav;