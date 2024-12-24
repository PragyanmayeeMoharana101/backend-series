const ebooks = require ("../model/ebooks");
const getAllBooks = async (req,res)=>{
    try {
        let allBooks = await ebooks.find({})
        res.json({
            message: "list of books",
            success : "true",
            data : allBooks
        })
    } catch (error) {
        res.json({
            message: "no data found",
            success : "false",
        })
    }
}

const getBookById = async(req,res)=>{
    let bookById = req.params.id;
    console.log (bookById);
}

module.exports = {getAllBooks,getBookById}