const { STATUS_CODES } = require("http")
const mongoose = require ("mongoose")
const { type } = require("os")
const productschema = mongoose.Schema ({
    id:{
        type: String
    },
    title:{
        type: String
    },
    description:{
        type: String
    },
    cetegory:{
        type: String
    },
    price:{
        type: String
    },
    discountPercentage:{
        type: String
    },
    rating:{
        type: String
    },
    stocks:{
        type: String
    },
    tags:[{
        type: String
    }],
    brand:{
        type: String
    },
    sku:{
        type: String
    },
    weight:{
        type: String
    },
    dimentions:{
        width:{
            type: String
        },
        height:{
            type: String
        },
        depth:{
            type: String
        },
    },
    warrantyInformation:{
        type: String
    },
    shippingInformation:{
        type: String
    },
    availabilityStatus:{
        type: String
    },
    reviews:[
        {
            rating:{
                type: String
            },
            comment:{
                type: String
            },
            date:{
                type: String
            },
            reviewerName:{
                type: String
            },
            reviewerEmail:{
                type: String
            },  
        }
    ],
    returnPolicy:{
        type: String
    },
    minimumOrderQuantity:{
        type: String
    },
    meta:{
        createdAt:{
            type: String
        },
        updatedAt:{
            type: String
        },
        barcode:{
            type: String
        },
        qrCode:{
            type: String
        },
    },
    images:[{
        type: String
    }],
    thumbnail:{
        type: String
    }
})

module.exports= mongoose.model ("products",productschema);