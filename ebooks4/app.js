const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 3000;
ebook = [
    {
        id: "1",
        name: "book1"
    },
    {
        id: "2",
        name: "book2"
    }
]
app.get("/",(req,res)=>{
    res.json({
        message: "welcome to home page"
    });
    
});
app.get("/getall",(req,res)=>{
    res.json({
        message: "list of ebooks",
        data: ebook
    })
})
app.post("/addbook",(req,res)=>{
    let newbook = req.body;
    ebook.push(newbook);
    res.json({
        message: "book added sucessfully",
        bookDetails: newbook
    })
})
app.delete("/delbook/:args",(req,res)=>{
    let deletedBook = ebook.pop();
    res.json({
        message: "book deleted sucessfully",
        bookDetails: deletedBook 
    })
   /*const searchValue = req.params.args
   const result = ebook.find((item)=>{
    if(item.id=== searchValue){
        ebook.pop(item)
        return item;
    }else if(item.name===searchValue){
        ebook.pop(item)
        return item;
    }else{
        return 0;
    }
   })
   if(result!=0){
    res.json({
        message: "data deleted",
        bookDetails: result
    })
    }else{
    res.json({
        message: "data not found"
    })
}*/
})


app.get("/findbook/:args", (req,res)=>{
    const searchValue = req.params.args
    const result = ebook.find((item)=>{
        if(item.id=== searchValue){
            return item;
        }else if(item.name===searchValue){
            return item;
        }else{
            return 0;
        }
    });
    console.log(result);
    if(result!=0){
        res.json({
            message: "search is sucessful",
            bookDetails: result
        })
    }else{
        res.json({
            message: "data not found"
        })
    }
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
