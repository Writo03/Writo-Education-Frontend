import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Test = () => {
  // --- Existing state management ---
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState();
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct, setCorrect] = useState("");
  const [choosen, setChoosen] = useState("");
  const [result, setResult] = useState({
    test_id: id,
    score: 0,
    results: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

  // --- New state for enhanced UI ---
  const [sections] = useState(["Quant", "Verbal"]); // Add sections for CAT prep
  const [currentSection, setCurrentSection] = useState("Quant");
  const [questionStatuses, setQuestionStatuses] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  // Initialize question statuses when data loads
  useEffect(() => {
    if (data?.questions) {
      setQuestionStatuses(
        data.questions.map(() => ({
          answered: false,
          marked: false,
          current: false,
        })),
      );
    }
  }, [data]);

  // --- Existing timer logic ---
  useEffect(() => {
    const storedStartTime = localStorage.getItem("quizStartTime");
    const storedIndex = parseInt(localStorage.getItem("quizCurrentIndex"), 10);

    if (storedStartTime && storedIndex === currentIndex) {
      const elapsedTime = Math.floor((Date.now() - storedStartTime) / 1000);
      const remainingTime = Math.max(120 - elapsedTime, 0);
      setTimeLeft(remainingTime);
    } else {
      localStorage.setItem("quizStartTime", Date.now().toString());
      setTimeLeft(120);
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTimeLeft = prev - 1;
        if (newTimeLeft <= 0) {
          clearInterval(timerInterval);
          handleNext();
          return 0;
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [currentIndex]);

  // --- Existing data fetching logic ---
  useEffect(() => {
    axios
      .get(
        `https://writo-education-frontend.onrender.com/api/quiz/get-quiz/${id}`,
      )
      .then((response) => {
        const quizData = response.data.quiz;
        console.log(quizData);
        setData(quizData);
        if (quizData.questions.length > 0) {
          const firstQuestion = quizData.questions[0];
          setImage(firstQuestion.image);
          setQuestion(firstQuestion.question);
          setOption1(firstQuestion.option1);
          setOption2(firstQuestion.option2);
          setOption3(firstQuestion.option3);
          setOption4(firstQuestion.option4);
          setCorrect(firstQuestion.correct);
        }
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setLoad(false);
      });
  }, [id]);

  // --- Enhanced option change handler ---
  const handleOptionChange = (option) => {
    setChoosen(option);
    setQuestionStatuses((prev) =>
      prev.map((status, idx) =>
        idx === currentIndex ? { ...status, answered: true } : status,
      ),
    );
  };

  // --- Existing next handler with status update ---
  const handleNext = () => {
    const newItem = {
      question,
      option1,
      option2,
      option3,
      option4,
      correct_option: correct,
      choosen_option: choosen,
    };

    if (result.results[currentIndex]) {
      let q = result.results[currentIndex];
      if (q.choosen_option === q.correct_option) {
        if (choosen !== correct) {
          setResult((prevResult) => ({
            ...prevResult,
            score: prevResult.score - 4,
          }));
        }
      } else {
        if (choosen === correct) {
          setResult((prevResult) => ({
            ...prevResult,
            score: prevResult.score + 4,
          }));
        }
      }
    } else {
      setResult((prevResult) => {
        const updatedResults = [...prevResult.results, newItem];
        let updatedScore = prevResult.score;

        if (correct === choosen) {
          updatedScore += 3;
        } else if (choosen !== "") {
          updatedScore -= 1;
        }

        return {
          ...prevResult,
          score: updatedScore,
          results: updatedResults,
        };
      });
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < data.questions.length) {
      const nextQuestion = data.questions[nextIndex];
      setCurrentIndex(nextIndex);
      setQuestion(nextQuestion.question);
      setImage(nextQuestion.image);
      setOption1(nextQuestion.option1);
      setOption2(nextQuestion.option2);
      setOption3(nextQuestion.option3);
      setOption4(nextQuestion.option4);
      setCorrect(nextQuestion.correct);
      if (result.results[nextIndex]) {
        setChoosen(result.results[nextIndex].choosen_option);
      } else {
        setChoosen("");
      }
      localStorage.setItem("quizCurrentIndex", nextIndex.toString());
      localStorage.setItem("quizStartTime", Date.now().toString());
      setTimeLeft(120);
    } else {
      setIsFinished(true);
    }
  };

  // --- New navigation handlers ---
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevQuestion = data.questions[prevIndex];
      setCurrentIndex(prevIndex);
      setQuestion(prevQuestion.question);
      setImage(prevQuestion.image);
      setOption1(prevQuestion.option1);
      setOption2(prevQuestion.option2);
      setOption3(prevQuestion.option3);
      setOption4(prevQuestion.option4);
      setCorrect(prevQuestion.correct);
      setChoosen(result.results[prevIndex].choosen_option);
      localStorage.setItem("quizCurrentIndex", prevIndex.toString());
      localStorage.setItem("quizStartTime", Date.now().toString());
      setTimeLeft(120);
    }
  };

  const handleMarkForReview = () => {
    setQuestionStatuses((prev) =>
      prev.map((status, idx) =>
        idx === currentIndex ? { ...status, marked: !status.marked } : status,
      ),
    );
  };

  // --- Existing submit handler ---
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const userResponse = await axios.get(
        "https://writo-education-frontend.onrender.com/api/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const userId = userResponse.data.id;

      const resultResponse = await axios.post(
        `https://writo-education-frontend.onrender.com/api/quiz/submit-quiz/${userId}`,
        result,
      );
      console.log("Submit Response:", resultResponse.data);
      alert("Quiz submitted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Error submitting quiz. Please try again.");
    }
  };

  // --- New instruction modal component ---
  const InstructionsModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-2xl rounded-lg bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">Test Instructions</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>You have 120 seconds per question</li>
          <li>Correct answers: +3 points</li>
          <li>Incorrect answers: -1 point</li>
          <li>Unanswered questions: 0 points</li>
        </ul>
        <button
          onClick={() => setShowInstructions(false)}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Start Test
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {showInstructions && <InstructionsModal />}

      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold">Writo - Online Test</h1>
          <div className="flex items-center space-x-4">
            <div className="text-lg font-semibold">
              Time Left: {Math.floor(timeLeft / 60)}:
              {timeLeft % 60 < 10 ? "0" : ""}
              {timeLeft % 60}
            </div>
          </div>
        </div>
      </header>

      {load ? (
        <div className="flex h-screen items-center justify-center">
          <div className="animate-pulse text-xl text-gray-500">Loading...</div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8">
          {/* Main content */}
          <div className="flex-grow">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              {!isFinished ? (
                <>
                  {/* Question header */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      {currentSection} - Question {currentIndex + 1}
                    </h2>
                  </div>

                  {/* Question */}
                  <div className="mb-8 flex flex-col">
                    <p className="text-lg">{question}</p>
                    {image && (
                      <div className="w-full h-60">
                        <img src={image} alt="Question" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Options */}
                  <div className="space-y-4">
                    {[
                      { label: "A", value: option1 },
                      { label: "B", value: option2 },
                      { label: "C", value: option3 },
                      { label: "D", value: option4 },
                    ].map(({ label, value }) => (
                      <label
                        key={label}
                        className={`block w-full cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          choosen === value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            value={value}
                            checked={choosen === value}
                            onChange={() => handleOptionChange(value)}
                            className="hidden"
                          />
                          <span
                            className={`mr-4 flex h-6 w-6 items-center justify-center rounded-full border-2 ${choosen === value ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"}`}
                          >
                            {label}
                          </span>
                          <span className="text-lg">{value}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={handlePrevious}
                      className={`rounded-lg px-6 py-2 ${
                        currentIndex === 0
                          ? "cursor-not-allowed bg-gray-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      disabled={currentIndex === 0}
                    >
                      Previous
                    </button>

                    <button
                      onClick={handleMarkForReview}
                      className="rounded-lg border-2 border-yellow-500 px-6 py-2 text-yellow-500 hover:bg-yellow-50"
                    >
                      Mark for Review
                    </button>

                    <button
                      onClick={handleNext}
                      className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="mb-6 text-2xl font-bold text-gray-800">
                    Quiz Finished!
                  </h2>
                  <p className="mb-6 text-lg text-gray-700">
                    Your score is: {result.score}
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="rounded-lg bg-green-600 px-8 py-3 font-bold text-white transition duration-300 hover:bg-green-700"
                  >
                    Submit Test
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
