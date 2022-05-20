const stripe = require("stripe")(
  "sk_test_51J887XGHMWtYg6xLMbLM7wErxu56jV6O4fRibDbQKOirTJY4HI0Dswln73vEFBnRb9XGTP3lPRrqxS6Wa2uqnbyy00BL7iFPf7"
);

const paymentDetail = async (request, response) => {
  //sending the total amount to stripe
  // *100 becouse it make error when page reloads reffer to documentation
  const total = request.query.total * 10;
  console.log("Payment request received", total);

  //initialaizing the payment
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "lkr"
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
};
module.exports = paymentDetail;
