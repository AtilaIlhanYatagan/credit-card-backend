const Transaction = require("../models/transaction.model");

const getTransactionsWithCardId = async (req, res) => {
  try {
    const transactions = await Transaction.find({ cardId: req.params.cardId });
    const reversedTransactions = transactions.reverse();
    res.status(200).json(reversedTransactions);
    console.log(transactions);
    console.log(req.params.cardId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveTransaction = async (transaction) => {
  try {
    await Transaction.create(transaction);
    console.log("Transaction saved succesfully", transaction);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getTransactionsWithCardId, saveTransaction };
