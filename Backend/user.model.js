
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number,
    key:Number,
    location:String,
    type:String
})

const UserModel = mongoose.model("user",userSchema)

module.exports = { UserModel}