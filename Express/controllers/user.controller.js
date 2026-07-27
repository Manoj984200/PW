const { User } = require("../models/user.model");

function getUser(req, res) {
    res.send("PONG!!");
}

function createUser(request, response) {

    User.create(request.body)

        .then((user) => {

            response.json({
                message: "User Created Successfully",
                data: user
            });

        })

        .catch((err) => {

            console.log(err);

            response.json({
                message: "Error",
                error: err.message
            });

        });

}

module.exports = {
    getUser,
    createUser
};