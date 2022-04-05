const Passport = require("passport");
const { customers } = require("../config/database");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const usernew = new customers({
    username: req.body.username,
    password: req.body.password
  });

  try {
    await req.login(usernew, () => {
      Passport.authenticate("local")(req, res, function () {
        console.log(usernew)
        const token = jwt.sign(
          {
            username: usernew.username,
            id: usernew._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1hr"
          }
        );
        res.status(200).send({
          status: "Auth Success",
          data: usernew.username,
          token: token
        });
      });
    });
  } catch (error) {
    res.status(404).send({
      staus: "fail",
      data: error.message
    });
  }
};
module.exports = login;
