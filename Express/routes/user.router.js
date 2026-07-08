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

const { // this is added after adding a file in log folder file name is logger.js used to identify which API used at what time by user. this is middleware function which is used to log the request details like method, url, time etc. in console. this middleware function is added in server1.js file before registering the router object so that it can log the request details for all the api's defined in user.router.js file. we can also use this middleware function in user.router.js file to log the request details for specific api's defined in user.router.js file. we can also use this middleware function in controller functions to log the request details for specific api's defined in controller functions. we can also use this middleware function in any other file to log the request details for specific api's defined in that file.
    logger
} = require("../middlewares/logger");

// const userRouter = express.Router();

userRouter.get( // this is added after middleware file/program/condition added in middleware folder. this is used to check the age of user if user is less than 18 then it will not allow to get the data from server and will give message "Ghar Jao!!!" otherwise it will allow to get the data from server and will give message "PONG!!"
    "/getUser",
    logger,
    ageCheckMiddleware,
    adhaarCardCheckMiddleware,
    getUser
);

userRouter.post(
    "/createUser",
    logger,
    createUser
);

module.exports = {
    userRouter
};
