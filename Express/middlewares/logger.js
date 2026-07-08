// logger.js
// Purpose:
// This middleware automatically stores every incoming API request path
// inside log/log.txt.
// It runs BEFORE the controller.
// After writing into the file, it calls next() so the request can continue.

const fs = require("fs");          // File System module - used to read/write files
const path = require("path");      // Path module - used to create correct file path

function logger(req, res, next) {

    // Creates the absolute path of log.txt
    // Example:
    // C:\Users\DELL\Desktop\H l\Express\log\log.txt
    const logPath = path.resolve("log", "log.txt"); 

    // Append means:
    // Keep old data and add new data at the end of file.
    // req.path contains only the API path.
    // Example:
    // /api/v1/users/getUser

    fs.appendFile(
        logPath,
        req.path + "\n",      // \n prints every request on a new line
        (err) => {

            // If any error occurs while writing file,
            // print it in terminal.

            if (err) {
                console.log(err);
            }
        }
    );

    // Very Important
    // Pass control to next middleware or controller.
    // Without next(), request will stop here.
    next();
}

// Export this middleware so it can be used inside router.js

module.exports = {
    logger
};