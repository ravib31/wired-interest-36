const { query } = require("express");
const express = require("express");
const { ProductModel } = require("../models/homeProducts.model");
const productRouter = express.Router()


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



module.exports = { productRouter };