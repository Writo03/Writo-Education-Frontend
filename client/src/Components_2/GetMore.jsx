import React from 'react'
import './GetMore.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function GetMore() {
  const user = useSelector((state)=>state.user?.user?.user)
  const auth =useSelector((state) =>state.user.isAuthorized )
  const navigate =useNavigate()
  // console.log(user)
  const handleClick =async ()=>{
    if(!auth){
      navigate('/email')
    }
    try {
      const email =user?.email
      const response = await axios.post('https://writo-education-frontend.onrender.com/api/contact/register-doubtsection', { email });
      // const response = await axios.post('http://localhost:8080/api/contact/register-doubtsection', {email});
      console.log(response)
      if (response.data.success) {
       console.log(response.data.success)
        toast.success("Demo Registered Sucessfully Our Team will contact you");
      } else {
        // toast.error("Error submitting request");
              toast("Demo section Registered Already!!");

      }
    } catch (error) {
      console.log(error.response.data.message)
      // toast("Demo section Registered Already!!");
              toast(error.response.data.message);


    }
  }
  return (
    <div>
      <div className="outergetmore my-5">
      <Link to="/chat-home" style={{ textDecoration: 'none' }}>
      <button type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" >Learn Live</button>
      </Link>
      <Link style={{ textDecoration: 'none' }}>
      <button  onClick={handleClick} type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" >Book a demo section</button>
      </Link>
      </div>
    </div>
  ) 
}
