/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * I need to interceot this
 */
const authController = require('../controllers/auth.controller')
const authMW = require('../middlewares/auth.middleware')

module.exports = (app)=>{
    app.post('/ecomm/api/v1/auth/signup',[authMW.verifySignupBody], authController.signup)

    /**
     * define Route for POST call - localhost:8888/ecomm/api/v1/auth/signin
     */
    app.post('/ecomm/api/v1/auth/signin', authController.signin)
}