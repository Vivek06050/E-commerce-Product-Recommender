const express = require("express");
const router = express.Router();

const {
  toggleFavourite,
  recordView,
  getUserInteractions,
} = require("../controllers/interactionController");

router.post("/favourite", toggleFavourite);
router.post("/view", recordView);

router.get("/:userId", getUserInteractions);

module.exports = router;
