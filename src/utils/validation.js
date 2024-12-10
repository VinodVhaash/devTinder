const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  const isValidPassword = (password) => {
    return validator.isLength(password, { min: 7 });
  };

  if (!firstName || !lastName) {
    throw new Error("Please Enter Name");
  } else if (firstName.length < 2 || firstName.length > 30) {
    throw new Error("firstName should be 2-30");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  } else if (!isValidPassword(password)) {
    throw new Error("Password must be greater than 6 in length.");
  }
};

module.exports = {
  validateSignUpData,
};
