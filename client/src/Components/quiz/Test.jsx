import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams();
    const [load, setLoad] = useState(true);
    const [data, setData] = useState();
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correct, setCorrect] = useState('');
    const [choosen, setChoosen] = useState('');
    const [result, setResult] = useState({
        test_id: id,
        score: 0,
        results: []
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)
    const navigate = useNavigate();

    // Timer logic
    useEffect(() => {
        const storedStartTime = localStorage.getItem('quizStartTime');
        const storedIndex = parseInt(localStorage.getItem('quizCurrentIndex'), 10);
        const storedTimeLeft = parseInt(localStorage.getItem('quizTimeLeft'), 10);

        // Check if there is an active quiz
        if (storedStartTime && storedIndex === currentIndex) {
            const elapsedTime = Math.floor((Date.now() - storedStartTime) / 1000);
            const remainingTime = Math.max(120 - elapsedTime, 0); // Assuming 120 seconds timer
            setTimeLeft(remainingTime);

            // If time is up, go to the next question
            if (remainingTime === 0) {
                handleNext();
            }
        } else {
            // New question; reset timer
            localStorage.setItem('quizStartTime', Date.now().toString());
            setTimeLeft(120); // Reset the timer for a new question
            localStorage.setItem('quizTimeLeft', 120); // Store the initial time
        }

        const timerInterval = setInterval(() => {
            setTimeLeft(prev => {
                const newTimeLeft = prev - 1;
                localStorage.setItem('quizTimeLeft', newTimeLeft); // Update stored time left
                if (newTimeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleNext(); // Move to the next question if timer reaches 0
                    return 0; // Reset timer for the next question
                }
                return newTimeLeft;
            });
        }, 1000);

        return () => clearInterval(timerInterval); // Clean up on unmount
    }, [currentIndex]);

    useEffect(() => {
        axios.get(`https://writo-education-frontend.onrender.com/api/quiz/get-quiz/${id}`)
            .then(response => {
                const quizData = response.data;
                setData(quizData);
                if (quizData.questions.length > 0) {
                    const firstQuestion = quizData.questions[0];
                    setQuestion(firstQuestion.question);
                    setOption1(firstQuestion.option1);
                    setOption2(firstQuestion.option2);
                    setOption3(firstQuestion.option3);
                    setOption4(firstQuestion.option4);
                    setCorrect(firstQuestion.correct_option);
                }
                setLoad(false);
            })
            .catch(error => {
                console.error('Error fetching quiz data:', error);
                setLoad(false);
            });
    }, [id]);

    const handleOptionChange = (option) => {
        setChoosen(option);
    };

    const handleNext = () => {
        const newItem = {
            question,
            option1,
            option2,
            option3,
            option4,
            correct_option: correct,
            choosen_option: choosen
        };

        setResult(prevResult => {
            const updatedResults = [...prevResult.results, newItem];
            let updatedScore = prevResult.score;

            if (correct === choosen) {
                updatedScore += 3;
            } else if (choosen !== '') {
                updatedScore -= 1;
            }

            return {
                ...prevResult,
                score: updatedScore,
                results: updatedResults
            };
        });

        const nextIndex = currentIndex + 1;
        if (nextIndex < data.questions.length) {
            const nextQuestion = data.questions[nextIndex];
            setCurrentIndex(nextIndex);
            setQuestion(nextQuestion.question);
            setOption1(nextQuestion.option1);
            setOption2(nextQuestion.option2);
            setOption3(nextQuestion.option3);
            setOption4(nextQuestion.option4);
            setCorrect(nextQuestion.correct_option);
            setChoosen('');
            localStorage.setItem('quizCurrentIndex', nextIndex.toString());
            localStorage.setItem('quizStartTime', Date.now().toString());
            // Reset timeLeft for new question
            setTimeLeft(120); // Reset time
            localStorage.setItem('quizTimeLeft', 120); // Store the new time
        } else {
            setIsFinished(true);
        }
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            const userResponse = await axios.get('https://writo-education-frontend.onrender.com/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const userId = userResponse.data.id;

            const resultResponse = await axios.post(`https://writo-education-frontend.onrender.com/api/quiz/submit-quiz/${userId}`, result);
            console.log('Submit Response:', resultResponse.data);
            alert('Quiz submitted successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error submitting quiz:', error);
            alert('Error submitting quiz. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen bg1">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 drop-shadow-lg">Quiz</h1>
            {load ? (
                <h1 className="text-xl text-gray-500 animate-pulse">Loading...</h1>
            ) : (
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl transition-transform transform hover:scale-105">
                    {!isFinished ? (
                        <div>
                            <div className="mb-8 flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentIndex + 1}. {question}</h2>
                                <div className="text-xl font-semibold text-red-500">
                                    Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-transform transform ${choosen === option1 ? 'bg-blue-100 scale-105' : 'hover:bg-gray-100'}`}>
                                    <input type="radio" value={option1} checked={choosen === option1} onChange={() => handleOptionChange(option1)} className="form-radio text-indigo-500 focus:ring-2 focus:ring-indigo-300"/>
                                    <span className="text-lg text-gray-800">{option1}</span>
                                </label>
                                <label className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-transform transform ${choosen === option2 ? 'bg-blue-100 scale-105' : 'hover:bg-gray-100'}`}>
                                    <input type="radio" value={option2} checked={choosen === option2} onChange={() => handleOptionChange(option2)} className="form-radio text-indigo-500 focus:ring-2 focus:ring-indigo-300"/>
                                    <span className="text-lg text-gray-800">{option2}</span>
                                </label>
                                <label className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-transform transform ${choosen === option3 ? 'bg-blue-100 scale-105' : 'hover:bg-gray-100'}`}>
                                    <input type="radio" value={option3} checked={choosen === option3} onChange={() => handleOptionChange(option3)} className="form-radio text-indigo-500 focus:ring-2 focus:ring-indigo-300"/>
                                    <span className="text-lg text-gray-800">{option3}</span>
                                </label>
                                <label className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-transform transform ${choosen === option4 ? 'bg-blue-100 scale-105' : 'hover:bg-gray-100'}`}>
                                    <input type="radio" value={option4} checked={choosen === option4} onChange={() => handleOptionChange(option4)} className="form-radio text-indigo-500 focus:ring-2 focus:ring-indigo-300"/>
                                    <span className="text-lg text-gray-800">{option4}</span>
                                </label>
                            </div>
                            <button onClick={handleNext} className="mt-6 w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">Next</button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quiz Finished!</h2>
                            <p className="text-lg text-gray-700">Your score is: {result.score}</p>
                            <button onClick={handleSubmit} className="mt-6 w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition duration-300">Submit</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Test;