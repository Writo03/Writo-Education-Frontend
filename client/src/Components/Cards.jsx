
import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <>
    <div className="bg-[#184948]  hover:bg-[#184948cf] p-3 flex flex-col justify-normal gap-4 shadow-lg rounded-lg overflow-hidden">
      <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2">{title}</h3>
      <div className=" flex justify-center">
       {icon}
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="">
      <button className="bg-[#1F5673] hover:bg-[#ED7E0A] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Explore More
      </button>
      </div>
    </div>
    </>
  );
};

export default Card;
{/* <div className="flex items-center justify-center h-32 bg-[#41c396] text-white">
        {icon}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#41c396] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div> */}