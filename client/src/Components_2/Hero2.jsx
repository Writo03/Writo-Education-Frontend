import React from "react";
import heroimage from "./heroimage.png";
import curvedline from "./Vector 514.png";
import "./Hero2.css";
import { useSelector } from 'react-redux';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Hero2() {
  const user = useSelector((state)=>state.user.user.user)
  console.log(user.email)
  const handleClick =async ()=>{
    try {
      const email =user.email
      const response = await axios.post('https://writo-education-frontend.onrender.com/api/contact/register-doubtsection', { email });
      // const response = await axios.post('http://localhost:8080/api/contact/register-doubtsection', {email});
      if (response.data.success) {
       console.log(response.data.success)
        toast.success("Demo Registered Sucessfully Our Team will contact you");
      } else {
        toast.error("Error submitting request");
      }
    } catch (error) {
      toast("Demo section Registered Already!!");

    }
  }
  return (
    <div className="outerhero">
      <div className="innerhero">
        <div className="left">
          <div className="con1">
            <p className="item6 text-[#0e6657b1] text-5xl">
              Where Curiosity Meets Clarity
            </p>
            <img src={curvedline} className="curvedline" alt="..." />
          </div>
          <div className="con2">
            <h2 className="Blacktitle text-[#0e6657b1] text-center">Get Your doubts Solved</h2>
            <p>Taught by experts from IIT's & NIT's</p>
            
            <button onClick={handleClick} className='mt-2 px-10 py-2 font-sans item2 lg:text-2xl lg:min-w-56 hover:bg-[#ffff] hover:text-black bg-[#488B80]  text-white rounded-full'>
              Start Demo Today
              </button>
          </div>
        </div>
        <div className="right">
          <img src={heroimage} className="heroimagee" alt="..." />
        </div>
      </div>
    </div>
  );
}
