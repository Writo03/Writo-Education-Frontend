const controller = require('../controller/quizcontroller')
const express = require('express')
const router = express.Router()

router.get('/get-quizes',controller.get_quizes)

router.get('/get-quiz/:id',controller.get_quiz)

router.post('/submit-quiz/:id',controller.submit_quiz)

router.get('/check-quiz/:userId/:testId',controller.check_quiz)

router.get('/test-results/:userId/:testId',controller.test_results)


router.get('/leader-board/:testId/:userId',controller.leader_board)
module.exports = router