import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Test_Series = () => {
    let i = 1
    const [data, setData] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        axios.get('https://writo-education-frontend.onrender.com/api/quiz/get-quizes')
            .then(result => {
                setData(result.data)
                console.log(result.data)
                setLoad(false)
            })
    }, [])

    return (
        <>
            <Navbar />
            {load && <h1>Loading</h1>}

            {!load && (
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {data.map(test => (
                            <div key={test._id} className="rounded overflow-hidden shadow-lg">
                                <div className="relative">
                                    <div className="bg-gray-200 w-full h-40 flex items-center justify-center">
                                        <h2 className="text-xl font-bold">{test.test_name}</h2>
                                    </div>
                                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 rounded-full mt-3 mr-3">
                                        {i++}
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-gray-500 text-sm mb-2">
                                        Number of Questions: {test.questions.length}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-4">
                                        Exam Time: {test.questions.length * 2} mins
                                    </p>
                                    <div className="flex justify-between">
                                        <Link to={`/test/${test._id}`}>
                                            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Start Test</button>
                                        </Link>
                                        <Link to={`/leaderboard/${test._id}`}>
                                            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">Stats</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Test_Series
