const mongoose = require ("mongoose");
const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://pragyanmayeemoharana:pragyan123@cluster0.sul2z.mongodb.net/")
    console.log("database connected sucessfully");
}
module.exports = connectDB;