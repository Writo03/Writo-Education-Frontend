import React from 'react'
import {Icon} from '@iconify/react'
import { GiAchievement } from "react-icons/gi";
const SGPBenifits = () => {
  return (
    <>
    <div className="w-full flex flex-col gap-5 justify-center items-center p-3">
        <div className="w-[90%] flex flex-row gap-5 p-3 ">
            <div className="w-[25%] flex flex-row justify-center items-center p-1  bg-[#488b803d] rounded-2xl">
                <Icon icon="lineicons:grow" width="55" height="55"style={{color:"#848484"}} />
                <h1 className="text-[#488B80] text-3xl text-center">Holistic Development</h1>
            </div>
            <div className="w-[75%] shadow-lg p-3 rounded-2xl ">
                <h1 className="">The inclusion of personality development and mentorship  will help in shaping confident, well-rounded students who  are prepared for future challenges beyond academics</h1>
            </div>
        </div>
        <div className="w-[90%] flex flex-row gap-5 p-3 ">
            <div className="w-[30%] flex flex-row justify-center items-center p-1  bg-[#488b803d] rounded-2xl">
                <Icon icon="wpf:todo-list" width="55" height="55"style={{color:"#848484"}} />
                <h1 className="text-[#488B80] text-3xl text-center">Custom Curriculum Alignmen</h1>
            </div>
            <div className="w-[70%] shadow-lg p-3 rounded-2xl ">
                <h1 className="">Our program is adaptable to your school's specific academic  structure, ensuring a seamless integration that meets the  unique needs of your students</h1>
            </div>
        </div>
        <div className="w-[90%] flex flex-row gap-5 p-3 ">
            <div className="w-[35%] flex flex-row justify-center items-center p-1  bg-[#488b803d] rounded-2xl">
                <Icon icon="healthicons:i-exam-qualification-outline" width="55" height="55"style={{color:"#848484"}} />
                <h1 className="text-[#488B80] text-3xl text-center">Enhanced Academic Results</h1>
            </div>
            <div className="w-[65%] shadow-lg p-3 rounded-2xl ">
                <h1 className="">Our focused doubt clearing, mentorship, and exam preparation will lead to improved student performance in  both board exams and competitive exams like JEE/NEET  and Olympiads.</h1>
            </div>
        </div>
        <div className="w-[90%] flex flex-row gap-5 p-3 ">
            <div className="w-[30%] flex flex-row justify-between items-center p-1  bg-[#488b803d] rounded-2xl">
            <GiAchievement size={50} style={{color:"#848484"}} />
            <h1 className="text-[#488B80] text-3xl text-center">School Reputation</h1>
            </div>
            <div className="w-[70%] shadow-lg p-3 rounded-2xl ">
                <h1 className="">By collaborating with a program that involves mentors  from prestigious institutes like IITs and NITs, your school  will enhance its reputation as a hub of excellence and  innovative education.</h1>
            </div>
        </div>
        <div className="w-[90%] flex flex-row gap-5 p-3 ">
            <div className="w-[25%] flex flex-row justify-bet items-center p-1  bg-[#488b803d] rounded-2xl">
                <Icon icon="ri:parent-fill" width="55" height="55"style={{color:"#848484"}} />
                <h1 className="text-[#488B80] text-3xl text-center">Parent Satisfaction</h1>
            </div>
            <div className="w-[75%] shadow-lg p-3 rounded-2xl ">
                <h1 className="">The inclusion of personality development and mentorship  will help in shaping confident, well-rounded students who  are prepared for future challenges beyond academicOffering a structured, comprehensive program with  continuous assessments and feedback will improve parent  satisfaction and strengthen the bond between school and  home</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default SGPBenifits
