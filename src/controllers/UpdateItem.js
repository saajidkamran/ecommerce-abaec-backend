const { STATUS_MESSAGES } = require("../config/message");
const { items } = require("../config/database");
let fileUrl;
const update = async (req, res, next) => {
  const data = req.userData;

  //check if file is selected
  if (req.file) {
    fileUrl = req.file.path.replace(/\\/g, "/");
  }
  if (data.username === process.env.ADMIN_ID) {
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
        staus: STATUS_MESSAGES.SUCCESS,
        data: {
          result
        }
      });
    } catch (error) {s
      res.status(404).send({
        error: error.message
      });
    }
  } else {
    return res.status(401).send({
      error: "Access denaied"
    });
  }
};

module.exports = update;
