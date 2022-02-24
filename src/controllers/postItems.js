const { items } = require("../config/database");
const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../middlewares/message");

const postItem = (req, res, next) => {
  console.log(req.file);
  const newItem = new items({
    image: req.file.path,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    quantity: req.body.quantity,
    category: req.body.category
  });
  try {
    newItem.save();
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS,
      data: {
        newItem
      }
    });
  } catch (error) {
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL,
      data: {
        errorMessage: error.message
      }
    });
  }
};
module.exports = postItem;
