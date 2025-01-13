const dotenv = require("dotenv");
dotenv.config();
const express = require ("express");
const app = express();

const connectDB = require ("./db")
connectDB();

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})