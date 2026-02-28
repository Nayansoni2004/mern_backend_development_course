/**
 * I need to write the controller / logic to register a user
 */
const bcrypt = require('bcryptjs')
const user_model = require('../models/user.model')

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
        response.staus(201).send(user_created) //201 indicates that something has been successfully created
    } catch(err) {
        console.log('Error while registering the user', err)
        response.status(500).send({ //status code 500 means internal server error while registering user
            message : 'Some error happened while registering the user'
        })
    }

    // 3. Return the response back to the user
}