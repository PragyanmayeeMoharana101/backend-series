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
module.exports = getallbooks