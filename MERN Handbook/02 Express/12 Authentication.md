# Authentication
Topic 14 – JWT Authentication

Status

✅ Completed

Objective

Learn the JWT-based authentication flow used in this class and implement it in Project Version 3.

The completed flow covers:

Login with email and password.

Finding the user in MongoDB.

Comparing the entered password with the stored bcrypt hash.

Creating a JWT using jwt.sign().

Storing the JWT in a cookie.

Reading the JWT from the cookie.

Verifying the JWT using jwt.verify().

Protecting the /getUser route with authentication middleware.

Testing login, cookie storage, protected access, and no-cookie access in Postman.

Revision from Previous Topic

The previous topic covered password verification with bcrypt.

During signup:

Plain Password
↓
bcrypt.hash()
↓
Hashed Password
↓
MongoDB

During login:

Entered Password
+
Stored Bcrypt Hash
↓
bcrypt.compare()
↓
true / false

JWT authentication comes after successful password verification:

Login Request
↓
Find User
↓
Compare Password
↓
Password Correct
↓
jwt.sign()
↓
JWT
↓
Cookie

Theory

What is JWT?

JWT stands for JSON Web Token.

In the class implementation, JWT is used as the token created after a successful login. The login controller creates the token with jwt.sign(). The authentication middleware later checks it with jwt.verify().

jwt.sign()
↓
Create JWT

jwt.verify()
↓
Verify JWT

JWT Payload

The mentor's implementation signs this payload:

{
    email,
    password
}

This data is passed to jwt.sign() together with the JWT secret.

JWT Secret

The secret is read from the environment:

process.env.JWT_SECRET

The same secret is used during signing and verification:

Payload + Secret
↓
jwt.sign()
↓
JWT

JWT + Same Secret
↓
jwt.verify()
↓
Decoded payload

Cookie-based storage

After creating the token, the controller stores it in a cookie:

response.cookie("token", token);

On later requests, the cookie is sent back by the client. cookie-parser makes the cookie available through req.cookies, so the authentication middleware can read:

req.cookies.token

Authentication middleware

isAuthorized performs the authentication check before a protected controller is allowed to execute.

Its flow is:

Request
↓
Read token from cookie
↓
Token exists?
├── No → Reject request
└── Yes
     ↓
   jwt.verify()
     ↓
   next()
     ↓
   Controller

Why Do We Need This?

A login endpoint only proves the user's credentials at the time of login. Later requests also need a way to identify and verify the logged-in user.

JWT provides a token that can be sent with later requests. In this class the token is stored in a cookie, and the authorization middleware checks it before allowing access to a protected route.

Example:

Login
↓
JWT generated
↓
JWT stored in cookie
↓
Later request
↓
Cookie sent back
↓
JWT verified
↓
Protected controller allowed

Flow Diagram

Login

Postman
↓
POST /api/v1/users/signIn
↓
server3.js
↓
user.router3.js
↓
signIn()
↓
User3.findOne()
↓
MongoDB
↓
user.comparePassword()
↓
bcrypt.compare()
↓
jwt.sign()
↓
response.cookie("token", token)
↓
Login Success

Protected request

Postman
↓
GET /api/v1/users/getUser
↓
server3.js
↓
cookie-parser
↓
user.router3.js
↓
isAuthorized()
↓
req.cookies.token
↓
jwt.verify()
↓
next()
↓
getUser()
↓
User3.find({})
↓
MongoDB
↓
Response

Request without token

Postman
↓
GET /api/v1/users/getUser
↓
isAuthorized()
↓
No token
↓
"Login is not done"
↓
Request stops

File(s) Used

Project Version: Server 3

server3.js
configurations/db.config3.js
controllers/user.controller3.js
models/user.model3.js
middlewares/user.middleware3.js
routes/user.router3.js
.env

The required packages were installed with:

npm i jsonwebtoken
npm i cookie-parser

This updated the npm-managed dependency files package.json and package-lock.json.

Complete Code

File: server3.js

const express = require("express");
const dotenv = require("dotenv");

const { dbConfig3 } = require("./configurations/db.config3");
const { userRouter3 } = require("./routes/user.router3");

const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cookieParser());

app.use(express.json());

app.use("/api/v1/users", userRouter3);

app.listen(port, async () => {

    await dbConfig3();

    console.log(`Listening to the port ${port}`);

});

