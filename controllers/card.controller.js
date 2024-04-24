const Card = require("../models/cards.model");

const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCardById = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    res.status(200).json("Card deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCardDebt = async (cardId, amount) => {
  try {
    const card = await Card.findById(cardId);
    card.currentDebt += amount;
    await card.save();
    console.log("Card debt updated successfully", card);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createCard,
  getCards,
  getCardById,
  deleteCardById,
  updateCardDebt,
};
