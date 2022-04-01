const { customers } = require("../config/database");
const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");

const createCus = async (req, res) => {
  const newCust = new customers({
    name: req.body.name,
    email: req.body.email,
    stripeId: req.body.stripeId,
    password: req.body.password
  });
  try {
    const response = await newCust.save();
    res.status(200).send({
      Status: STATUS_MESSAGES.SUCCESS,
      data: {
        response
      }
    });
  } catch (error) {
    res.status(404).send({
      Status: STATUS_MESSAGES.FAIL,
      Error: {
        errorMessage: error.message
      }
    });
  }
};
module.exports = createCus;
