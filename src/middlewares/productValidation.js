const Joi = require("joi");

const schema = Joi.object({
  price: Joi.number().required(),
  rating: Joi.number().integer().required().less(6).greater(1),
  quantity: Joi.number().integer().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  title: Joi.string().min(3).required()
});

module.exports = schema;
