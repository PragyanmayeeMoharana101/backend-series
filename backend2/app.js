const express = require('express');
const {homepage, aboutpage, contactpage, productpage} = require ('./controllers/controllers');
const app = express();
const port = 3000;
/*const homepage=(req,res)=>{
    res.send("I am home page");
}
const productpage =(req,res)=>{
    res.send("I am product page");
}
const aboutpage =(req,res)=>{
    res.send("I am about page");
}
const contactpage =(req,res)=>{
    res.send("I am contact page");
}*/
app.get("/",homepage);
app.get("/product",productpage);
app.get("/about",aboutpage);
app.get("/contact",contactpage);
app.listen(port, ()=>{
    console.log(`server is running in ${port}`);
});