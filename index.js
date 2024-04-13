const express = require("express");
const mongoose = require("mongoose");
const Card = require("./models/cards.model");
const cardRoute = require("./routes/card.route");
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });

 // routes
 app.use ("/api/cards", cardRoute)