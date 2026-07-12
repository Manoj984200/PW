const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({

    age: {
        type: Number
    },

    password: {
        type: String
    },

    email: {
        type: String
    },

    phoneNumber: {
        type: Number
    }

});

let User = mongoose.model("user", userSchema);

module.exports = {
    User
};