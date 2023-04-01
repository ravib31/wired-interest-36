const express = require("express");
const { ProductModel } = require("../models/Products.model");
const CartproductRouter = express.Router();
const jwt = require("jsonwebtoken");

CartproductRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "evaluation");

  try {
    if (decoded) {
      const notes = await ProductModel.find({ userID: decoded.userID });
      res.status(200).send(notes);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});


CartproductRouter.post("/cart/:prodID" ,async (req, res) => {

  const {prodID} = req.params
  const payload = req.body
  const token =  req.headers.authorization
  const decoded = jwt.verify(token, 'evaluation')
  const req_id = decoded.userID
  const note = await ProductModel.find({_id:prodID})
  const userID_in_product = note[0].userID

    try {

      if(req_id === userID_in_product){
        const data = new NotesModel(note)
        await data.save()
        res.send(data)
       res.status(200).send({"msg": "New Note Has Been Added"})
      } else {
        res.status(403).send({"msg" : "You are not logged in to add products to cart"})
      }

    } catch (error) {
      console.log(error);
      res.status(400).send({"msg": error.message})
    }
     
});





module.exports = { CartproductRouter };



