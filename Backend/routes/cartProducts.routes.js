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


CartproductRouter.post("/cart" ,async (req, res) => {
    try {
     const note = new NotesModel(req.body)
     await note.save()
     res.status(200).send({"msg": "New Note Has Been Added"})
    } catch (error) {
      console.log(error);
      res.status(400).send({"msg": error.message})
    }
     
});





module.exports = { CartproductRouter };



