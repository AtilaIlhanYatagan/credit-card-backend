const express = require("express");
const router = express.Router();
const {
  createCard,
  getCards,
  getCardById,
  deleteCardById,
} = require("../controllers/card.controller");

router.post("/", createCard);
router.get("/", getCards);
router.get("/:id", getCardById);
router.delete("/:id", deleteCardById);

module.exports = router;
