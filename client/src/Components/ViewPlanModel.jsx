import React from 'react'
import course1Image from "../assets/course1.png";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import img1 from "../assets/ser1.png";
import img2 from "../assets/ser2.png";
import img3 from "../assets/ser3.png";
import img4 from "../assets/ser4.png";
import img5 from "../assets/ser5.png";

const ViewPlanModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

                <div className="z-1 services-component flex items-center justify-center relative  max-h-[90vh] mx-auto px-8 py-4 bg-white rounded-lg shadow-md z-10">
                    <div className="w-full max-w-screen-lg   p-6  mb-6">
                        <div className="flex flex-row  justify-between">
                        <h2 className="mb-8 mt-2 text-3xl">Our Plans</h2>
                        <IoClose className=' cursor-pointer' onClick={onClose} size={30} />
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            <Link to="/doubtsection">
                                <div className="flex rounded-lg border border-gray-200 bg-white p-6">
                                    <img
                                        src={img2}
                                        alt="Course 3"
                                        className="mr-4 rounded-lg"
                                        style={{ maxWidth: "120px", height: "auto" }}
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="mb-2 text-xl font-semibold">Doubt session</h3>
                                        <p className="mb-4 text-gray-700">
                                            Now you can solve all your doubts, even sitting at home with
                                            our expert mentors.
                                        </p>
                                        <div className="ml-auto self-end">
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/waits">
                                <div className="flex rounded-lg border border-gray-200 bg-white p-6">
                                    <img
                                        src={course1Image}
                                        alt="Course 6"
                                        className="mr-4 rounded-lg"
                                        style={{ maxWidth: "120px", height: "auto" }}
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="mb-2 text-xl font-semibold">
                                            All India Test series
                                        </h3>
                                        <p className="mb-4 text-gray-700">
                                            To score more try our all India test series and improve
                                            yourselves.
                                        </p>
                                        <div className="ml-auto self-end">
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPlanModel
