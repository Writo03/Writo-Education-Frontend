import React from "react";
import Navbar from "../Components/Layout/Navbar.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
