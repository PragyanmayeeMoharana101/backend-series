const ebooks = require ("../model/ebooks")
const getallbooks = async (req,res)=>{
    try {
        let allBooks = await ebooks.find({});
        res.json({
            message: "list of all books",
            success: "true",
            bookDetails: allBooks
        })
    } catch (error) {
        res.json({
            message: "data not found",
            success: "false",
            bookDetails: allBooks
        })
    }
}
const getBookByID = async (req,res)=>{
    try {
        const bookID =  req.params.id;
        console.log(bookID);
        let allbooks = await ebooks.findById(bookID)
        res.json({
            message: "book details",
            success: "true",
            data: allbooks      
        })
        
    } catch (error) {
        res.json({
            message: "no data found",
            success: "false",     
        })
    }
    
}

const getBookByChoice = async (req,res)=>{
    try {
        const bookID =  req.params.id;
        console.log(bookID);
        let allbooks = await ebooks.find({id: bookID})
        res.json({
            message: "book details",
            success: "true",
            data: allbooks      
        })
        
    } catch (error) {
        res.json({
            message: "no data found",
            success: "false",     
        })
    }
    
}
module.exports = {getallbooks, getBookByID,getBookByChoice}