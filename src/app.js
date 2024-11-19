const express = require("express");

const app = express();

//request handler..showing res on browser...

//this get will handle get api call
app.get("/user", (req, res) => {
  res.send({ firstName: "Vinod", lastName: "Patil" });
});

app.post("/user", (req, res) => {
  res.send("Data inserted successfully...!!!");
});

app.delete("/user", (req, res) => {
  res.send("Record deleted successfully...!!!");
});

app.use("/about", (req, res) => {
  res.send("Its an about page...");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

// app.use("/", (req, res) => {
//   res.send("Namaste node...");
// });

app.listen(3000, () => {
  console.log("Server is successfully listening on port number 3000...!!");
});
