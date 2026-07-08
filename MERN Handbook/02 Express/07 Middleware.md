# Middleware
# 07 Middleware

## What is Middleware?

Middleware is a function that executes BEFORE the controller.

Its job is to check or modify the request before allowing it to reach the controller.

Think of middleware as a security guard standing outside a building.

Visitor
      │
      ▼
 Security Guard (Middleware)
      │
      ▼
 Office (Controller)

If the visitor passes the checking,
the security guard allows him inside.

Otherwise,
he sends him back.

----------------------------------------------------

## Why do we need Middleware?

Instead of writing the same checking code inside every controller,

we write it once as middleware.

Examples:

✔ Age Verification
✔ Login Verification
✔ JWT Token Verification
✔ Admin Permission
✔ Logging
✔ File Upload
✔ Validation

----------------------------------------------------

## Middleware Syntax

function middlewareName(req, res, next){

    // perform checking

    next();

}

next() transfers control to the next middleware or controller.

Without next(),
the request stops here forever.

----------------------------------------------------

## Age Middleware

user.middleware.js

function ageCheckMiddleware(req,res,next){

    let age = req.query.age;

    if(!(age >= 18)){
        return res.json({
            message:"Ghar Jao!!!"
        });
    }

    next();

}

----------------------------------------------------

## Aadhaar Middleware

function adhaarCardCheckMiddleware(req,res,next){

    let adhaar = req.query.adhaar;

    if(adhaar !== "1234-5678-9012"){
        return res.json({
            message:"Adhaar is not eligible"
        });
    }

    next();

}

----------------------------------------------------

## Export Middleware

module.exports = {
    ageCheckMiddleware,
    adhaarCardCheckMiddleware
};

----------------------------------------------------

## Import Middleware

const {
    ageCheckMiddleware,
    adhaarCardCheckMiddleware
} = require("../middlewares/user.middleware");

----------------------------------------------------

## Attach Middleware

userRouter.get(
    "/getUser",
    ageCheckMiddleware,
    adhaarCardCheckMiddleware,
    getUser
);

Execution order

Request
   │
   ▼
Age Middleware
   │
   ▼
Aadhaar Middleware
   │
   ▼
Controller

----------------------------------------------------

## What happens if next() is removed?

Request

↓

Middleware

↓

Stops forever

Controller never executes.

----------------------------------------------------

## What happens if return is removed?

Response will be sent,

then next() will also execute,

causing

Error

Cannot set headers after they are sent.

Therefore always write

return res.json(...)

instead of

res.json(...)

----------------------------------------------------

## Real-life Uses

✔ Login checking

✔ JWT Authentication

✔ Admin checking

✔ Logging

✔ File upload

✔ Request validation

✔ Error handling

----------------------------------------------------

## Important

Middleware does NOT return data.

Middleware only decides

Should request continue?

YES → next()

NO → send response

----------------------------------------------------

## Flow Diagram

Client

↓

Server

↓

Router

↓

Middleware 1

↓

Middleware 2

↓

Controller

↓

Response

----------------------------------------------------

## Files involved

server1.js

↓

user.router.js

↓

user.middleware.js

↓

user.controller.js

----------------------------------------------------

## Revision Questions

1. What is middleware?

2. Why do we use middleware?

3. What does next() do?

4. What happens if next() is removed?

5. Why do we use return before res.json()?

6. Can multiple middleware run for one route?

7. Which executes first?
Middleware or Controller?

Answer:
Middleware first.

Code Files (keep these in the same note)
server1.js
const express = require("express");
const dotenv = require("dotenv");

const { userRouter } = require("./routers/user.router");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
user.router.js
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

userRouter.get(
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
user.middleware.js
function ageCheckMiddleware(req, res, next) {

    let age = req.query.age;

    if (!(age >= 18)) {
        return res.json({
            message: "Ghar Jao!!!"
        });
    }

    next();
}

function adhaarCardCheckMiddleware(req, res, next) {

    let adhaar = req.query.adhaar;

    if (adhaar !== "1234-5678-9012") {
        return res.json({
            message: "Adhaar is not eligible"
        });
    }

    next();
}

module.exports = {
    ageCheckMiddleware,
    adhaarCardCheckMiddleware
};
user.controller.js
function getUser(req, res) {
    res.send("PONG!!");
}

function createUser(req, res) {
    res.json({
        message: "User created successfully!!"
    });
}

module.exports = {
    getUser,
    createUser
};