const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');

async function registerUser(request, response) {
    try {
        const { username, password, name, email, phone, classType, institution } = request.body;
        

        if (!username || !password || !email ) {
            return response.status(400).json({
                message: "All feilds are required.",
                error: true,
            });
        }

        const checkEmail = await UserModel.findOne({ email });

        if (checkEmail) {
            return response.status(400).json({
                message: "User with this email already exists.",
                error: true,
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const payload = {
            name,
            email,
            username,
            phone,
            classType,
            institution,
            password: hashpassword
        };

        const user = new UserModel(payload);
        const userSave = await user.save();

        request.session.Id = userSave._id;

        return response.status(201).json({
            message: "User created successfully",
            data: userSave,
            success: true
        });

    } catch (error) {
        if (error.code === 11000) {
            return response.status(409).json({
                message: "Duplicate entry error: This email or username already exists.",
                error: true
            });
        }
        
        return response.status(500).json({
            message: error.message || "An internal server error occurred.",
            error: true
        });
    }
}

module.exports = registerUser;
