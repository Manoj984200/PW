# First API with Postman

Postman
    │
    ▼
GET /getUser
    │
    ▼
server.js
app.get("/getUser", getUser)
    │
    ▼
user.controller.js
getUser(req,res)
    │
    ▼
res.send("PONG!!")
    │
    ▼
Postman shows PONG!!

var express = require("express");
var dotenv = require("dotenv");
const { getUser, createUser } = require("./controllers/user.controller");

dotenv.config();

var app = express();

let port = process.env.PORT;

app.get("/getUser", getUser);

app.post("/createUser", createUser);

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});
// to run this file type commannd npm run start:api in terminal and then open postman and type http://localhost:5001/getUser in url and click on send button it will give you the output PONG!! and then type http://localhost:5001/createUser in url and click on send button it will give you the output {"message":"User created successfully!!"}
