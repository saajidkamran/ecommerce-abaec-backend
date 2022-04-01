const { customers } = require("../config/database");

const checkUser = async (req, res, next) => {
  const searchUser = req.userData.username;
  try {
    const foundUser = await customers.find({ username: searchUser });
    req.user = foundUser[0].role;
    next();
  } catch (error) {
    res.status(404).send({
      status: "user notfound",
      error: error.message
    });
  }
};
module.exports = checkUser;
