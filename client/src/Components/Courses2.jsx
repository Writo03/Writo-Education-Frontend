import React from "react";
import "./Courses2.css";
import Bgcard from "./Bgcard";
import { Link } from "react-router-dom";

export default function Courses2() {
  return (
    <div className="outercourse2 my-1">
      <div className="innercourse2 relative flex flex-wrap items-center justify-center gap-x-4 gap-y-8 text-xs md:text-sm lg:text-base">
        {[11, 12].map((item, idx) => (
          <Link to={"/class-" + item}>
            <Bgcard
              to={"/class-" + item}
              key={idx}
              className="bg-purple-200"
              inClassName="px-8 py-4"
            >
              <h4> Class {item}</h4>
              <h5> JEE/NEET Exam</h5>
            </Bgcard>
          </Link>
        ))}
        {/* <Link to="/class-11">
          <div className="outertype2">
            <div className="type2">
              <h4> Class 11</h4>
              <h5> JEE/NEET Exam</h5>
            </div>
          </div>
        </Link>
        <Link to="/class-12">
          <div className="outertype2">
            <div className="type2">
              <h4> Class 12</h4>
              <h5> JEE/NEET Exam</h5>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
