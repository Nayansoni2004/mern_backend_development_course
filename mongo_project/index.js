const mongoose = require('mongoose');
const studentModel = require('./model/student.model1');

/**
 * write the code to connect with mongodb
 */
mongoose.connect("mongodb://localhost/mongo_projectdb")

const db = mongoose.connection //Start the connection with Mongo DB

db.on("error", () => {
    console.log("Error while connectiong with databse")
});

db.once("open", () => {
    console.log("Connected to MongoDB")
    //Logic to insert data into the db
    init()

    //Running the queries on MongoDB
    dbQueries()
})

//insert data into db
async function init() {
    //login to insert data into the DB
    const student = {
        name : "Rahul",
        age : 21,
        email : "rahul@gmail.com",
        subjects : ["Maths", "English", "Hindi"]
    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj)
}

//read data from db
async function dbQueries() {
    //Read the student data
    console.log("Inside the dbQueries function")
    //Read the student data based on id
    try {
        const student = await studentModel.findById('69958e0e71ba1c29c7fbab31');
        console.log(student)
    } catch(err) {
        console.log(err);
    }

    // I want to go and search based on name
    try {
        // const students = await studentModel.find({name : 'Rohan'}) []
        // const students = await studentModel.findOne({name : 'Rahul'}) null
        const students = await studentModel.find({}) //now it will act like findAll()
        console.log(students)
    } catch(err) {
        console.log(err)
    }
    
    studentModel.find({email : 'rahul@gmail.com'})

    /**
     * Deal with the multiple conditions
     */
    const stds = await studentModel.where("age").gt("10").where("name").equals("Rahul").limit(2)
    console.log(stds)

    /**
     * Delete one document where name = "Rahul"
     */
    const student = await studentModel.deleteOne({name : "Rahul"})
    console.log(student)
}