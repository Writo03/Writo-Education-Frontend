import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Test_Series = () => {
    let i=1
    const [data,setData] = useState()
    const [load,setLoad] = useState(true)
    useEffect(()=>{
        axios.get('https://writo-education-frontend.onrender.com/api/quiz/get-quizes')
        .then(result=>{
            setData(result.data)
            console.log(result.data)
            setLoad(false)
        })
    },[])
  return (
    <>
    <Navbar/>
    {load && 
        <h1>Loading</h1>
    }
    {!load &&
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Test Name</th>
                    <th>Number of questions</th>
                    <th>Exam time</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(test=>
                    <tr key={test.id}>
                        <td>{i++}</td>
                        <td>{test.test_name}</td>
                        <td>{(test.questions.length)}</td>
                        <td>{(test.questions.length)*2}mins</td>
                        <td><Link to={`/test/${test._id}`}><button>Start Test</button></Link></td>
                        <td><Link to={`/leaderboard/${test._id}`}><button>Stats</button></Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    }
    </>
  )
}

export default Test_Series