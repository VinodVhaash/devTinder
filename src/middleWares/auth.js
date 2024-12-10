const cookies = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { findById } = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //read the token from the rquest cookies...
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is not valid!!!");
    }
    //verify the token...
    const decodedObj = await jwt.verify(token, "DEV@Tinder$790");

    const { _id } = decodedObj;
    const user = await User.findById(_id);
    if (!user) {
      throw new error("User does not exist...");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
