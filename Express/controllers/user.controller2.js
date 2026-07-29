const { User2 } = require("../models/user.model2");

const createUser = async (request, response) => {
    try {

        const newUser = await User2.create(request.body);

        response.status(201).json({
            message: "User Created Successfully",
            data: newUser,
        });

    } catch (error) {

        response.status(500).json({
            message: "Error",
            error: error.message,
        });

    }
};

module.exports = {
    createUser,
};