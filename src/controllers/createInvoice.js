const { customers, orders } = require("../config/database");
const stripe = require("stripe")(
  "sk_test_51J887XGHMWtYg6xLMbLM7wErxu56jV6O4fRibDbQKOirTJY4HI0Dswln73vEFBnRb9XGTP3lPRrqxS6Wa2uqnbyy00BL7iFPf7"
);

const createInvoice = async (request, response) => {
  const customer = request.body.customer;
  const price = request.body.price;
  try {
    const invoiceItem = await stripe.invoiceItems.create({
      customer: customer,
      price: price
    });
  } catch (error) {
    response.status(400).send({
      data: error
    });
  }
};

module.exports = createInvoice;
