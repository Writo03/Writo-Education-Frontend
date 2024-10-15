import React from 'react'

const SGP = () => {
  return (
    <>
        <div className="bg2 w-full flex justify-center items-center gap-10 p-6 pb-11 flex-col ">
            <div className="w-[90%] bg3  rounded-xl  p-3">
                <h1 className="text-5xl item1 text-center text-[#488B80]">School Growth Program (SGP)</h1>
            </div>
            <div className="w-full">
                 <h1 className="text-4xl font-medium  text-center ">Earn Enrolment Bonus of 1000/- per student With</h1>
            </div>
            <div className="flex w-full flex-row">
                <div className="w-3/5 px-16 flex gap-4 justify-center  items-stretch flex-col">
                    <div className=" flex  justify-center gap-4 items-center flex-row p-3 rounded-3xl bg3 ">
                        <p className="text-7xl item7">0</p> <p className="text-5xl ">Investment Needed</p>
                    </div>
                    <div className=" flex  justify-center gap-4 items-center flex-row p-3 rounded-3xl bg3 ">
                        <p className="text-7xl item7">1</p> <p className="text-5xl ">City, 1 School Program</p>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="">
                    <div className='flex justify-center items-center flex-col gap-2 lg:mt-4 '>
                        <button className='mt-2 px-10 py-2 font-sans item2 text-2xl min-w-56 hover:bg-[#ffff] hover:text-black bg-[#488B80]  text-white rounded-full'>
                        Register Now!
                        </button>
                        <button className='mt-2 px-10 py-2 font-sans item2 text-2xl min-w-56  hover:bg-[#488B80] hover:text-white bg-[#ffff]  text-black rounded-full'>
                        Enquire...!!    
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SGP
