import React from "react";
import "./Expert.css";
import img1 from "../assets/img.png";
import { Link } from "react-router-dom";

export default function ExpertGuidance() {
  return (
    <div className="outerexpert my-5">
      <div className="innerexpert">
        <div className="imagee">
          <img className="imgg" src={img1} alt="missing image" />
        </div>
        <div className="content">
          <h3 className="gradientheading py-4">
            Unlock Your Potential With Expert Guidance !{" "}
          </h3>
          <p className="para text-xs md:text-sm lg:text-base leading-relaxed">
            Tailored advice and support from experienced mentors.Join Our
            Mentorship Program Today! Transform your aspirations into
            achievements with our dedicated mentors.
          </p>
          <Link to="/mentorship" className="py-2 mt-4">
            <button className="flex mr-auto text-white bg-[#488B80] border-0 py-2 px-6 focus:outline-none hover:bg-[#e5e7eb] hover:text-black rounded item3 font-semibold ">
              Try our mentorship program
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
