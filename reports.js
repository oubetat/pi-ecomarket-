const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.get("/", async (req,res)=>{
  const transactions = await Transaction.find();
  const total = transactions.reduce((sum,t)=>sum+t.amount,0);
  res.json({summary:`Total transactions: ${transactions.length}`, total});
});

module.exports = router;