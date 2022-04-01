const { items } = require("../config/database");
const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");

const del = async (req, res) => {
  const role = req.user;
  if (role) {
    try {
      const response = await items.deleteOne({ _id: req.params.id });
      res.status(200).send({
        Status: "API run success",
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
  } else {
    res.status(401).send({
      Status: "Auth fail"
    });
  }
};
module.exports = del;
