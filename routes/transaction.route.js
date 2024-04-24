const express = require("express");
const router = express.Router();
const {
    getTransactionsWithCardId
} = require("../controllers/transaction.controller");

router.get("/:cardId", getTransactionsWithCardId);

module.exports = router;
