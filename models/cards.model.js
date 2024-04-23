const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
  cardName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  validThru: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  currentDebt: {
    type: Number,
    required: true,
  },
  remainingDebt: {
    type: Number,
    required: true,
  },
  debitDate: {
    type: Date,
    required: true,
  },
});
const Card = mongoose.model("Card", CardSchema);
module.exports = Card;