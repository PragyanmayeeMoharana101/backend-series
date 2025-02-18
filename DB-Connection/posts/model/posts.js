const mongoose = require ("mongoose");
const postschema = mongoose.Schema({
    userId:{
        type:String
    },
    Id:{
        type:String
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
})

module.exports = mongoose.model("posts",postschema);