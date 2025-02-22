const products = require("../model/products");
const getallproducts = async(req,res)=>{
    try {
        const allproducts = await products.find({})
        res.json({
            message: "list of products details",
            success: "true",
            userdetails: allproducts
        })
    } catch (error) {
        res.json({
            message: "no data found",
            success: "false"
        })
    }
}
module.exports= getallproducts