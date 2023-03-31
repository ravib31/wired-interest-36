const express = require("express");
const { ProductModel } = require("../models/Products.model");
const productRouter = express.Router()
const jwt = require("jsonwebtoken")


productRouter.get("/" , async (req, res) => {

    const category = req.query
    console.log(category)

    try {
        const data = await ProductModel.find(category)
        console.log(data)

        res.status(200).send({"msg" : "All Products Available"})  
    } catch (error) {
      res.status(400).send({"msg" : error.message}) 
    }
   
})



productRouter.post("/add" , async(req, res) => {

    try {
        const data = new ProductModel(req.body)
        await data.save()
        res.status(200).send({"msg" : "Product Added"})
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})



productRouter.patch("/update/:prodID" , async (req, res) => {

    const {prodID} = req.params
    const payload= req.body
    const token = req.headers.authorization
    const decoded = jwt.verify(token, 'evaluation')
    const req_id = decoded.userID
    const product = await ProductModel.find({_id:prodID})
    const userID_in_product = product[0].userID

    try {

        if(req_id === userID_in_product){
            const data = await ProductModel.findByIdAndUpdate({_id:prodID}, payload)
            res.status(200).send({"msg" : `Product with id:${prodID} has been Updated`})
        } else {
            res.status(403).send({"msg" : "You are not authorized to Updated the product"})
        }
        
    } catch (error) {
        res.status(400).send({"msg" : error.message})
    }
})



productRouter.delete("delete/:prodID" , async(req, res) => {
   console.log("delete")
    const {prodID} = req.params
    const token = req.headers.authorization
    const decoded = jwt.verify(token, 'evaluation')
    const req_id = decoded.userID
    const product = await ProductModel.find({_id:prodID})
    const userID_in_product = product[0].userID

    console.log(prodID)
    console.log(product)

    try {
        if(req_id === userID_in_product){

            const productDeleted = await ProductModel.findByIdAndDelete({_id:prodID})
            res.status(200).send({"msg" : `Product with id:${prodID} has been Deleted`})

        } else {

            res.status(403).send({"msg" : "You are not authorized to Deleted the product"})
        }

    } catch (error) {
            res.status(400).send({"msg" : error.message})
        }          
})


module.exports = { productRouter };