const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "provide name"]
    },
    email: {
        type: String,
        required: [true, "provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "provide password"]
    },
    profile_pic: {
        type: String,
        default: ""
    },
    student: {
        type: Boolean,
        default: false
    },
    mentor: {
        type: Boolean,
        default: false
    },
    mymentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    mystudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    mentor_subject: {
        type: String,
        default: ""
    },
    student_course : {
        type: String,
        default: ""
    },
    username: { type: String, 
        required: true,
        unique: true
     },
    phone: { type: String, required: true },
    classType: { type: String, required: true }, // E.g., JEE or NEET
    institution: { type: String, required: true },
  
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
