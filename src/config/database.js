const mongoose = require("mongoose");

//database connection
// mongoose.connect("mongodb://localhost:27017/ecom");
mongoose.connect("mongodb+srv://admin-sk:0759342494@cluster0.jqida.mongodb.net/ecom");

//item schema
const itemSchema = new mongoose.Schema({
  image: String,
  title: { type: String, required: true },
  description: String,
  price: Number,
  rating: Number,
  quantity: Number,
  category: String
});
//customer schema
const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  stripeId: String,
  password: String
});
//customer order Schema
const orderSchema = new mongoose.Schema({
  cusName: String,
  cusEmail: String,
  orderName: String,
  orderPrice: Number,
  orderQuantity: Number
});
// model
const items = mongoose.model("items", itemSchema);
const customers = mongoose.model("customers", customerSchema);
const orders = mongoose.model("orders", orderSchema);

module.exports = { items, customers, orders };
