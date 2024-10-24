const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function checkPassword(request,response){
    console.log('hello')
    try {
        const { password, userId } = request.body

        const user = await UserModel.findById(userId)

        const verifyPassword = await bcrypt.compare(password,user.password)

        if(!verifyPassword){
            return response.status(400).json({
                message : "Please check password",
                error : true
            })
        }

        const tokenData = {
            id : user._id,
            email : user.email 
        }
        const token = await jwt.sign(tokenData,process.env.JWT_SECREAT_KEY,{ expiresIn : '1d'})

        const cookieOptions = {
            http : true,
            secure : true
        }
        request.session.Id=userId;
        return response.cookie('token',token,cookieOptions).status(200).json({
            message : "Login successfully",
            token : token,
            success :true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkPassword