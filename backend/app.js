const express = require('express');
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("I am home page");
})
app.get("/product", (req,res)=>{
    res.send("I am product page");
})
app.get("/about", (req,res)=>{
    res.send("I am about page");
})
app.get("/contact", (req,res)=>{
    res.send("I am contact page");
})
app.listen(port, ()=>{
    console.log(`server is running in ${port}`);
});