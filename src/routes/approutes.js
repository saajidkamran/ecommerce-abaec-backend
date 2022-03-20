const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const Passport = require("passport");
const stripe = require("stripe")(
  "sk_test_51J887XGHMWtYg6xLMbLM7wErxu56jV6O4fRibDbQKOirTJY4HI0Dswln73vEFBnRb9XGTP3lPRrqxS6Wa2uqnbyy00BL7iFPf7"
);
require("dotenv").config();
//initializing
app.use(express.static("uploads"));
app.use(express.json());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(
  session({
    secret: "keygen.",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
app.use(Passport.initialize());
app.use(Passport.session());
//Rest-api - calls
const {
  postItem,
  stock,
  email,
  search,
  paymentDetail,
  deleteOnne,
  getItems,
  createCus,
  Orders,
  updateItem,
  upload,
  register,
  login,
  logout
} = require("../api/rest_api")
//item app-route
app
  .route("/api/items")
  .post(upload.single("productImage"), postItem)
  .get(getItems);
app.delete("/api/items/:id", deleteOnne);
app.patch("/api/items/:id", upload.single("productImage"), updateItem);
app.post("/payment/create", paymentDetail);
app.post("/api/customers", createCus);
app.post("/api/orders", Orders);
app.post("/api/search", search);
app.patch("/api/stockUpdate/:id", stock);
app.post("/api/mail", email);
app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
//Index page at default entry route
app.route("/").get(function (req, res) {
  res.send("working");
});
module.exports = app;
