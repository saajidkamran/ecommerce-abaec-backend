const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = await jwt.verify(token, process.env.JWT_KEY);
    console.log("this is decode",decode)
    req.userData = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth fail",
      results: error.message
    });
  }
 
};
