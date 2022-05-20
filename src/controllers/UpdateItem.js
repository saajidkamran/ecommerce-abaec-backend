const { STATUS_MESSAGES } = require("../config/message");
const { items } = require("../config/database");
let fileUrl;
const update = async (req, res, next) => {
  const role = req.user;

  //check if file is selected
  if (req.file) {
    fileUrl = req.file.path.replace(/\\/g, "/");
  }

  if (role) {
    try {
      const result = await items.findByIdAndUpdate(
        { _id: req.params.id },
        {
          image: fileUrl,
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          rating: req.body.rating,
          quantity: req.body.quantity,
          category: req.body.category
        }
      );
      res.status(200).send({
        status: STATUS_MESSAGES.SUCCESS,
        results: {
          result
        }
      });
    } catch (error) {
      res.status(404).send({
        Status: "cannot update the item"
      });
    }
  } else {
    return res.status(401).send({
      status: "Auth fail"
    });
  }
};

module.exports = update;
