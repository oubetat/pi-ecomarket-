const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  priceDollar: Number,
  priceGCV: Number,
  ecoReward: { type: Number, default: 0 }
});

module.exports = mongoose.model("Product", productSchema);