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

//Find all the users from the document...
app.get("/allUsers", async (req, res) => {
  try {
    const feed = await User.find({});
    if (feed === 0) {
      res.status(404).send("user not found...");
    } else {
      res.send(feed);
    }
  } catch {
    res.status(400).send("Something went wrong...");
  }
});

//Find User by email id

app.get("/user", async (req, res) => {
  const userEmailId = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmailId });
    if (users.length === 0) {
      res.send("User not found...");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong...");
  }
});

//Delete a user by id

app.delete("/user", async (req, res) => {
  const userId = req.body.firstName;
  try {
    const user = await User.findOneAndDelete({ firstName: userId });
    res.send("User deleted successfully...");
  } catch (err) {
    res.status(400).send("Something went wrong...");
  }
});

//Delete a user.

app.delete("/deleteUser", async (req, res) => {
  const dUser = req.body.firstName;
  try {
    console.log(dUser);
    const user = await User.findOneAndDelete(dUser);
    if (!user) {
      res.send("User deleted successfully...");
    } else {
      res.send("User not deleted...");
    }
  } catch (err) {
    res.send("Erroe while deleting the user...");
  }
});

//update a data...
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;

  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("data updated successfully...");
  } catch (err) {
    res.status(400).send("Something went wrong...");
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
