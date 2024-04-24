const Payment = require("../models/payment.model");
const { saveTransaction } = require("./transaction.controller");
const { updateCardDebt } = require("./card.controller");

const postPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    const transaction = {
      cardId: payment.cardId,
      amount: payment.amount,
      paymentType: payment.paymentType,
      transactionDate: new Date(),
    };
    await saveTransaction(transaction);
    await updateCardDebt(payment.cardId, payment.amount);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postPayment };