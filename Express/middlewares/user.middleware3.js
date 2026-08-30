const jwt = require("jsonwebtoken");

async function isAuthorized(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Login is not done"
            });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({
                message: "Not verified user"
            });
        }

        req.user = decoded;
        return next();
    } catch (error) {
        console.log("Authorization error:", error);
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = {
    isAuthorized
};