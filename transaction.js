const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.get("/", async (req,res)=> res.json(await Transaction.find()));

router.post("/", async (req,res)=>{
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json({message:"✅ Transaction added"});
});

module.exports = router;