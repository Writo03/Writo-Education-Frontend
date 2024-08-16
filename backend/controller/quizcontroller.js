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
const leader_board = async(req,res)=>{
    const {testId,userId} = req.params
    const users = await UserModel.find({'tests.test_id':testId})
    const result = users.map(user => {
        const matchingTests = user.tests.filter(test => test.test_id === testId);
        matchingTests.sort((a, b) => b.score - a.score);
  
        return {
          user_id:user._id.toString(),
          name: user.username,
          score: matchingTests.score,
          matchingTests
        };
    });
    await result.sort((a, b) => {
    const maxScoreA = a.matchingTests.length > 0 ? Math.max(...a.matchingTests.map(test => test.score)) : 0;
    const maxScoreB = b.matchingTests.length > 0 ? Math.max(...b.matchingTests.map(test => test.score)) : 0;
    return maxScoreB - maxScoreA;
    });

    const position = await result.findIndex(user => user.user_id === userId);
    const highestScore = result[0].matchingTests[0].score;
    res.json({rank:position+1,highestScore})
}

module.exports = {
    get_quizes,
    get_quiz,
    submit_quiz,
    check_quiz,
    test_results,
    leader_board
}