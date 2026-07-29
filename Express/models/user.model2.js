const mongoose = require("mongoose");

const userSchema2 = new mongoose.Schema({});

const User2 = mongoose.model("User2", userSchema2);

module.exports = {
    User2,
};