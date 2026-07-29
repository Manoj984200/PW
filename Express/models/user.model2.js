const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema2 = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    },

    age: {
        type: Number,
        required: [true, "Age is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Invalid email format"
        ]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    phoneNumber: {
        type: Number,
        unique: true,
        required: [true, "Phone Number is required"],
        match: [/^[6-9]\d{9}$/, "Invalid Indian mobile number"]
    }

});

// This function runs automatically before saving a user
userSchema2.pre("save", async function () {

    console.log("Data is getting saved!!!!!");

    this.password = await bcrypt.hash(this.password, 10);

});

const User2 = mongoose.model("User2", userSchema2);

module.exports = {
    User2,
};