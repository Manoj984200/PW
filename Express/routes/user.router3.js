const express = require("express");

const {
    getUser,
    createUser,
    signIn
} = require("../controllers/user.controller3");

const {
    isAuthorized
} = require("../middlewares/user.middleware3");

const userRouter3 = express.Router();

userRouter3.get("/getUser", isAuthorized, getUser);
userRouter3.post("/createUser", createUser);
userRouter3.post("/signIn", signIn);

module.exports = {
    userRouter3
};