const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
//post API for Sign up user

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully...");
  } catch (err) {
    res.send("Error while adding User...");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port number 3000...!!");
    });
  })
  .catch((err) => {
    console.log("Database can not be connected..!!!");
  });
