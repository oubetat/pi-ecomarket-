const express = require("express");
const Reward = require("../models/Reward");
const router = express.Router();

router.get("/", async (req,res)=> res.json(await Reward.find()));

router.post("/", async (req,res)=>{
  const reward = new Reward(req.body);
  await reward.save();
  res.json({message:"✅ Reward added"});
});

module.exports = router;