const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../middlewares/message");
const { items } = require("../config/database");

const allItems = async (req, res) => {
  try {
    const foundItems = await items.find();
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS,
      data: {
        foundItems
      }
    });
  } catch {
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL,
      data: {
        errorMessage: ERROR_MESSAGES.RESOURCE_NOT_FOUND
      }
    });
  }
};
module.exports = allItems;
