import studyTimeImg from "../../assets/allindiatest.png"
import vectoeImg from "../../assets/Vector 515.png"

import { TbAddressBook } from "react-icons/tb"
import { IoMdTime } from "react-icons/io"
import Whywaits1 from "../../assets/whywaits1.png"
import Whywaits2 from "../../assets/whywaits2.png"
import Whywaits3 from "../../assets/whywaits3.png"
import Contactus from "../../Components/Contactus"

import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"
import { Loader } from "lucide-react"

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
]

function NeetAllIndiaTestseries() {
  const navigate = useNavigate()
  const {testId} = useParams()


  const user = useSelector((state)=> state.user.user)
  const [quiz, setQuiz] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({
    isError : false,
    message : ""
  })

  const getQuiz = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`https://writo-education-frontend.onrender.com/api/quiz/get-quiz/${testId}`)
      setQuiz(res.data.quiz)
      setError({
        isError : false,
        message : ""
      })
      setIsLoading(false)
    } catch (error) {
      setError({
        isError : true,
        message : "error while loading the quiz"
      })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if(user?.student_services?.neetTestSeries === false){
      navigate("/neet-price")
    }
    getQuiz()
  }, [user]);




  if(isLoading){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin h-8 w-8"/>
      </div>
    )
  }

  if(error.isError){
    return (
      <div className="h-screen flex items-center justify-center font-bold">
        {
          error.message
        }
      </div>
    )
  }

  return (
    <>

      {/*hero section */}
      <div className="flex flex-col md:flex-row border p-6 rounded-lg shadow-lg max-w-screen-lg mx-auto  mb-6">
        <div className="flex-1">
          <h2 className="text-[#488B80] text-xl font-semibold mb-2">
            NEET All India Test Series
          </h2>
          <div>
            <img
              className=" w-52 ml-4 h-8 mt-2 mb-2"
              src={vectoeImg}
              alt="vector img"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#0A7F56]  mt-8">
            {quiz.test_name}
          </h3>
          <div className="mb-4">
            <div className="flex gap-y-3 flex-col lg:flex-row  md:gap-x-12">
              <p className="flex items-center">
                <TbAddressBook className="h-6 w-6 text-gray-600 mr-2" />
                {quiz.questionsCount} Questions 
              </p>
            </div>
            <p className="flex items-center mt-4">
              <IoMdTime className="h-6 w-6 text-gray-600  mr-2" />
              200 minutes
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-4">Syllabus</h4>
            {quiz.subjects.map((sub) => (
              <p key={sub}>
              {sub}<span className="ml-8 mr-4"> -</span>{" "}
              <span className="text-sm">Full syllabus mock questions</span>
            </p>
            ))}
           
          </div>
          <Link to={`/test/${quiz._id}`}>
            <button className="bg-[#488B80] mt-4 text-white py-2 px-4 rounded">
              Take test
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0 md:ml-6">
          <img
            src={studyTimeImg}
            alt="Study Time"
            className="w-80 h-80 rounded"
          />
        </div>
      </div>
      {/* Why WAITS section */}
      <div className="lg:w-[80%] w-full mx-auto p-4">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Why take WAITS?
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-12 p-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center w-full md:w-1/3 p-4"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-4 h-20 w-20"
              />
              <h2 className="text-lg font-semibold text-[#07744E] mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Contactus />
    </>
  )
}

export default NeetAllIndiaTestseries
