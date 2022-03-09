const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");
const { items } = require("../config/database");

const search = async (req, res) => {
  const searchQuery = req.body.title;
  try {
    const foundItems = await items.find({ title: searchQuery });
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
module.exports = search;