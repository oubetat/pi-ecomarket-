const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "✅ User added" });
});

router.put("/:id/reward", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.points += req.body.points;
  if (user.points > 100) user.level++;
  await user.save();
  res.json(user);
});

module.exports = router;