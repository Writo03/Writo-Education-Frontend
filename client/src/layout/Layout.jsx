import React, { useEffect, useState } from "react";
import Navbar from "../Components/Layout/Navbar.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userlogin } from "../redux/userSlice.js";
import { FaCircle } from "react-icons/fa6";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const getUserStatus = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get("https://writo-education-frontend.onrender.com/api/me", {
          headers : {
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        })
        dispatch(userlogin(res.data.user))
      } catch (error) {
        
      }finally {
        setIsLoading(false)
      }
    }
    getUserStatus()
  }, [])

  if(isLoading){
    return (
      <div className="h-screen flex items-center justify-center">
        <FaCircle className="animate-spin"/>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
