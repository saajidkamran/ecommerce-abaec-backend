const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(express.static("uploads"));
const stripe = require("stripe")(
  "sk_test_51J887XGHMWtYg6xLMbLM7wErxu56jV6O4fRibDbQKOirTJY4HI0Dswln73vEFBnRb9XGTP3lPRrqxS6Wa2uqnbyy00BL7iFPf7"
);
//initializing
app.use(express.json());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(cors());
//Rest-api - calls
const postItem = require("./src/controllers/postItems");
const createInvoice = require("./src/controllers/createInvoice");
const paymentDetail = require("./src/controllers/payment");
const deleteOnne = require("./src/controllers/deleteOne");
const getItems = require("./src/controllers/getItems");
const createCus = require("./src/controllers/createCus");
const Orders = require("./src/controllers/allOrders");
const updateItem = require("./src/controllers/UpdateItem");
const upload = require("./src/middlewares/multerImageUpload");
const { server, port } = require("./src/config/server");
//item app-route
app
  .route("/api/items")
  .post(upload.single("productImage"), postItem)
  .get(getItems);
app.delete("/api/items/:id", deleteOnne);
app.patch("/api/items/:id", updateItem);
app.post("/payment/create", paymentDetail);
app.post("/api/invoice", createInvoice);
app.post("/api/customers", createCus);
app.post("/api/orders", Orders);

//local-port access
app.listen(port, server);
