const jwt = require("jsonwebtoken");
const UserAuthValidate = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "you are not authenticate ",
    });
  }
  const response = verifyToken(token);
  if (!response) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "invalid token",
    });
  }
  next();
};

const verifyToken = (token) => {
  try {
    const response = jwt.verify(token, "ecom_secret");
    return response;
  } catch (error) {
    console.log("Something went wrong in token validation", error);
  }
};
module.exports = { UserAuthValidate };
