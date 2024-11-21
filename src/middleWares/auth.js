const adminAuth = (req, res, next) => {
  console.log("Admin auth checked...!!!");
  const token = "xyz";
  const isAuthrizedAdmin = token === "xyz";
  if (!isAuthrizedAdmin) {
    res.status(401).send("Unauthorised request...");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth checked...");
  const token = "pqr";
  const isUserAuth = token === "pqr";
  if (!isUserAuth) {
    res.status(401).send("Unauthorised request...");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
