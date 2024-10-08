/* eslint-disable react/no-unescaped-entities */

import curvedline from "../../assets/Vector 515.png"
import "./Hero3.css"
import Heroimage3 from "../../assets/jee3.png"

export default function Hero3() {
  return (
    <>
      <div className="outerhero3">
        <div className="lg:p-6 p-0 flex items-center justify-between flex-col md:flex-row md:pb-8">
          <div className="left3 lg:p-8 md:p-2">
            <div className="flex flex-col items-center justify-center">
              <h2 className=" text-xl lg:text-3xl font-bold text-[#488B80] my-4">
                {" "}
                JEE online Test series
              </h2>
              <p className="text-[#1BB896] lg:text-3xl text-xl md:leading-7 text-center">
                {" "}
                Boost your JEE-UG preparation with <br /> Writo's Online Test
                Series,
              </p>
              <img src={curvedline} className="curvedline3" alt="..." />
            </div>

            <div className="con23">
              <h1 className="font-bold md:text-2xl lg:text-4xl text-[#488B80]">
                Designed to Enhance speed
              </h1>
              <p className="text-center md:text-sm lg:text-xl text-[#488B80] md:leading-5">
                Also designed to increase memory which is crucial for NEET
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={Heroimage3}
              className="relative top-6 -left-12 w-[470px] h-[420px] object-contain mt-[-100px]"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative -top-14  sm:p-2">
        <div className="offer">
          <p>Hurry Up ! offer on WAITS ends soon</p>
        </div>
      </div>
    </>
  )
}
