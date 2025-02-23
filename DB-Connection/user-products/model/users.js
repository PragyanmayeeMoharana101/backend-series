const mongoose = require ("mongoose")
const userschema = mongoose.Schema({
    id:{
        type: String
    },
    name:{
        type: String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    address:{
        street:{
            type: String
        },
        suite:{
            type: String
        },
        city:{
            type: String
        },
        zipcode:{
            type: String
        },
        geo:{
            lat:{
                type: String
            },
            lng:{
                type: String
            },
        },
    },
    phone:{
        type: String
    },
    website:{
        type: String
    },
    company:{
        name:{
            type: String
        },
        catchPhase:{
            type: String
        },
        bs:{
            type: String
        },
    },
})
module.exports = mongoose.model("users", userschema);