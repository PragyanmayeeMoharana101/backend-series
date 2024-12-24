const dotenv = require("dotenv");
dotenv.config()
const express = require ("express");
const connectDB = require("./db");
const app = express();
app.use("/books/api", require("./routes/bookrouter"))
const port = process.env.PORT || 3000
connectDB();
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})