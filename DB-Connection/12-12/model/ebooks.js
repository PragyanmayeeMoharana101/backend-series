const mongoose = require ("mongoose");
const bookSchema = mongoose.Schema({
    id:{
        type: String
    },
    name:{
        name: String
    }
})
module.exports = mongoose.model("ebooks", bookSchema);