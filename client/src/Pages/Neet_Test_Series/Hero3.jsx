/* eslint-disable react/no-unescaped-entities */

import curvedline from '../../assets/Vector 515.png'
import './Hero3.css'
import Heroimage3 from '../../assets/neet 1.png'

export default function Hero3() {
    return (
        <>
            <div className="flex justify-between lg:justify-evenly items-center flex-col md:flex-row gap-5 relative md:pb-10 pt-4 lg:w-4/5 mx-auto">
                <div className="flex flex-col items-center lg:items-start justify-evenly gap-5 lg:gap-8">
                    <h1 className="text-xl lg:text-2xl text-[#0A7F56] font-bold">NEET online Test series</h1>
                    <div className="flex flex-col items-center justify-center w-11/12 ">
                        <h3 className="text-lg lg:text-xl font-bold text-center md:text-start text-[#1BB896] lg:leading-9">Boost your NEET-UG preparation with our WAITS</h3>
                        <img src={curvedline} alt="curvedLine" className="w-36 lg:w-60 text-center" />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-2xl lg:text-3xl font-bold text-[#0A7F56]">Designed to Enhance speed</h1>
                        <p className="text-[#488B80] text-sm text-center md:text-start">Also designed to increase memory which is crucial for NEET</p>
                    </div>
                </div>
                <div className='my-10'>
                    <img src={Heroimage3} alt="" className="h-48 w-48 lg:w-80 lg:h-80 relative z-30" />
                </div>
                <div className="h-20 w-11/12 lg:w-1/2 mx-auto absolute bg-[#1AB79D] -bottom-10 flex items-center justify-center text-white rounded-lg">
                    Hurry up! Offer on WAITS ends soon
                </div>
            </div>
        </>
    )
}
