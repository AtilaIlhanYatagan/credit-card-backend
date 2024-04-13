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
});
const Card = mongoose.model("Card", CardSchema);
module.exports = Card;