File: configurations/db.config3.js

const mongoose = require("mongoose");

const dbConfig3 = async () => {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");

};

module.exports = {
    dbConfig3
};

File: controllers/user.controller3.js

const { compare } = require("bcrypt");
const { User3 } = require("../models/user.model3");
const jwt = require("jsonwebtoken");

// ===========================================
// GET ALL USERS
// ===========================================

function getUser(request, response) {

    User3.find({})
        .then((res) => {

            response.json({
                message: "Users!!!!!",
                data: res
            });

        })
        .catch((error) => {

            console.log(error);

        });

}

// ===========================================
// CREATE USER (SIGNUP)
// ===========================================

function createUser(request, response) {

    User3.create(request.body)
        .then((res) => {

            response.json({
                message: "User Created Successfully!!",
                data: res
            });

        })
        .catch((error) => {

            console.log(error);

        });

}

// ===========================================
// LOGIN
// ===========================================

async function signIn(request, response) {

    try {

        let { email, password } = request.body;

        let user = await User3.findOne({
            email: email
        });

        if (!user) {

            return response.json({
                message: "user does not exists, kindly check the email"
            });

        }

        let comparePassword = await user.comparePassword(password);

        if (!comparePassword) {

            return response.json({
                message: "Wrong Password"
            });

        }

        let token = await jwt.sign(
            {
                email,
                password
            },
            process.env.JWT_SECRET
        );

        response.cookie("token", token);

        response.status(200).json({
            message: "Login Success!!"
        });

    }
    catch (error) {

        response.status(500).json({
            message: "Something!!!!"
        });

    }

}

module.exports = {
    getUser,
    createUser,
    signIn
};

File: models/user.model3.js

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

File: middlewares/user.middleware3.js

Only the middleware needed for this JWT program is included.

const jwt = require("jsonwebtoken");

async function isAuthorized(req, res, next) {

    let token = req.cookies.token;

    if (!token) {
        return res.json({
            message: "Login is not done"
        });
    }

    let decoded = await jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    if (!decoded) {
        return res.json({
            message: "Not verified user"
        });
    }

    next();
}

module.exports = {
    isAuthorized
};

File: routes/user.router3.js

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

File: .env

Do not put real passwords, MongoDB credentials, or JWT secrets into study notes or GitHub. Keep the real values only in your local .env.

PORT=5001
USER=MANOJ
MONGO_URI=<YOUR_MONGO_URI>
JWT_SECRET=<YOUR_JWT_SECRET>

Line-by-Line Explanation

File: server3.js

const express = require("express");

Imports Express so the server application can be created.

const dotenv = require("dotenv");

Imports dotenv for environment variables.

const { dbConfig3 } = require("./configurations/db.config3");

Imports the Version 3 MongoDB connection function.

const { userRouter3 } = require("./routes/user.router3");

Imports the Version 3 router.

const cookieParser = require("cookie-parser");

Imports cookie-parser so incoming cookies can be read through req.cookies.

dotenv.config();

Loads values from .env into process.env.

const app = express();

Creates the Express application.

const port = process.env.PORT;

Reads the server port from the environment.

app.use(cookieParser());

Registers cookie-parser before the protected middleware needs req.cookies.token.

app.use(express.json());

Allows JSON request bodies such as login and signup data to be read through request.body.

app.use("/api/v1/users", userRouter3);

Mounts the Version 3 user router under the common URL prefix.

