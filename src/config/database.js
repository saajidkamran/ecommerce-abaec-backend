const mongoose = require("mongoose");

//database connection
mongoose.connect("mongodb://localhost:27017/ecom");

//item schema
const itemSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  quantity: Number,
  category: String
});

//item model
const items = mongoose.model("items", itemSchema);

module.exports = { items };
