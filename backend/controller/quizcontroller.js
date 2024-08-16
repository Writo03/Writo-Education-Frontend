const quizModel = require('../models/quiz')
const UserModel = require('../models/User')

const get_quizes = (req,res)=>{
    quizModel.find()
    .then(result=>res.json(result))
}

const get_quiz =(req,res)=>{
    const id = req.params.id
    quizModel.findById(id)
    .then(result=>{
        res.json(result)
    })
}

const submit_quiz=async(req,res)=>{
    const id = req.params.id
    const test=req.body
    UserModel.findById(id)
    .then(result=>{
        result.tests.push(test)
        result.save()
        .then(resu=>{
            res.send(resu)
        })
    })
}

const check_quiz = async(req,res)=>{
    const {testId,userId} = req.params
    const usercheck = await UserModel.findById(userId)
    const verify = await usercheck.tests.some(test=>test.test_id===testId)
    res.json({taken:verify})
}

const test_results = async(req,res)=>{
    const {userId,testId}=req.params
    const usercheck = await UserModel.findById(userId)
    usercheck.tests.map(test=>{
        if(test.test_id===testId){
            res.json({testName:'JEE',results:test.results,timeTaken:'2',score:test.score})
        }
    })
}

module.exports = {
    get_quizes,
    get_quiz,
    submit_quiz,
    check_quiz,
    test_results
}