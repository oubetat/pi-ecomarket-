const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req,res)=> res.json(await Product.find()));

router.post("/", async (req,res)=>{
  const product = new Product(req.body);
  await product.save();
  res.json({message:"✅ Product added"});
});

module.exports = router;