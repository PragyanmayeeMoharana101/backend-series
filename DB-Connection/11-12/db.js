const mongoose = require ("mongoose");
const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://pragyanmayeemoharana:pragyan123@cluster0.sul2z.mongodb.net/college")
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("database connection failed");
        process.exit(1)
    }
}
module.exports = connectDB;