const express = require("express");

const app = express();

//request handler..showing res on browser...
app.use("/about", (req, res) => {
  res.send("Its an about page...");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port number 3000...!!");
});
