/* eslint-disable react/prop-types */
import { useState,useEffect} from 'react';
import { FaFilePdf, FaBars, FaTimes,  } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Whywaits1 from "../../assets/whywaits1.png";
import Whywaits2 from "../../assets/whywaits2.png";
import Whywaits3 from "../../assets/whywaits3.png";
import Contactus from "../../Components/Contactus";
import Writo from "../../assets/Clip path group.png";
// import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Hero3 from './Hero3';
import Testimonials from './Testimonials';
import Cart from './Cart';
import Navbar from '../../Components/Navbar';

const answerKeys = [
  { id: 1, text: 'Download NEET mock test answer key and solutions - 1', link: '#' },
  { id: 2, text: 'Download NEET mock test answer key and solutions - 2', link: '#' },
  { id: 3, text: 'Download NEET mock test answer key and solutions - 3', link: '#' },
];

const features = [
  {
    id: 1,
    image: Whywaits1,
    title: 'Latest Exam Patterns',
    description: 'Prepare for the level expected in the upcoming exams.',
  },
  {
    id: 2,
    image: Whywaits2,
    title: 'Save Tests and Questions',
    description: 'Save important Tests & Questions to revise or reattempt them later.',
  },
  {
    id: 3,
    image: Whywaits3,
    title: 'Performance Analysis',
    description: 'Get insights on your Strengths & Weaknesses, Compare with the Topper',
  },
];

const JeeTestSeries = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  
  const [isOpen, setIsOpen] = useState(false);



  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <>
      <Navbar/>

      {/* Hero section */}
      <Hero3 />
      <h1 className='text-center text-[#488B80]  text-2xl font-semibold mb-8 '>Waits All India Test Series for JEE Mains + Adv</h1>
      <h1 className='text-center text-[#ED7E0A]  text-2xl font-semibold mb-8' >Select the right test for you</h1>
      <h1 className='text-center text-[#ED7E0A]  text-2xl font-semibold mb-8' >Coming Soon</h1>
      {/* <Testimonials/> */}
      

      {/* Download section */}
      {/* <div className="w-full mx-auto p-4">
        <h1 className="text-center text-2xl text-[#488B80] font-semibold mb-8">JEE Test Answer key and solutions</h1>
        <div className="flex flex-col md:flex-row p-4 md:p-10 justify-center gap-4">
          {answerKeys.map((key) => (
            <div key={key.id} className="border p-4 rounded shadow-lg w-full md:w-1/2 flex flex-col items-center">
              <div className='flex flex-row gap-x-2'>
                <FaFilePdf className='h-8 w-8 text-[#488B80]' />
                <p className="mb-4 text-center font-medium text-lg">{key.text}</p>
              </div>
              <a href={key.link} className="text-black border border-black px-4 py-2 rounded flex items-center">
                Download
                <LuDownload className='ml-2' />
              </a>
            </div>
          ))}
        </div>
      </div>

      <h1 className='text-center text-[#488B80]  text-2xl font-semibold mb-8 '>Subject wise All India Test series</h1>
          <Cart/> */}

      {/* Why WAITS section */}
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-semibold mb-8">Why take WAITS?</h1>
        <div className="flex flex-col md:flex-row justify-center gap-12 p-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center w-full md:w-1/3 p-4">
              <img src={feature.image} alt={feature.title} className="mb-4 h-20 w-20" />
              <h2 className="text-lg font-semibold text-[#07744E] mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>


      

      <Contactus />
    </>
  );
};

export default JeeTestSeries;
