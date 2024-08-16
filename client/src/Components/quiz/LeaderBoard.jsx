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
    const [score, setScore] = useState('')
    const [rank, setRank] = useState(null)
    const [highestScore, setHighestScore] = useState(null)
    const [taken, setTaken] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token')
                const userResponse = await axios.get('https://writo-education-frontend.onrender.com/api/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const userId = userResponse.data.id

                // Check if the user has taken the test
                const checkTest = await axios.get(`https://writo-education-frontend.onrender.com/quiz/check-quiz/${userId}/${id}`)

                if (checkTest.data.taken) {
                    setTaken(true)

                    // Fetch results for the test
                    const resultResponse = await axios.get(`https://writo-education-frontend.onrender.com/quiz/test-results/${userId}/${id}`)
                    setResults(resultResponse.data.results)
                    setTestName(resultResponse.data.testName)
                    setTimeTaken(resultResponse.data.timeTaken)
                    setScore(resultResponse.data.score)

                    // Fetch leaderboard data
                    const leaderboardResponse = await axios.get(`https://writo-education-frontend.onrender.com/api/quiz/leader-board/${id}/${userId}`)
                    setRank(leaderboardResponse.data.rank)
                    setHighestScore(leaderboardResponse.data.highestScore)

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
        let baseClass = 'p-2 rounded';
        let outlineClass = '';
        
        if (option === selectedOption) {
            outlineClass = 'border-2 border-blue-500'; // Extra outline for chosen option
        }
        if (option === correctOption) {
            return `${baseClass} ${outlineClass} bg-green-200 text-green-800`;
        }
        if (option === selectedOption) {
            return `${baseClass} ${outlineClass} bg-red-200 text-red-800`;
        }
        return `${baseClass} ${outlineClass} bg-gray-100 text-gray-800`;
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
                    <button 
                        onClick={() => setView('leaderboard')} 
                        className={`ml-2 px-4 py-2 rounded ${view === 'leaderboard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        Leaderboard Position
                    </button>
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
                                                {!result.choosen_option && (
                                                    <p className="text-red-500 mt-2">No option chosen</p>
                                                )}
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
                            {load ? (
                                <h3>Loading...</h3>
                            ) : (
                                <>
                                    <p>Your Rank: {rank}</p>
                                    <p>Highest Score: {highestScore}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default LeaderBoard
