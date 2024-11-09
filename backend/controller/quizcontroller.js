const quizModel = require('../models/quiz')
const UserModel = require('../models/UserModel.js')
const mongoose = require('mongoose')
// Schema for the user tests
const testSchema = mongoose.Schema({
    test_id: String,
    results: Object,
    score: Number,
    startTime: Date,  // Field to track the quiz start time
    timeTaken: Number // To store the time taken to finish the quiz
});

// Get all quizzes
const get_quizes = (req, res) => {
    quizModel.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
}

const getQuizesOptimized = async (req, res) => {
    try {
        const {type} = req.params;
        const quizes = await quizModel.find({test_type : type}).sort({'createdAt': -1})

        if(!quizes.length){
            return res.status(404).json({
                message : "quizes not found"
            })
        }

        return res.status(200).json({
            message : "quizes fetched successfully",
            quizes
        })
    } catch (error) {
        console.log("error while fetching quizes", error)
        return res.status(500).json({ message : "Something went wrong internal error"})
    }
}

// Get a specific quiz by id
const get_quiz = (req, res) => {
    const id = req.params.id;
    quizModel.findById(id)
        .then(result => res.status(200).json({
            message : "quiz found successfully",
            quiz : result
        }))
        .catch(err => res.status(500).json({ error: err.message }));
}

// Submit the quiz and start the timer
const submit_quiz = async (req, res) => {
    const userId = req.params.id;
    const test = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        test.startTime = new Date(); // Record the start time of the quiz
        user.tests.push(test);

        await user.save();
        res.status(200).json({ message: 'Quiz submitted successfully', testStartTime: test.startTime });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Check if a user has taken a quiz
const check_quiz = async (req, res) => {
    const { testId, userId } = req.params;
    
    try {
        const usercheck = await UserModel.findById(userId);
        const verify = await usercheck.tests.some(test => test.test_id === testId);
        res.json({ taken: verify });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get quiz time remaining for a specific quiz
const check_time_remaining = async (req, res) => {
    const { userId, testId } = req.params;

    try {
        const user = await UserModel.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const test = user.tests.find(test => test.test_id === testId);
        if (!test) return res.status(404).json({ message: 'Test not found' });

        const quiz = await quizModel.findById(testId); // Get quiz duration
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        const quizDuration = quiz.duration; // Quiz duration in minutes
        const currentTime = new Date();
        const timeElapsed = (currentTime - new Date(test.startTime)) / 60000; // Time elapsed in minutes
        const timeRemaining = Math.max(quizDuration - timeElapsed, 0); // Calculate remaining time

        res.status(200).json({ timeRemaining });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get test results for a user
const test_results = async (req, res) => {
    const { userId, testId } = req.params;

    try {
        const usercheck = await UserModel.findById(userId);
        const test = usercheck.tests.find(test => test.test_id === testId);
        if (test) {
            res.json({ testName: 'JEE', results: test.results, timeTaken: '2', score: test.score });
        } else {
            res.status(404).json({ message: 'Test not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Leaderboard logic
const leader_board = async (req, res) => {
    const { testId, userId } = req.params;

    try {
        const users = await UserModel.find({ 'tests.test_id': testId });
        const result = users.map(user => {
            const matchingTests = user.tests.filter(test => test.test_id === testId);
            matchingTests.sort((a, b) => b.score - a.score);

            return {
                user_id: user._id.toString(),
                name: user.username,
                score: matchingTests[0].score, // Get the score for this test
                matchingTests
            };
        });

        // Sort by highest score
        result.sort((a, b) => b.score - a.score);

        // Get the rank of the current user
        const position = result.findIndex(user => user.user_id === userId) + 1;
        const highestScore = result[0].score;
        
        res.json({ rank: position, highestScore });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    get_quizes,
    get_quiz,
    submit_quiz,
    check_quiz,
    check_time_remaining,  // Added time remaining function
    test_results,
    leader_board,
    getQuizesOptimized
}
