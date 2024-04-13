const express = require("express");
const Card = require("../models/cards.model");
const router = express.Router();
const {
  createCard,
  getCards,
  getCardById,
} = require("../controllers/card.controller");

router.post("/", createCard);
router.get("/", getCards);
router.get("/:id", getCardById);

module.exports = router;
