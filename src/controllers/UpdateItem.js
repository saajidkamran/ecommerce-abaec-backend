const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");
const { items } = require("../config/database");

const update = async (req, res) => {
  try {
    const result = await items.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS,
      data: {
        result
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL
    });
  }
};

module.exports = update;
