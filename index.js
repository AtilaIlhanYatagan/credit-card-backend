const express = require("express");
const mongoose = require("mongoose");
const cardRoute = require("./routes/card.route");
const paymentRoute = require("./routes/payment.route");
const transactionRoute = require("./routes/transaction.route");
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
  .catch((error) => {
    console.log("connection failed!",error);
  });

 // routes
 app.use ("/api/cards", cardRoute)
 app.use ("/api/payments", paymentRoute)
 app.use ("/api/transactions", transactionRoute)
