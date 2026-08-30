// File: controllers/user.controller3.js

const { User3 } = require("../models/user.model3");
const jwt = require("jsonwebtoken");

// ===========================================
// GET ALL USERS
// ===========================================

async function getUser(request, response) {
    try {
        const users = await User3.find({});

        response.status(200).json({
            message: "Users!!!!!",
            data: users
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            message: "Error fetching users"
        });
    }
}

// ===========================================
// CREATE USER (SIGNUP)
// ===========================================

async function createUser(request, response) {
    try {
        const newUser = await User3.create(request.body);

        response.status(201).json({
            message: "User Created Successfully!!",
            data: newUser
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
}

// ===========================================
// LOGIN
// ===========================================

async function signIn(request, response) {
    try {
        const { email, password } = request.body;
        const user = await User3.findOne({ email });

        if (!user) {
            return response.status(404).json({
                message: "User does not exist, kindly check the email"
            });
        }

        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
            return response.status(401).json({
                message: "Wrong Password"
            });
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        response.cookie("token", token);

        return response.status(200).json({
            message: "Login Success!!",
            token
        });
    } catch (error) {
        console.log(error);

        return response.status(500).json({
            message: "Something went wrong"
        });
    }
}

module.exports = {
    getUser,
    createUser,
    signIn
};