const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleWares/auth");

app.use("/admin", adminAuth);

app.use("/user", userAuth);

app.use("/user/getUserData", (err, req, res) => {
  try {
    throw new Error("jsdhjgdf");
    res.send("User data received...");
  } catch (err) {
    console.log("Something went wrong...");
  }
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent...");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user...");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port number 3000...!!");
});
