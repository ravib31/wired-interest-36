const mongoose = require("mongoose")


const CartProductSchema = mongoose.Schema({
    imageURL : String,
    itemName : String,
    category : String,
    price : Number,
    deliveryStatus: String,
    rating: Number,
    reviews: String,
    userID :String
})

const CartProductModel = mongoose.model("Cartproduct", CartProductSchema)

module.exports = { CartProductModel };