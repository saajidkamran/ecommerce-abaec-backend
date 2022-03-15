const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");
const { itemSchema, items } = require("../config/database");

const search = async (req, res) => {
  try {
    const results = itemSchema.index({ title: "text", description: "text" });
    const result = await items.find({ $text: { $search: "polo" } });
    console.log({ result });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL
    });
  }
};
module.exports = search;
