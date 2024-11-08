import React,{useEffect} from 'react'
import Hero3 from '../Components_2/Hero3'
import ConnectCoaches from '../Components_2/ConnectCoaches'
import Contactus from '../Components_2/Contactus'
import GetMore from '../Components_2/GetMore'
import { ToastContainer, toast } from 'react-toastify';

import blue from  '../assets/blue.png'

export default function Doubt_courses() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
          <Hero3/>
          <div className="flex flex-col items-center my-10">
          <h2 className="lg:text-4xl text-3xl font-semibold text-[#ED7E0A]   text-center item2" >Get Connect to your Coaches </h2>
          <img src={blue} alt="" className='w-[150px] lg:ml-[250px]' />
          </div>
          <ConnectCoaches/>
          <div className="flex flex-col items-center my-10">
          <h2 className="text-4xl font-semibold text-[#ED7E0A]   text-center item2" >Get More With Writo  </h2>
          <img src={blue} alt="" className='w-[150px] lg:ml-[250px]' />
          </div>
          <GetMore/>
          <Contactus />
          <ToastContainer/>
    </div>
  )
}
