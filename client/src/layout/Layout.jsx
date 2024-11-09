import React, { useEffect, useState } from "react";
import Navbar from "../Components/Layout/Navbar.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userlogin } from "../redux/userSlice.js";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserStatus = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://writo-education-frontend.onrender.com/api/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        dispatch(userlogin(res.data.user));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getUserStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex items-end justify-center p-3">
          <h2 className="text-center text-4xl font-bold">Loading</h2>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="relative left-[0.3rem] top-[0.5rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="12" r="3">
              <animate
                id="spinner_qFRN"
                begin="0;spinner_OcgL.end+0.25s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="12" cy="12" r="3">
              <animate
                begin="spinner_qFRN.begin+0.1s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="20" cy="12" r="3">
              <animate
                id="spinner_OcgL"
                begin="spinner_qFRN.begin+0.2s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="absolute left-0 top-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="0">
              <animate
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    );
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
