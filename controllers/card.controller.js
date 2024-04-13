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

module.exports = { createCard, getCards, getCardById };
