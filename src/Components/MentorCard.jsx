import React from 'react';

const MentorCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container  px-10 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6  shadow-lg relative">
              <div className="w-full flex justify-center">
                <img
                  className="w-20 h-20 rounded-full mb-4 mt-2"
                  src="https://dummyimage.com/81x81"
                  alt="profile"
                />
              </div>
              <h2 className="text-center text-2xl font-extrabold text-gray-900 title-font mb-2">Rashmi Poonea</h2>
              <div className="flex justify-center space-x-4 mb-10  mt-6">
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">Maths</span>
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">Physics</span>
              </div>
              <p className="text-center text-gray-700 mb-4 font-bold font-base">IIT Madras, 2016</p>
              <div className="flex justify-center">
                <button className="bg-[#488B80] text-white py-2 px-6 rounded-lg font-extrabold">View detail</button>
              </div>
              <div className="absolute top-0 left-0 w-full mt-4" style={{ height: '1.34px', background: '#07744E' }}></div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6 shadow-lg relative">
              <div className="w-full flex justify-center">
                <img
                  className="w-20 h-20 rounded-full mb-4 mt-2"
                  src="https://dummyimage.com/81x81"
                  alt="profile"
                />
              </div>
              <h2 className="text-center text-2xl font-extrabold text-gray-900  title-font mb-2">John Doe</h2>
              <div className="flex justify-center space-x-4 mb-10  mt-6">
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">Chemistry</span>
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">Biology</span>
              </div>
              <p className="text-center text-gray-700 mb-4 font-bold font-base">MIT, 2015</p>
              <div className="flex justify-center">
                <button className="bg-[#488B80] text-white py-2 px-6 rounded-lg item2 font-extrabold">View detail</button>
              </div>
              <div className="absolute top-0 left-0 w-full mt-4" style={{ height: '1.34px', background: '#07744E' }}></div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6  shadow-lg relative">
              <div className="w-full flex justify-center">
                <img
                  className="w-20 h-20 rounded-full mb-4 mt-2"
                  src="https://dummyimage.com/81x81"
                  alt="profile"
                />
              </div>
              <h2 className="text-center text-2xl font-extrabold text-gray-900  title-font mb-2">Jane Smith</h2>
              <div className="flex justify-center space-x-4 mb-10 mt-6">
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">History</span>
                <span className="border border-[#848484] rounded-lg px-3 py-1 text-gray-700">Geography</span>
              </div>
              <p className="text-center text-gray-700 mb-4 font-bold font-base">Harvard, 2018</p>
              <div className="flex justify-center">
                <button className="bg-[#488B80] text-white py-2 px-6 rounded-lg font-extrabold">View detail</button>
              </div>
              <div className="absolute top-0 left-0 w-full mt-4" style={{ height: '1.34px', background: '#07744E' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorCard;
