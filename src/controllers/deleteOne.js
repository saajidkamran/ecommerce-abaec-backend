const { items } = require("../config/database");
const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");

const del = async (req, res) => {
  const user = req.userData;
  if (user.username === process.env.ADMIN_ID) {
    try {
      const response = await items.deleteOne({ _id: req.params.id });
      res.status(200).send({
        staus: "API run success",
        data: {
          response
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
  } else {
    res.status(401).send({
      staus: STATUS_MESSAGES.FAIL,
      data: {
        errorMessage: "Access denied"
      }
    });
  }
};
module.exports = del;
