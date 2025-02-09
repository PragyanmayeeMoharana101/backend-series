const dotenv = require ("dotenv");
dotenv.config();
const express = require ("express");
const connectDB = require("./db");
const getallbooks = require("./controllers/bookcontroller");
const app = express();
app.use (express.json());
connectDB();
app.use ("/books/api", require ("./routes/bookRoutes"))
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})