import React from 'react'
import img from '../../../assets/vector.png'
import HeroImage from '../../../assets/course.png'
const Herosection = () => {
  return (
    <div className=" bg-white ">
      <section className="hero bg1">
        <div className="hero-text items-center text-center item1">
          <h1>Your pathway to JEE/NEET Excellence!</h1>
          <img src={img} alt="" className='ml-3 mb-2'/>
          <p className='text-4xl  items-center text-center'>
          Discover a new level of confidence in JEE/NEET exams with our expert-led sessions.
          </p>
          <div className='flex justify-start'>
            <a href="/about6to10">
            <button className='mt-2 px-6 py-3 item2 font-semibold bg-[#488B80] text-white rounded-full'>
            Buy now on 30000
            </button></a>
            
          </div>
        </div>
        
        <div className="hero-image flex justify-center items-center relative">
          <div className="image-wrapper p-2">
            <img 
              src={HeroImage} 
              alt="Students studying" 
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Herosection
