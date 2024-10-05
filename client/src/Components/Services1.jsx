import React from 'react'
import Mentor_nav from './Mentor_nav'
import Community_footer from './Community_footer'
import { Link } from 'react-router-dom';
import { services } from './services_2';
import Navbar from './Navbar';
const Services1 = () => {
  return (
    <div>
      
      <Mentor_nav/>
      <div className="bg-white text-white py-3 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mt-8  text-black font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-[#184948] hover:bg-[#184948cf]  p-6 rounded-lg shadow-lg  transition duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link to={`/mentor/service/${service.id}`} className="bg-[#1F5673] hover:bg-[#1f5673ce] text-white font-bold py-2 px-4 rounded">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default Services1
