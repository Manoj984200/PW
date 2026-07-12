const mongoose = require("mongoose");

async function dbConfig() {

    try {

        await mongoose.connect(
            "mongodb+srv://manojsharmakumar1989_db_user:j9qcI1srXrJXYEGc@cluster0.okkxbtq.mongodb.net/express_db?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("DB connected successfully");

    } catch (err) {

        console.log(err);

    }

}

module.exports = {
    dbConfig
};