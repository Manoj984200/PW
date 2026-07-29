const express = require("express");

const { createUser } = require("../controllers/user.controller2");

const userRouter2 = express.Router();

userRouter2.post("/createUser", createUser);

module.exports = {
    userRouter2,
};