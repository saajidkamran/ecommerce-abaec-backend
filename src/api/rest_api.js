const postItem = require("../controllers/postItems");
const stock = require("../controllers/stockUpdate");
const email = require("../controllers/Sendemail");
const search = require("../controllers/search");
const searchEmail = require("../controllers/getEmail");
const paymentDetail = require("../controllers/payment");
const deleteOnne = require("../controllers/deleteOne");
const getItems = require("../controllers/getItems");
const createCus = require("../controllers/createCus");
const Orders = require("../controllers/allOrders");
const updateItem = require("../controllers/UpdateItem");
const upload = require("../middlewares/multerImageUpload");
const register = require("../controllers/register");
const login = require("../controllers/login");
const logout = require("../controllers/logout");

module.exports = {
  postItem,
  stock,
  email,
  search,
  searchEmail,
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
};
