const express = require("express");
const router = express.Router();
const {
  postPayment
} = require("../controllers/payment.controller");

router.post("/", postPayment);

module.exports = router;
