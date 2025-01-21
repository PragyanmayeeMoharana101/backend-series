const dotenv = require ("dotenv");
dotenv.config();
const express = require ("express");
const connectDB = require("./db");
const getallbooks = require("./controllers/bookcontroller");
const app = express();
connectDB();
app.get("/getall", getallbooks)
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})