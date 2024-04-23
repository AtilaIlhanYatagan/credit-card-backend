const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
  cardId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
});
const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
