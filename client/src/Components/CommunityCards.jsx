import React from 'react';
import { Link } from 'react-router-dom';

const CommunityCards = () => {
  const cards = [
    { title: 'NEET Community', description: 'Join the NEET preparation community.', link: '/communityneet' },
    { title: 'JEE Community', description: 'Join the JEE preparation community.', link: '/jee' },
    { title: 'Class 6-12 Community', description: 'Connect with peers for Classes 6-12.', link: '/class-6-12' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mx-28 my-10">
      {cards.map((card, index) => (
        <Link to={card.link} key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <h2 className="text-2xl font-semibold text-[#2B8B8A]">{card.title}</h2>
          <p className="text-gray-600 mt-4">{card.description}</p>
          <button className="mt-6 bg-[#2B8B8A] text-white px-4 py-2 rounded hover:bg-teal-600">
            Explore
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CommunityCards;
