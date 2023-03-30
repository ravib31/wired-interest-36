const mongoose = require("mongoose")


const ProductSchema = mongoose.Schema({
    imageURL : String,
    itemName : String,
    category : String,
    price : Number,
    deliveryStatus: String,
    rating: Number,
    reviews: String
})

const ProductModel = mongoose.model("product", ProductSchema)

module.exports = { ProductModel };