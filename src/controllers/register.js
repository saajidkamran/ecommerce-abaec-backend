const { customers } = require("../config/database");
const Passport = require("passport");

const register = async (req, res) => {
  try {
    const response = await customers.register(
      { username: req.body.username, email: req.body.email },
      req.body.password
    );
    Passport.authenticate("local")(req, res, function () {
      res.status(200).send({
        status: "Successfully registered"
      });
    });
  } catch (error) {
    res.status(404).send({
      status: "Register fail ",
      Error: {
        errorMessage: error.message
      }
    });
  }
};

module.exports = register;
