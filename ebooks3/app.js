const express = require ("express");
const bodyParser = require("body-parser");
const ebook = [
    {
        id: "1",
        name: "book1"
    },

    {
        id: "2",
        name: "book2"
    }
];
//console.log(ebook)
const app = express();
//app.use(express.json());
app.use(bodyParser.json());
const port = 3000;
app.get ("/",(req,res)=>{
    res.json({
        message: "welcome to home page"
    });
});
app.get ("/getall",(req,res)=>{
    //res.json(ebook);
    res.json({
        message: "list of ebooks",
        data:ebook
    })
});

app.post ("/addbook", (req,res)=>{
    let newbook = req.body;
    console.log(newbook);
    ebook.push(newbook);
    res.json({
        message: "book added sucessfully",
        bookDetails: newbook
    })
});
app.delete("/delbook", (req,res)=>{
    const deletedbook = ebook.pop();
    res.json({
        message: "book deleted sucessfully",
        bookDetails: deletedbook
    });
});
app.get("/findbook/:id", (req,res)=>{
    //console.log(req.params);
    const result = ebook.find((item)=>item.id===req.params.id) ;
    console.log(result);
    if(result){
        res.json({
            message: "search is sucessful",
            bookDetails: result
        })
    }else{
        res.json({
            message:"record not found"
        })
    }
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

