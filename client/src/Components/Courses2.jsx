import React from "react";
import "./Courses2.css";
import Bgcard from "./Bgcard"


export default function Courses2() {
  return (
    <div className="outercourse2 my-1">
      <div className="innercourse2 text-xs md:text-sm lg:text-base flex flex-wrap items-center justify-center gap-x-4 gap-y-8 relative">
        {[11, 12].map((item, idx) => (
          <Bgcard key={idx} className="bg-purple-200">
            <h4> Class {item}</h4>
            <h5> JEE/NEET Exam</h5>
          </Bgcard>
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
