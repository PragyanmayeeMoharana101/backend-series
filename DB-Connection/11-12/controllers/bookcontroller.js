const ebooks = require ("../model/ebooks");
const getAllBooks = async (req,res)=>{
    try {
        const allBooks = await ebooks.find({});
        res.json({
            message: "list of books",
            success: "true",
            data: allBooks
        })
    } catch (error) {
        res.json({
            message: "no data found",
            success: "false",
            data: allBooks
        })
    }
}
module.exports = getAllBooks;