import React from "react";
import { Link } from "react-router-dom";
import Bgimage from "../assets/image 18.png";
import { cn } from "../lib/utils";

function Bgcard({ children, className, inClassName, to}) {
  return (
    <div
      className={cn(
        className,
        `group relative flex flex-row items-center justify-center overflow-hidden shadow-md md:rounded-lg`,
      )}
    >
      <img
        src={Bgimage}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className={cn(
          `relative z-10 flex flex-grow items-center justify-between flex-col gap-y-3 px-8 py-2`,inClassName
        )}
      >
        <div className="flex items-center justify-between gap-x-6">
          {children}
        </div>
        <Link
          to={to}
          className="relative mt-auto inline-block text-black"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            View <span className="ml-3">→</span>
          </span>
          <span className="absolute left-0 top-0 h-full -translate-x-full transform bg-blue-400 transition-all duration-500 ease-out group-hover:w-20 group-hover:-translate-x-2 group-hover:rounded-lg group-hover:px-1"></span>
        </Link>
      </div>
    </div>
  );
}

export default Bgcard;
