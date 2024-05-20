const express = require("express");
const router = express.Router();
const {
  createCard,
  getCards,
  getCardById,
  deleteCardById,
  updateCardLimit,
  payCardDebt
} = require("../controllers/card.controller");

router.post("/", createCard);
router.get("/", getCards);
router.get("/:id", getCardById);
router.delete("/:id", deleteCardById);
router.post("/updateCardLimit", updateCardLimit);
router.post("/payCardDebt", payCardDebt);

module.exports = router;
