const mongoose = require("mongoose");

async function dbConfig() {

    try {

        await mongoose.connect(
            process.env.MONGO_URI || "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority"
        );

        console.log("DB connected successfully");

    } catch (err) {

        console.log(err);
 
    }

}

module.exports = {
    dbConfig
};