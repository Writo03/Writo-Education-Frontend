import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Test = () => {
    const { id } = useParams()
    const [load, setLoad] = useState(true)
    const [data, setData] = useState()
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [correct, setCorrect] = useState('')
    const [choosen, setChoosen] = useState('')
    const [result, setResult] = useState({
        test_id: id,
        score: 0,
        results: []
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    const navigate=useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/quiz/get-quiz/${id}`)
            .then(response => {
                const quizData = response.data
                setData(quizData)
                if (quizData.questions.length > 0) {
                    const firstQuestion = quizData.questions[0]
                    setQuestion(firstQuestion.question)
                    setOption1(firstQuestion.option1)
                    setOption2(firstQuestion.option2)
                    setOption3(firstQuestion.option3)
                    setOption4(firstQuestion.option4)
                    setCorrect(firstQuestion.correct_option)
                }
                setLoad(false)
            })
            .catch(error => {
                console.error('Error fetching quiz data:', error)
                setLoad(false)
            })
    }, [id])

    const handleOptionChange = (option) => {
        setChoosen(option)
    }

    const handleNext = () => {
        const newItem = {
            question,
            option1,
            option2,
            option3,
            option4,
            correct_option: correct,
            choosen_option: choosen
        }

        setResult(prevResult => {
            const updatedResults = Array.isArray(prevResult.results) ? [...prevResult.results, newItem] : [newItem]
            let updatedScore = prevResult.score

            if (correct === choosen) {
                updatedScore += 3
            } else if (choosen !== '') {
                updatedScore -= 1
            }

            return {
                ...prevResult,
                score: updatedScore,
                results: updatedResults
            }
        })

        const nextIndex = currentIndex + 1
        if (nextIndex < data.questions.length) {
            const nextQuestion = data.questions[nextIndex]
            setCurrentIndex(nextIndex)
            setQuestion(nextQuestion.question)
            setOption1(nextQuestion.option1)
            setOption2(nextQuestion.option2)
            setOption3(nextQuestion.option3)
            setOption4(nextQuestion.option4)
            setCorrect(nextQuestion.correct_option)
            setChoosen('')
        } else {
            setIsFinished(true)
        }
    }

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            const userResponse = await axios.get('http://localhost:8080/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const userId = userResponse.data.id;

            const resultResponse = await axios.post(`http://localhost:8080/api/quiz/submit-quiz/${userId}`, result);
            console.log('Submit Response:', resultResponse.data);
            alert('Quiz submitted successfully!');
            navigate('/')
        } catch (error) {
            console.error('Error submitting quiz:', error);
            alert('Error submitting quiz. Please try again.');
        }
    }

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Test</h1>
            {load ? (
                <h1 className="text-lg text-gray-600">Loading...</h1>
            ) : (
                <div className="w-full max-w-md">
                    {!isFinished ? (
                        <div>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">{currentIndex + 1}. {question}</h2>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" value={option1} checked={choosen === option1} onChange={() => handleOptionChange(option1)} className="form-radio text-blue-500"/>
                                        <span className="text-lg">{option1}</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" value={option2} checked={choosen === option2} onChange={() => handleOptionChange(option2)} className="form-radio text-blue-500"/>
                                        <span className="text-lg">{option2}</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" value={option3} checked={choosen === option3} onChange={() => handleOptionChange(option3)} className="form-radio text-blue-500"/>
                                        <span className="text-lg">{option3}</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" value={option4} checked={choosen === option4} onChange={() => handleOptionChange(option4)} className="form-radio text-blue-500"/>
                                        <span className="text-lg">{option4}</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl font-semibold mb-4">Quiz Complete</h2>
                            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Test
