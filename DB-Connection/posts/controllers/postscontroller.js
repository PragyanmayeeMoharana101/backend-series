const posts = require ("../model/posts");
const getallposts = async (req,res)=>{
    try {
        let getall = await posts.find({})
        res.json({
            message: "list of post details",
            success: "true",
            data: getall
        })
    } catch (error) {
        res.json({
            message: "no data found",
            success: "false",
            data: getall
        })
    }
}
module.exports= getallposts