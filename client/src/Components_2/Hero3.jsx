import React from 'react'
import heroimage from './heroimage.png'
import curvedline from './Vector 514.png'
import './Hero3.css'
import Heroimage3 from './Heroimage_3.png'

export default function Hero3() {
  return (
    <div className='outerhero33'>

            <div className="innerhero33 py-8  lg:px-28">
                <div className="left33">
                    <div className="con133 gap-2 lg:w-[60%]">
                        <p className='text-6xl item6 text-[#0e6657b1] '> Your Personal <span className='yellowword3'>Coach</span> is just a click away</p>
                        <img src={curvedline} className="curvedline33" alt="..." />
                    </div>

                    <div className="con233">
                        <h2 className='text-[#434343] item2 text-3xl lg:text-4xl font-semibold'>Connect Live With Your Coach</h2>
                        <p className='text-[#434343] text-xl item2'>Have a comprehensive experience</p>
                        <button type="button" class=" bg-[#434343] px-5 my-4 text-xl text-white py-2 rounded-full" >Subscribe now</button>
                    </div>
                </div>
                <div className="right33">


                    <img src={Heroimage3} className="heroimagee33" alt="..." />

                </div>


            </div>

        </div>
  )
}
