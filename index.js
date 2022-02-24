const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

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
const deleteOnne = require("./src/controllers/deleteOne");
const getItems = require("./src/controllers/getItems");
const { server, port } = require("./src/config/server");

//item app-route
app.route("/api/items").post(postItem).get(getItems);
app.delete("/api/items/:id",deleteOnne);

//local-port access
app.listen(port, server);
