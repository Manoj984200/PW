/*
I'm making 3 programs comment coz last program has combination of all also can't run all together
this file name taken server just because we are showing how to connect with server(file name can be anything) and how to use express module in nodejs. this file is not a server file. we can name it anything like index.js, app.js etc. but here we are using server.js just for understanding purpose. this file is not a server file. we can name it anything like index.js, app.js etc. but here we are using server.js just for understanding purpose.
// before creating this file we have created a folder named Express and inside that we have created this file server.js. we have also created a package.json file using npm init -y command in terminal. we have also installed express module using npm install express command in terminal. we have also installed nodemon module using npm install nodemon --save-dev command in terminal(it is use to automaticall refresh/ restart the server). we have also added a script in package.json file to run the server using nodemon module. we can run the server using npm run start:api command in terminal. we can also run the server using node server.js command in terminal but here we are using nodemon module to run the server because it automatically restarts the server when we make any changes in the code. so we don't need to stop and start the server manually every time we make any changes in the code.we also created some folders like configuration, controllers, models, routes, utils etc. to keep the code organized and maintainable. we also created a .env file to store the environment variables like port number, database url etc. we also created a .gitignore file to ignore the node_modules folder and .env file from being pushed to github. we also created a README.md file to write the project description and instructions to run the project. we also created a postman collection to test the api endpoints. we also created a database in mongodb atlas and connected it with our project using mongoose module. we also created some api endpoints like get, post, put, delete etc. to perform CRUD operations on the database. we also created some middleware functions like authentication, authorization, error handling etc. to handle the requests and responses. we also created some utility functions like email sending, password hashing, token generation etc. to perform some common tasks. we also created some models like user, product, order etc. to define the schema of the database collections. we also created some controllers like userController, productController, orderController etc. to handle the business logic of the api endpoints. we also created some routes like userRoutes, productRoutes, orderRoutes etc. to define the api endpoints and map them with the controllers.
var express = require("express");

var app = express(); // because we can't use functions directly like express.listen we need to create object of it so we created app object this app name can also be anything

app.listen(5001, () => { // in this the event name is listen and it takes two arguments first is port number and second is callback function which will be called when server starts listening on given port number. here we are using 5001 port number but we can use any port number which is not used by any other application. we can also use 0 to let the system choose a random available port number. we can also use process.env.PORT to get the port number from environment variable. we can also use app.set("port", process.env.PORT || 5001) to set the port number in app object and then use app.get("port") to get the port number from app object. we can also use app.listen(app.get("port"), () => {}) to start the server on given port number.
    console.log("Listening to the...");
});


// this below code is created for the same purpose as above program/code but here we are using .env file to store sensitive data like password, apikeys, port number etc. and how to use it in our project using dotenv module. we can also use process.env.PORT to get the port number from environment variable. we can also use app.set("port", process.env.PORT || 5001) to set the port number in app object and then use app.get("port") to get the port number from app object. we can also use app.listen(app.get("port"), () => {}) to start the server on given port number.
// to run this code we need to install dotenv module using npm i dotenv command in terminal. we also need to create a .env file in the same folder where we have created this server.js file. we also need to add the environment variables like PORT, check .env file from folder to see more detail
var express = require("express");
var dotenv = require("dotenv");

dotenv.config();

var app = express();

let port = process.env.PORT; // env file( in this same folder) has information about port number and username which is stored in .env file. we can also use process.env.PORT to get the port number from environment variable. we can also use app.set("port", process.env.PORT || 5001) to set the port number in app object and then use app.get("port") to get the port number from app object. we can also use app.listen(app.get("port"), () => {}) to start the server on given port number.
let user = process.env.USER;

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
    console.log(`Listening to the username ${user}`);
});

// to run this file we need to run the command npm run start:api(start:api we have defined in package.json so when you give this command it check from package.json) in terminal. this command will run the server.js file using nodemon(nodemon used to auto refresh the output to produce latest output we install nodemon also from terminal) module and it will automatically restart the server when we make any changes in the code. so we don't need to stop and start the server manually every time we make any changes in the code.
*/
// below code is very important to connect with server and use postman to get and post data from server. we can also use postman to test the

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
// http://localhost:5001/api/v1/users/getUsers
