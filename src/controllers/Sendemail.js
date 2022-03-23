const { STATUS_MESSAGES } = require("../config/message");

const sgMail = require("@sendgrid/mail");
const API_KEY = process.env.API_KEY;
sgMail.setApiKey(API_KEY);
const mail = async (req, res) => {
  const email = req.body.Cusemail;
  const message = {
    to: email,
    from: "saajidkamran@gmail.com ",
    subject: "Payment Confirmation From ABAEC",
    html:
      "<h3>Hello this SK from ABAEC </h3> <br></br> <p> Payment have been done successfully </p>" +
      "<p> RS. " +
      req.body.price +
      "<p>" +
      "<p> Thanks for shopping with us  </p> "
  };
  try {
    const result = await sgMail.send(message);
    res.status(200).send({
      status: STATUS_MESSAGES.SUCCESS,
      data: "Successfullt email sent ..."
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: STATUS_MESSAGES.FAIL,
      data: error
    });
  }
};

module.exports = mail;
