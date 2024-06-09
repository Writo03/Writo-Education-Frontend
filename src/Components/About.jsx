import React from 'react';
import topImage from '../assets/image1.png'; 
import bottomImage from '../assets/image2.png'; 
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative">
          <div className="relative w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative">
              <img
                src={topImage}
                alt="Top Image"
                className="w-full h-auto rounded-lg shadow-md sm:w-3/4 md:w-2/3 lg:w-full"
              />
            </div>
            <div className="relative mt-6">
              <img
                src={bottomImage}
                alt="Bottom Image"
                className="h-auto rounded-lg shadow-md absolute top-1/2 left-1/4 transform translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="text-xl item3 text-black font-extrabold">
              Learn and clear your doubts
            </div>
            <a className="mt-2 text-black item2 text-medium" style={{display: 'block', marginBottom:'1px' }}>
                Writo believe in the transformative power of education.
            </a>
            <a className="mt-2 text-black item2 text-medium" style={{display: 'block'}}>
                Our mission is to empower learners to achieve their academic and professional 
            </a>
            <a className="mt-2 text-black item2 text-medium" style={{display: 'block'}}>
            goals through innovative, engaging, and accessible online education.
            </a>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
