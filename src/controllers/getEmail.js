const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");
const { customers } = require("../config/database");
const getemail = async (req, res) => {
  const cus = req.body.username;
  try {
    const foundCus = await customers.find({ username: cus });
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS,
      results: foundCus
    });
  } catch {
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL,
      error: {
        errorMessage: ERROR_MESSAGES.RESOURCE_NOT_FOUND
      }
    });
  }
};
module.exports = getemail;