app.listen(port, async () => {

Starts the HTTP server.

await dbConfig3();

Connects to MongoDB when the server starts.

console.log(`Listening to the port ${port}`);

Displays the port being used.

File: controllers/user.controller3.js

Login function

async function signIn(request, response) {

Creates the login controller and allows await inside it.

try {

Starts the error-handling block.

let { email, password } = request.body;

Extracts the email and password sent by the client.

let user = await User3.findOne({
    email: email
});

Searches MongoDB for one user whose email matches the submitted email.

if (!user) {

Checks whether no matching user was found.

return response.json({
    message: "user does not exists, kindly check the email"
});

Stops the login process and sends the message when the user doesn't exist.

let comparePassword = await user.comparePassword(password);

Calls the custom model method, which uses bcrypt to compare the entered password with the stored hash.

if (!comparePassword) {

Checks whether the password comparison failed.

return response.json({
    message: "Wrong Password"
});

Stops the login process when the password is wrong.

let token = await jwt.sign(

Starts JWT creation after the credentials have been accepted.

{
    email,
    password
},

The payload passed to the mentor's jwt.sign() implementation.

process.env.JWT_SECRET

The JWT signing secret loaded from .env.

response.cookie("token", token);

Sends the generated JWT to the client in a cookie named token.

response.status(200).json({
    message: "Login Success!!"
});

Returns a successful login response.

catch (error) {

Handles an exception raised inside the try block.

response.status(500).json({
    message: "Something!!!!"
});

Returns an HTTP 500 response for an unexpected server error.

File: models/user.model3.js

const mongoose = require("mongoose");

Imports Mongoose for the schema and model.

const bcrypt = require("bcrypt");

Imports bcrypt for password hashing and comparison.

const userSchema3 = new mongoose.Schema({

Creates the Version 3 user schema.

The field definitions describe the user document structure and validations.

userSchema3.pre("save", async function () {

Registers a pre-save hook. The function runs before a user document is saved.

this.password = await bcrypt.hash(this.password, 10);

Hashes the current user's password before it is stored.

The flow is:

Plain password
↓
bcrypt.hash()
↓
Hash
↓
MongoDB

userSchema3.methods.comparePassword = async function (password) {

Adds a custom method that can be called by an individual user document.

This is why the controller can use:

user.comparePassword(password)

return await bcrypt.compare(password, this.password);

Compares the login password against the stored bcrypt hash and returns true or false.

const User3 = mongoose.model(
    "User3",
    userSchema3
);

Creates the Version 3 Mongoose model from the schema.

module.exports = {
    User3
};

Exports the model so the controller can use it.

File: middlewares/user.middleware3.js

const jwt = require("jsonwebtoken");

Imports JWT functionality so the middleware can verify the token.

async function isAuthorized(req, res, next) {

Creates the authentication middleware.

let token = req.cookies.token;

Reads the token cookie parsed by cookie-parser.

if (!token) {

Checks whether no token was supplied.

return res.json({
    message: "Login is not done"
});

Rejects the request and stops middleware execution when no token exists.

let decoded = await jwt.verify(
    token,
    process.env.JWT_SECRET
);

Verifies the supplied JWT using the JWT secret.

if (!decoded) {

Checks whether verification produced no decoded value.

return res.json({
    message: "Not verified user"
});

Rejects the request when verification did not produce a valid decoded result.

next();

Allows the request to continue to the next route handler.

module.exports = {
    isAuthorized
};

Exports the middleware to the router.

File: routes/user.router3.js

const express = require("express");

Imports Express.

const {
    getUser,
    createUser,
    signIn
} = require("../controllers/user.controller3");

Imports the Version 3 controller functions.

const {
    isAuthorized
} = require("../middlewares/user.middleware3");

Imports the Version 3 authorization middleware.

const userRouter3 = express.Router();

Creates the Version 3 router.

userRouter3.get("/getUser", isAuthorized, getUser);

Creates the protected route.

Execution order:

GET /getUser
↓
isAuthorized
↓
next()
↓
getUser

userRouter3.post("/createUser", createUser);

Connects the signup URL to createUser().

userRouter3.post("/signIn", signIn);

Connects the login URL to signIn().

module.exports = {
    userRouter3
};

Exports the router to server3.js.

Request Flow

Signup

Postman
↓
POST /api/v1/users/createUser
↓
server3.js
↓
user.router3.js
↓
createUser()
↓
User3.create()
↓
pre("save")
↓
bcrypt.hash()
↓
MongoDB
↓
Response

Login

Postman
↓
POST /api/v1/users/signIn
↓
server3.js
↓
user.router3.js
↓
signIn()
↓
User3.findOne()
↓
MongoDB
↓
user.comparePassword()
↓
bcrypt.compare()
↓
jwt.sign()
↓
response.cookie()
↓
Login Success

Protected GET

Postman
↓
GET /api/v1/users/getUser
↓
server3.js
↓
cookie-parser
↓
user.router3.js
↓
isAuthorized()
↓
req.cookies.token
↓
jwt.verify()
↓
next()
↓
getUser()
↓
User3.find({})
↓
MongoDB
↓
Response

Postman Test

1. Create User

Method: POST

http://localhost:5001/api/v1/users/createUser

Body → raw → JSON:

{
    "name": "Manoj",
    "age": 38,
    "password": "123456",
    "email": "manojjwt@gmail.com",
    "phoneNumber": 9876543210
}

The successful test returned 200 OK and the saved password appeared as a bcrypt hash rather than the plain password.

2. Login

Method: POST

http://localhost:5001/api/v1/users/signIn

{
    "email": "manojjwt@gmail.com",
    "password": "123456"
}

Expected response:

{
    "message": "Login Success!!"
}

Postman also showed a token cookie for localhost.

3. Protected route with token

Method: GET

http://localhost:5001/api/v1/users/getUser

When the token cookie exists and verification succeeds, the request reaches getUser().

4. Protected route without token

Delete only the token cookie in Postman and send the same GET request.

Expected response:

{
    "message": "Login is not done"
}

This test demonstrated that isAuthorized() is blocking the protected route when the cookie is missing.

Real-Life Analogy

Imagine an office building.

During login, a person proves their identity and receives an access pass.

Credentials checked
↓
Access pass issued

For a later visit:

Visitor arrives
↓
Access pass checked
↓
Valid?
├── No → Entry denied
└── Yes → Enter

In this project:

Login credentials
↓
jwt.sign()
↓
JWT
↓
Cookie

Later:

Cookie
↓
jwt.verify()
↓
next()
↓
Protected controller

Common Mistakes

Wrong Version 3 model import

Wrong:

const { User3 } = require("../models/user.model");

Correct:

const { User3 } = require("../models/user.model3");

Version 3 files should not be mixed with older versions.

Missing JWT secret

If JWT_SECRET is missing, jwt.sign() fails with:

secretOrPrivateKey must have a value

Missing cookie-parser

Without:

app.use(cookieParser());

the middleware cannot use the intended req.cookies.token flow.

Wrong endpoint or method

Login and signup are POST requests:

POST /api/v1/users/createUser
POST /api/v1/users/signIn

The protected user endpoint is GET:

GET /api/v1/users/getUser

Forgetting next()

After successful authorization, next() is required to continue to getUser().

Expecting a protected route to work without the cookie

Without the cookie, isAuthorized() returns:

{
    "message": "Login is not done"
}

Interview Questions

What is JWT?

What is the purpose of jwt.sign()?

What is the purpose of jwt.verify()?

What is the JWT payload in this implementation?

Why is JWT_SECRET stored in .env?

Why is the token stored in a cookie?

What does req.cookies.token represent?

Why is cookie-parser required here?

What is the purpose of authentication middleware?

What does next() do in Express middleware?

Freelancing Notes

JWT authentication is ⭐⭐⭐⭐⭐ Compulsory for MERN freelancing when applications contain login and protected user data.

The most important concepts from this topic are:

jwt.sign()
jwt.verify()
JWT payload
JWT secret
cookies
cookie-parser
authentication middleware
next()
protected routes

ageCheckMiddleware and adhaarCardCheckMiddleware appeared in the mentor's broader middleware examples but were deliberately excluded from this Version 3 JWT implementation because they were not required for the JWT program.

Revision Questions

What happens after the user successfully passes comparePassword()?

Why does the controller call jwt.sign() only after password verification?

Where is the JWT stored in this implementation?

How does the JWT get back to the server on a later request?

Why does server3.js use cookieParser()?

How does isAuthorized() get the JWT?

What does jwt.verify() do?

Why does the protected route contain isAuthorized before getUser?

What happens when the token cookie is deleted?

What is the difference between jwt.sign() and jwt.verify()?

Next Topic

The next topic is not established in the class material/screenshots provided so far.

Do not guess the next mentor topic. Add it only after it is actually taught and provided.
# Authorization / Role-Based Authorization

## Project Version

Server 3

## Files Used

middlewares/user.middleware3.js

routes/user.router3.js

controllers/user.controller3.js

---

# Objective

Understand the difference between authentication and authorization.

Authentication checks whether the JWT is valid.

Authorization checks whether the authenticated user's role is allowed to access a particular route.

---

# Authentication vs Authorization

Authentication

↓

"Is this a valid logged-in user?"

↓

isAuthorized

↓

jwt.verify()

Authorization

↓

"Is this user allowed to perform this operation?"

↓

authorize("admin")

---

# Code Changes

## File: middlewares/user.middleware3.js

Inside `isAuthorized()`, after JWT verification succeeds:

```javascript
req.user = decoded;