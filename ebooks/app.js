const express = require ("express");

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
    let newbook ={
        id: "3",
        name: "book3"
    }
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

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

