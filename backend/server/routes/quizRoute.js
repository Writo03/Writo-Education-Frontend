const express=require('express')
const router = express.Router()
const quizController = require('../controller/quizcontroller')

router.post('/add-quiz',quizController.add_quiz)

module.exports = router