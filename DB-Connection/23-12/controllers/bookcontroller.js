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
    const bookID =  req.params.id;
    console.log(bookID)
}
module.exports = {getallbooks, getBookByID}