import React from 'react'
import HeroImage from '../assets/com.png'
import img from '../assets/vector.png'
import { Link } from 'react-router-dom'


const Community_hero = (props) => {
 
  return (
    <div className=" bg-white ">
      <section className="hero bg1">
        <div className="hero-text items-center text-center item1">
          <h1 className='text-[#1bb896]'>{props.heading1}</h1>
          <img src={img} alt="" className='ml-3 mb-3'/>
          <div className="flex items-center flex-col gap-1">
          <h2 className='lg:text-4xl text-3xl font-serif text-center text-[#488B80] font-extrabold'>
            {props.heading2}
          </h2> 
          <h3 className="text-base font-sans text-[#488B80] ">
          {props.heading3}
          </h3>
          </div>
          <div className='flex justify-center lg:mt-4 '>
            <Link to="about"><button className='mt-2 px-10 py-2 font-sans item2 font-semibold hover:bg-[#488]  bg-[#488B80]  text-white rounded-full'>
            Know more
            </button></Link>
          </div>
        </div>
        
        <div className="hero-image flex justify-center items-center relative">
          <div className="image-wrapper p-2">
            <img 
              src={props.heroimg} 
              alt="Students studying" 
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Community_hero
