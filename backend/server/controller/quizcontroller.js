const QuizModel = require('../models/quiz')

const add_quiz = (req,res)=>{
    const quiz = new QuizModel(req.body)
    console.log(quiz)
    quiz.save()
    .then(result=>res.send('quiz added'))
}

module.exports = {
    add_quiz
}