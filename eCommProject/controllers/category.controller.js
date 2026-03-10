/**
 * controller for creating the category
 * 
 *  POST localhost:8888/ecomm/api/v1/categories
 * 
 *  {
 *    "name" : "Household",
 *    "description" : "This will have all the household items"
 *  }
 */
const category_model = require('../models/category.model')

exports.createNewCategory = async (request, response)=>{
    //REad the req. body
    //Create the category object
    const cat_data = {
        name : request.body.name,
        description : request.body.description
    }

    try{
        //Insert into mongodb
        const category = await category_model.create(cat_data)
        return response.status(200).send(category)
    }catch(err) {
        console.log('Error while creating the category', err)
        return response.status(500).send({
            message : "Error while creating the category"
        })
    }

    //return the response of the created category
}