/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaFilePdf, FaBars, FaTimes } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Whywaits1 from "../../assets/whywaits1.png";
import Whywaits2 from "../../assets/whywaits2.png";
import Whywaits3 from "../../assets/whywaits3.png";
import Contactus from "../../Components/Contactus";
import Writo from "../../assets/Clip path group.png";
// import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Hero3 from "./Hero3";
import Testimonials from "./Testimonials";
import Cart from "./Cart";
import Navbar from "../../Components/Navbar";
import TestLayoutCard from "../../Components/TestLayoutCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";

const answerKeys = [
  {
    id: 1,
    text: "Download NEET mock test answer key and solutions - 1",
    link: "#",
  },
  {
    id: 2,
    text: "Download NEET mock test answer key and solutions - 2",
    link: "#",
  },
  {
    id: 3,
    text: "Download NEET mock test answer key and solutions - 3",
    link: "#",
  },
];

const features = [
  {
    id: 1,
    image: Whywaits1,
    title: "Latest Exam Patterns",
    description: "Prepare for the level expected in the upcoming exams.",
  },
  {
    id: 2,
    image: Whywaits2,
    title: "Save Tests and Questions",
    description:
      "Save important Tests & Questions to revise or reattempt them later.",
  },
  {
    id: 3,
    image: Whywaits3,
    title: "Performance Analysis",
    description:
      "Get insights on your Strengths & Weaknesses, Compare with the Topper",
  },
];

const JeeTestSeries = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  const [allTest, setAllTest] = useState([]);
  const [subjectTest, setSubjectTest] = useState([]);
  const [isAllLoading, setIsAllLoading] = useState(false);
  const [isSubjectLoading, setIsSubjectLoading] = useState(false);
  const [allError, setAllError] = useState({
    isError: false,
    message: "",
  });
  const [subjectError, setSubjectError] = useState({
    isError: false,
    message: "",
  });

  const getAllTest = async () => {
    setIsAllLoading(true);
    try {
      const res = await axios.get(
        "https://writo-education-frontend.onrender.com/api/quiz/get-quizes-optimized/jee-all",
      );
      setAllError({
        isError: false,
        message: "",
      });
      setAllTest(res.data.quizes);
    } catch (error) {
      setAllError({
        isError: true,
        message: error.response.data.message,
      });
    } finally {
      setIsAllLoading(false);
    }
  };
  const getAllSubject = async () => {
    setIsSubjectLoading(true);
    try {
      const res = await axios.get(
        "https://writo-education-frontend.onrender.com/api/quiz/get-quizes-optimized/jee-subject",
      );
      setSubjectError({
        isError: false,
        message: "",
      });
      setSubjectTest(res.data.quizes);
    } catch (error) {
      setSubjectError({
        isError: true,
        message: error.response.data.message,
      });
    } finally {
      setIsSubjectLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // if(user?.student_services?.jeeTestSeries === false){
    //   navigate("/jee-price")
    // }
    getAllTest();
    getAllSubject();
  }, [user]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hero section */}
      <Hero3 />
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#488B80]">
        Waits All India Test Series for JEE Mains + Adv
      </h1>
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#ED7E0A]">
        Select the right test for you
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 px-3">
        {isAllLoading ? (
          <Loader className="h-8 w-8 animate-spin" />
        ) : allError.isError ? (
          <div>{allError.message}</div>
        ) : (
          allTest.map((test) => <TestLayoutCard testTitle={test.test_name} testQuestions={test.questionsCount} testSubjects={test.subjects} id={test._id} />)
        )}
      </div>
      {/* <Testimonials/> */}

      {/* Download section */}
      <div className="mx-auto mt-12 w-full p-4">
        <h1 className="mb-8 text-center text-2xl font-semibold text-[#488B80]">
          JEE Test Answer key and solutions
        </h1>
        <div className="flex flex-col justify-center gap-4 p-4 md:flex-row md:flex-wrap md:p-10">
          {answerKeys.map((key) => (
            <div
              key={key.id}
              className="flex w-full flex-col items-center rounded border p-4 shadow-lg md:w-[40%] lg:w-[30%]"
            >
              <div className="flex flex-row gap-x-2">
                <FaFilePdf className="h-8 w-8 text-[#488B80]" />
                <p className="mb-4 text-center text-lg font-medium">
                  {key.text}
                </p>
              </div>
              <a
                href={key.link}
                className="flex items-center rounded border border-black px-4 py-2 text-black"
              >
                Download
                <LuDownload className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <h1 className="mb-8 mt-4 text-center text-2xl font-semibold text-[#488B80]">
        Subject wise All India Test series
      </h1>
      {
        isSubjectLoading ? (
          <Loader className="h-8 w-8 animate-spin" />
        ) : (
          subjectError.isError ? (
            <div>{subjectError.message}</div>
          ) : <Cart data={subjectTest}/>
        )
      }

      {/* Why WAITS section */}
      <div className="container mx-auto mt-8 p-4">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          Why take WAITS?
        </h1>
        <div className="flex flex-col justify-center gap-12 p-4 md:flex-row">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex w-full flex-col items-center p-4 text-center md:w-1/3"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-4 h-20 w-20"
              />
              <h2 className="mb-2 text-lg font-semibold text-[#07744E]">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JeeTestSeries;
