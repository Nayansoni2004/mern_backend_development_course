/**
 * POST localhost:8080/ecomm/api/v1/categories
 */
const authMiddleware = require('../middlewares/auth.middleware')
category_control = require('../controllers/category.controller')
auth_middleware = require('../middlewares/auth.middleware')

module.exports = (app)=>{
    app.post('/ecomm/api/v1/categories', [auth_middleware.verifyToken, authMiddleware.isAdmin], category_control.createNewCategory)
}