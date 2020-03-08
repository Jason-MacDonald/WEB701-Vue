const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// var messages = [{ user: "Jason", text: "test message" }];
// var users = [{ username: "Jason", password: "12345" }];

var messages = [];
var users = [];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.get("/messages/:id", (req, res) => {
  res.send(messages[req.params.id]);
});

app.post("/messages", (req, res) => {
  const token = req.header("Authorization");
  const userID = jwt.decode(token, 123);
  const user = users[userID];
  let msg = { user: user.username, text: req.body.message };
  messages.push(msg);
  res.json(msg);
});

app.post("/register", (req, res) => {
  let registerData = req.body;
  let newIndex = users.push(registerData);
  let userID = newIndex - 1;

  let token = jwt.sign(userID, "123");
  res.json(token);
});

app.post("/login", (req, res) => {
  let loginData = req.body;
  let userID = users.findIndex(user => user.username == loginData.username);
  console.log(userID);

  if (userID == -1) {
    return res.status(401).send({ message: "Name or password is invalid" });
  }
  if (users[userID].password != loginData.password) {
    return res.status(401).send({ message: "Name or password is invalid" });
  }

  let token = jwt.sign(userID, "123");
  res.json(token);
});

app.listen(port, () => console.log("server running on port 3000"));
