const mongoose = require("mongoose");

async function dbConfig3() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
        return mongoose.connection;
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
        throw error;
    }
}

module.exports = {
    dbConfig3
};