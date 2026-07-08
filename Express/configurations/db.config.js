const mongoose = require("mongoose");

async function dbConfig() {

    await mongoose.connect(
        "mongodb+srv://username:password@cluster.mongodb.net/"
    )
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

}

module.exports = {
    dbConfig
};