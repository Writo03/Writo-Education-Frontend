import React from 'react'
import Highlights from '../Components/SGPHighlights'
import Contactus from '../Components/Contactus'
import SGPBenifits from '../Components/SGPBenifits'

const SGP = () => {
  return (
    <>
        <div className="bg2 w-full flex justify-center items-center gap-10 p-6 pb-11 flex-col ">
            <div className="lg:w-[90%] bg3 w-full  rounded-xl  p-3">
                <h1 className="lg:text-5xl text-2xl item1 text-center text-[#488B80]">School Growth Program (SGP)</h1>
            </div>
            <div className="w-full">
                 <h1 className="lg:text-4xl text-xl font-medium  text-center ">Earn Enrolment Bonus of 1000/- per student With</h1>
            </div>
            <div className="flex w-full flex-col gap-4 lg:gap-1 lg:flex-row">
                <div className="lg:w-3/5 w-full lg:px-16 flex gap-4 justify-center  items-stretch flex-col">
                    <div className=" flex  justify-center gap-4 items-center flex-row lg:p-3 p-1 rounded-3xl bg3 ">
                        <p className="text-7xl item7">0</p> <p className="lg:text-5xl text-3xl ">Investment Needed</p>
                    </div>
                    <div className=" flex  justify-center gap-4 items-center flex-row lg:p-3 p-1 rounded-3xl bg3 ">
                        <p className="text-7xl item7">1</p> <p className="lg:text-5xl text-3xl">City, 1 School Program</p>
                    </div>
                </div>
                <div className="lg:w-2/5 w-full">
                    <div className="">
                    <div className='flex justify-center items-center flex-row lg:flex-col gap-2 lg:mt-4 '>
                        <button className='mt-2 px-10 py-2 font-sans item2 lg:text-2xl lg:min-w-56 hover:bg-[#ffff] hover:text-black bg-[#488B80]  text-white rounded-full'>
                        Register Now!
                        </button>
                        <button className='mt-2 px-10 py-2 font-sans item2 lg:text-2xl lg:min-w-56  hover:bg-[#488B80] hover:text-white bg-[#ffff]  text-black rounded-full'>
                        Enquire...!!    
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center m-10">
            <h1 className="text-[#488B80] item1 lg:text-5xl text-3xl text-center">SGP Highlights</h1>
            <Highlights />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center m-10">
            <h1 className="text-[#488B80] item1 lg:text-5xl text-3xl text-center">Benefits to the School</h1>
            <SGPBenifits />
        </div>
        <Contactus />
    </>
  )
}

export default SGP
