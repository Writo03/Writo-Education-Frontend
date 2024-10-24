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
    isAdmin:{
          type: Boolean,
        default: false
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
    username: { 
        type: String, 
        unique: true
     },
    phone: { type: String },
    classType: { type: String}, // E.g., JEE or NEET
    institution: { type: String },
  
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
