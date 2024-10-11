import React from 'react'
import mainImg from "../assets/blog-main-img.png"

const Herosection_men = () => {
  return (
    <>
    <div className='w-[98%] md:w-11/12 lg:[w-85%] mx-auto relative rounded-3xl h-full'>
      <img src={mainImg} alt="main-blog-img" className='w-full h-full object-cover' />
      <div className='absolute bottom-2 md:bottom-6 lg:left-8 md:left-4 left-1 lg:w-1/2 md:1/3 w-full text-white z-30 lg:pr-0 pr-3'>
        <h3 className='text-lg md:text-2xl lg:text-3xl font-bold '>Gujarat Police unearth NEET ‘scam’ at Godhra center, arrest five</h3>
        <p className='hidden md:block'>At a school in Godhra, students whose parents had paid money were reportedly asked to skip the questions for which they did not know the answers and later on those answers would be filled in by the teachers post the examination</p>
      </div>
      <div className="wrapper absolute bg-black h-full w-full top-0 rounded-3xl opacity-30 z-10"></div>
    </div>
    </>
   
  )
}

export default Herosection_men
