const { items } = require("../config/database");

const del = (req, res) => {
  items.deleteOne({ _id: req.params.id }, function (err) {
    if (!err) {
      res.send("Successfully deleted the corresponding item.");
    } else {
      res.send(err);
    }
  });
};
module.exports = del;
