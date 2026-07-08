const express = require("express");
const dotenv = require("dotenv"); // this file created in same folder to to get poet number and some other info. check it before moving to next line

// Import Router
// This file is created in /router folder with user.router.js name. Purpose to create this file is to keep the code clean and organized. in future there will be lot's of API's which will make the code messy thats why API's are seperrated in router.js. In this file we are creating router object and defining the routes for user related api's like getUser, createUser etc. and then exporting the router object to use it in server.js file. In server.js file we are importing this router object and using it to register the routes for user related api's.
const { userRouter } = require("./routes/user.router");
const { logger } = require("./middlewares/logger");
dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(logger) //this is added after adding a file in log folder file name is logger.js used to identify which API used at what time by user. this is middleware function which is used to log the request details like method, url, time etc. in console. this middleware function is added in server1.js file before registering the router object so that it can log the request details for all the api's defined in user.router.js file. we can also use this middleware function in user.router.js file to log the request details for specific api's defined in user.router.js file. we can also use this middleware function in controller functions to log the request details for specific api's defined in controller functions. we can also use this middleware function in any other file to log the request details for specific api's defined in that file.

// Register Router
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
// postman test url for getUser API: http://localhost:5001/api/v1/users/getUser
// by the next topic middleware added in program(in middleaware folder file name is user.middleware.js) and then added in router file(user.router.js) and then imported in server1.js file.even there is no change in this server1.js the middleware was added in between and then tested in postman. so now the url for getUser API is http://localhost:5001/api/v1/users/getUser and if user age is less than 18 then it will give message "Ghar Jao!!!" otherwise it will give message "PONG!!"
// postman test url for createUser API: 