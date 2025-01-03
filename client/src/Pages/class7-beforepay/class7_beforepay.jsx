/* eslint-disable react/no-unescaped-entities */
//import { FaPlay } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";
import { FaStar, FaBoxOpen, FaStarHalfAlt } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
//import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
//import Chempic from "../../assets/class6-chemistry.png"
import Chempic from "../../assets/chemistry1.png";
import Mathpic from "../../assets/maths1.png";
import Biopic from "../../assets/biology1.png";
import Phypic from "../../assets/physics1.png";
//import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Class7_beforepay() {
  const subjects = [
    { name: "Physics", imgSrc: Phypic },
    { name: "Maths", imgSrc: Mathpic },
    { name: "Chemistry", imgSrc: Chempic },
    { name: "Biology", imgSrc: Biopic },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [id, setId] = useState("");
  const [auth, setAuth] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [price, setPrice] = useState(2999);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/id`)
      .then((result) => {
        if (result.data.valid) {
          setId(result.data.id);
          setAuth(true);
        }
      })
      .catch((err) => console.log(err));
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_id6mUicmvlvjzB",
      amount: data.amount,
      currency: data.currency,
      name: "Class 7",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `http://localhost:8080/api/payment/verify`;
          const result = await axios.post(verifyUrl, response);
          const result2 = await axios.post(
            `http://localhost:8080/api/mentors/assign-mentor/${id}`,
            { subjects: ["maths", "physics", "chemistry", "biology"] },
          );
          navigate("/");
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      if (auth) {
        const orderUrl = `http://localhost:8080/api/payment/orders`;
        const { data } = await axios.post(orderUrl, { amount: price });
        console.log(data);
        initPayment(data.data);
      } else {
        setShowLoginModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/email");
  };

  return (
    <>
      
      <div className="min-h-screen bg-white p-6">
        <div className="mb-6 w-full rounded-lg bg-white p-4 shadow-lg lg:mb-0">
          {/*Heading */}

          <div className="mt-6 flex w-full flex-col items-center justify-between gap-x-8 sm:p-2 md:px-6 lg:flex-row lg:items-start">
            {/* Left Column */}
            <div className="sm:w-full md:w-2/3">
              <h1 className="mb-3 text-3xl font-bold">
                Online Coaching for class7
              </h1>
              <h2 className="mb-3 text-lg font-semibold">By Brice Wilson</h2>
              <div className="mb-4 flex items-center text-yellow-500">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="h-6 w-6" />
                ))}
                <FaStarHalfAlt className="h-6 w-6" />
              </div>
              <p className="mb-6">
                Our comprehensive program is designed to empower your child to
                excel in all their class 6 fundamental subjects, including
                Mathematics, Physics, Chemistry, Biology through interactive
                lessons, clear explanations, captivating content, and engaging
                storytelling.
              </p>

              <p className="mb-4 mt-16 flex items-center justify-center border border-[#488b80c9] opacity-50 sm:w-full md:ml-8 md:w-11/12"></p>
              <div className="my-8 flex flex-row gap-x-5 text-[#488B80] md:ml-8">
                <FaBoxOpen className="h-6 w-6" />
                <h3 className="font-mrdium text-xl">What You'll Get</h3>
              </div>

              {/* sessions like assignment and practice test etc */}
              <div className="mb-4 flex flex-col flex-wrap gap-4 md:flex-row md:flex-nowrap md:gap-8">
                <div className="mb-4 flex flex-col items-center justify-center px-4 py-2 md:mb-0 md:ml-6 md:mr-4">
                  <p className="text-lg font-semibold text-[#2b8b89ea]">20+</p>
                  <p className="text-sm text-gray-600">Assignments</p>
                </div>
                <div className="h-18 md:h-22 flex items-center justify-center">
                  <div className="h-full w-full border-t border-black opacity-50 md:w-auto md:border-l md:border-t-0"></div>
                </div>

                <div className="mb-4 flex flex-col items-center justify-center px-4 py-2 md:mb-0 md:mr-4">
                  <p className="text-lg font-semibold text-[#2b8b89ea]">120+</p>
                  <p className="text-sm text-gray-600">Lectures</p>
                </div>
                <div className="h-18 md:h-22 flex items-center justify-center">
                  <div className="h-full w-full border-t border-black opacity-50 md:w-auto md:border-l md:border-t-0"></div>
                </div>

                <div className="mb-4 flex flex-col items-center justify-center px-4 py-2 md:mb-0 md:mr-4">
                  <p className="text-lg font-semibold text-[#2b8b89ea]">10</p>
                  <p className="text-sm text-gray-600">MOCK TEST</p>
                </div>
                <div className="h-18 md:h-22 flex items-center justify-center">
                  <div className="h-full w-full border-t border-black opacity-50 md:w-auto md:border-l md:border-t-0"></div>
                </div>

                <div className="mb-4 flex flex-col items-center justify-center px-4 py-2 md:mb-0 md:mr-4">
                  <p className="text-lg font-semibold text-[#2b8b89ea]">20+</p>
                  <p className="text-sm text-gray-600">Practice</p>
                </div>
              </div>

              {/* subject covered section */}
              <div className="my-8 flex flex-row gap-x-5 text-[#488B80] md:ml-8">
                <BsBookHalf className="h-6 w-6" />
                <h3 className="font-mrdium text-xl">Subjects Covered</h3>
              </div>

              {/*subjects showing section*/}

              <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="flex flex-col items-center"
                    >
                      <img
                        src={subject.imgSrc}
                        alt={subject.name}
                        className="mb-4 h-52 w-56 rounded-xl object-fill hover:scale-125 hover:pb-2"
                      />
                      <h2 className="text-xl font-semibold">{subject.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Column cart */}
            <div className="w-full rounded-lg border border-[#4eac9c] bg-white p-4 shadow-lg lg:w-1/3">
              <h3 className="mb-4 text-xl font-bold">Try For Free</h3>
              <p className="mb-4">
                Get this course plus top-rated picks in tech skills and other
                popular topics.
              </p>
              <Link to={"/payment-page"}>
                <button className="mb-4 w-full rounded bg-[#488B80] px-4 py-2 text-white hover:bg-[#4eac9c]">
                Coming Soon
                </button>
              </Link>
              <p className="mb-6 text-center">
                ₹ 749 per month after 10 day trial
              </p>
              <p className="mb-4 flex items-center justify-center border border-[#488b80c9] opacity-50 sm:w-full md:ml-4 md:w-11/12"></p>
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-medium md:ml-7">
                  Your 10 day Standard free trial includes
                </h4>
                <div className="mb-2 flex flex-col md:w-4/5 md:items-center md:justify-center">
                  <div className="flex flex-row gap-x-3">
                    <IoMdPlayCircle className="h-8 w-8 text-[#488B80]" />
                    <p className="text-lg font-bold">Expert-led courses</p>
                  </div>
                  <div className="md:ml-20">
                    <p className="text-gray-600">
                      Keep up with the pace of change with thousands of
                      expert-led, in-depth courses.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-4 flex items-center justify-center border border-[#488b80c9] opacity-50 sm:w-full md:ml-10 md:w-3/4"></p>
              <div className="ml-8">
                <div className="flex flex-row gap-x-4">
                  <HiUserGroup className="h-6 w-6 text-[#488B80]" />
                  <h4 className="mb-2 font-semibold">For teams</h4>
                </div>

                <p className="mb-2 text-gray-600">
                  <Link to={"/user-details"}>
                    <strong className="hover:underline">
                      Give up to 50 users
                    </strong>
                  </Link>{" "}
                  access to our full library including this course{" "}
                  <strong>free for 30 days</strong>
                </p>
              </div>
              <p className="mb-4 mt-8 flex items-center justify-center border border-[#488b80c9] opacity-50 sm:w-full md:ml-10 md:w-3/4"></p>

              <div className="flex flex-col items-center justify-center gap-36">
                <div>
                  <p className="mb-4 mt-4 text-black">
                    Do not miss out the deal!!
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-x-4">
                  <div className="-skew-x-35 relative flex w-64 transform items-center justify-center bg-yellow-400 px-2 py-4 font-bold">
                    Coming Soon
                  </div>
                  {/* <div className="flex flex-row gap-x-4 mt-4">
                  <LuIndianRupee className="w-8 h-8" />
                  <div className="text-3xl text-black font-semibold">2999</div>
                  <div className="relative inline-block text-lg  text-black crossed">
                    <div className="relative top-[17px] border bg-black border-red-600 w-12 transform rotate-[27deg]"></div>
                    6999
                    <div className="relative bottom-[14px] border bg-black border-red-600  w-12 transform -rotate-[27deg]"></div>
                  </div>
                </div> 
                  <button onClick={handlePayment} className="mt-6 bg-[#488B80] text-white py-2 px-4 rounded w-full hover:bg-[#4eac9c] mb-4">
                    Join today
                  </button>*/}
                </div>
              </div>
            </div>
          </div>

          {/*course outcomes */}

          <div className="flex w-full flex-col gap-x-6 sm:px-4 md:px-12">
            <div className="my-8 flex flex-col items-center text-[#488B80] md:flex-row md:gap-x-5">
              <TbSchool className="mb-2 h-6 w-6 md:mb-0" />
              <h3 className="text-xl font-medium">Course Outcomes</h3>
            </div>

            <div>
              Physics has advanced significantly in recent years. This course
              will provide you with an overview of the fundamental principles of
              physics as well as the skills required to apply these principles
              in various real-world scenarios. You will explore the concepts of
              motion, forces, energy, and matter, learning how they interact and
              influence each other. From understanding the laws of gravity to
              exploring the principles of electromagnetism, this course will
              equip you with the knowledge needed to comprehend the physical
              world around us. Whether you're interested in the mechanics of
              everyday objects or the vast phenomena of the universe, this
              course will offer the foundational insights necessary to pursue
              further studies or careers in physics and related fields.You'll
              also investigate atomic and nuclear physics, gaining insights into
              the behavior of particles at the smallest scales. Practical
              experiments and problem-solving sessions will enhance your
              understanding and help you develop critical thinking skills. This
              comprehensive approach ensures you not only grasp theoretical
              concepts but also appreciate their practical applications in
              technology, engineering, and everyday life.
            </div>
          </div>
          <p className="mb-4 mt-10 flex items-center justify-center border border-[#488b80c9] opacity-50 sm:w-full md:ml-12 md:w-11/12"></p>

          <div className="flex w-full flex-col items-center justify-between gap-x-8 sm:p-2 md:px-6 lg:flex-row lg:items-start">
            <div className="w-full p-4 md:p-8">
              {/* Course Info */}
              <h1 className="mt-2 text-2xl font-medium text-[#488B80]">
                Course info
              </h1>
              <div className="mt-4 flex flex-col justify-between md:flex-row">
                <div className="flex w-full flex-col gap-y-4 md:w-5/12">
                  <div className="flex flex-row justify-between">
                    <p>Rating</p>
                    <div className="flex flex-row gap-x-2">
                      <div className="mt-1 flex flex-row text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                      <p>{"(159)"}</p>
                    </div>
                  </div>
                  <div className="mb-2 mt-1 w-full border border-[#488B80] border-opacity-50"></div>
                  <div className="flex flex-row justify-between">
                    <p>Level</p>
                    <div className="flex flex-row gap-x-2">
                      <p>Beginner</p>
                      <IoTrendingUpSharp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mb-2 mt-1 w-full border border-[#488B80] border-opacity-50 sm:block md:hidden"></div>
                </div>

                {/* Vertical Line */}
                <div className="hidden h-24 items-center justify-center md:flex">
                  <div className="h-full border-l border-[#488B80] opacity-50"></div>
                </div>

                <div className="mt-4 flex w-full flex-col gap-y-4 md:mt-0 md:w-5/12">
                  <div className="flex flex-row justify-between">
                    <p>Updated</p>
                    <div className="flex flex-row gap-x-2">
                      <p>June 11, 2024</p>
                      <MdDateRange className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mb-2 mt-1 w-full border border-[#488B80] border-opacity-50"></div>
                  <div className="flex flex-row justify-between">
                    <p>Duration</p>
                    <div className="flex flex-row gap-x-2">
                      <p>30 m</p>
                      <FaRegClock className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="rounded-md bg-white p-4 shadow-md">
            <h3 className="mb-2 text-lg font-medium">Login Required</h3>
            <p className="text-gray-700">
              You need to be logged in to make a payment.
            </p>
            <div className="mt-4 flex justify-between">
              <button
                className="btn btn-outline"
                onClick={() => setShowLoginModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Class7_beforepay;
