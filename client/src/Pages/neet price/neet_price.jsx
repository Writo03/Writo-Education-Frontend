/* eslint-disable react/no-unescaped-entities */
import { useState,useEffect } from "react";
import Fail from "../../assets/fail.png";
import Cup from "../../assets/cup.png";
import Writo from "../../assets/Clip path group.png";
import { CiSearch } from "react-icons/ci";
import PhoneandHand from "../../assets/phonewithhand.png";
import Task from "../../assets/task.png";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';
import Contactus from "../../Components/Contactus";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {userlogin} from "../../redux/userSlice.js"

function NeetPrice() {

  const user = useSelector((state)=> state.user.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if(user?.student_services?.neetTestSeries){
      navigate("/neet-all-india-test-series")
    }
  }, [user]);

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(selectedLanguage === language ? null : language);
  };

  const handleBatchChange = (batch) => {
    setSelectedBatch(selectedBatch === batch ? null : batch);
  };
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const [price,Setprice]=useState(99)

  const initPayment = (data) => {
		const options = {
			key: "rzp_live_fHW5qsB2j9Cpib",
			amount: data.amount,
			currency: data.currency,
			name: 'Writo Education',
			description: "Neet Test Series Payment",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = `https://writo-education-frontend.onrender.com/api/payment/verify`;
					const result = await axios.post(verifyUrl, {
            order_id : data.id,
            userId : user._id,
            razorpay_payment_id : response.razorpay_payment_id,
            razorpay_order_id : response.razorpay_order_id,
            razorpay_signature : response.razorpay_signature,
            service : "neet"
          });
          dispatch(userlogin(result.data.user))
          navigate('/neet-test-series')
					console.log(result);
				} catch (error) {
					console.log(error);
				}
			},
      prefill : { 
        "contact": user.phoneNo 
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
			const orderUrl = `http://localhost:8080/api/payment/orders`;
			const { data } = await axios.post(orderUrl, { amount: price });
			initPayment(data.order);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <>
    {/* Nav bar */}
 
      <div className="p-4 lg:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-[#488B80] mb-4">
          NEET Test Series
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* Left part */}
          <div className="flex flex-col w-full lg:w-3/5">
            <div className="flex mt-4 gap-x-10 gap-y-4">
              <div className="flex flex-col gap-y-3">
                <p className="text-black text-lg font-semibold">Language</p>
                <p className="text-lg font-medium">English</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-black text-lg font-semibold">Standard</p>
                <p className="text-lg font-medium">Class 11</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-black text-lg font-semibold">Duration</p>
                <p className="text-lg font-medium">2 Years</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold text-black">Subjects</p>
              <p className="text-lg text-black mt-2">
                Physics, Biology, Chemistry
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-[#488B80]">
                Program offerings
              </h2>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">
                    24 Tests (12 Minor + 2 Semi-Major + 10 Major) in the first
                    year. Second year tests will be announced in April'25.
                  </p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">Missed tests available for re-attempt</p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">Get detailed solutions for every test</p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">
                    You get All India Rank & detailed performance analysis
                  </p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">
                    5000+ topic-wise questions to perfect your practice
                  </p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p className="text-black text-3xl">.</p>
                  <p className="mt-4">
                    Improvement Book to track & fix all your mistakes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right part */}
          <div className="flex flex-col justify-center items-center md:items-start lg:items-center w-full lg:w-2/5 mt-6 lg:mt-0">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
              <div className="flex flex-row justify-between">
                <h2 className="text-xl font-semibold mb-4">Annual Fee</h2>
                <div className="flex items-center gap-1">

                <p className="text-xl font-bold mb-4 text-gray-700">₹{price}</p>
                </div>
              </div>
              <div className="border border-[#488B80] p-4 rounded-lg">
                <div className="mb-4 ">
                  <label className="block font-medium mb-2">
                    Select program language
                  </label>
                  <div >
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectedLanguage === "english"}
                        onChange={() => handleLanguageChange("english")}
                      />
                      <span className="ml-2">English</span>
                    </label>
                  </div>
                </div>
                {/* <div className="mb-4 ">
                  <label className="block font-medium mb-2">Select Batch</label>
                  <div className="flex flex-row gap-x-4">
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="radio"
                        name="batch"
                        className="form-radio"
                        checked={selectedBatch === "july"}
                        onChange={() => handleBatchChange("july")}
                      />
                      <span className="ml-2">July</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="radio"
                        name="batch"
                        className="form-radio"
                        checked={selectedBatch === "august"}
                        onChange={() => handleBatchChange("august")}
                      />
                      <span className="ml-2">August</span>
                    </label>
                  </div>
                </div> */}
                <p className="text-gray-500 text-sm mb-6">
                  Get this course plus top-rated picks in tech skills and other
                  popular topics.
                </p>
                <button onClick={handlePayment} className="w-full bg-[#488B80] text-white py-2 rounded-md">
                  Buy now
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 rounded-lg p-6 max-w-sm w-full border border-[#488BB0] mt-8">
              <HiOutlineSpeakerphone className="text-[#488BB0] h-16 w-16 pb-6" />
              <p className="text-[#488B80]  font-semibold text-lg">
                Free for those who are having Doubt session program
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-[#488B80] mb-4">
            About the program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-between flex-col md:flex-row">
              <div className="ml-4">
                <h3 className="md:text-xl font-semibold text-[#E67E22]">
                  All India Ranks
                </h3>

                <div className="flex flex-col gap-x-2">
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      National level ranking Writo students with All India
                      online open test
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Opportunity to know where you stand among everyone
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img src={Cup} alt="All India Ranks" className="w-32 h-32" />
              </div>
            </div>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-between flex-col md:flex-row">
              <div className="ml-4">
                <h3 className="md:text-xl font-semibold text-[#E67E22]">
                  Test Analysis
                </h3>
                <div className="flex flex-col gap-x-2">
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Improvement book to revise your mistakes
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Detailed test performance insights of your test
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={PhoneandHand}
                  alt="Test Analysis"
                  className="w-32 h-32"
                />
              </div>
            </div>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-between flex-col md:flex-row">
              <div className="ml-4">
                <h3 className="md:text-xl font-semibold text-[#E67E22]">
                  Flexible Test Series
                </h3>
                <div className="flex flex-col gap-x-2">
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Online tests which you can take from anywhere
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Attempt at your convenience at a 24 hr window
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={Fail}
                  alt="Flexible Test Series"
                  className="w-32 h-32"
                />
              </div>
            </div>
            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex items-center justify-between flex-col md:flex-row">
              <div className="ml-4">
                <h3 className="md:text-xl font-semibold text-[#E67E22]">
                  Practice on the Go
                </h3>
                <div className="flex flex-col gap-x-2">
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Create quick quizzes with custom practice from 5000+
                      questions
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <p className="text-black text-3xl">.</p>
                    <p className="mt-4">
                      Online practice problems for all the topics
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={Task}
                  alt="Practice on the Go"
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
}

export default NeetPrice;
