const logout = function (req, res) {
  req.logout();
  res.status(200).send({
    status: "logout Successfully"
  });
};
module.exports = logout;
