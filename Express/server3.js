// File: server3.js

const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const { dbConfig3 } = require("./configurations/db.config3");
const { userRouter3 } = require("./routes/user.router3");

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRouter3);

const startServer = async () => {
    try {
        await dbConfig3();

        app.listen(port, () => {
            console.log(`Listening to the port ${port}`);
        });
    } catch (error) {
        console.log("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();