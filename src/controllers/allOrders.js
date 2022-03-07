const { orders } = require("../config/database");
const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");

const order = async (req, res) => {
  const newOrders = new orders({
    cusName: req.body.cusName,
    cusEmail: req.body.cusEmail,
    orderName: req.body.orderName,
    orderPrice: req.body.orderPrice,
    orderQuantity: req.body.orderQuantity
  });
  try {
    const response = await newOrders.save();
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS,
      data: {
        response
      }
    });
  } catch (error) {
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL,
      data: {
        errorMessage: ERROR_MESSAGES
      }
    });
  }
};
module.exports = order;
