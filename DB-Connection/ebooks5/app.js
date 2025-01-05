const dotenv = require("dotenv");
dotenv.config();
const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
app.use(bodyParser.json())
const connectDB = require ("./db")
connectDB();
const ebooks = [
    {
        "id": 1,
        "name": "book1"
    },
    {
        "id": 2,
        "name": "book2"
    },
    {
        "id": 3,
        "name": "book3"
    }
]
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.json({
        "message": "welcome to home page"
    })
})
app.get("/getall",(req,res)=>{
    res.json({
        "message": "list of ebooks",
        bookDetails: ebooks
    })
})
app.get("/findbook/:args",(req,res)=>{
    searchValue = req.params.args;
    let result = ebooks.find((item)=>{
        if(item.id===parseInt(searchValue)){
            return item;
        }else if(item.name === searchValue){
            return item;
        }else{
            return 0;
        }
    })
    if(result!=0){
        res.json({
            "message" : "Record found sucessfully",
            "data" : result
        })
    }else{
        res.json({
            "message" : "Record not found"
        })
    }
})

app.post("/addbook",(req,res)=>{
    let newbook = req.body;
    ebooks.push(newbook);
    res.json({
        "message": "book added sucessfully",
        "bookDetails": newbook
    })
})

app.delete("/delbook",(req,res)=>{
    const delbook = ebooks.pop();
    res.json({
        "message" : "Record deleted successfully",
        "bookDetails" : delbook
    })
})

// app.put("/updateBook/:args",(req,res)=>{
//     let searchValue = req.params.args;
//     let result = ebooks.find((item)=>{
//         if(item.id === parseInt(searchValue)){
//             let updt = ebooks.push(req.body);
//             return updt;
//         }else if(item.name === searchValue){
//             let updt = ebooks.push(req.body);
//             return updt;
//         }else{
//             return 0;
//         }
//     })
//     if(result!=0){
//         res.json({
//             "message" : "Record updated successfully",
//             "bookDetails" : result
//         })
//     }else{
//         res.json({
//             "message" : "Record is not updated"
//         })
//     }
// })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})