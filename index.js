const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const Passport = require("passport");
const { customers } = require("./src/config/database");
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
const postItem = require("./src/controllers/postItems");
const stock = require("./src/controllers/stockUpdate");
const email = require("./src/controllers/Sendemail");
const search = require("./src/controllers/search");
const paymentDetail = require("./src/controllers/payment");
const deleteOnne = require("./src/controllers/deleteOne");
const getItems = require("./src/controllers/getItems");
const createCus = require("./src/controllers/createCus");
const Orders = require("./src/controllers/allOrders");
const updateItem = require("./src/controllers/UpdateItem");
const upload = require("./src/middlewares/multerImageUpload");
const register = require("./src/controllers/register");
const login = require("./src/controllers/login");
const logout = require("./src/controllers/logout");
const { server, port } = require("./src/config/server");
const { response } = require("express");
//item app-route
app
  .route("/api/items")
  .post(upload.single("productImage"), postItem)
  .get(getItems);
app.delete("/api/items/:id", deleteOnne);
app.patch("/api/items/:id", updateItem);
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
//local-port access
app.listen(port, server);
