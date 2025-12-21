const Interaction = require("../models/Interaction");

const toggleFavourite = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const existing = await Interaction.findOne({
      userId,
      productId,
      action: "favourite",
    });

    if (existing) {
      await Interaction.deleteOne({ _id: existing._id });
      return res.json({ favourited: false });
    }

    await Interaction.create({
      userId,
      productId,
      action: "favourite",
    });

    res.json({ favourited: true });
  } catch (err) {
    res.status(500).json({ message: "Toggle failed" });
  }
};

const recordView = async (req, res) => {
  const { userId, productId } = req.body;

  await Interaction.create({
    userId,
    productId,
    action: "view",
  });

  res.json({ viewed: true });
};


const getUserInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.find({
      userId: req.params.userId,
    });

    res.json(interactions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch interactions" });
  }
};

module.exports = {
  toggleFavourite,
  recordView,
  getUserInteractions,
};
