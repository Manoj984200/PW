// Load environment variables
require("dotenv").config();

// Import Express
const express = require("express");

// Import Database Connection
const { connectDB } = require("./configurations/db.config2");

// Import Logger Middleware
const { logger2 } = require("./middlewares/logger2");

// Import User Router
const { userRouter2 } = require("./routes/user.router2");

// Create Express Application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to read JSON data from request body
app.use(express.json());

// Global Logger Middleware
app.use(logger2);

// Register User Routes
app.use("/user", userRouter2);

// Read PORT from .env
const PORT = process.env.PORT || 5001;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});