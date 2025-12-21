const mongoose = require("mongoose");

const InteractionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  action: {
    type: String,
    enum: ["view", "favourite"],
    required: true
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Interaction", InteractionSchema);
