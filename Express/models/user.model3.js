// File: models/user.model3.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema3 = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name Field is required"]
    },

    age: {
        type: Number,
        required: [true, "Age field is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Invalid Email Format"
        ]
    },

    phoneNumber: {
        type: Number,
        unique: true,
        required: [true, "Phone Number is required"]
    }

});

userSchema3.pre("save", async function () {

    this.password = await bcrypt.hash(this.password, 10);

});

userSchema3.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password);

};

const User3 = mongoose.model(
    "User3",
    userSchema3
);

module.exports = {
    User3
};