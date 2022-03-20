const { STATUS_MESSAGES } = require("../config/message");
const { items } = require("../config/database");

const update = async (req, res,next) => {
  const fileUrl = req.file.path.replace(/\\/g, "/");
  try {
    const result = await items.findByIdAndUpdate(
      { _id: req.params.id },
      { image: fileUrl,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        quantity: req.body.quantity,
        category: req.body.category }
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
      error: error.message
    });
  }
};

module.exports = update;
