const mongoose = require ("mongoose");
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected sucessfully")
    } catch (error) {
        console.log ("server connection failed");
        process.exit(1);
    }
}
module.exports = connectDB