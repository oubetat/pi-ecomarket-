const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  name: String,
  levelRequired: Number,
  ecoPoints: Number
});

module.exports = mongoose.model("Reward", rewardSchema);