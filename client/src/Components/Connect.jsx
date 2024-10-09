import React,{useState} from 'react';
import img1 from '../assets/neet1.png';
import img2 from '../assets/neet2.png';
import './Connect.css'; // Import your CSS file for styling

const Connect = (props) => {
  return (
    <div className="my-10 md:m-0 outerexpert bg-[#F6FAFF]">
      <div className="innerexpert p-0 md:p-5"> 
        <div className="content">
          <h3 className=' text-2xl md:text-3xl gradientheading'>Connect and collabrate</h3>
          
          <ul className='list-disc text-base md:text-xl mt-4 '>
            <p className=' mb-4 leading-8'>
            Join a vibrant community of Writo who share your passion and drive.
          </p>
          <p className='mb-4 leading-8'>
            Connect with individuals who are as excited about {props.course} Exam as you are, fostering an environment of collaboration and mutual growth.
          </p>
          <ul className=' text-base md:text-xl mt-4 pl-3 md:pl-5'>
            <li className=' mt-6 sm:mt-2'>
              Meet like minded people
            </li>
            <li className=' mt-6 sm:mt-2'>
              Participate in challenges, competitions, and win digital badges.
            </li>
            <li className='mt-6 sm:mt-2'>
              Join the self-learning environment and explore on your own.
            </li>
          </ul>
          </ul>
        </div>

        <div className="image-container items-center justify-center ml-32 md:ml-40">
          <img className="w-60 sm:w-30" src={img1} alt="child1" />
          <img src={img2} alt="child2" className='w-40 overlay-img sm:w-18' />
        </div>
      </div>
    </div>
  );
}

export default Connect;
