import React from "react";
import heroimage from "./heroimage.png";
import curvedline from "./Vector 514.png";
import "./Hero2.css";

export default function Hero2() {
  return (
    <div className="outerhero">
      <div className="innerhero">
        <div className="left">
          <div className="con1">
            <p className="item6 text-[#0e6657b1] text-5xl">
              Where Curiosity Meets Clarity
            </p>
            <img src={curvedline} className="curvedline" alt="..." />
          </div>
          <div className="con2">
            <h2 className="Blacktitle text-[#0e6657b1] text-center">Get Your doubts Solved</h2>
            <p>Taught by experts from IIT's & NIT's</p>
            
            <button onClick={()=>{
            }} className='mt-2 px-10 py-2 font-sans item2 lg:text-2xl lg:min-w-56 hover:bg-[#ffff] hover:text-black bg-[#488B80]  text-white rounded-full'>
              Start Demo Today
              </button>
          </div>
        </div>
        <div className="right">
          <img src={heroimage} className="heroimagee" alt="..." />
        </div>
      </div>
    </div>
  );
}
