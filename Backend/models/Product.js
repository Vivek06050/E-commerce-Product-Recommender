const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: Number,
  image: String,
  tags: {
    type: [String],
    index: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
