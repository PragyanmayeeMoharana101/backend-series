const express = require ('express');
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "welocme to home page"
    });
});
app.post("/signup",(req,res)=>{
    res.json({
        success: true,
        message: "your data added successfully"
    });
});
app.delete("/delete",(req,res)=>{
    res.json({
        success: true,
        message: "record deleted successfully"
    });
});
app.put("/update",(req,res)=>{
    res.json({
        success: true,
        message: "record updated successfully"
    });
});
app.listen(port,()=>{
    console.log("server is running");
});