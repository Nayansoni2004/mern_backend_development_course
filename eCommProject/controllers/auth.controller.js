/**
 * I need to write the controller / logic to register a user
 */
const bcrypt = require('bcryptjs')
const user_model = require('../models/user.model')
const jwt = require("jsonwebtoken")
const secret = require('../configs/auth.config')

exports.signup = async (request, response)=>{
    /**
     * Logic to create the user
     */
    // 1. Read the request ReportBody
    const request_body = request.body

    // 2. Insert the data in the Users collection in MongoDB
    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password,8)
    }

    try {
        const user_created = await user_model.create(userObj)
        /**
         * Return this user
         */
        const resp_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt : user_created.createdAt,
            updatedAt : user_created.updatedAt
        }
        response.status(201).send(resp_obj) //201 indicates that something has been successfully created
    } catch(err) {
        console.log('Error while registering the user', err)
        response.status(500).send({ //status code 500 means internal server error while registering user
            message : 'Some error happened while registering the user'
        })
    }

    // 3. Return the response back to the user
}



/**
 * create controller for login same as signup
 */
exports.signin = async(request, response)=>{
    //Check if the user id is present in the system
    const user = await user_model.findOne({userId : request.body.userId})

    if(user == null) {
        return response.status(400).send({
            message : "User Id passed is not a valid user id"
        })
    }

    //if Password is correct(user entered password matchs -> password save in db)
    const isPasswordValid = bcrypt.compareSync(request.body.password, user.password)
    if(!isPasswordValid) {
        return response.status(401).send({
            message : 'Wrong password passed'
        })
    }

    //using jwt we will create the access token with the given TTL(Time-To-Live) and return
    const token = jwt.sign({id : user.userId}, secret.secret, {
        expiresIn : 120 //seconds
    })

    //send these after successfull signin
    response.status(200).send({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType : user.userType,
        accessToken : token
    })
}