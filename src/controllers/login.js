const Passport = require("passport");
const { customers } = require("../config/database");

const login = async (req, res) => {
  const usernew = new customers({
    username: req.body.username,
    password: req.body.password
  });
  try {
    await req.login(usernew, function (err) {
      if (err) {
        res.status(404).send({
          staus: "fail",
          data: err.message
        });
      } else {
        Passport.authenticate("local")(req, res, function () {
          res.status(200).send({
            staus: "success",
            data: usernew.username
          });
        });
      }
    });
  } catch (error) {
    res.status(404).send({
      staus: "fail",
      data: error.message
    });
  }
};
module.exports = login;
