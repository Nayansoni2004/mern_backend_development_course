/**
 * Create a middleware that check if the request body is proper and correct
 */
const user_model = require('../models/user.model')
const jwt = require('jsonwebtoken')
const auth_config = require('../configs/auth.config')

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


const verifyToken = (request, response, next)=>{
    //Check if the token is present in the header
    const token = request.headers['x-access-token']

    if(!token) {
        return response.status(403).send({
            message : "No token found : unAuthorized"
        })
    }

    //If it's the valid token
    jwt.verify(token, auth_config.secret, async (err, decoded)=>{
        if(err) {
            return response.status(401).send({
                message : "UnAuthorized !"
            })
        }
        const user = await user_model.findOne({userId : decoded.id})
        if(!user) {
            return response.status(400).send({
                message : "UnAuthorized, this user for this token doesn't exists"
            })
        }
        //set the user info in the req body
        request.user = user
        
        //Then move to the next step
        next()
    })

}

/**
 * Allow only admin to add new category, customer should'nt be allowed.
 */
const isAdmin = (request, response, next)=>{
    const user = request.user
    if(user && user.userType == 'ADMIN') {
        next()
    } else {
        return response.status(403).send({
            message : 'Only ADMIN users are allowed to access this endpoint'
        })
    }
}

module.exports = {
    verifySignupBody : verifySignupBody,
    verifySigninBody : verifySigninBody,
    verifyToken : verifyToken,
    isAdmin : isAdmin
}