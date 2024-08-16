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
    tests:[test]
});

const User = mongoose.model('User1', userSchema);

module.exports = User;