const users = require("./data/users")
const products = require("./data/products")
const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const port = 3000;
app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.json({
        message: "welcome to homepage"
    });
});
app.get("/users",(req,res)=>{
    res.json({
        message: "list of users",
        userDetails: users
    });
});

app.get("/products",(req,res)=>{
    res.json({
        message: "list of products",
        productsDetails: products
    });
});
app.post("/adduser", (req,res)=>{
    let newuser = req.body
    users.push(newuser);
    res.json({
        messege: "user details added sucessfully",
        userDetails: newuser
    })
})
app.post("/addproducts", (req,res)=>{
    let newproducts = req.body
    products.push(newproducts);
    res.json({
        messege: "product details added sucessfully",
        productDetails: newproducts
    })
})

app.delete("/deleteuser",(req,res)=>{
    let deleteduser = users.pop()
    res.json({
        message: "user details deleted sucessfully",
        deletedUserDetails: deleteduser
    })
})

app.delete("/deleteproduct",(req,res)=>{
    let deletedproduct = products.pop()
    res.json({
        message: "product details deleted sucessfully",
        deletedUserDetails: deletedproduct
    })
})
app.listen(port,()=>{
    console.log("server is running");
});