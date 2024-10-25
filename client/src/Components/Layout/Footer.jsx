import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
const Community_footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#178774] pt-4 md:pl-20">
        <div className="mb-2 flex w-full items-center md:mb-4">
          <div className="mb-2 flex w-full flex-col items-center justify-around rounded-full p-2 sm:w-1/3 sm:flex-row lg:bg-white">
            <input
              className="mb-2 w-80 rounded-full bg-white px-4 py-2 leading-tight text-gray-700 focus:border-teal-500 focus:outline-none sm:mb-0"
              id="email"
              type="text"
              placeholder="Email address to subscribe"
            />
            <button
              className="w-36 rounded-full bg-[#3F7A70] px-4 py-2 text-sm text-white hover:bg-[#f5f5f5] hover:text-black sm:ml-2 sm:w-32"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Middle Footer Section that contain all matter and links and about part */}
      <div>
        <div className="-mt-1 w-full bg-[#178774] px-4 py-2 text-white">
          <div className="w-full bg-[#178774] text-white md:px-8">
            <div className="w-full bg-[#178774] py-2 text-white md:px-6">
              <div className="flex w-full flex-col justify-between space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
                <div className="mr-4 w-full lg:w-1/3">
                  <div className="font-serif">
                    <h2 className="text-xl font-bold lg:text-2xl">
                      Writo Education
                    </h2>
                    <h3 className="text-xs lg:text-sm">
                      Make Yourself Future Fit
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed lg:text-base">
                      At Writo Education, we’re passionate about empowering
                      JEE/NEET aspirants to reach their full potential. Our team
                      is committed to providing you with the best learning
                      experience possible.
                    </p>
                  </div>
                </div>

                <div className="grid w-full grid-cols-2 gap-2 lg:w-2/3 lg:grid-cols-3">
                  <div className="w-full">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="text-base  flex flex-col gap-1 md:gap-2 mt-4 style={{ color: 'teal' }">
                      <p>
                        <Link to={"/why_writo"} className="hover:underline">
                          Why choose us
                        </Link>
                      </p>
                      <p>
                        <Link to={"/"} className="hover:underline">
                          Contact us
                        </Link>
                      </p>
                      <p>
                        <Link to={"/terms"} className="hover:underline">
                          Terms and conditions
                        </Link>
                      </p>
                      <p>
                        <Link to={"/privacy"} className="hover:underline">
                          Privacy policy
                        </Link>
                      </p>
                      <p>
                        <Link to={"/faq"} className="hover:underline">
                          FAQs and Help
                        </Link>
                      </p>
                    </ul>
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="mt-4 flex flex-col gap-1 text-base leading-relaxed md:gap-2">
                      Mon - Fri
                      <br />
                      9.00 am to 07.00 pm
                      <br />
                      Saturday
                      <br />
                      9.00 am to 06.00 pm
                      <br />
                      Sunday also available
                    </p>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="mt-6 lg:mt-0">
                      <h3 className="text-lg font-semibold">Contact Info</h3>
                      <p className="mt-2 flex flex-col gap-1 text-base leading-relaxed md:mt-4 md:gap-2">
                        {[
                          { icon: FaLocationDot, text: "Rewa, India" },
                          {
                            icon: BsFillTelephoneFill,
                            text: "+91 80594 58609",
                            link: "tel:+918059458609",
                          },
                          {
                            icon: IoMdMail,
                            text: "support@writo.tech",
                            link: "mailto:support@writo.tech",
                          },
                        ].map((item, idx) => (
                          <div
                            className="flex flex-row items-center space-x-2"
                            key={idx}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.link ? (
                              <a
                                className="hover:text-[#50eddb]"
                                href={item.link}
                              >
                                {item.text}
                              </a>
                            ) : (
                              <span>{item.text}</span>
                            )}
                          </div>
                        ))}
                        {/* <div className="flex flex-row">
                          <FaLocationDot className="mr-1 mt-2 h-4 w-4" />
                          Rewa, India
                        </div>
                        <div className="flex flex-row">
                          <BsFillTelephoneFill className="mr-1 mt-2 h-4 w-4" />
                          +91 80594 58609
                        </div>
                        <div className="flex flex-row">
                          <IoMdMail className="mr-1 mt-2 h-4 w-4" />
                          support@writo.tech
                        </div> */}

                        <div className="mt-2 hidden flex-row space-x-2 lg:flex">
                          <a
                            href="www.instagram.com"
                            className="hover:underline"
                          >
                            <FaInstagram className="h-6 w-6 text-white" />
                          </a>
                          <a href="#" className="hover:underline">
                            <FaFacebook className="h-6 w-6 text-white" />
                          </a>
                          <a href="#" className="hover:underline">
                            <FaLinkedin className="h-6 w-6 text-white" />
                          </a>
                          <a href="#" className="hover:underline">
                            <FaTwitter className="h-6 w-6 text-white" />
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex w-full flex-col justify-center md:mt-0 lg:hidden">
                    <div className="mt-2 flex flex-row space-x-2">
                      <a href="www.instagram.com" className="hover:underline">
                        <FaInstagram className="h-6 w-6 text-white" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaFacebook className="h-6 w-6 text-white" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaLinkedin className="h-6 w-6 text-white" />
                      </a>
                      <a href="#" className="hover:underline">
                        <FaTwitter className="h-6 w-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Part -> Copy rights Part */}
        <div className="w-full bg-[#006756] p-2 text-white">
          <div className="ml-4 flex flex-row items-center justify-center space-x-4">
            <LiaCopyrightSolid className="h-6 w-6 font-bold text-white" />
            <Link to={"/"}>
              <p className="font-semibold text-white">Writo Education</p>
            </Link>
            <Link to={"/copyrights"}>
              <p className="text-sm text-gray-500 hover:text-gray-400">
                All rights reserved
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_footer;
