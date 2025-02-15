const mongoose = require ("mongoose");
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("database connection failed");
    }
}
module.exports = connectDB