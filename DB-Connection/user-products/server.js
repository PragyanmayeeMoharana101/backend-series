const dotenv = require ("dotenv");
dotenv.config()
const express = require ("express");
const connectDB = require("./db");
const getallusers = require("./controllers/userscontroller");
const getallproducts = require("./controllers/productscontroller");
const app = express();
connectDB();
app.get("/getallusers",getallusers)
app.get("/getallproducts", getallproducts)
port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})