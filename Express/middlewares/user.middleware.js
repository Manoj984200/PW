function ageCheckMiddleware(req, res, next) {

    let age = req.query.age;

    if (!(age >= 18)) {
        return res.json({
            message: "Ghar Jao!!!"
        });
    }

    next(); // next is inbuilt and used to take the control to next middleware or controller function. if we don't use next() then the request will be stuck in this middleware and will not go to next middleware or controller function. so we need to use next() to take the control to next middleware or controller function.
}
function adhaarCardCheckMiddleware(req,res,next){

    let adhaar = req.query.adhaar;

    if((adhaar!== "1234-5678-9012")){

        return res.json({
            message:"Adhaar is not eligible"
        });
    }

    next();

}

module.exports = {
    ageCheckMiddleware,
    adhaarCardCheckMiddleware
};