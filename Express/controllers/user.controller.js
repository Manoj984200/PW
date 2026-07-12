const { User } = require("../models/user.model");

function getUser(req, res) {
    res.send("PONG!!");
}

function createUser(req, res) {

    User.create({

        age: 25,
        password: "123456",
        email: "manoj@gmail.com",
        phoneNumber: 9876543210

    })

    .then((user) => {

        res.json({
            message: "User Created Successfully",
            data: user
        });

    })

    .catch((err) => {

        console.log(err);

        res.json({
            message: "Error",
            error: err
        });

    });

}

module.exports = {
    getUser,
    createUser
};