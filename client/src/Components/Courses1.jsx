import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import Bgcard from "./Bgcard"

export default function Courses1() {
  return (
    <div className="outercourse my-3">
      <div className="mt-10 flex items-center justify-center">
        <p className="item5 text-center text-2xl text-[#ED7E0A]">
          - - - - What we offer - - -
        </p>
      </div>
      <h2 className="coursetitle item2 mt-3"> Our Courses</h2>
      <div className="innercourse">
        <div className="my-5 mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
          {[6, 7, 8, 9, 10].map((item, idx) => (
            <Link key={idx} to={`/class-${item}beforepay`}>
              <Bgcard className="bg-sky-200">
                <h3 className="whitespace-nowrap text-xl font-bold text-[#488B80]">
                  {item} Class
                </h3>
              </Bgcard>
            </Link>
          ))}
          {/* {[6, 7, 8, 9, 10].map((item, idx) => (
            <Link key={idx} to={`/class-${item}beforepay`}>
              <p className="classnum text-xs md:text-sm lg:text-base">Class {item}</p>
            </Link>
          ))} */}
          {/* <Link to="/class-6beforepay">
            <p className="classnum">Class 6</p>
          </Link>
          <Link to="/class-7beforepay">
            <p className="classnum">Class 7</p>
          </Link>
          <Link to="/class-8beforepay">
            <p className="classnum">Class 8</p>
          </Link>
          <Link to="/class-9beforepay">
            <p className="classnum">Class 9</p>
          </Link>
          <Link to="/class-10beforepay">
            <p className="classnum">Class 10</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
