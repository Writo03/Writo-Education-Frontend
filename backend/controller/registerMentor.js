const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')

async function registerMentor(request, response) {
    try {
        const { name, email, password, mentor_subject } = request.body;

        if (!name || !email || !password || !mentor_subject) {
            return response.status(400).json({
                message: "All fields are required",
                error: true,
            });
        }

        const checkEmail = await UserModel.findOne({ email });
        if (checkEmail) {
            return response.status(400).json({
                message: "Mentor already exists",
                error: true,
            });
        }

        if (password.length < 6) {
            return response.status(400).json({
                message: "Password must be at least 6 characters long",
                error: true,
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const payload = {
            name,
            email,
            password: hashpassword,
            mentor_subject,
            mentor: true,
            mystudents: []
        };

        const user = new UserModel(payload);
        const userSave = await user.save();

        return response.status(201).json({
            message: "Mentor created successfully",
            data: userSave,
            success: true
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || "Server error",
            error: true
        });
    }
}

module.exports = registerMentor