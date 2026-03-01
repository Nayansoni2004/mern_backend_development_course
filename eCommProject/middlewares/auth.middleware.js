/**
 * Create a middleware that check if the request body is proper and correct
 */
const user_model = require('../models/user.model')

const verifySignupBody = async(req, resp, next) => {
    try {
        //Check for the name
        if(!req.body.name) {
            return resp.status(400).send({
                message : "Failed ! Name was not provided in request body"
            })
        }
        //Check for the email
        if(!req.body.email) {
            return resp.status(400).send({
                message : "Failed ! Email was not provided in request body"
            })
        } 

        //Check for the userId
        if(!req.body.userId) {
            return resp.status(400).send({
                message : "Failed ! userId was not provided in request body"
            })
        }

        //Check if the user with the same userId is already present
        const user = await user_model.findOne({userId : req.body.userId})
        if(user) {
            return resp.status(400).send({
                message : "Failed ! user with same userId is already present"
            })
        }

        next() //move next if all the cases passes...

    }catch(err) {
        console.log("Error while validating the request body(object)", err)
        resp.status(500).send({
            message : "Error while validating the request body"
        })
    }
}




/**
 * Validation at signin
 */
const verifySigninBody = async(req, resp, next) => {
    
    if(!req.body.userId) {
        return resp.status(400).send({
            message : "userId is not provided"
        })
    }

    if(!req.body.password) {
        return resp.status(400).send({
            message : "password is not provided"
        })
    }

    next(); //if everything in req. body is accurate
}


module.exports = {
    verifySignupBody : verifySignupBody,
    verifySigninBody : verifySigninBody
}