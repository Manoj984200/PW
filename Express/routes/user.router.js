const express = require("express");

const {
    getUser,
    createUser
} = require("../controllers/user.controller");

const {
    ageCheckMiddleware,
    adhaarCardCheckMiddleware
} = require("../middlewares/user.middleware");

const userRouter = express.Router();

userRouter.get( // this is added after middleware file/program/condition added in middleware folder. this is used to check the age of user if user is less than 18 then it will not allow to get the data from server and will give message "Ghar Jao!!!" otherwise it will allow to get the data from server and will give message "PONG!!"
    "/getUser",
    ageCheckMiddleware,
    adhaarCardCheckMiddleware,
    getUser
);

userRouter.post(
    "/createUser",
    createUser
);

module.exports = {
    userRouter
};
