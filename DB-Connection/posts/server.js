const dotenv = require("dotenv");
dotenv.config();
const express = require ("express");
const connectDB = require("./db");
const getallposts = require("./controllers/postscontroller");
const app = express();
connectDB()
app.get("/getallposts",getallposts);
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})