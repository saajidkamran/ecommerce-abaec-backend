const { ERROR_MESSAGES, STATUS_MESSAGES } = require("../config/message");
const sgMail=require("@sendgrid/mail")
const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);

const emailSent = async (req,res) => {
    const message = {
        to: "saajidkamran@gmail.com",
        from: "saajid@gapstars.net",
        subject: "Hello this is a test",
        html: "<h1>Hello thi sk here your payment have been done successfully RS.</h1>"+req.body.price
      };
  try {
    const response = await sgMail.send(message);
    console.log("Sent email Succesfully ........");
    res.status(200).send({
      staus: STATUS_MESSAGES.SUCCESS
    });
  } catch (error) {
    console.log("Unable to sent the mail error cought >>>", error);
    res.status(404).send({
      staus: STATUS_MESSAGES.FAIL
    });
  }
};

module.exports = emailSent;
