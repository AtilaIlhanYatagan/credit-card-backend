const mongoose = require("mongoose");
const TransactionSchema = new mongoose.Schema({
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
  transactionDate: {
    type: Date,
    required: true,
  },
});
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
