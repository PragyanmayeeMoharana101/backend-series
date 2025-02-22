const users = require ("../model/users");
const getallusers = async (req,res)=>{
    try {
        const allusers = await users.find({});
        res.json({
            message: "list of users details",
            success: "true",
            userdetails: allusers
        })
    } catch (error) {
        res.json({
            message: "no record found",
            success: "false",
            userdetails: allusers
        })
    }
}
module.exports= getallusers;