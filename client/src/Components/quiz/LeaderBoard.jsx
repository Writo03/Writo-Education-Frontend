import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Chatpages/Navbar'
import axios from 'axios'

const LeaderBoard = () => {
    const { id } = useParams()
    const [view, setView] = useState('stats')
    const [load, setLoad] = useState(true)
    const [results, setResults] = useState([])
    const [testName, setTestName] = useState('')
    const [timeTaken, setTimeTaken] = useState('')
    const [score,setScore]=useState('')
    const [taken, setTaken] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token')
                const userResponse = await axios.get('http://localhost:8080/api/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const userId = userResponse.data.id

                // Check if the user has taken the test
                const checkTest = await axios.get(`http://localhost:8080/api/quiz/check-quiz/${userId}/${id}`)

                if (checkTest.data.taken) {
                    setTaken(true)

                    // Fetch results for the test
                    const resultResponse = await axios.get(`http://localhost:8080/api/quiz/test-results/${userId}/${id}`)

                    setResults(resultResponse.data.results)
                    setTestName(resultResponse.data.testName) // Assuming you have a testName in the result
                    setTimeTaken(resultResponse.data.timeTaken) // Assuming you have a timeTaken in the result
                    setScore(resultResponse.data.score)
                    setLoad(false)
                } else {
                    setTaken(false)
                    setLoad(false)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoad(false)
            }
        }

        fetchData()
    }, [id])

    const getOptionClass = (option, correctOption, selectedOption) => {
        if (option === correctOption) {
            return 'bg-green-200 text-green-800'
        }
        if (option === selectedOption) {
            return 'bg-red-200 text-red-800'
        }
        return 'bg-gray-100 text-gray-800'
    }

    return (
        <>
            <Navbar />
            <div className="p-4">
                <div className="mb-4">
                    <button 
                        onClick={() => setView('stats')} 
                        className={`px-4 py-2 rounded ${view === 'stats' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        Stats
                    </button>
                    {/* <button 
                        onClick={() => setView('leaderboard')} 
                        className={`ml-2 px-4 py-2 rounded ${view === 'leaderboard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        Leaderboard Position
                    </button> */}
                </div>
                <div>
                    {view === 'stats' && (
                        <div className="bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Stats</h2>
                            {load ? (
                                <h3>Loading...</h3>
                            ) : taken ? (
                                <>
                                    <h2 className="text-lg font-semibold mb-2">{testName}</h2>
                                    <h2 className="text-lg mb-4">Time Taken: {timeTaken}</h2>
                                    <h2 className="text-lg mb-4">Score: {score}</h2>
                                    <div>
                                        {results.map((result, index) => (
                                            <div key={index} className="mb-4">
                                                <h3 className="text-md font-semibold">{index + 1}. {result.question}</h3>
                                                <div className="space-y-2">
                                                    {[result.option1, result.option2, result.option3, result.option4].map((option, idx) => (
                                                        <div 
                                                            key={idx} 
                                                            className={`p-2 rounded ${getOptionClass(option, result.correct_option, result.choosen_option)}`}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <h3>You haven't taken this test yet.</h3>
                            )}
                        </div>
                    )}
                    {view === 'leaderboard' && (
                        <div className="bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Leaderboard Position</h2>
                            <p>Display leaderboard position here based on the ID: {id}</p>
                            {/* Add more detailed leaderboard content here */}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default LeaderBoard
