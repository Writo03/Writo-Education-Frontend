const mongoose = require('mongoose');

const subSchema = mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    correct_option:String,
    choosen_option:String
})

const test = mongoose.Schema({
    test_id:String,
    score:Number,
    results:[subSchema]
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    classType: { type: String, required: true }, // E.g., JEE or NEET
    institution: { type: String, required: true },
    email: {
        type: String,
        required: [true, "provide email"],
        unique: true
    }, 
     name: {
        type: String,
        required: [true, "provide name"]
    },
    tests:[test]
});

const User = mongoose.model('User1', userSchema);

module.exports = User;